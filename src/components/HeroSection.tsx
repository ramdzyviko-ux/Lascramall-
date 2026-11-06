import React from 'react';
import { NavSection, Language } from '../types';
import { ArrowRight, ChevronRight, Building2, ShieldCheck, Network, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { FadeIn } from './MotionWrappers';

interface HeroSectionProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, lang }) => {
  const heroImage = '/src/assets/images/hero_corporate_lascramall_1793935841284.jpg';

  const highlights = [
    {
      title: lang === 'id' ? '5 Pilar Strategis' : '5 Strategic Pillars',
      desc: lang === 'id' ? 'Ekosistem perdagangan digital hulu-ke-hilir' : 'End-to-end digital commerce ecosystem',
      icon: Layers,
    },
    {
      title: lang === 'id' ? 'Standar Tata Kelola' : 'Governance Benchmark',
      desc: lang === 'id' ? 'Kepatuhan regulasi komprehensif di Indonesia' : 'Comprehensive regulatory compliance in Indonesia',
      icon: ShieldCheck,
    },
    {
      title: lang === 'id' ? 'Jaringan Multi-Tenant' : 'Multi-Tenant Network',
      desc: lang === 'id' ? 'Arsitektur skala besar berkapasitas tinggi' : 'High-capacity scalable digital architecture',
      icon: Network,
    },
  ];

  return (
    <section className="relative pt-20 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-white overflow-hidden border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Kicker - Anti-slop zero-pill clean text metadata */}
        <FadeIn delay={0.05}>
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#E54141] mb-2 sm:mb-3">
            <span>PT LASCRAMALL COMMERCE NETWORK</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-[#666666] font-medium">CORPORATE OVERVIEW</span>
          </div>

          {/* Official Affiliation Statement to Deswartha Group */}
          <div className="mb-4 sm:mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F7F7] border border-[#E5E5E5] text-xs text-[#555555]">
              <span>PT Lascramall Commerce Network is part of</span>
              <button
                onClick={() => onNavigate('parent')}
                className="font-bold text-[#E54141] hover:underline cursor-pointer inline-flex items-center gap-0.5"
                title="Deswartha Group – Parent Company"
              >
                <span>Deswartha Group</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#E54141]" />
              </button>
            </div>
          </div>
        </FadeIn>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Corporate Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <FadeIn delay={0.1}>
              <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#222222] tracking-tight leading-[1.2] text-balance break-words">
                Connecting Business.{' '}
                <span className="text-[#E54141]">Empowering Digital Commerce.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed max-w-2xl">
                {lang === 'id'
                  ? 'PT Lascramall Commerce Network membangun infrastruktur dan ekosistem perdagangan digital modern yang menghubungkan entitas bisnis, memperluas akses pasar, serta mengintegrasikan solusi teknologi perdagangan berskala besar secara aman dan berkelanjutan.'
                  : 'PT Lascramall Commerce Network establishes modern digital commerce infrastructure and ecosystems that bridge enterprise entities, expand market reach, and orchestrate large-scale trade technology securely and sustainably.'}
              </p>
            </FadeIn>

            {/* CTAs (Android Friendly: Full-width stacked on mobile, inline on desktop) */}
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3 text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl sm:rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer min-h-[48px] touch-manipulation"
                >
                  <span>{lang === 'id' ? 'Tentang Perusahaan' : 'About the Company'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('business')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 text-sm font-semibold text-[#222222] hover:text-[#E54141] bg-[#F7F7F7] hover:bg-[#EFEFEF] active:bg-[#E5E5E5] border border-[#E8E8E8] rounded-xl sm:rounded-lg transition-colors cursor-pointer min-h-[48px] touch-manipulation"
                >
                  <span>{lang === 'id' ? 'Eksplorasi Bidang Usaha' : 'Explore Business Pillars'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>

            {/* Clean Trust Indicators / Corporate Attributes */}
            <FadeIn delay={0.25}>
              <div className="pt-4 sm:pt-6 border-t border-[#EFEFEF]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-start sm:flex-col gap-3 sm:gap-1 p-3 sm:p-0 rounded-xl bg-[#F9F9F9] sm:bg-transparent border border-[#EEEEEE] sm:border-0"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#FFF1F1] sm:bg-transparent flex items-center justify-center text-[#E54141] shrink-0 sm:w-auto sm:h-auto sm:inline-flex sm:items-center sm:gap-2">
                          <Icon className="w-4 h-4 shrink-0" />
                          <span className="hidden sm:inline text-xs font-bold text-[#222222] uppercase tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <div className="sm:hidden text-xs font-bold text-[#222222] uppercase tracking-wide mb-0.5">
                            {item.title}
                          </div>
                          <p className="text-xs text-[#666666] leading-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-sm bg-[#F7F7F7]">
                {/* Image Frame with CSS Fallback */}
                <div className="aspect-16/10 sm:aspect-4/3 w-full relative">
                  <img
                    src={heroImage}
                    alt="PT Lascramall Commerce Network Corporate Headquarters"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.classList.add('bg-gradient-to-br', 'from-[#F7F7F7]', 'to-[#EFEFEF]', 'flex', 'items-center', 'justify-center');
                      }
                    }}
                  />
                </div>

                {/* Quiet Architectural Caption Box */}
                <div className="p-3.5 sm:p-4 bg-white border-t border-[#E8E8E8] flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#222222] tracking-tight truncate">
                      LASCRAMALL CORPORATE ECOSYSTEM
                    </div>
                    <div className="text-[11px] text-[#777777] mt-0.5 truncate">
                      Jakarta, Indonesia · Enterprise Digital Commerce
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#E54141] shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">Headquarters</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
