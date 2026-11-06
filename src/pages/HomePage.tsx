import React from 'react';
import { NavSection, Language } from '../types';
import { HeroSection } from '../components/HeroSection';
import { BUSINESS_PILLARS, CORPORATE_VALUES, COMPANY_DETAILS } from '../utils/corporateData';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrappers';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building2,
  Sparkles,
  ShoppingBag,
  Store,
  Cpu,
  Gamepad2,
  TrendingUp,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, lang }) => {
  const getPillarIcon = (iconName: string) => {
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
    <PageTransition>
      {/* 1. Hero Section */}
      <HeroSection onNavigate={onNavigate} lang={lang} />

      {/* 2. Executive Corporate Introduction (Android Optimized) */}
      <section className="py-12 sm:py-20 bg-[#F7F7F7] border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Left Column: Narrative & Mobile-Optimized Quick Stats */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <FadeIn delay={0.05}>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141]">
                  <span>OVERVIEW PERUSAHAAN</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-[#666666]">PT LASCRAMALL COMMERCE NETWORK</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight leading-snug break-words">
                  {lang === 'id'
                    ? 'Mitra Strategis dalam Penguatan Ekosistem Niaga Digital Nasional'
                    : 'Strategic Partner Advancing the National Digital Commerce Ecosystem'}
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {lang === 'id'
                    ? 'PT Lascramall Commerce Network didirikan untuk membangun infrastruktur perdagangan terpadu yang memadukan keunggulan teknologi komersial, agregasi produk digital esensial, aset hiburan interaktif, dan jaringan distribusi berskala enterprise.'
                    : 'PT Lascramall Commerce Network was established to build an integrated commerce infrastructure combining commercial tech excellence, essential digital commodity aggregation, interactive entertainment assets, and enterprise distribution pipelines.'}
                </p>
              </FadeIn>

              {/* Quick Stat Badges (Ergonomic 3-box row on mobile screens) */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1">
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E5E5E5] text-center shadow-2xs">
                    <div className="text-base sm:text-2xl font-extrabold text-[#E54141]">5 Pilar</div>
                    <div className="text-[10px] sm:text-xs text-[#666666] mt-0.5 font-medium leading-tight">Bidang Usaha</div>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E5E5E5] text-center shadow-2xs">
                    <div className="text-base sm:text-2xl font-extrabold text-[#222222]">100% Legal</div>
                    <div className="text-[10px] sm:text-xs text-[#666666] mt-0.5 font-medium leading-tight">Regulasi RI</div>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E5E5E5] text-center shadow-2xs">
                    <div className="text-base sm:text-2xl font-extrabold text-[#222222]">B2B & Ent.</div>
                    <div className="text-[10px] sm:text-xs text-[#666666] mt-0.5 font-medium leading-tight">Kemitraan</div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl shadow-xs transition-colors cursor-pointer min-h-[48px] touch-manipulation"
                  >
                    <span>{lang === 'id' ? 'Pelajari Profil Lengkap Perusahaan' : 'Read Full Corporate Profile'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('parent')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#222222] hover:text-[#E54141] bg-white hover:bg-[#F7F7F7] border border-[#CCCCCC] rounded-xl shadow-2xs transition-colors cursor-pointer min-h-[48px] touch-manipulation"
                  >
                    <span>Deswartha Group (Parent)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#E54141]" />
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Corporate Summary Card */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.2}>
                <div className="bg-white p-4.5 sm:p-7 rounded-2xl border border-[#E8E8E8] shadow-xs space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0F0F0]">
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#222222]">
                      {lang === 'id' ? 'Struktur Identitas Korporat' : 'Corporate Identity Framework'}
                    </div>
                    <Building2 className="w-4 h-4 text-[#E54141]" />
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-[#888888] block text-[11px] mb-0.5">Badan Hukum Terdaftar:</span>
                      <span className="font-bold text-[#222222] text-xs sm:text-sm">{COMPANY_DETAILS.legalName}</span>
                    </div>

                    {/* Official Affiliation Callout */}
                    <div className="p-3 rounded-xl bg-[#FFF8F8] border border-[#FFD9D9] space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#E54141] block">
                        {lang === 'id' ? 'Afiliasi Induk Perusahaan' : 'Parent Company Affiliation'}
                      </span>
                      <div className="text-xs text-[#444444] leading-relaxed">
                        PT Lascramall Commerce Network is part of{' '}
                        <button
                          onClick={() => onNavigate('parent')}
                          className="font-bold text-[#E54141] hover:underline cursor-pointer inline-flex items-center gap-0.5"
                        >
                          Deswartha Group
                          <ChevronRight className="w-3 h-3 inline" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <span className="text-[#888888] block text-[11px] mb-0.5">Merek Niaga Utama:</span>
                      <span className="font-bold text-[#E54141] text-xs sm:text-sm">{COMPANY_DETAILS.brandName}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E54141] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#888888] block text-[11px]">Kantor Operasional:</span>
                        <span className="text-[#444444] leading-relaxed block">{COMPANY_DETAILS.headquarters.address}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#E54141] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#888888] block text-[11px]">Jam Layanan:</span>
                        <span className="text-[#444444] block">Senin – Minggu: 08.00 – 21.00 WIB (Kecuali Hari Libur Nasional)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#F0F0F0]">
                    <button
                      onClick={() => onNavigate('about')}
                      className="w-full text-center text-xs font-semibold text-[#E54141] active:text-[#B72424] transition-colors cursor-pointer py-2.5 min-h-[44px] flex items-center justify-center"
                    >
                      {lang === 'id' ? 'Lihat Visi, Misi & Filosofi Korporasi →' : 'View Vision, Mission & Philosophy →'}
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Pillars Showcase Teaser */}
      <section className="py-12 sm:py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141] mb-1.5">
                  <span>PORTFOLIO BISNIS</span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-[#666666]">5 PILAR STRATEGIS</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-tight">
                  {lang === 'id' ? 'Pilar Bidang Usaha LASCRAMALL' : 'LASCRAMALL Business Pillars'}
                </h2>
              </div>

              <button
                onClick={() => onNavigate('business')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E54141] active:text-[#B72424] cursor-pointer min-h-[40px]"
              >
                <span>{lang === 'id' ? 'Lihat Semua Spesifikasi' : 'Explore All Business Pillars'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {BUSINESS_PILLARS.map((pillar, idx) => {
              const Icon = getPillarIcon(pillar.iconName);
              return (
                <StaggerItem key={pillar.id}>
                  <div
                    onClick={() => onNavigate('business')}
                    className="p-5 sm:p-6 rounded-2xl bg-[#F7F7F7] hover:bg-white active:bg-white border border-[#E8E8E8] hover:border-[#E54141]/50 shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group min-h-[220px] touch-manipulation"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold text-[#888888] uppercase tracking-wider">
                          Pilar 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#E54141] transition-colors leading-snug">
                        {pillar.title[lang]}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3">
                        {pillar.shortDesc[lang]}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#EAEAEA] flex items-center justify-between text-xs">
                      <span className="text-[#888888] text-[11px]">Kapabilitas Terintegrasi</span>
                      <span className="font-semibold text-[#E54141] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Detail <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}

            {/* Teaser CTA card */}
            <StaggerItem>
              <div className="p-5 sm:p-6 rounded-2xl bg-[#222222] text-white flex flex-col justify-between border border-[#333333] min-h-[220px]">
                <div className="space-y-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 text-[#E54141] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {lang === 'id' ? 'Sinergi Ekosistem & Integrasi API' : 'Ecosystem Synergy & API Integration'}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {lang === 'id'
                      ? 'Seluruh pilar usaha dirancang dapat dihubungkan melalui modul teknologi terpadu untuk efisiensi bisnis optimal.'
                      : 'All strategic pillars are architected to interface via unified technological modules for peak efficiency.'}
                  </p>
                </div>

                <div className="pt-5">
                  <button
                    onClick={() => onNavigate('business')}
                    className="w-full py-3 px-4 text-xs font-semibold text-center text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                  >
                    {lang === 'id' ? 'Buka Halaman Bidang Usaha' : 'Go to Business Page'}
                  </button>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Corporate Values Preview */}
      <section className="py-12 sm:py-20 bg-[#F7F7F7] border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141] mb-1.5">
                  <span>NILAI & BUDAYA</span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-[#666666]">PRINSIP INTEGRITAS</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-tight">
                  {lang === 'id' ? 'Enam Fondasi Nilai Korporasi' : 'Six Foundational Values'}
                </h2>
              </div>

              <button
                onClick={() => onNavigate('values')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E54141] active:text-[#B72424] cursor-pointer min-h-[40px]"
              >
                <span>{lang === 'id' ? 'Pelajari Seluruh Nilai' : 'Explore All Values'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            {CORPORATE_VALUES.map((val) => (
              <StaggerItem key={val.id}>
                <div
                  onClick={() => onNavigate('values')}
                  className="p-3.5 sm:p-5 bg-white rounded-xl border border-[#E8E8E8] hover:border-[#E54141]/50 active:border-[#E54141] shadow-2xs hover:shadow-md transition-all text-center cursor-pointer group touch-manipulation"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#FFF1F1] text-[#E54141] mx-auto flex items-center justify-center mb-2.5">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#222222] group-hover:text-[#E54141] transition-colors leading-tight">
                    {val.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#777777] mt-1 line-clamp-1">
                    {val.subtitle[lang]}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. Contact / Partnership Action Banner */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#222222] to-[#2B2B2B] text-white flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-sm">
              <div className="space-y-2.5 max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 text-white rounded-full text-[11px] font-medium">
                  <Building2 className="w-3.5 h-3.5 text-[#E54141]" />
                  <span>Kemitraan Korporat Resmi</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug break-words">
                  {lang === 'id'
                    ? 'Siap Membangun Ekosistem Niaga Digital Bersama Kami?'
                    : 'Ready to Build the Digital Commerce Ecosystem with Us?'}
                </h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {lang === 'id'
                    ? 'Hubungi tim perwakilan PT Lascramall Commerce Network untuk mendiskusikan peluang kerja sama strategis, integrasi produk digital, dan inovasi bisnis.'
                    : 'Contact PT Lascramall Commerce Network representatives to discuss strategic cooperation, digital product integration, and business innovation.'}
                </p>
              </div>

              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl shadow-md transition-all cursor-pointer min-h-[48px] touch-manipulation"
                >
                  <span>{lang === 'id' ? 'Buka Halaman Kontak' : 'Contact Us Page'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
};
