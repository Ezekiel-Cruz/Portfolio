import React from "react";

interface TypingCursorProps {
  character: string | React.ReactNode;
  className?: string;
  isHidden: boolean;
  cursorRef: React.RefObject<HTMLSpanElement | null>;
}

export const TypingCursor: React.FC<TypingCursorProps> = ({
  character,
  className = "",
  isHidden,
  cursorRef,
}) => {
  return (
    <span
      ref={cursorRef}
      className={`ml-1 inline-block opacity-100 ${
        isHidden ? "hidden" : ""
      } ${className}`}
    >
      {character}
    </span>
  );
};
