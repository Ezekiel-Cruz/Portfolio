import React from "react";

interface NavItemProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
}

export const NavItem: React.FC<NavItemProps> = ({ id, label, onClick }) => {
  return (
    <li>
      <a 
        onClick={() => onClick(id)} 
        className="cursor-pointer px-4 py-2 text-sm font-medium text-base-content/70 hover:text-base-content transition-all duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:bg-transparent"
      >
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
      <ul className="menu menu-horizontal px-1 gap-1 hidden lg:flex items-center">
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
          className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-[#17191C] border border-base-content/10 rounded-xl w-48"
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => handleItemClick(item.id)}
                className="cursor-pointer text-sm text-base-content/70 hover:text-base-content hover:bg-base-content/5 transition-all duration-200 rounded-lg"
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
