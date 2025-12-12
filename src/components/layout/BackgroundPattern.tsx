import React from "react";
import Squares from "../animations/Squares";

export const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-100">
      <Squares
        direction="diagonal"
        speed={0.35}
        squareSize={52}
        borderColor="#00000040"
        hoverFillColor="#00000088"
        fadeGradient={false}
      />
    </div>
  );
};
