import React from "react";
import * as motion from "motion/react-client";

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
      <motion.h1
        className="mb-4 mt-4 lg:mb-6 lg:mt-6 leading-tight space-y-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
          I'm <span>{name}</span>,
        </span>
        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-base-content/80">
          {subtitle1}
        </span>
        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-base-content/80">
          {subtitle2}
        </span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
