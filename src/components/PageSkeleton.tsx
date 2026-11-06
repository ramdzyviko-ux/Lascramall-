import React from 'react';

/**
 * Subtle, brand-colored skeleton screen that matches LASCRAMALL corporate design.
 * Features clean rounded card blocks and subtle shimmer pulses.
 */
export const PageSkeleton: React.FC = () => {
  return (
    <div className="w-full min-h-[60vh] pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-pulse pointer-events-none">
      {/* Header Skeleton */}
      <div className="space-y-3 max-w-2xl">
        <div className="h-3 w-40 bg-[#FFF1F1] rounded-full" />
        <div className="h-8 w-3/4 bg-[#EFEFEF] rounded-xl" />
        <div className="h-4 w-full bg-[#F5F5F5] rounded-lg" />
      </div>

      {/* Hero / Marquee Card Skeleton */}
      <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#EAEAEA] shadow-2xs space-y-4">
        <div className="h-4 w-32 bg-[#FFF1F1] rounded-full" />
        <div className="h-6 w-2/3 bg-[#EFEFEF] rounded-lg" />
        <div className="h-16 w-full bg-[#F7F7F7] rounded-xl" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="h-10 bg-[#F5F5F5] rounded-lg" />
          <div className="h-10 bg-[#F5F5F5] rounded-lg" />
          <div className="h-10 bg-[#F5F5F5] rounded-lg" />
          <div className="h-10 bg-[#F5F5F5] rounded-lg" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-5 rounded-2xl bg-white border border-[#EAEAEA] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFF1F1]" />
            <div className="h-5 w-3/4 bg-[#EFEFEF] rounded-md" />
            <div className="h-12 w-full bg-[#F7F7F7] rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};
