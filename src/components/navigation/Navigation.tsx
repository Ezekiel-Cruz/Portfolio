import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface NavItemProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
  mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, onClick, mobile }) => {
  if (mobile) {
    return (
      <motion.a
        onClick={() => onClick(id)}
        className="block px-4 py-3 text-base font-medium text-base-content/80 hover:text-base-content hover:bg-base-300/50 rounded-lg cursor-pointer transition-colors"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        {label}
      </motion.a>
    );
  }

  return (
    <a
      onClick={() => onClick(id)}
      className="px-4 py-2 text-sm font-medium text-base-content/70 hover:text-base-content cursor-pointer transition-all duration-300 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </a>
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
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (id: string) => {
    onItemClick(id);
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center gap-2">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1">
        {items.map((item) => (
          <NavItem
            key={item.id}
            id={item.id}
            label={item.label}
            onClick={onItemClick}
          />
        ))}
        <div className="ml-2">{children}</div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-2">
        {children}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-base-content/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-base-content"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 right-4 w-56 bg-base-200 border border-base-content/10 rounded-2xl shadow-xl z-50 overflow-hidden lg:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="p-2">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavItem
                      id={item.id}
                      label={item.label}
                      onClick={handleItemClick}
                      mobile
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export { NavItem };