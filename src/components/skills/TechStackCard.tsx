import React, { useState } from "react";
import type { TechCategory, Technology } from "../../constants/techData";

interface TechStackCardProps {
  category: TechCategory;
}

interface TechItemProps {
  tech: Technology;
  isExpanded: boolean;
  onToggle: () => void;
}

const TechItem: React.FC<TechItemProps> = ({ tech, isExpanded, onToggle }) => {
  return (
    <div className="border border-base-300/30 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 bg-base-100/50 hover:bg-base-200/50 transition-colors duration-200 text-left"
      >
        <div className="flex-shrink-0">{tech.icon}</div>
        <span className="text-lg font-bold text-base-content flex-grow">
          {tech.name}
        </span>
        <div
          className={`transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5 text-base-content/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="p-6 bg-base-100/30 border-t border-base-300/20 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-base-content mb-2">
                What is {tech.name}?
              </h4>
              <p className="text-base-content/80 leading-relaxed">
                {tech.description}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-base-content mb-2">
                How I use it:
              </h4>
              <p className="text-base-content/80 leading-relaxed">
                {tech.usage}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const TechStackCard: React.FC<TechStackCardProps> = ({ category }) => {
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  const handleTechToggle = (techName: string) => {
    setExpandedTech(expandedTech === techName ? null : techName);
  };

  return (
    <div className="bg-base-100/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-base-300/20">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-base-content mb-2">
          {category.title}
        </h3>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {category.description}
        </p>
      </div>

      <div className="space-y-3">
        {category.technologies.map((tech, index) => (
          <TechItem
            key={index}
            tech={tech}
            isExpanded={expandedTech === tech.name}
            onToggle={() => handleTechToggle(tech.name)}
          />
        ))}
      </div>
    </div>
  );
};
