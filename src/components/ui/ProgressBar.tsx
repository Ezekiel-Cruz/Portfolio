import React from "react";

interface ProgressBarProps {
  label: string;
  experience: string;
  level: number;
  color: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  experience,
  level,
  color,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold">{label}</span>
        <div className="text-right">
          <div className="text-sm font-bold text-primary">{experience}</div>
        </div>
      </div>
      <div className="w-full">
        <progress
          className={`progress ${color} w-full h-3`}
          value={level}
          max="100"
        />
      </div>
    </div>
  );
};
