import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface UseCursorAnimationOptions {
  enabled: boolean;
  blinkDuration: number;
}

export const useCursorAnimation = ({ enabled, blinkDuration }: UseCursorAnimationOptions) => {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return;

    gsap.set(cursorRef.current, { opacity: 1 });
    
    const animation = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: blinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      animation.kill();
    };
  }, [enabled, blinkDuration]);

  return cursorRef;
};