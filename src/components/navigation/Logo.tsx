import React from "react";

interface LogoProps {
  name: string;
  imageSrc: string;
  onClick: () => void;
}

export const Logo: React.FC<LogoProps> = ({ name, imageSrc, onClick }) => {
  return (
    <a onClick={onClick} className="btn btn-ghost text-xl cursor-pointer">
      <img src={imageSrc} alt="Logo" className="inline-block w-8 h-8 mr-2" />
      {name}
    </a>
  );
};
