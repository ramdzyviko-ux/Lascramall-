import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'large';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header',
  showSubtitle = false
}) => {
  const isLarge = variant === 'large';
  const sizeClasses = isLarge
    ? 'w-11 h-11 sm:w-12 sm:h-12 rounded-xl'
    : 'w-9 h-9 sm:w-10 sm:h-10 rounded-xl';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Official LASCRAMALL corporate emblem */}
      <div className={`relative flex items-center justify-center ${sizeClasses} bg-white border border-[#EAEAEA] shadow-2xs overflow-hidden shrink-0`}>
        <img
          src="/assets/aistudio/Tak_berjudul9_20261106143800_917c4452.png"
          alt="LASCRAMALL Emblem"
          className="w-full h-full object-contain scale-145"
          loading="eager"
        />
      </div>

      <div className="flex flex-col min-w-0">
        <div className="flex items-center tracking-tight font-extrabold text-lg sm:text-xl font-sans text-[#222222] whitespace-nowrap leading-tight">
          <span>LASCRA</span>
          <span className="text-[#E54141]">MALL</span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] tracking-wider uppercase font-medium text-[#666666] whitespace-nowrap truncate">
            PT Lascramall Commerce Network
          </span>
        )}
      </div>
    </div>
  );
};
