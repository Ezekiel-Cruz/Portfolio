import React from "react";
import { Button } from "../../../../components/ui/Button";
import { trackDownload } from "../../../../lib/analytics";

interface HeroActionsProps {
  onContactClick?: () => void;
}

export const HeroActions: React.FC<HeroActionsProps> = ({ onContactClick }) => {
  const handleDownloadCV = () => {
    trackDownload("Ezekiel_Cruz_Resume.pdf");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
      <a
        href="/Ezekiel_Cruz_Resume.pdf"
        download="Ezekiel_Cruz_Resume.pdf"
        onClick={handleDownloadCV}
        className="btn btn-primary btn-lg hover:scale-105 transition-transform"
      >
        Download CV
      </a>
      <Button variant="outline" size="lg" onClick={onContactClick}>
        Get in Touch
      </Button>
    </div>
  );
};
