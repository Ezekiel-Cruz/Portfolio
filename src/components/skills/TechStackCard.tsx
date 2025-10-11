import React from "react";
import { Card } from "../ui/Button";
import { TechSkillsList } from "../ui/ProgressBar";
import type { TechCategory } from "../../constants/techData";

interface TechStackCardProps {
  category: TechCategory;
}

export const TechStackCard: React.FC<TechStackCardProps> = ({ category }) => {
  return (
    <Card>
      <div className="card-body">
        <div className="text-center mb-6">
          <h3 className="card-title text-2xl justify-center mb-2">
            {category.title}
          </h3>
          <p className="text-sm text-base-content/60">{category.description}</p>
        </div>
        <TechSkillsList technologies={category.technologies} />
      </div>
    </Card>
  );
};
