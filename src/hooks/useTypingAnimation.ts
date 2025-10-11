import { useState, useEffect, useCallback, useMemo } from 'react';

interface TypingState {
  displayedText: string;
  currentCharIndex: number;
  isDeleting: boolean;
  currentTextIndex: number;
}

interface UseTypingAnimationOptions {
  texts: string[];
  typingSpeed: number;
  deletingSpeed: number;
  pauseDuration: number;
  initialDelay: number;
  loop: boolean;
  reverseMode: boolean;
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  isVisible: boolean;
}

export const useTypingAnimation = ({
  texts,
  typingSpeed,
  deletingSpeed,
  pauseDuration,
  initialDelay,
  loop,
  reverseMode,
  variableSpeed,
  onSentenceComplete,
  isVisible,
}: UseTypingAnimationOptions) => {
  const [state, setState] = useState<TypingState>({
    displayedText: '',
    currentCharIndex: 0,
    isDeleting: false,
    currentTextIndex: 0,
  });

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const currentText = useMemo(() => {
    const text = texts[state.currentTextIndex];
    return reverseMode ? text.split('').reverse().join('') : text;
  }, [texts, state.currentTextIndex, reverseMode]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: number;

    const executeAnimation = () => {
      if (state.isDeleting) {
        // Deleting phase
        if (state.displayedText === '') {
          setState(prev => ({
            ...prev,
            isDeleting: false,
            currentTextIndex: (prev.currentTextIndex + 1) % texts.length,
            currentCharIndex: 0,
          }));
          
          if (state.currentTextIndex === texts.length - 1 && !loop) {
            return;
          }

          onSentenceComplete?.(texts[state.currentTextIndex], state.currentTextIndex);
          timeout = window.setTimeout(() => {}, pauseDuration);
        } else {
          timeout = window.setTimeout(() => {
            setState(prev => ({
              ...prev,
              displayedText: prev.displayedText.slice(0, -1),
            }));
          }, deletingSpeed);
        }
      } else {
        // Typing phase
        if (state.currentCharIndex < currentText.length) {
          timeout = window.setTimeout(() => {
            setState(prev => ({
              ...prev,
              displayedText: prev.displayedText + currentText[prev.currentCharIndex],
              currentCharIndex: prev.currentCharIndex + 1,
            }));
          }, variableSpeed ? getRandomSpeed() : typingSpeed);
        } else if (texts.length > 1) {
          timeout = window.setTimeout(() => {
            setState(prev => ({ ...prev, isDeleting: true }));
          }, pauseDuration);
        }
      }
    };

    if (state.currentCharIndex === 0 && !state.isDeleting && state.displayedText === '') {
      timeout = window.setTimeout(executeAnimation, initialDelay);
    } else {
      executeAnimation();
    }

    return () => window.clearTimeout(timeout);
  }, [
    state,
    currentText,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    initialDelay,
    loop,
    variableSpeed,
    getRandomSpeed,
    onSentenceComplete,
    isVisible,
    texts,
  ]);

  return {
    displayedText: state.displayedText,
    currentCharIndex: state.currentCharIndex,
    isDeleting: state.isDeleting,
    currentTextIndex: state.currentTextIndex,
  };
};