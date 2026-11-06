import React from 'react';
import { NavSection, Language } from '../types';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_DETAILS } from '../utils/corporateData';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/MotionWrappers';
import { Target, Compass, BookOpen, CheckCircle, FileText, ArrowRight, Building2, MapPin } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, lang }) => {
  const headquartersImage = '/src/assets/images/company_headquarters_1793935841998.jpg';

  const missionPoints = [
    {
      id: 'm1',
      text: {
        id: 'Mengembangkan infrastruktur perdagangan digital yang terintegrasi, andal, dan mematuhi regulasi perundang-undangan.',
        en: 'Developing integrated, resilient digital commerce infrastructure compliant with national and international statutory standards.'
      }
    },
    {
      id: 'm2',
      text: {
        id: 'Memperluas akses pasar bagi mitra bisnis hulu dan hilir melalui kanal distribusi digital modern berdaya jangkau luas.',
        en: 'Expanding market access for upstream and downstream business partners through modern high-reach digital distribution pipelines.'
      }
    },
    {
      id: 'm3',
      text: {
        id: 'Menyediakan saluran terpercaya untuk distribusi produk digital esensial, voucher resmi, dan aset hiburan interaktif (gaming).',
        en: 'Providing authenticated channels for essential digital commodities, licensed digital vouchers, and interactive gaming entertainment assets.'
      }
    },
    {
      id: 'm4',
      text: {
        id: 'Mendorong inovasi teknologi berkelanjutan melalui rekayasa perangkat lunak proprietary dan tata kelola korporasi yang bersih.',
        en: 'Fostering sustained technological innovation through proprietary software engineering and transparent corporate governance.'
      }
    }
  ];

  const philosophyItems = [
    {
      title: lang === 'id' ? 'Tata Kelola Berkelanjutan' : 'Sustainable Governance',
      desc: lang === 'id'
        ? 'Pertumbuhan bisnis harus didasari oleh kepatuhan regulasi, transparansi operasional, dan manajemen risiko yang matang.'
        : 'Business growth must be anchored in regulatory compliance, operational transparency, and rigorous risk mitigation.',
      icon: CheckCircle
    },
    {
      title: lang === 'id' ? 'Kemitraan Bernilai Tambah' : 'Value-Adding Partnership',
      desc: lang === 'id'
        ? 'Kami memandang mitra dagang bukan hanya sebagai pengguna sistem, melainkan kolaborator strategis dalam merajut jaringan ekonomi.'
        : 'We treat commercial partners not merely as platform users, but as strategic collaborators in weaving an economic network.',
      icon: Compass
    },
    {
      title: lang === 'id' ? 'Keunggulan Rekayasa Sistem' : 'Engineering Rigor',
      desc: lang === 'id'
        ? 'Arsitektur perangkat lunak yang kokoh dan latensi rendah adalah kunci menciptakan rasa aman dalam transaksi komersial digital.'
        : 'Resilient software architecture and low-latency execution are foundational to inspiring security in digital transactions.',
      icon: Target
    }
  ];

  return (
    <PageTransition className="bg-white">
      {/* 1. Page Header */}
      <PageHeader
        currentSection="about"
        title={lang === 'id' ? 'Profil & Latar Belakang Perusahaan' : 'Company Profile & Background'}
        subtitle={
          lang === 'id'
            ? 'Mengenal lebih dekat visi, misi, rekam jejak, dan filosofi PT Lascramall Commerce Network sebagai pengembang ekosistem perdagangan digital terpercaya.'
            : 'Explore the vision, mission, corporate track record, and philosophy of PT Lascramall Commerce Network architecting digital commerce.'
        }
        badge="CORPORATE OVERVIEW"
        onNavigate={onNavigate}
        lang={lang}
      />

      {/* 2. Main Body Content (Mobile-First) */}
      <div className="py-10 sm:py-16 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
          {/* Company Overview & Background Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Narrative Card */}
            <FadeIn delay={0.05} className="lg:col-span-7 bg-white p-5 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs flex flex-col justify-between">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-wide uppercase text-[#E54141]">
                  <BookOpen className="w-4 h-4" />
                  <span>{lang === 'id' ? 'Company Overview & Background' : 'Company Overview & Background'}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight leading-snug">
                  PT Lascramall Commerce Network
                </h2>

                <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed">
                  <p>
                    {lang === 'id'
                      ? 'PT Lascramall Commerce Network didirikan sebagai entitas perseroan terbatas di Indonesia dengan fokus strategis pada ekosistem perdagangan digital, teknologi informasi komersial, agregasi produk digital, serta pengembangan solusi bisnis niaga modern.'
                      : 'PT Lascramall Commerce Network was established as an Indonesian limited liability enterprise strategically focused on digital commerce ecosystems, commercial information technology, digital product aggregation, and modern business solution engineering.'}
                  </p>
                  <p>
                    {lang === 'id'
                      ? 'Dengan mengusung merek utama LASCRAMALL, perusahaan hadir untuk menjembatani kesenjangan antara prinsipal produk fisik maupun digital dengan pasar yang kian dinamis. Kami tidak semata-mata mengembangkan platform, melainkan membangun infrastruktur jaringan perdagangan yang mengedepankan keamanan transaksi, keterlacakan data, dan efisiensi rantai pasok.'
                      : 'Through our flagship brand LASCRAMALL, the company bridges the gap between physical and digital product principals and dynamic consumer markets. We do not merely operate platforms; we engineer commercial network backbones prioritizing security, traceability, and supply chain efficiency.'}
                  </p>
                  <p>
                    {lang === 'id'
                      ? 'Dalam perjalanannya, PT Lascramall Commerce Network senantiasa berpedoman pada prinsip kehati-hatian, kepatuhan terhadap regulasi nasional Republik Indonesia, serta dedikasi untuk membangun nilai jangka panjang bagi seluruh pemangku kepentingan.'
                      : 'In its trajectory, PT Lascramall Commerce Network adheres strictly to prudential standards, regulatory compliance under the jurisdiction of the Republic of Indonesia, and enduring value creation for all stakeholders.'}
                  </p>
                </div>
              </div>

              {/* Quick Profile Meta */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#EFEFEF] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-[#888888] block text-[11px] mb-0.5">Entitas Legal</span>
                  <span className="font-semibold text-[#222222] text-xs sm:text-sm">{COMPANY_DETAILS.legalName}</span>
                </div>
                <div>
                  <span className="text-[#888888] block text-[11px] mb-0.5">Brand Utama</span>
                  <span className="font-semibold text-[#E54141] text-xs sm:text-sm">{COMPANY_DETAILS.brandName}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[#888888] block text-[11px] mb-0.5">Yurisdiksi</span>
                  <span className="font-semibold text-[#222222] text-xs sm:text-sm">{COMPANY_DETAILS.registeredEntity.jurisdiction}</span>
                </div>
              </div>
            </FadeIn>

            {/* Right: Architecture Photo Showcase & Legal Profile */}
            <FadeIn delay={0.1} className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-xs bg-white min-h-[220px] sm:min-h-[260px] flex-1">
                <img
                  src={headquartersImage}
                  alt="Corporate Headquarters Tower"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4 sm:p-6">
                  <div className="text-white">
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/80">
                      {lang === 'id' ? 'Sentra Operasional' : 'Operations Base'}
                    </div>
                    <div className="text-sm sm:text-base font-bold">Cakung Timur, Jakarta Timur, Indonesia</div>
                    <div className="text-[11px] text-white/80 mt-0.5 leading-snug">
                      {COMPANY_DETAILS.headquarters.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Summary Box */}
              <div className="bg-white p-4.5 sm:p-6 rounded-2xl border border-[#E8E8E8] shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#222222] mb-3">
                  <FileText className="w-4 h-4 text-[#E54141]" />
                  <span>{lang === 'id' ? 'Company Profile Sheet' : 'Company Profile Sheet'}</span>
                </div>
                <ul className="space-y-2 text-xs text-[#555555]">
                  <li className="flex justify-between py-1 border-b border-[#F0F0F0]">
                    <span className="text-[#888888]">{lang === 'id' ? 'Sektor Industri' : 'Industry Sector'}</span>
                    <span className="font-medium text-[#222222] text-right">Perdagangan Digital & Teknologi</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-[#F0F0F0]">
                    <span className="text-[#888888]">{lang === 'id' ? 'Kategori Layanan' : 'Service Models'}</span>
                    <span className="font-medium text-[#222222]">B2B & Digital Distribution</span>
                  </li>
                  <li className="flex justify-between py-1 border-b border-[#F0F0F0]">
                    <span className="text-[#888888]">{lang === 'id' ? 'Kontak Korporat' : 'Corporate Desk'}</span>
                    <a href={`mailto:${COMPANY_DETAILS.headquarters.emailCorporate}`} className="font-medium text-[#E54141] hover:underline">
                      {COMPANY_DETAILS.headquarters.emailCorporate}
                    </a>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Vision */}
            <FadeIn delay={0.15} className="bg-white p-5 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-lg sm:text-2xl font-extrabold text-[#222222] tracking-tight mb-3 sm:mb-4">
                  {lang === 'id' ? 'Visi Perusahaan' : 'Corporate Vision'}
                </h3>

                <p className="text-sm sm:text-lg text-[#333333] font-medium leading-relaxed">
                  {lang === 'id'
                    ? '"Menjadi salah satu perusahaan ekosistem ecommerce dan teknologi perdagangan digital terkemuka di Indonesia yang diakui atas keandalan infrastruktur, integritas tata kelola, dan kontribusinya dalam memperkuat pertumbuhan ekonomi digital nasional."'
                    : '"To emerge as a premier ecommerce and digital commerce technology ecosystem enterprise in Indonesia, recognized for infrastructural resilience, governance integrity, and transformative contributions to national digital economic growth."'}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[#F0F0F0] text-[11px] sm:text-xs text-[#888888]">
                {lang === 'id' ? 'Orientasi Strategis Jangka Panjang Perseroan' : 'Long-Term Strategic Orientation of the Enterprise'}
              </div>
            </FadeIn>

            {/* Mission */}
            <FadeIn delay={0.2} className="bg-white p-5 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center mb-4 sm:mb-6">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold text-[#222222] tracking-tight mb-3 sm:mb-4">
                {lang === 'id' ? 'Misi Perusahaan' : 'Corporate Mission'}
              </h3>

              <div className="space-y-3">
                {missionPoints.map((item, idx) => (
                  <div key={item.id} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FFF1F1] text-[#E54141] text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {item.text[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Corporate Philosophy */}
          <FadeIn delay={0.15}>
            <div className="bg-white p-5 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs">
              <div className="max-w-2xl mb-6 sm:mb-8">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141] mb-1">
                  {lang === 'id' ? 'FALSAFAH & NILAI DASAR' : 'CORPORATE PHILOSOPHY'}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight">
                  {lang === 'id' ? 'Filosofi Korporasi LASCRAMALL' : 'LASCRAMALL Corporate Philosophy'}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] mt-1.5 leading-relaxed">
                  {lang === 'id'
                    ? 'Prinsip panduan yang membentuk setiap kebijakan, interaksi kemitraan, dan perancangan solusi teknologi kami.'
                    : 'Guiding principles shaping every corporate policy, partnership dynamic, and engineering initiative.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {philosophyItems.map((phil, idx) => {
                  const Icon = phil.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4.5 sm:p-6 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-[#E54141] mb-2 sm:mb-3">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <h4 className="text-sm sm:text-base font-bold text-[#222222]">{phil.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                          {phil.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Page Bottom Next Steps Navigation (Mobile Friendly) */}
          <FadeIn delay={0.2}>
            <div className="p-5 sm:p-8 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#222222]">
                  {lang === 'id' ? 'Langkah Selanjutnya' : 'Next Steps'}
                </h4>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                  {lang === 'id'
                    ? 'Jelajahi portofolio bidang usaha kami atau inisiasi komunikasi resmi bersama tim perwakilan kami.'
                    : 'Explore our business units or start a conversation with our business development desk.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
                <button
                  onClick={() => onNavigate('business')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl sm:rounded-lg transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                >
                  <span>{lang === 'id' ? 'Lihat Bidang Usaha' : 'View Business Units'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#222222] hover:text-[#E54141] bg-[#F7F7F7] hover:bg-[#EFEFEF] active:bg-[#ECECEC] border border-[#E0E0E0] rounded-xl sm:rounded-lg transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                >
                  <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  );
};
