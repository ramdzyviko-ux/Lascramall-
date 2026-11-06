import React, { useRef } from 'react';
import { motion, useReducedMotion, PanInfo } from 'motion/react';
import { NavSection } from '../types';
import { getNextPage, getPrevPage } from '../utils/navigation';

interface SwipeablePageContainerProps {
  currentPage: NavSection;
  direction: number; // 1 for forward (swipe left), -1 for backward (swipe right)
  onNavigate: (page: NavSection, customDirection?: number) => void;
  children: React.ReactNode;
}

export const SwipeablePageContainer: React.FC<SwipeablePageContainerProps> = ({
  currentPage,
  direction,
  onNavigate,
  children,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Native touch gesture detection for Android mobile viewports
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now(),
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current || e.changedTouches.length === 0) return;

    const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStartRef.current.y;
    const elapsedTime = Date.now() - touchStartRef.current.time;

    touchStartRef.current = null;

    // Must be a predominantly horizontal swipe and fast enough (< 600ms)
    const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY) * 1.25;
    const isMinDistance = Math.abs(deltaX) > 48;

    if (isHorizontal && isMinDistance && elapsedTime < 700) {
      handleSwipeGesture(deltaX, (deltaX / (elapsedTime || 1)) * 1000);
    }
  };

  const handleSwipeGesture = (offsetX: number, velocityX: number) => {
    const swipeThreshold = 38;
    const velocityThreshold = 140;

    const isSwipeLeft = offsetX < -swipeThreshold || velocityX < -velocityThreshold;
    const isSwipeRight = offsetX > swipeThreshold || velocityX > velocityThreshold;

    if (isSwipeLeft) {
      const nextPage = getNextPage(currentPage);
      if (nextPage) {
        onNavigate(nextPage, 1);
      }
    } else if (isSwipeRight) {
      const prevPage = getPrevPage(currentPage);
      if (prevPage) {
        onNavigate(prevPage, -1);
      }
    }
  };

  const handlePanEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    handleSwipeGesture(info.offset.x, info.velocity.x);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    handleSwipeGesture(info.offset.x, info.velocity.x);
  };

  if (shouldReduceMotion) {
    return (
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full min-h-screen"
      >
        {children}
      </div>
    );
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : dir < 0 ? -30 : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : dir < 0 ? 30 : 0,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      key={currentPage}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 350, damping: 35 },
        opacity: { duration: 0.2, ease: 'easeOut' },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.12}
      onDragEnd={handleDragEnd}
      onPanEnd={handlePanEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
      className="w-full min-h-screen overflow-x-clip"
    >
      {children}
    </motion.div>
  );
};
