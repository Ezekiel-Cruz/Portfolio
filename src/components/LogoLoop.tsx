import React, { useMemo } from "react";

type LogoNode = {
  node?: React.ReactNode;
  title?: string;
  href?: string;
  // Optional image-based logo support
  src?: string;
  alt?: string;
};

type Direction = "left" | "right";

interface LogoLoopProps {
  logos: LogoNode[];
  speed?: number; // pixels per second
  direction?: Direction;
  logoHeight?: number; // px
  gap?: number; // px
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
}

export default function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  logoHeight = 40,
  gap = 32,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = "#0b0b0f",
  ariaLabel,
}: LogoLoopProps) {
  // Duplicate the logos to create a seamless loop
  const items = useMemo(() => [...logos, ...logos], [logos]);

  // Estimate track width based on item count and sizing to compute duration
  const trackWidth = useMemo(() => {
    const approxLogoWidth = logoHeight; // assuming square-ish
    return items.length * (approxLogoWidth + gap);
  }, [items.length, logoHeight, gap]);

  const durationSec = Math.max(4, Math.round(trackWidth / Math.max(40, speed)));

  const animationName = direction === "left" ? "scroll-left" : "scroll-right";

  return (
    <div
      className="relative w-full overflow-hidden"
      aria-label={ariaLabel}
      style={
        fadeOut
          ? {
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              backgroundColor: fadeOutColor,
            }
          : undefined
      }
    >
      <style>
        {`
@keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        `}
      </style>
      {(() => {
        const baseStyle: React.CSSProperties = {
          width: "200%",
          animation: `${animationName} ${durationSec}s linear infinite`,
        };
        if (!pauseOnHover) baseStyle.animationPlayState = "running";
        const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = "paused";
        };
        const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
          if (pauseOnHover) e.currentTarget.style.animationPlayState = "running";
        };
        return (
          <div className={"flex items-center"} style={baseStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {items.map((logo, idx) => {
              const content = logo.node ? (
                <span
                  className={scaleOnHover ? "transition-transform duration-200 hover:scale-110" : undefined}
                  style={{ height: logoHeight, width: "auto", display: "inline-flex", alignItems: "center" }}
                >
                  {logo.node}
                </span>
              ) : logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt || logo.title || "logo"}
                  style={{ height: logoHeight, width: "auto" }}
                  className={scaleOnHover ? "transition-transform duration-200 hover:scale-110" : undefined}
                />
              ) : null;

              const wrapped = logo.href ? (
                <a href={logo.href} target="_blank" rel="noreferrer noopener" title={logo.title}>
                  {content}
                </a>
              ) : (
                content
              );

              return (
                <div key={idx} className="shrink-0" style={{ marginRight: gap }}>
                  {wrapped}
                </div>
              );
            })}
          </div>
        );
      })()}
    </div>
  );
}
