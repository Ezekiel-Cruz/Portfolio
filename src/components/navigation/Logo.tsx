import React from "react";

interface LogoProps {
  name: string;
  imageSrc: string;
  onClick: () => void;
}

export const Logo: React.FC<LogoProps> = ({ name, imageSrc, onClick }) => {
  return (
    <a 
      onClick={onClick} 
      className="flex items-center gap-2 px-2 py-1 text-lg font-medium text-base-content/90 hover:text-base-content cursor-pointer transition-all duration-300"
    >
      <img src={imageSrc} alt="Logo" className="w-8 h-8" />
      {name}
    </a>
  );
};
