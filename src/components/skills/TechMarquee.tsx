import React from "react";
import LogoLoop from "../LogoLoop";
import type { TechLogo } from "../../constants/techData";

interface TechMarqueeProps {
  logos: TechLogo[];
}

export const TechMarquee: React.FC<TechMarqueeProps> = ({ logos }) => {
  return (
    <>
      <div className="divider text-2xl font-bold mt-20 mb-8">
        My Technologies
      </div>
      <div className="mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-base-100/50 to-base-200/50 backdrop-blur-sm p-6 border border-base-300/30 shadow-lg">
          <LogoLoop
            logos={logos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={50}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technologies marquee showcasing programming languages and tools"
          />
        </div>
      </div>
    </>
  );
};
