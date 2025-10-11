import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  enabled?: boolean;
}

export const useIntersectionObserver = ({ 
  threshold = 0.1, 
  enabled = true 
}: UseIntersectionObserverOptions = {}) => {
  const [isVisible, setIsVisible] = useState(!enabled);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [enabled, threshold]);

  return { isVisible, ref };
};