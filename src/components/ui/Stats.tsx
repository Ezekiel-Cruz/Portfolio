import React from "react";

interface StatItemProps {
  title: string;
  value: string;
}

export const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
  return (
    <div className="stat">
      <div className="stat-title">{title}</div>
      <div className="stat-value text-primary">{value}</div>
    </div>
  );
};

interface StatsGridProps {
  stats: ReadonlyArray<StatItemProps>;
  orientation?: "vertical" | "horizontal";
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  stats,
  orientation = "horizontal",
}) => {
  const orientationClass =
    orientation === "vertical" ? "stats-vertical" : "stats-horizontal";

  return (
    <div className={`stats ${orientationClass} lg:stats-horizontal shadow`}>
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
};
