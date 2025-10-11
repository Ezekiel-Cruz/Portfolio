import React from "react";
import type { Technology } from "../../constants/techData";

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

interface TechSkillsListProps {
  technologies: Technology[];
}

export const TechSkillsList: React.FC<TechSkillsListProps> = ({
  technologies,
}) => {
  return (
    <div className="space-y-5">
      {technologies.map((tech, index) => (
        <ProgressBar
          key={index}
          label={tech.name}
          experience={tech.experience}
          level={tech.level}
          color={tech.color}
        />
      ))}
    </div>
  );
};
