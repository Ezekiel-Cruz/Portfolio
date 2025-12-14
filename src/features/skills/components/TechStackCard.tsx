import React, { useState } from "react";
import type { TechCategory, Technology } from "../constants/techData";
import { AnimatePresence, motion } from "motion/react";

interface TechStackCardProps {
  category: TechCategory;
}

interface TechModalProps {
  tech: Technology | null;
  isOpen: boolean;
  onClose: () => void;
}

const TechModal: React.FC<TechModalProps> = ({ tech, isOpen, onClose }) => {
  if (!tech) return null;

  const parseUsage = (usage: string) => {
    const sections = usage.split("\n\n");
    return sections.map((section) => {
      const lines = section.split("\n");
      const title = lines[0];
      const content = lines.slice(1).join(" ");
      return { title, content };
    });
  };

  const usageSections = parseUsage(tech.usage);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-base-200 rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden border border-base-content/10"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-b from-base-content/5 to-transparent p-6 sm:p-8">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-base-content/10 hover:bg-base-content/20 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-base-content/5 rounded-2xl mb-4 [&_svg]:w-14 [&_svg]:h-14 sm:[&_svg]:w-16 sm:[&_svg]:h-16 [&_div]:text-3xl sm:[&_div]:text-4xl">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-base-content">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-base-content/60 mt-2 max-w-sm">
                    {tech.description}
                  </p>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 pt-0 overflow-y-auto max-h-[50vh]">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {usageSections.map((section, index) => (
                    <motion.div
                      key={index}
                      className="bg-base-content/5 rounded-xl p-4"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    >
                      <h4 className="text-sm font-semibold text-base-content mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {section.title}
                      </h4>
                      <p className="text-sm text-base-content/70 leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

interface TechCardProps {
  tech: Technology;
  onClick: () => void;
}

const TechCard: React.FC<TechCardProps> = ({ tech, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-base-300 hover:bg-base-300/70 transition-all duration-200 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 group cursor-pointer border border-base-content/10 hover:border-base-content/20"
    >
      <div className="text-2xl sm:text-4xl">
        {tech.icon}
      </div>
      <span className="text-xs sm:text-sm font-medium text-base-content/80 text-center">
        {tech.name}
      </span>
    </button>
  );
};

export const TechStackCard: React.FC<TechStackCardProps> = ({ category }) => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTechClick = (tech: Technology) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTech(null), 200);
  };

  return (
    <div className="bg-base-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-base-300/20">
      <div className="mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl font-semibold text-base-content mb-1">
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm text-base-content/50">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
        {category.technologies.map((tech, index) => (
          <TechCard
            key={index}
            tech={tech}
            onClick={() => handleTechClick(tech)}
          />
        ))}
      </div>

      <TechModal
        tech={selectedTech}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
