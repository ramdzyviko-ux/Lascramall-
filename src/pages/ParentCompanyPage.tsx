import React from 'react';
import { NavSection, Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrappers';
import { DESWARTHA_DATA, COMPANY_DETAILS } from '../utils/corporateData';
import {
  ShieldCheck,
  Building2,
  Workflow,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Scale,
  ClipboardCheck,
  BarChart3,
  Users,
  Code2,
  Compass,
  Activity,
  Layers,
  Sparkles,
  Award,
  Lock,
  Network,
  CheckCircle2,
  GitBranch,
  Target
} from 'lucide-react';

interface ParentCompanyPageProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const ParentCompanyPage: React.FC<ParentCompanyPageProps> = ({ onNavigate, lang }) => {
  const getFunctionIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'BarChart3':
        return BarChart3;
      case 'Users':
        return Users;
      case 'Code2':
        return Code2;
      case 'Compass':
        return Compass;
      case 'Activity':
      default:
        return Activity;
    }
  };

  return (
    <PageTransition>
      {/* 1. Page Header with Breadcrumb & Authority Metadata */}
      <PageHeader
        currentSection="parent"
        title={lang === 'id' ? 'Deswartha Group – Perusahaan Induk' : 'Deswartha Group – Parent Company'}
        subtitle={
          lang === 'id'
            ? 'Organisasi korporat induk yang bertanggung jawab atas penentuan arah strategis, tata kelola perusahaan, pengawasan operasional, pengendalian keuangan, manajemen organisasi, dan pengembangan teknologi internal ekosistem bisnis.'
            : 'The parent corporate organization responsible for strategic direction, corporate governance, operational supervision, financial control, organizational management, and internal technology development across its business ecosystem.'
        }
        badge="DESWARTHA GROUP · PARENT CORPORATE HOLDING & CENTRAL SUPERVISION"
        onNavigate={onNavigate}
        lang={lang}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        {/* 2. Executive Corporate Identity & Central Supervisory Role */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <FadeIn delay={0.05}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1F1] border border-[#FFE0E0] text-[11px] font-bold text-[#E54141] uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Identitas Korporat Induk' : 'Parent Corporate Identity'}</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight leading-tight">
                  {lang === 'id' ? (
                    <>
                      Pusat Manajemen & Pengawasan Sentral{' '}
                      <span className="text-[#E54141]">Deswartha Group</span>
                    </>
                  ) : (
                    <>
                      Central Management & Supervisory Organization{' '}
                      <span className="text-[#E54141]">Deswartha Group</span>
                    </>
                  )}
                </h2>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                  {DESWARTHA_DATA.overview[lang]}
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9F9] border border-[#E8E8E8] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E54141] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === 'id' ? 'Mandat Pengawasan Korporat' : 'Corporate Supervisory Mandate'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {lang === 'id'
                      ? 'Deswartha Group berfungsi sebagai entitas sentral yang menetapkan standar kepatuhan, menata arsitektur sistem kerja terpadu, dan memastikan seluruh anak perusahaan—termasuk PT Lascramall Commerce Network—bergerak selaras dengan target korporasi jangka panjang.'
                      : 'Deswartha Group operates as the central authority establishing compliance standards, structuring integrated operating systems, and ensuring all subsidiaries—including PT Lascramall Commerce Network—align strictly with long-term corporate benchmarks.'}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right Strategic Badges / Fact Grid */}
            <div className="lg:col-span-5 space-y-4">
              <FadeIn delay={0.25}>
                <div className="bg-white rounded-2xl border-2 border-[#E8E8E8] p-5 sm:p-6 shadow-sm space-y-5">
                  <div className="flex items-center justify-between border-b border-[#EFEFEF] pb-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-[#888888] uppercase block">
                        Corporate Designation
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-[#222222]">
                        DESWARTHA GROUP
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#E54141] text-white uppercase tracking-wider">
                      PARENT HOLDING
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-start justify-between py-2 border-b border-[#F5F5F5] gap-3">
                      <span className="text-[#666666] font-medium">Peran Sentral</span>
                      <span className="font-semibold text-[#222222] text-right">
                        {lang === 'id' ? 'Manajemen Strategis & Pengawasan' : 'Strategic Direction & Oversight'}
                      </span>
                    </div>

                    <div className="flex items-start justify-between py-2 border-b border-[#F5F5F5] gap-3">
                      <span className="text-[#666666] font-medium">Anak Perusahaan Resmi</span>
                      <span className="font-bold text-[#E54141] text-right">
                        PT Lascramall Commerce Network
                      </span>
                    </div>

                    <div className="flex items-start justify-between py-2 border-b border-[#F5F5F5] gap-3">
                      <span className="text-[#666666] font-medium">Merek Konsumen Terkait</span>
                      <span className="font-bold text-[#222222] text-right">
                        LASCRAMALL (E-Commerce)
                      </span>
                    </div>

                    <div className="flex items-start justify-between py-2 border-b border-[#F5F5F5] gap-3">
                      <span className="text-[#666666] font-medium">Fokus Infrastruktur</span>
                      <span className="font-semibold text-[#222222] text-right">
                        Internal Software & Tech Systems
                      </span>
                    </div>

                    <div className="flex items-start justify-between py-2 gap-3">
                      <span className="text-[#666666] font-medium">Orientasi Ekosistem</span>
                      <span className="font-semibold text-[#222222] text-right">
                        {lang === 'id' ? 'Terstruktur, Tangguh & Internasional' : 'Structured, Resilient & Global'}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('business')}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#222222] bg-[#F7F7F7] hover:bg-[#EFEFEF] border border-[#E0E0E0] transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px] touch-manipulation"
                    >
                      <span>{lang === 'id' ? 'Lihat Layanan & Bidang Usaha Anak Perusahaan' : 'View Subsidiary Services'}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#E54141]" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3. Official Corporate Culture Statements (Principles & Slogans) */}
        <section className="rounded-3xl bg-[#1A1A1A] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-[#333333] relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#E54141]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#E54141]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8 sm:space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#333333] pb-6">
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#E54141] uppercase block mb-1">
                  OFFICIAL CORPORATE CULTURE & MANAGEMENT PHILOSOPHY
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                  {lang === 'id' ? 'Budaya & Prinsip Manajemen Deswartha' : 'Deswartha Management Culture & Principles'}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A2A2A] border border-[#444444] text-xs font-medium text-neutral-300 self-start sm:self-auto">
                <Target className="w-3.5 h-3.5 text-[#E54141]" />
                <span>Executive Culture</span>
              </div>
            </div>

            {/* Principles & Slogan Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Corporate Principles */}
              <div className="lg:col-span-5 bg-[#242424] p-6 sm:p-7 rounded-2xl border border-[#383838] flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E54141] flex items-center gap-2">
                    <Workflow className="w-4 h-4" />
                    <span>CORPORATE PRINCIPLES</span>
                  </div>
                  <h4 className="text-sm font-semibold text-neutral-300">
                    {lang === 'id' ? 'Prinsip Dasar Tata Kerja Korporasi' : 'Foundational Operating Principles'}
                  </h4>
                </div>

                <div className="space-y-4">
                  {DESWARTHA_DATA.culture.principles.map((principle, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#1C1C1C] border border-[#3A3A3A] flex items-start gap-3.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#E54141]/20 border border-[#E54141]/40 text-[#E54141] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-base sm:text-lg font-extrabold tracking-wide text-white">
                          {principle}
                        </div>
                        <div className="text-xs text-neutral-400 mt-1">
                          {idx === 0
                            ? (lang === 'id' ? 'Standardisasi proses kerja mendahului segala tindakan operasional.' : 'Standardized process governance precedes all operational execution.')
                            : (lang === 'id' ? 'Tolok ukur keberhasilan wajib berbasis data nyata, dapat diuji, dan berkesinambungan.' : 'Success benchmarks must be data-driven, verifiable, and continuously reproducible.')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-[11px] text-neutral-400 pt-2 border-t border-[#333333]">
                  {lang === 'id'
                    ? 'Ditegakkan sebagai standar kepatuhan tidak dapat dinegosiasikan.'
                    : 'Enforced as non-negotiable compliance across all subsidiaries.'}
                </div>
              </div>

              {/* Corporate Slogan (5 Core Pillars) */}
              <div className="lg:col-span-7 bg-[#242424] p-6 sm:p-7 rounded-2xl border border-[#383838] flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#E54141] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>CORPORATE SLOGAN & CADENCE</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {lang === 'id'
                      ? 'Lima pilar slogan resmi Deswartha Group yang mencerminkan ritme operasional, disiplin analitis, dan orientasi profitabilitas terukur:'
                      : 'The five core pillars of Deswartha Group official cadence reflecting operating discipline and verified profitability:'}
                  </p>
                </div>

                {/* Slogan Pill Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DESWARTHA_DATA.culture.slogans.map((slogan, idx) => {
                    const isLast = idx === DESWARTHA_DATA.culture.slogans.length - 1;
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all ${
                          isLast
                            ? 'sm:col-span-2 bg-[#E54141] border-[#FF6666] text-white shadow-md'
                            : 'bg-[#1C1C1C] border-[#383838] text-white hover:border-[#E54141]/50'
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-black shrink-0 ${
                            isLast ? 'bg-white text-[#E54141]' : 'bg-[#2E2E2E] text-[#E54141]'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="font-extrabold text-sm tracking-wider uppercase">
                          {slogan}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="text-xs text-neutral-400 bg-[#1A1A1A] p-3 rounded-xl border border-[#333333]">
                  {lang === 'id'
                    ? 'Filosofi tata kelola: Mengedepankan eksekusi sistematis, pembuktian berbasis data numerik, mitigasi risiko yang ketat, dan penciptaan nilai komersial nyata.'
                    : 'Management philosophy: Emphasizing systematic execution, numerical data proof, rigorous risk mitigation, and verified commercial value creation.'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Corporate Vision & Mission */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#E54141] uppercase">
              STRATEGIC FOUNDATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id' ? 'Visi & Misi Korporat Deswartha Group' : 'Deswartha Group Corporate Vision & Mission'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              {lang === 'id'
                ? 'Fondasi terpadu yang memandu perumusan kebijakan, pengawasan operasional, dan pengembangan anak perusahaan.'
                : 'The unified charter guiding governance policy, supervisory audits, and subsidiary development.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Vision Banner (Left Column) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF5F5] to-white p-6 sm:p-8 rounded-3xl border border-[#FFD5D5] space-y-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#E54141] text-white flex items-center justify-center shadow-md">
                <Compass className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E54141] block">
                  CORPORATE VISION
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#222222]">
                  {lang === 'id' ? 'Visi Korporat' : 'Corporate Vision'}
                </h4>
              </div>

              <blockquote className="text-sm sm:text-base font-medium text-[#333333] leading-relaxed italic border-l-4 border-[#E54141] pl-4">
                "{DESWARTHA_DATA.vision[lang]}"
              </blockquote>

              <div className="pt-2 border-t border-[#FFE5E5] space-y-2">
                <span className="text-[11px] font-semibold text-[#888888] uppercase tracking-wider block">
                  {lang === 'id' ? 'Pilar Sasaran Utama' : 'Key Strategic Pillars'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#E8E8E8] text-[#444444]">
                    Integrated
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#E8E8E8] text-[#444444]">
                    Structured
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-[#E8E8E8] text-[#444444]">
                    Resilient
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#E54141] text-white">
                    International-Oriented
                  </span>
                </div>
              </div>
            </div>

            {/* Mission Statements (Right Column) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8E8E8] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[#EFEFEF] pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E54141] block">
                    CORPORATE MISSION
                  </span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-[#222222]">
                    {lang === 'id' ? '7 Butir Misi Korporat' : '7 Corporate Missions'}
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#888888]">
                  7 Key Focus Areas
                </span>
              </div>

              <div className="space-y-3">
                {DESWARTHA_DATA.missions[lang].map((mission, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#F9F9F9] hover:bg-[#FFF5F5] border border-[#EFEFEF] hover:border-[#FFD0D0] transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-[#E54141] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#333333] leading-relaxed">
                      {mission}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. DESWARTHA Corporate Philosophy (The Complete Nine-Letter Identity) */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1F1] border border-[#FFE0E0] text-[11px] font-bold text-[#E54141] uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>CORE PHILOSOPHICAL IDENTITY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id' ? 'Filosofi Korporasi DESWARTHA' : 'DESWARTHA Corporate Philosophy'}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              {lang === 'id'
                ? 'Sembilan huruf penyusun kata DESWARTHA merepresentasikan prinsip organisasi fundamental yang menjadi jiwa kepemimpinan, disiplin eksekusi, dan standar korporasi kami secara berurutan.'
                : 'The nine letters of DESWARTHA represent our fundamental organizational principles, forming our governance blueprint, leadership ethos, and executive standards in strict sequence.'}
            </p>
          </div>

          {/* Attractive 9-Element Responsive Grid (Strict Sequence: D - E - S - W - A - R - T - H - A) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {DESWARTHA_DATA.philosophy.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 sm:p-6 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#E54141] shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF1F1] group-hover:bg-[#E54141] text-[#E54141] group-hover:text-white flex items-center justify-center font-black text-2xl tracking-tighter transition-colors shadow-2xs">
                    {item.letter}
                  </div>
                  <span className="text-[11px] font-bold text-[#888888] tracking-widest uppercase">
                    ELEMENT 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="text-lg sm:text-xl font-extrabold text-[#222222] group-hover:text-[#E54141] transition-colors">
                    {item.letter} — {item.word}
                  </div>
                  <div className="text-xs font-semibold text-[#666666]">
                    {item.title[lang]}
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed pt-1">
                    {item.description[lang]}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0F0F0] flex items-center justify-between text-[11px] font-semibold text-[#888888]">
                  <span>Deswartha Principle</span>
                  <span className="text-[#E54141] font-mono">0{idx + 1} / 09</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#E8E8E8] text-center text-xs text-[#666666]">
            <span className="font-bold text-[#222222]">Prinsip Sembilan Huruf Terpadu: </span>
            Direction · Excellence · System · Wisdom · Accountability · Resilience · Trust · Hierarchy · Authority
          </div>
        </section>

        {/* 6. Corporate Governance & Central Management Functions */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#E54141] uppercase">
              CENTRAL OVERSIGHT & GOVERNANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id'
                ? 'Tata Kelola & Fungsi Sentral Deswartha Group'
                : 'Deswartha Group Central Governance & Management'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              {lang === 'id'
                ? 'Tujuh pilar manajemen terpusat yang memastikan disiplin operasional, mitigasi risiko, dan kepatuhan hukum di seluruh ekosistem bisnis.'
                : 'Seven centralized governance functions ensuring operational discipline, enterprise risk control, and legal compliance across our ecosystem.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESWARTHA_DATA.governanceFunctions.map((fn, idx) => {
              const Icon = getFunctionIcon(fn.iconName);
              return (
                <div
                  key={fn.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#CCCCCC] shadow-2xs space-y-3.5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] text-[#E54141] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-[#888888] uppercase tracking-wider">
                      Fungsi 0{idx + 1}
                    </div>
                    <h4 className="text-base font-extrabold text-[#222222] leading-snug">
                      {fn.title[lang]}
                    </h4>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {fn.description[lang]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F5F5F5] flex items-center gap-1.5 text-[11px] font-semibold text-[#888888]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E54141]" />
                    <span>Standardized Supervisory Metric</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. Business Ecosystem & Clear Corporate Relationship */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#E54141] uppercase">
              CORPORATE RELATIONSHIP & HIERARCHY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id' ? 'Ekosistem Bisnis & Struktur Entitas' : 'Business Ecosystem & Entity Structure'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              {lang === 'id'
                ? 'Struktur hierarki resmi yang menghubungkan organisasi korporat induk dengan anak perusahaan dan merek operasional.'
                : 'The official corporate governance relationship linking parent holding, subsidiary, and operating commercial brand.'}
            </p>
          </div>

          {/* Visual Entity Hierarchy Diagram */}
          <div className="bg-[#FBFBFB] p-6 sm:p-10 rounded-3xl border border-[#E8E8E8] space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Level 1: Parent Organization */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#E54141] shadow-sm text-center space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#E54141] text-white uppercase tracking-wider inline-block">
                  PARENT HOLDING COMPANY
                </span>
                <div className="text-xl sm:text-2xl font-black text-[#222222]">
                  DESWARTHA GROUP
                </div>
                <p className="text-xs text-[#555555] max-w-lg mx-auto">
                  {lang === 'id'
                    ? 'Organisasi korporat induk sentral: Arah strategis, tata kelola, pengawasan operasional, kontrol keuangan, & teknologi internal.'
                    : 'Parent corporate organization: Strategic direction, governance, supervisory oversight, financial control, & internal tech.'}
                </p>
              </div>

              {/* Connecting Connector Arrow */}
              <div className="flex flex-col items-center justify-center text-[#E54141] py-1">
                <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider mb-1">
                  Kepemilikan Saham & Pengawasan Sentral (Supervisory Oversight)
                </span>
                <div className="w-0.5 h-6 bg-[#E54141]" />
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Level 2: Subsidiary */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#222222] shadow-sm text-center space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#222222] text-white uppercase tracking-wider inline-block">
                  SUBSIDIARY ENTITY (ANAK PERUSAHAAN)
                </span>
                <div className="text-lg sm:text-xl font-black text-[#222222]">
                  PT LASCRAMALL COMMERCE NETWORK
                </div>
                <p className="text-xs text-[#555555] max-w-lg mx-auto">
                  {lang === 'id'
                    ? 'Anak perusahaan resmi yang bergerak dalam ekosistem ecommerce, infrastruktur niaga digital, agregasi produk digital, dan pengembangan bisnis online.'
                    : 'Official operating subsidiary engaged in ecommerce ecosystems, digital commerce infrastructure, digital asset distribution, and online business development.'}
                </p>
              </div>

              {/* Connecting Connector Arrow */}
              <div className="flex flex-col items-center justify-center text-[#222222] py-1">
                <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider mb-1">
                  Merek Niaga Digital Utama (E-Commerce Brand)
                </span>
                <div className="w-0.5 h-6 bg-[#222222]" />
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Level 3: Consumer Brand */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFF1F1] to-white border border-[#FFD0D0] text-center space-y-1.5 shadow-2xs">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold bg-white border border-[#FFBDBD] text-[#E54141] uppercase tracking-wider inline-block">
                  FLAGSHIP COMMERCIAL BRAND
                </span>
                <div className="text-lg font-black tracking-wider text-[#E54141]">
                  LASCRAMALL
                </div>
                <p className="text-xs text-[#666666]">
                  {lang === 'id'
                    ? 'Merek ekosistem perdagangan digital dan jaringan niaga modern.'
                    : 'Digital commerce ecosystem and modern trade network brand.'}
                </p>
              </div>
            </div>

            {/* Strict Regulatory Note */}
            <div className="max-w-2xl mx-auto pt-4 border-t border-[#EAEAEA] text-center text-xs text-[#777777] leading-relaxed">
              <span className="font-semibold text-[#222222]">Catatan Kepatuhan Portofolio: </span>
              {lang === 'id'
                ? 'Deswartha Group mengelola dan mengawasi portofolio entitas bisnis yang berkembang secara berhati-hati dan terukur. Seluruh entitas dan rencana ekspansi masa depan tunduk pada perizinan hukum yang sah dan pengawasan ketat.'
                : 'Deswartha Group manages and supervises a carefully measured corporate portfolio. All entities and future expansion initiatives strictly comply with statutory licenses and centralized corporate oversight.'}
            </div>
          </div>
        </section>

        {/* 8. Call to Action & Navigation Next Steps */}
        <section className="rounded-3xl bg-[#F7F7F7] border border-[#E8E8E8] p-6 sm:p-10 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#222222]">
              {lang === 'id'
                ? 'Jelajahi Ekosistem PT Lascramall Commerce Network'
                : 'Explore PT Lascramall Commerce Network Ecosystem'}
            </h4>
            <p className="text-xs sm:text-sm text-[#555555]">
              {lang === 'id'
                ? 'Ketahui lebih banyak mengenai kapabilitas lima pilar niaga digital kami atau hubungi perwakilan korporat resmi.'
                : 'Learn more about our five digital commerce pillars or connect directly with our corporate representatives.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('business')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] rounded-xl shadow-xs transition-all cursor-pointer min-h-[44px] touch-manipulation"
            >
              <span>{lang === 'id' ? 'Lihat Bidang Usaha & Layanan' : 'Explore Business Services'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#222222] bg-white hover:bg-[#F0F0F0] border border-[#CCCCCC] rounded-xl transition-all cursor-pointer min-h-[44px] touch-manipulation"
            >
              <span>{lang === 'id' ? 'Profil PT Lascramall' : 'PT Lascramall Profile'}</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#444444] hover:text-[#E54141] transition-colors cursor-pointer min-h-[44px] touch-manipulation"
            >
              <span>{lang === 'id' ? 'Hubungi Kantor Korporat' : 'Contact Corporate Desk'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
