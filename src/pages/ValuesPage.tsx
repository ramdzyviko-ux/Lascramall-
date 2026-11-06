import React from 'react';
import { NavSection, Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { CORPORATE_VALUES } from '../utils/corporateData';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrappers';
import {
  Lightbulb,
  ShieldCheck,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface ValuesPageProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const ValuesPage: React.FC<ValuesPageProps> = ({ onNavigate, lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return Lightbulb;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Award':
        return Award;
      case 'Users':
        return Users;
      case 'TrendingUp':
        return TrendingUp;
      case 'CheckCircle2':
      default:
        return CheckCircle2;
    }
  };

  return (
    <PageTransition className="bg-white">
      {/* 1. Page Header */}
      <PageHeader
        currentSection="values"
        title={lang === 'id' ? 'Nilai-Nilai & Budaya Korporasi' : 'Corporate Values & Culture'}
        subtitle={
          lang === 'id'
            ? 'Enam pilar nilai utama yang menjadi pedoman etika, standar integritas, dan dasar pengambilan keputusan di seluruh lingkungan kerja PT Lascramall Commerce Network.'
            : 'Six foundational values defining ethics, integrity standards, and decision-making across PT Lascramall Commerce Network.'
        }
        badge="PRINCIPLES & ETHICS"
        onNavigate={onNavigate}
        lang={lang}
      />

      {/* 2. Main Content (Mobile-First) */}
      <div className="py-10 sm:py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {/* Section Introduction */}
          <FadeIn delay={0.05} className="max-w-3xl">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-snug">
              {lang === 'id'
                ? 'Fondasi Integritas dalam Ekosistem Niaga Digital'
                : 'The Foundation of Integrity in Digital Commerce'}
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-[#666666] leading-relaxed">
              {lang === 'id'
                ? 'Sebagai entitas korporat modern, nilai-nilai berikut bukan sekadar slogan, melainkan tolok ukur nyata dalam menjaga kepercayaan mitra bisnis dan kepatuhan terhadap perundang-undangan.'
                : 'As a modern enterprise, these core values represent concrete operational benchmarks to uphold partner trust and regulatory compliance.'}
            </p>
          </FadeIn>

          {/* 6 Values Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CORPORATE_VALUES.map((val, idx) => {
              const Icon = getIcon(val.iconName);
              const valueNumber = String(idx + 1).padStart(2, '0');

              return (
                <StaggerItem key={val.id}>
                  <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#888888] tabular-nums">
                          {valueNumber}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#222222] tracking-tight leading-snug">
                        {val.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#E54141] mt-0.5 mb-2.5">
                        {val.subtitle[lang]}
                      </div>

                      <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                        {val.description[lang]}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#F0F0F0] space-y-2">
                      <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#999999]">
                        {lang === 'id' ? 'Komitmen Pelaksanaan' : 'Implementation Tenet'}
                      </div>
                      {val.principles[lang].map((p, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-[#444444] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E54141] shrink-0 mt-1.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Corporate Trust & Governance Statement Banner */}
          <FadeIn delay={0.15}>
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFF1F1] text-[#E54141] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-[#222222] leading-snug">
                    {lang === 'id' ? 'Kepatuhan Regulasi & Standar Industri' : 'Regulatory Rigor & Statutory Compliance'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666666] mt-0.5 leading-relaxed">
                    {lang === 'id'
                      ? 'Seluruh kegiatan bisnis dijalankan sesuai kerangka hukum perdagangan dan sistem elektronik Republik Indonesia.'
                      : 'All commercial operations adhere strictly to the electronic trade and systems statutory frameworks of Indonesia.'}
                  </p>
                </div>
              </div>
              <div className="shrink-0 text-[11px] sm:text-xs font-semibold text-[#E54141] uppercase tracking-wider border border-[#E54141]/30 bg-[#FFF1F1] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg self-start sm:self-auto">
                ISO / GCG ALIGNED
              </div>
            </div>
          </FadeIn>

          {/* Inter-Page CTA Banner */}
          <FadeIn delay={0.2}>
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#222222]">
                  {lang === 'id' ? 'Bersama Mewujudkan Ekosistem Terpercaya' : 'Together Fostering a Trusted Ecosystem'}
                </h4>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                  {lang === 'id'
                    ? 'Kami menyambut setiap inisiatif kerja sama yang berlandaskan integritas dan visi jangka panjang.'
                    : 'We welcome collaboration initiatives founded on integrity and sustainable long-term vision.'}
                </p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl transition-colors cursor-pointer shrink-0 min-h-[44px] touch-manipulation"
              >
                <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
};
