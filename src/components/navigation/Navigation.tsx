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
  const handleItemClick = (id: string) => {
    onItemClick(id);
    // Close the dropdown menu after clicking (for mobile)
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <div className="flex-none">
      {/* Desktop Navigation - Hidden on mobile */}
      <ul className="menu menu-horizontal px-1 font-semibold hidden lg:flex">
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

      {/* Mobile Navigation - Burger Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => handleItemClick(item.id)}
                className="cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
          {children && (
            <li className="mt-2 pt-2 border-t border-base-300">
              <div className="flex justify-center">{children}</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
