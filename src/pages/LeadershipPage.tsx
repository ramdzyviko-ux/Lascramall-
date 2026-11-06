import React from 'react';
import { NavSection, Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrappers';
import { LEADERSHIP_DATA, COMPANY_DETAILS } from '../utils/corporateData';
import {
  ShieldCheck,
  Building2,
  Workflow,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Award,
  BarChart3,
  Code2,
  Users,
  Compass,
  Activity,
  Layers,
  Sparkles,
  Quote,
  Target,
  FileCheck2,
  Lock,
  GitBranch,
  UserCheck
} from 'lucide-react';

interface LeadershipPageProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onNavigate, lang }) => {
  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Workflow':
        return Workflow;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'BarChart3':
        return BarChart3;
      case 'Award':
        return Award;
      case 'Code2':
        return Code2;
      case 'TrendingUp':
      default:
        return TrendingUp;
    }
  };

  return (
    <PageTransition>
      {/* 1. Page Header with Breadcrumb & Executive Identity */}
      <PageHeader
        currentSection="leadership"
        title={lang === 'id' ? 'Leadership' : 'Leadership'}
        subtitle={
          lang === 'id'
            ? 'Kepemimpinan, visi strategis, dan komitmen pendiri dalam membangun ekosistem niaga digital terstruktur, terpercaya, dan berorientasi jangka panjang.'
            : 'Leadership, Vision & Corporate Direction: Pioneering structured, trusted, and sustainable digital commerce ecosystems.'
        }
        badge="PT LASCRAMALL COMMERCE NETWORK · EXECUTIVE LEADERSHIP & GOVERNANCE"
        onNavigate={onNavigate}
        lang={lang}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        {/* 2. Executive Corporate Affiliation Banner */}
        <section className="bg-gradient-to-r from-[#FFF8F8] via-[#FFF1F1] to-[#FFF8F8] border border-[#FFD0D0] p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#FFBFBF] flex items-center justify-center text-[#E54141] shrink-0 shadow-2xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E54141] block">
                {lang === 'id' ? 'Afiliasi Korporasi Induk' : 'Parent Company Affiliation'}
              </span>
              <p className="text-xs sm:text-sm font-semibold text-[#222222]">
                PT Lascramall Commerce Network is part of{' '}
                <button
                  onClick={() => onNavigate('parent')}
                  className="text-[#E54141] font-bold hover:underline cursor-pointer inline-flex items-center gap-0.5"
                  title="Lihat Profil Deswartha Group"
                >
                  Deswartha Group
                  <ChevronRight className="w-3.5 h-3.5 inline" />
                </button>
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('parent')}
            className="self-start sm:self-auto px-3.5 py-2 text-xs font-semibold text-[#222222] bg-white hover:bg-[#F9F9F9] border border-[#E0E0E0] rounded-xl shadow-2xs transition-colors cursor-pointer min-h-[40px] flex items-center gap-1.5 touch-manipulation"
          >
            <span>{lang === 'id' ? 'Profil Perusahaan Induk' : 'View Parent Company'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#E54141]" />
          </button>
        </section>

        {/* 3. Founder Profile: Editorial Executive Layout */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Left Column: Portrait & Formal Title Card */}
            <div className="lg:col-span-5 space-y-4">
              <FadeIn delay={0.05}>
                <div className="bg-white rounded-3xl border-2 border-[#E8E8E8] p-6 shadow-sm space-y-5 text-center">
                  {/* Portrait Placeholder Box with Executive Styling */}
                  <div className="relative mx-auto w-48 h-56 sm:w-56 sm:h-64 rounded-2xl bg-gradient-to-b from-[#242424] to-[#1A1A1A] border-4 border-white shadow-md overflow-hidden flex flex-col items-center justify-center p-4 group">
                    <div className="w-20 h-20 rounded-full bg-[#E54141]/20 border border-[#E54141]/40 flex items-center justify-center text-[#E54141] mb-3">
                      <UserCheck className="w-10 h-10" />
                    </div>
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
                      Executive Portrait
                    </span>
                    <span className="text-[10px] text-neutral-400 mt-1 max-w-[160px] leading-tight">
                      {lang === 'id' ? 'Area potret resmi pendiri perusahaan' : 'Official founder portrait frame'}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-xs py-1.5 px-2 text-[9px] text-neutral-300">
                      PT LASCRAMALL COMMERCE NETWORK
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="space-y-1.5 pt-1">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#FFF1F1] text-[#E54141] uppercase tracking-wider inline-block">
                      {LEADERSHIP_DATA.title[lang]}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-[#222222] tracking-tight">
                      {LEADERSHIP_DATA.namePlaceholder}
                    </h2>
                    <p className="text-xs font-semibold text-[#666666]">
                      PT Lascramall Commerce Network · Anak Perusahaan Deswartha Group
                    </p>
                  </div>

                  {/* Fact Badges */}
                  <div className="pt-3 border-t border-[#F0F0F0] grid grid-cols-2 gap-2 text-left text-xs">
                    <div className="p-2.5 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
                      <span className="text-[10px] text-[#888888] block uppercase font-bold">Fokus Korporat</span>
                      <span className="font-semibold text-[#222222] text-[11px]">Niaga Digital & E-Commerce</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#F9F9F9] border border-[#EEEEEE]">
                      <span className="text-[10px] text-[#888888] block uppercase font-bold">Pengawasan</span>
                      <span className="font-semibold text-[#E54141] text-[11px]">Deswartha Group</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#777777] italic bg-[#FAF9F9] p-3 rounded-xl border border-[#EAEAEA]">
                    {LEADERSHIP_DATA.portraitPlaceholderNote[lang]}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Strategic Background & Leadership Mandate */}
            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0.1}>
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFF1F1] border border-[#FFE0E0] text-[11px] font-bold text-[#E54141] uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? 'Profil Pimpinan Perseroan' : 'Executive Leadership Profile'}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-snug">
                    {lang === 'id'
                      ? 'Mengarahkan Visi Jangka Panjang & Ketahanan Operasional'
                      : 'Guiding Long-Term Vision & Operational Resilience'}
                  </h3>

                  <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                    {lang === 'id'
                      ? 'Sebagai pendiri dan pemimpin eksekutif PT Lascramall Commerce Network, pimpinan perseroan bertanggung jawab dalam menetapkan arah strategis komersial, membangun arsitektur sistem niaga digital terpercaya, serta memastikan setiap inisiatif bisnis berjalan selaras dengan standar tata kelola ketat Deswartha Group.'
                      : 'As founder and executive leader of PT Lascramall Commerce Network, leadership is responsible for defining the commercial strategic roadmap, orchestrating trusted digital trade infrastructure, and ensuring every business initiative aligns strictly with Deswartha Group governance benchmarks.'}
                  </p>
                </div>
              </FadeIn>

              {/* Editable Professional Background Placeholder Area */}
              <FadeIn delay={0.15}>
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E0E0E0] shadow-2xs space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#222222] flex items-center gap-1.5">
                      <FileCheck2 className="w-4 h-4 text-[#E54141]" />
                      <span>{lang === 'id' ? 'Latar Belakang & Peran Strategis' : 'Professional Background & Strategic Role'}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F0F0F0] text-[#666666]">
                      EDITABLE AREA
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {LEADERSHIP_DATA.backgroundPlaceholder[lang]}
                  </p>

                  <div className="pt-2 text-[11px] text-[#888888] border-t border-[#F5F5F5]">
                    {lang === 'id'
                      ? 'Catatan Kepatuhan: Informasi kualifikasi dan pengalaman pimpinan ditampilkan secara akurat dan tidak mencantumkan klaim yang belum terverifikasi secara hukum.'
                      : 'Compliance Notice: Leadership qualifications and background details are maintained accurately without unverified claims.'}
                  </div>
                </div>
              </FadeIn>

              {/* Quick Strategic Responsibilities Preview */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#E8E8E8] space-y-1">
                    <span className="text-xs font-bold text-[#222222] block">Arah Strategi & Skala Bisnis</span>
                    <p className="text-[11px] text-[#666666] leading-relaxed">
                      Mengembangkan lima pilar niaga digital menuju ekspansi yang terukur dan berdaya saing tinggi.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F7F7F7] border border-[#E8E8E8] space-y-1">
                    <span className="text-xs font-bold text-[#222222] block">Kepatuhan & Supervisi</span>
                    <p className="text-[11px] text-[#666666] leading-relaxed">
                      Memastikan kepatuhan terhadap regulasi perdagangan Indonesia dan arahan Deswartha Group.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 4. A Message from the Founder */}
        <section className="rounded-3xl bg-[#1A1A1A] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-[#333333] relative overflow-hidden">
          <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#E54141]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full bg-[#E54141]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#333333] pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#E54141] uppercase">
                  <Quote className="w-3.5 h-3.5" />
                  <span>FOUNDER'S STATEMENT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {lang === 'id' ? 'A Message from the Founder' : 'A Message from the Founder'}
                </h3>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-[#2A2A2A] border border-[#444444] text-xs font-semibold text-neutral-300 self-start sm:self-auto">
                Official Corporate Message Area
              </div>
            </div>

            {/* Message Headline & Editable Body */}
            <div className="space-y-6 max-w-4xl">
              <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug border-l-4 border-[#E54141] pl-4 sm:pl-5">
                "{LEADERSHIP_DATA.message[lang].headline}"
              </h4>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {LEADERSHIP_DATA.message[lang].paragraphs.map((para, idx) => (
                  <p key={idx}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Founder Sign-off Block */}
              <div className="pt-6 border-t border-[#333333] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-base sm:text-lg font-extrabold text-white">
                    {LEADERSHIP_DATA.namePlaceholder}
                  </div>
                  <div className="text-xs text-[#E54141] font-semibold">
                    {LEADERSHIP_DATA.title[lang]} · PT Lascramall Commerce Network
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Operating Subsidiary of Deswartha Group
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                    Governance Commitment
                  </span>
                  <span className="text-xs font-mono text-neutral-300">
                    System Jalan · Data Bicara · Risiko Terkendali
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Leadership Philosophy (6 Principles) */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#E54141] uppercase">
              LEADERSHIP PRINCIPLES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id' ? 'Filosofi Kepemimpinan' : 'Leadership Philosophy'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              {lang === 'id'
                ? 'Enam prinsip kepemimpinan yang memandu setiap kebijakan strategis, standar kualitas sistem, dan disiplin tata kelola PT Lascramall Commerce Network.'
                : 'Six core leadership principles steering strategic policymaking, operational discipline, and enterprise governance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEADERSHIP_DATA.principles.map((principle, idx) => {
              const Icon = getPrincipleIcon(principle.iconName);
              return (
                <div
                  key={principle.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#E54141] shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold text-[#888888] uppercase tracking-wider font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-base font-extrabold text-[#222222] leading-snug">
                      {principle.title}
                    </h4>

                    <div className="text-xs font-semibold text-[#666666]">
                      {principle.subtitle[lang]}
                    </div>

                    <p className="text-xs text-[#555555] leading-relaxed">
                      {principle.description[lang]}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F5F5F5] flex items-center justify-between text-[11px] font-semibold text-[#888888]">
                    <span>Executive Standard</span>
                    <span className="text-[#E54141]">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Corporate Direction & Hierarchy Structure */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#E54141] uppercase">
              STRATEGIC ALIGNMENT & CORPORATE DIRECTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id' ? 'Arah Strategis & Posisi Korporasi' : 'Corporate Direction & Governance Hierarchy'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              {lang === 'id'
                ? 'Posisi PT Lascramall Commerce Network sebagai anak perusahaan operasional di bawah naungan Deswartha Group.'
                : 'Clarifying the relationship between parent holding, operating subsidiary, and commercial brand.'}
            </p>
          </div>

          <div className="bg-[#FBFBFB] p-6 sm:p-10 rounded-3xl border border-[#E8E8E8] space-y-6">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Level 1: Parent Organization */}
              <div className="p-5 rounded-2xl bg-white border border-[#E0E0E0] shadow-2xs text-center space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#222222] text-white uppercase tracking-wider inline-block">
                  PARENT HOLDING
                </span>
                <div className="text-lg sm:text-xl font-black text-[#222222]">
                  DESWARTHA GROUP
                </div>
                <p className="text-xs text-[#666666] max-w-md mx-auto">
                  {lang === 'id'
                    ? 'Organisasi korporat induk yang bertanggung jawab atas penentuan arah strategis, pengawasan tata kelola, kendali keuangan, dan infrastruktur sistem sentral.'
                    : 'The parent holding company responsible for strategic direction, governance oversight, financial control, and central system infrastructure.'}
                </p>
              </div>

              {/* Hierarchy Connector */}
              <div className="flex flex-col items-center justify-center text-[#E54141] py-1">
                <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider mb-1">
                  Kepemilikan Saham & Pengawasan Sentral (Operating Subsidiary)
                </span>
                <div className="w-0.5 h-6 bg-[#E54141]" />
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Level 2: Operating Subsidiary */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#E54141] shadow-sm text-center space-y-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#E54141] text-white uppercase tracking-wider inline-block">
                  OPERATING SUBSIDIARY (ANAK PERUSAHAAN)
                </span>
                <div className="text-xl sm:text-2xl font-black text-[#222222]">
                  PT LASCRAMALL COMMERCE NETWORK
                </div>
                <p className="text-xs text-[#555555] max-w-lg mx-auto">
                  {lang === 'id'
                    ? 'Anak perusahaan operasional yang dipimpin langsung oleh pendiri untuk mengembangkan ekosistem e-commerce, pasar daring, agregasi produk digital, aset hiburan game, dan solusi teknologi niaga.'
                    : 'The operating subsidiary led directly by the founder to develop e-commerce ecosystems, marketplaces, digital commodities, interactive entertainment assets, and commercial technologies.'}
                </p>
              </div>

              {/* Hierarchy Connector */}
              <div className="flex flex-col items-center justify-center text-[#222222] py-1">
                <span className="text-[10px] font-bold text-[#888888] uppercase tracking-wider mb-1">
                  Merek Niaga Digital Utama
                </span>
                <div className="w-0.5 h-6 bg-[#222222]" />
                <ArrowRight className="w-4 h-4 rotate-90" />
              </div>

              {/* Level 3: Consumer Brand */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF1F1] to-white border border-[#FFD0D0] text-center space-y-1 shadow-2xs">
                <div className="text-base font-black tracking-wider text-[#E54141]">
                  LASCRAMALL
                </div>
                <p className="text-[11px] text-[#666666]">
                  {lang === 'id'
                    ? 'Merek ekosistem perdagangan digital dan jaringan distribusi komersial.'
                    : 'Flagship commercial brand for the digital commerce ecosystem.'}
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto pt-4 border-t border-[#EAEAEA] text-center text-xs text-[#777777] leading-relaxed">
              <span className="font-semibold text-[#222222]">Hubungan Kelembagaan: </span>
              {lang === 'id'
                ? 'Deswartha Group bertindak sebagai organisasi induk yang menetapkan standar dan pengawasan, sedangkan PT Lascramall Commerce Network merupakan entitas anak perusahaan operasional yang menjalankan kegiatan usaha secara sah dan terdaftar di Republik Indonesia.'
                : 'Deswartha Group acts as the central parent entity setting standards and oversight, while PT Lascramall Commerce Network is the operating subsidiary executing verified commerce operations legally registered in Indonesia.'}
            </div>
          </div>
        </section>

        {/* 7. Leadership Strategic Responsibilities (6 Areas) */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#E54141] uppercase">
              EXECUTIVE PORTFOLIO
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id' ? 'Tanggung Jawab Strategis Kepemimpinan' : 'Strategic Leadership Responsibilities'}
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              {lang === 'id'
                ? 'Enam domain tanggung jawab utama pendiri dalam memimpin pertumbuhan, tata kelola, dan stabilitas perseroan.'
                : 'Six primary strategic responsibility domains entrusted to executive leadership.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEADERSHIP_DATA.responsibilities.map((resp, idx) => (
              <div
                key={resp.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E8E8] shadow-2xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-[#F7F7F7] text-[#222222] font-extrabold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-[#E54141] uppercase tracking-wider">
                      Strategic Domain
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-[#222222] leading-snug">
                    {resp.title}
                  </h4>

                  <div className="text-xs font-semibold text-[#666666]">
                    {resp.subtitle[lang]}
                  </div>

                  <p className="text-xs text-[#555555] leading-relaxed">
                    {resp.description[lang]}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F5F5F5] text-[11px] font-semibold text-[#888888] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E54141]" />
                  <span>Mandat Pimpinan Korporat</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Call to Action & Navigation */}
        <section className="rounded-3xl bg-[#F7F7F7] border border-[#E8E8E8] p-6 sm:p-10 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#222222]">
              {lang === 'id'
                ? 'Inisiasi Komunikasi Resmi dengan Perseroan'
                : 'Initiate Official Communication with the Enterprise'}
            </h4>
            <p className="text-xs sm:text-sm text-[#555555]">
              {lang === 'id'
                ? 'Kirimkan proposal kerja sama bisnis, penjajakan kemitraan strategis, atau pertanyaan resmi kepada tim perwakilan kami.'
                : 'Submit business partnership proposals, strategic inquiries, or corporate communications to our designated corporate desk.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] rounded-xl shadow-xs transition-all cursor-pointer min-h-[44px] touch-manipulation"
            >
              <span>{lang === 'id' ? 'Hubungi Kantor Korporat' : 'Contact Corporate Desk'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('parent')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#222222] bg-white hover:bg-[#F0F0F0] border border-[#CCCCCC] rounded-xl transition-all cursor-pointer min-h-[44px] touch-manipulation"
            >
              <span>{lang === 'id' ? 'Deswartha Group (Parent)' : 'Deswartha Group (Parent)'}</span>
            </button>

            <button
              onClick={() => onNavigate('business')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#444444] hover:text-[#E54141] transition-colors cursor-pointer min-h-[44px] touch-manipulation"
            >
              <span>{lang === 'id' ? 'Lihat Bidang Usaha' : 'View Services & Business'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
