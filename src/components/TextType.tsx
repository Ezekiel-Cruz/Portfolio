import React from "react";
import { useCursorAnimation } from "../hooks/useCursorAnimation";
import { useTypingAnimation } from "../hooks/useTypingAnimation";
import { TypingText } from "./TypingText";
import { TypingCursor } from "./TypingCursor";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  cursorClassName?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 50,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  cursorClassName = "",
}) => {
  // Handle cursor animation
  const cursorRef = useCursorAnimation({
    enabled: showCursor,
    blinkDuration: 0.5,
  });

  // Handle typing animation
  const { displayedText } = useTypingAnimation({
    texts: text,
    typingSpeed,
    deletingSpeed: 30,
    pauseDuration,
    initialDelay: 0,
    loop: true,
    reverseMode: false,
    isVisible: true,
  });

  return (
    <div className="inline-block whitespace-pre-wrap tracking-tight">
      <TypingText text={displayedText} className={className} />
      {showCursor && (
        <TypingCursor
          character={cursorCharacter}
          className={cursorClassName}
          isHidden={false}
          cursorRef={cursorRef}
        />
      )}
    </div>
  );
};

export default TextType;
