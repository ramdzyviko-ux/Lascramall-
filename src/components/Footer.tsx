import React from 'react';
import { NavSection, Language } from '../types';
import { BrandLogo } from './BrandLogo';
import { COMPANY_DETAILS } from '../utils/corporateData';
import { Mail, Phone, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const currentYear = 2026;

  const navLinks: { id: NavSection; label: { id: string; en: string } }[] = [
    { id: 'home', label: { id: 'Home', en: 'Home' } },
    { id: 'about', label: { id: 'Tentang Perusahaan', en: 'About Us' } },
    { id: 'business', label: { id: 'Layanan & Bidang Usaha', en: 'Services' } },
    { id: 'parent', label: { id: 'Parent Company (Deswartha)', en: 'Parent Company' } },
    { id: 'leadership', label: { id: 'Kepemimpinan & Pendiri', en: 'Leadership' } },
    { id: 'values', label: { id: 'Nilai & Budaya', en: 'Our Values' } },
    { id: 'contact', label: { id: 'Hubungi Kami', en: 'Contact Us' } },
  ];

  const businessPillars = [
    'Ecommerce & Digital Commerce',
    'Online Marketplace',
    'Digital Products & Services',
    'Gaming Digital Assets',
    'Technology & Digital Business Development',
  ];

  return (
    <footer className="bg-white text-[#222222] border-t border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-[#EFEFEF]">
          {/* Col 1: Legal Identity & Brand */}
          <div className="lg:col-span-4 space-y-3.5">
            <BrandLogo variant="footer" showSubtitle={true} />

            <p className="text-xs text-[#555555] leading-relaxed max-w-sm">
              {lang === 'id'
                ? 'PT Lascramall Commerce Network adalah perseroan terbatas yang bergerak dalam pengembangan ekosistem ecommerce, perdagangan digital, agregasi aset digital, dan inovasi teknologi niaga terintegrasi.'
                : 'PT Lascramall Commerce Network is a limited liability enterprise dedicated to advancing ecommerce ecosystems, digital trade, digital asset aggregation, and commercial software innovation.'}
            </p>

            {/* Corporate Affiliation to Deswartha Group */}
            <div className="p-3 rounded-xl bg-[#F7F7F7] border border-[#E8E8E8] max-w-sm">
              <span className="text-[11px] text-[#666666] block leading-relaxed">
                {lang === 'id' ? (
                  <>
                    PT Lascramall Commerce Network adalah bagian dari{' '}
                    <button
                      onClick={() => {
                        onNavigate('parent');
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="font-bold text-[#E54141] hover:underline cursor-pointer inline-flex items-center gap-0.5"
                    >
                      Deswartha Group
                      <ChevronRight className="w-3 h-3 inline" />
                    </button>
                  </>
                ) : (
                  <>
                    PT Lascramall Commerce Network is part of{' '}
                    <button
                      onClick={() => {
                        onNavigate('parent');
                        window.scrollTo({ top: 0, behavior: 'instant' });
                      }}
                      className="font-bold text-[#E54141] hover:underline cursor-pointer inline-flex items-center gap-0.5"
                    >
                      Deswartha Group
                      <ChevronRight className="w-3 h-3 inline" />
                    </button>
                  </>
                )}
              </span>
            </div>

            <div className="pt-1">
              <span className="text-[11px] font-semibold text-[#888888] block">
                {lang === 'id' ? 'Entitas Hukum Resmi Terdaftar:' : 'Registered Corporate Entity:'}
              </span>
              <span className="text-xs font-bold text-[#222222]">
                {COMPANY_DETAILS.legalName}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Ergonomic 40px touch height for mobile) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E54141]">
              {lang === 'id' ? 'Navigasi' : 'Navigation'}
            </h4>
            <ul className="space-y-1 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }}
                    className="w-full text-[#555555] hover:text-[#E54141] active:text-[#D13030] transition-colors cursor-pointer text-left py-1.5 min-h-[38px] flex items-center justify-between group touch-manipulation"
                  >
                    <span>{link.label[lang]}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-[#E54141] sm:hidden" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Business Pillars */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E54141]">
              {lang === 'id' ? 'Pilar Usaha' : 'Business Pillars'}
            </h4>
            <ul className="space-y-2 text-xs text-[#555555]">
              {businessPillars.map((pillar, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E54141] shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{pillar}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Contact Details (Direct touchable links on Android) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E54141]">
              {lang === 'id' ? 'Kantor Pusat & Kontak' : 'Headquarters'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#555555]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E54141] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_DETAILS.headquarters.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E54141] shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.headquarters.phone}`}
                  className="hover:text-[#E54141] active:text-[#D13030] transition-colors py-1 min-h-[36px] flex items-center"
                >
                  {COMPANY_DETAILS.headquarters.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E54141] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.headquarters.emailCorporate}`}
                  className="hover:text-[#E54141] active:text-[#D13030] transition-colors py-1 min-h-[36px] flex items-center break-all"
                >
                  {COMPANY_DETAILS.headquarters.emailCorporate}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Corporate Disclaimer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#777777] text-center sm:text-left">
          <div className="text-[11px] sm:text-xs">
            Copyright © {currentYear} PT Lascramall Commerce Network. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#888888]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E54141] shrink-0" />
            <span>
              {lang === 'id'
                ? 'Website resmi profil korporasi. Tidak melayani transaksi ritel langsung.'
                : 'Official corporate website. Does not engage in retail consumer transactions.'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
