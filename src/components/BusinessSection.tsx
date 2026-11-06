import React, { useState } from 'react';
import { BusinessPillar, Language } from '../types';
import { BUSINESS_PILLARS } from '../utils/corporateData';
import { BusinessModal } from './BusinessModal';
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

interface BusinessSectionProps {
  lang: Language;
  onInquirePillar: (pillarTitle: string) => void;
}

export const BusinessSection: React.FC<BusinessSectionProps> = ({
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
    <section id="business" className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E54141] mb-2">
            <span>OUR BUSINESS</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span className="text-[#666666] font-medium">BIDANG USAHA KORPORASI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
            {lang === 'id'
              ? 'Portofolio Layanan & Pilar Usaha Terintegrasi'
              : 'Integrated Service Portfolio & Strategic Business Pillars'}
          </h2>
          <p className="mt-3 text-base text-[#666666] leading-relaxed">
            {lang === 'id'
              ? 'PT Lascramall Commerce Network mengoperasikan lima pilar bisnis strategis yang saling bersinergi dalam mempercepat pertukaran nilai ekonomi digital.'
              : 'PT Lascramall Commerce Network operates five strategic business pillars designed to synergize and accelerate digital economic value exchange.'}
          </p>
        </div>

        {/* Featured Card: Ecommerce & Digital Commerce (Flagship Unit) */}
        {BUSINESS_PILLARS.length > 0 && (
          <div className="mb-10 bg-[#F7F7F7] rounded-2xl border border-[#E8E8E8] overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#E54141]">
                  <ShoppingBag className="w-4 h-4" />
                  <span>Pilar 01 · Marquee Capability</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
                  {BUSINESS_PILLARS[0].title[lang]}
                </h3>

                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {BUSINESS_PILLARS[0].fullDesc[lang]}
                </p>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {BUSINESS_PILLARS[0].keyCapabilities[lang].slice(0, 4).map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#333333]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E54141] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedPillar(BUSINESS_PILLARS[0])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#E54141] hover:bg-[#D13030] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{lang === 'id' ? 'Lihat Spesifikasi Lengkap' : 'View Full Specifications'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-[#888888]">
                    {lang === 'id' ? 'Standar enterprise' : 'Enterprise standard'}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 h-full min-h-[300px] border-t lg:border-t-0 lg:border-l border-[#E8E8E8]">
                <img
                  src={BUSINESS_PILLARS[0].image}
                  alt={BUSINESS_PILLARS[0].title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* 4-Column / 2x2 Grid for the remaining 4 Business Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUSINESS_PILLARS.slice(1).map((pillar, index) => {
            const Icon = getIcon(pillar.iconName);
            const pillarNumber = String(index + 2).padStart(2, '0');

            return (
              <div
                key={pillar.id}
                className="group p-8 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#E54141]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#999999] tracking-wider uppercase">
                      Pilar {pillarNumber}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#222222] tracking-tight group-hover:text-[#E54141] transition-colors">
                    {pillar.title[lang]}
                  </h3>

                  <p className="mt-3 text-sm text-[#555555] leading-relaxed">
                    {pillar.shortDesc[lang]}
                  </p>

                  {/* Capabilities Bullet preview */}
                  <div className="mt-6 pt-5 border-t border-[#F0F0F0] space-y-2">
                    {pillar.keyCapabilities[lang].slice(0, 2).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-[#666666]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E54141] shrink-0 mt-1.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#F0F0F0]">
                  <span className="text-xs text-[#888888]">
                    PT Lascramall Commerce Network
                  </span>
                  <button
                    onClick={() => setSelectedPillar(pillar)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E54141] hover:text-[#D13030] cursor-pointer"
                  >
                    <span>{lang === 'id' ? 'Detail Kapabilitas' : 'Explore Capability'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Business Unit Deep-Dive Modal */}
      <BusinessModal
        pillar={selectedPillar}
        onClose={() => setSelectedPillar(null)}
        lang={lang}
        onInquire={(title) => onInquirePillar(title)}
      />
    </section>
  );
};
