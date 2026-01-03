import React from "react";
import { Button } from "../../../../components/ui/Button";

interface HeroActionsProps {
  onContactClick?: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({ onContactClick }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start w-full sm:w-auto">
      <Button variant="outline" size="lg" onClick={onContactClick} className="w-full sm:w-auto">
        Get in Touch
      </Button>
    </div>
  );
};
