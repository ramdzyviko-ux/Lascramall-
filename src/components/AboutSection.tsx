import React from 'react';
import { Language } from '../types';
import { COMPANY_DETAILS } from '../utils/corporateData';
import { Target, Compass, BookOpen, Building, CheckCircle, FileText } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
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
    <section id="about" className="py-20 lg:py-28 bg-[#F7F7F7] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E54141] mb-2">
            <span>ABOUT US</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span className="text-[#666666] font-medium">TENTANG PERUSAHAAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
            {lang === 'id'
              ? 'Membangun Arsitektur Perdagangan Digital Masa Depan'
              : 'Architecting the Future of Digital Commerce'}
          </h2>
          <p className="mt-3 text-base text-[#666666] leading-relaxed">
            {lang === 'id'
              ? 'Mengenal lebih dekat visi, latar belakang, dan fondasi korporasi PT Lascramall Commerce Network sebagai motor penggerak ekosistem niaga digital nasional.'
              : 'Discover the vision, background, and corporate foundations of PT Lascramall Commerce Network driving national digital commerce.'}
          </p>
        </div>

        {/* Company Overview & Background Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 text-xs font-bold tracking-wide uppercase text-[#E54141]">
                <BookOpen className="w-4 h-4" />
                <span>{lang === 'id' ? 'Company Overview & Background' : 'Company Overview & Background'}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#222222] tracking-tight">
                PT Lascramall Commerce Network
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed">
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
            <div className="mt-8 pt-6 border-t border-[#EFEFEF] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-[#888888] block mb-1">Entitas Legal</span>
                <span className="font-semibold text-[#222222]">{COMPANY_DETAILS.legalName}</span>
              </div>
              <div>
                <span className="text-[#888888] block mb-1">Brand Utama</span>
                <span className="font-semibold text-[#E54141]">{COMPANY_DETAILS.brandName}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#888888] block mb-1">Yurisdiksi</span>
                <span className="font-semibold text-[#222222]">{COMPANY_DETAILS.registeredEntity.jurisdiction}</span>
              </div>
            </div>
          </div>

          {/* Right: Architecture Photo Showcase & Legal Profile */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#E8E8E8] shadow-xs bg-white flex-1 min-h-[260px]">
              <img
                src={headquartersImage}
                alt="Aurora Corporate Headquarters Tower"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/80">
                    {lang === 'id' ? 'Sentra Operasional' : 'Operations Base'}
                  </div>
                  <div className="text-base font-bold">Cakung Timur, Jakarta Timur, Indonesia</div>
                  <div className="text-xs text-white/70 mt-1">
                    {COMPANY_DETAILS.headquarters.address}
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Summary Box */}
            <div className="bg-white p-6 rounded-2xl border border-[#E8E8E8] shadow-xs">
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
                  <span className="font-medium text-[#E54141]">{COMPANY_DETAILS.headquarters.emailCorporate}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight mb-4">
              {lang === 'id' ? 'Visi Perusahaan' : 'Corporate Vision'}
            </h3>

            <p className="text-base sm:text-lg text-[#333333] font-medium leading-relaxed">
              {lang === 'id'
                ? '"Menjadi salah satu perusahaan ekosistem ecommerce dan teknologi perdagangan digital terkemuka di Indonesia yang diakui atas keandalan infrastruktur, integritas tata kelola, dan kontribusinya dalam memperkuat pertumbuhan ekonomi digital nasional."'
                : '"To emerge as a premier ecommerce and digital commerce technology ecosystem enterprise in Indonesia, recognized for infrastructural resilience, governance integrity, and transformative contributions to national digital economic growth."'}
            </p>

            <div className="mt-6 pt-4 border-t border-[#F0F0F0] text-xs text-[#888888]">
              {lang === 'id' ? 'Orientasi Strategis Jangka Panjang Perseroan' : 'Long-Term Strategic Orientation of the Enterprise'}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight mb-4">
              {lang === 'id' ? 'Misi Perusahaan' : 'Corporate Mission'}
            </h3>

            <div className="space-y-3.5">
              {missionPoints.map((item, idx) => (
                <div key={item.id} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FFF1F1] text-[#E54141] text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {item.text[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Philosophy */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E8E8] shadow-xs">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E54141] mb-1">
              {lang === 'id' ? 'FALSAFAH & NILAI DASAR' : 'CORPORATE PHILOSOPHY'}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight">
              {lang === 'id' ? 'Filosofi Korporasi LASCRAMALL' : 'LASCRAMALL Corporate Philosophy'}
            </h3>
            <p className="text-sm text-[#666666] mt-2">
              {lang === 'id'
                ? 'Prinsip panduan yang membentuk setiap kebijakan, interaksi kemitraan, dan perancangan solusi teknologi kami.'
                : 'Guiding principles shaping every corporate policy, partnership dynamic, and engineering initiative.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyItems.map((phil, idx) => {
              const Icon = phil.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#E54141] mb-3">
                      <Icon className="w-5 h-5" />
                      <h4 className="text-base font-bold text-[#222222]">{phil.title}</h4>
                    </div>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {phil.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
