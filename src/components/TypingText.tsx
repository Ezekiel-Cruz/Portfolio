import React from "react";

interface TypingTextProps {
  text: string;
  className?: string;
  color?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({
  text,
  className = "",
  color,
}) => {
  return (
    <span
      className={`inline ${className}`}
      style={color ? { color } : undefined}
    >
      {text}
    </span>
  );
};
