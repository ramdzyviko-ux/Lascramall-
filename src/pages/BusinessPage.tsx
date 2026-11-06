import React, { useState } from 'react';
import { NavSection, BusinessPillar, Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { BUSINESS_PILLARS } from '../utils/corporateData';
import { BusinessModal } from '../components/BusinessModal';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrappers';
import {
  ShoppingBag,
  Store,
  Cpu,
  Gamepad2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface BusinessPageProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
  onInquirePillar: (pillarTitle: string) => void;
}

export const BusinessPage: React.FC<BusinessPageProps> = ({
  onNavigate,
  lang,
  onInquirePillar,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<BusinessPillar | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Store':
        return Store;
      case 'Cpu':
        return Cpu;
      case 'Gamepad2':
        return Gamepad2;
      case 'TrendingUp':
      default:
        return TrendingUp;
    }
  };

  return (
    <PageTransition className="bg-white">
      {/* 1. Page Header */}
      <PageHeader
        currentSection="business"
        title={lang === 'id' ? 'Bidang Usaha & Pilar Strategis' : 'Our Business & Strategic Pillars'}
        subtitle={
          lang === 'id'
            ? 'Ekosistem lima pilar bisnis niaga digital PT Lascramall Commerce Network yang dirancang untuk mendukung akselerasi transformasi perdagangan modern.'
            : 'The five-pillar digital commerce ecosystem of PT Lascramall Commerce Network engineered for modern trade transformation.'
        }
        badge="PORTFOLIO & CAPABILITIES"
        onNavigate={onNavigate}
        lang={lang}
      />

      {/* 2. Main Content (Mobile-First) */}
      <div className="py-10 sm:py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Section Kicker */}
          <FadeIn delay={0.05} className="max-w-3xl">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-snug">
              {lang === 'id'
                ? 'Portofolio Terintegrasi LASCRAMALL'
                : 'LASCRAMALL Integrated Portfolio'}
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#666666] leading-relaxed">
              {lang === 'id'
                ? 'Setiap pilar bisnis dijalankan dengan standar kepatuhan regulasi tinggi, teknologi terkini, dan arsitektur yang siap diintegrasikan antar-sistem.'
                : 'Every business pillar is operated under strict regulatory compliance, modern technology, and interoperable architecture.'}
            </p>
          </FadeIn>

          {/* Featured Card: Ecommerce & Digital Commerce (Flagship Unit) */}
          {BUSINESS_PILLARS.length > 0 && (
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 p-5 sm:p-10 space-y-4 sm:space-y-5">
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141]">
                      <ShoppingBag className="w-4 h-4 shrink-0" />
                      <span>Pilar 01 · Marquee Capability</span>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-snug">
                      {BUSINESS_PILLARS[0].title[lang]}
                    </h3>

                    <p className="text-xs sm:text-base text-[#555555] leading-relaxed">
                      {BUSINESS_PILLARS[0].fullDesc[lang]}
                    </p>

                    {/* Key Capabilities */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                      {BUSINESS_PILLARS[0].keyCapabilities[lang].map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#333333] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E54141] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        onClick={() => setSelectedPillar(BUSINESS_PILLARS[0])}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                      >
                        <span>{lang === 'id' ? 'Lihat Spesifikasi Lengkap' : 'View Full Specifications'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onInquirePillar(BUSINESS_PILLARS[0].title[lang])}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-[#222222] hover:text-[#E54141] bg-[#F7F7F7] hover:bg-[#EFEFEF] active:bg-[#ECECEC] border border-[#E0E0E0] rounded-xl transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                      >
                        <span>{lang === 'id' ? 'Konsultasi Kemitraan' : 'Partnership Inquiry'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 aspect-16/10 lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[300px] border-t lg:border-t-0 lg:border-l border-[#E8E8E8]">
                    <img
                      src={BUSINESS_PILLARS[0].image}
                      alt={BUSINESS_PILLARS[0].title[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* 4-Column / 2x2 Grid for the other 4 Business Pillars */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {BUSINESS_PILLARS.slice(1).map((pillar, index) => {
              const Icon = getIcon(pillar.iconName);
              const pillarNumber = String(index + 2).padStart(2, '0');

              return (
                <StaggerItem key={pillar.id}>
                  <div className="group p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#E54141]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-[#999999] tracking-wider uppercase">
                          Pilar {pillarNumber}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#222222] tracking-tight group-hover:text-[#E54141] transition-colors leading-snug">
                        {pillar.title[lang]}
                      </h3>

                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#555555] leading-relaxed">
                        {pillar.shortDesc[lang]}
                      </p>

                      {/* Capabilities Bullet preview */}
                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-[#F0F0F0] space-y-2">
                        {pillar.keyCapabilities[lang].map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-xs text-[#555555] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E54141] shrink-0 mt-1.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#F0F0F0] gap-2">
                      <button
                        onClick={() => onInquirePillar(pillar.title[lang])}
                        className="text-xs font-medium text-[#777777] active:text-[#E54141] transition-colors cursor-pointer min-h-[44px] flex items-center"
                      >
                        {lang === 'id' ? 'Ajukan Kerja Sama' : 'Inquire Partnership'}
                      </button>
                      <button
                        onClick={() => setSelectedPillar(pillar)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E54141] active:text-[#B72424] cursor-pointer min-h-[44px] px-2"
                      >
                        <span>{lang === 'id' ? 'Detail Kapabilitas' : 'Explore Capability'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Inter-Page CTA Banner */}
          <FadeIn delay={0.2}>
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#222222]">
                  {lang === 'id' ? 'Ingin Menjajaki Kemitraan pada Pilar Bisnis Kami?' : 'Interested in Partnering with Our Business Pillars?'}
                </h4>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                  {lang === 'id'
                    ? 'Kirimkan proposal atau permohonan diskusi komersial melalui halaman kontak resmi kami.'
                    : 'Submit your commercial proposal or meeting request through our corporate contact desk.'}
                </p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl transition-colors cursor-pointer shrink-0 min-h-[44px] touch-manipulation"
              >
                <span>{lang === 'id' ? 'Hubungi Perusahaan' : 'Contact Company Desk'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Business Unit Deep-Dive Modal */}
      <BusinessModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
        lang={lang}
        onInquire={(title) => onInquirePillar(title)}
      />
    </PageTransition>
  );
};
