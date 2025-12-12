import React from "react";

interface HeroContentProps {
  name: string;
  subtitle1: string;
  subtitle2: string;
  children?: React.ReactNode;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  name,
  subtitle1,
  subtitle2,
  children,
}) => {
  return (
    <div className="text-center lg:text-left">
      <h1 className="mb-6 mt-6 leading-tight space-y-1 sm:space-y-2">
        <span className="block text-5xl sm:text-6xl font-extrabold">
          I'm <span>{name}</span>,
        </span>
        <span className="block text-2xl sm:text-3xl font-medium text-base-content/80">
          {subtitle1}
        </span>
        <span className="block text-2xl sm:text-3xl font-medium text-base-content/80">
          {subtitle2}
        </span>
      </h1>
      {children}
    </div>
  );
};
