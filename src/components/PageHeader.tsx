import React from 'react';
import { NavSection, Language } from '../types';
import { ChevronRight, Home, Building2 } from 'lucide-react';
import { FadeIn } from './MotionWrappers';

interface PageHeaderProps {
  currentSection: NavSection;
  title: string;
  subtitle: string;
  badge?: string;
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  currentSection,
  title,
  subtitle,
  badge,
  onNavigate,
  lang,
}) => {
  const getBreadcrumbLabel = (section: NavSection) => {
    switch (section) {
      case 'about':
        return lang === 'id' ? 'About Us' : 'About Us';
      case 'business':
        return lang === 'id' ? 'Services' : 'Services';
      case 'parent':
        return lang === 'id' ? 'Parent Company' : 'Parent Company';
      case 'leadership':
        return 'Leadership';
      case 'values':
        return lang === 'id' ? 'Our Values' : 'Our Values';
      case 'contact':
        return lang === 'id' ? 'Contact' : 'Contact';
      default:
        return 'Home';
    }
  };

  return (
    <div className="pt-20 pb-8 sm:pt-32 sm:pb-14 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.05}>
          {/* Breadcrumb Navigation with 40px touch zone for mobile */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#777777] mb-3">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1 py-1 pr-2 hover:text-[#E54141] active:text-[#D13030] transition-colors cursor-pointer min-h-[36px]"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
            <span className="text-[#E54141] font-semibold py-1">
              {getBreadcrumbLabel(currentSection)}
            </span>
          </nav>
        </FadeIn>

        {/* Category kicker */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141] mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>PT LASCRAMALL COMMERCE NETWORK</span>
            {badge && (
              <>
                <span className="text-neutral-300">·</span>
                <span className="text-[#666666] font-medium">{badge}</span>
              </>
            )}
          </div>
        </FadeIn>

        {/* Page Title & Subtitle */}
        <div className="max-w-3xl">
          <FadeIn delay={0.15}>
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#222222] tracking-tight leading-tight break-words">
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
