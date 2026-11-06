import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavSection, Language } from '../types';
import { PAGE_ORDER, getPageIndex } from '../utils/navigation';

interface PageTransitionIndicatorProps {
  isTransitioning: boolean;
  currentPage: NavSection;
  onNavigate: (page: NavSection) => void;
  lang: Language;
}

/**
 * Top brand-colored slim progress bar (Android/Material-style) +
 * Mobile swipe indicator dots to visualize swipe-to-navigate.
 */
export const PageTransitionIndicator: React.FC<PageTransitionIndicatorProps> = ({
  isTransitioning,
  currentPage,
  onNavigate,
  lang,
}) => {
  const currentIndex = getPageIndex(currentPage);

  return (
    <>
      {/* 1. Brand-Colored Top Progress Bar (#E54141 with glow) */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 1, scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scaleX: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.15, delay: 0.2 },
            }}
            style={{ originX: 0 }}
            className="fixed top-0 left-0 right-0 z-60 h-[3px] bg-gradient-to-r from-[#E54141] via-[#FF6666] to-[#E54141] shadow-[0_1px_8px_rgba(229,65,65,0.75)] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* 2. Mobile Android Swipe Navigation Cue & Page Dots (Sticky/Fixed above bottom edge) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 lg:hidden pointer-events-auto">
        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white/95 backdrop-blur-md border border-[#E5E5E5] shadow-md rounded-full">
          <div className="flex items-center gap-1.5" aria-label="Page dots">
            {PAGE_ORDER.map((page, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={page}
                  onClick={() => onNavigate(page)}
                  className={`transition-all duration-200 rounded-full cursor-pointer touch-manipulation ${
                    isActive
                      ? 'w-5 h-2 bg-[#E54141]'
                      : 'w-2 h-2 bg-[#D1D1D1] hover:bg-[#999999]'
                  }`}
                  aria-label={`Go to page ${idx + 1}: ${page}`}
                  aria-current={isActive ? 'page' : undefined}
                />
              );
            })}
          </div>

          <span className="w-px h-3 bg-[#E5E5E5]" />

          <span className="text-[10px] font-semibold text-[#777777] uppercase tracking-wider select-none">
            {lang === 'id' ? 'Geser Halaman' : 'Swipe Page'}
          </span>
        </div>
      </div>
    </>
  );
};
