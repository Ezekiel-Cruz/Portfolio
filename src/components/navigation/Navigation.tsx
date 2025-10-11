import React from "react";

interface NavItemProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({ id, label, onClick }) => {
  return (
    <li>
      <a onClick={() => onClick(id)} className="cursor-pointer">
        {label}
      </a>
    </li>
  );
};

interface NavigationProps {
  items: ReadonlyArray<{ readonly id: string; readonly label: string }>;
  onItemClick: (id: string) => void;
  children?: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  onItemClick,
  children,
}) => {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 font-semibold">
        {items.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            label={item.label}
            onClick={onItemClick}
          />
        ))}
        {children && <li>{children}</li>}
      </ul>
    </div>
  );
};
