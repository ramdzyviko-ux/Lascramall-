import React, { useState, useEffect } from 'react';
import { NavSection, Language } from '../types';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Globe, ArrowRight, Phone, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling on Android
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks: { id: NavSection; label: { id: string; en: string } }[] = [
    { id: 'home', label: { id: 'Home', en: 'Home' } },
    { id: 'about', label: { id: 'About Us', en: 'About Us' } },
    { id: 'business', label: { id: 'Services', en: 'Services' } },
    { id: 'parent', label: { id: 'Parent Company', en: 'Parent Company' } },
    { id: 'leadership', label: { id: 'Leadership', en: 'Leadership' } },
    { id: 'contact', label: { id: 'Contact', en: 'Contact' } },
  ];

  const handleLinkClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E8E8E8] py-2.5 sm:py-3.5'
            : 'bg-white border-b border-[#EFEFEF] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-8">
            {/* Zone 1: Brand Wordmark / Emblem */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center focus:outline-hidden text-left cursor-pointer whitespace-nowrap shrink-0 min-h-[44px]"
              aria-label="PT Lascramall Commerce Network Home"
            >
              <BrandLogo variant="header" showSubtitle={false} />
            </button>

            {/* Zone 2: Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#444444]"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px] flex items-center ${
                      isActive
                        ? 'text-[#E54141] font-semibold'
                        : 'hover:text-[#E54141] text-[#444444]'
                    }`}
                  >
                    {link.label[lang]}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E54141] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Desktop Actions (Language Toggle + Primary CTA) */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#666666] hover:text-[#222222] bg-[#F7F7F7] hover:bg-[#EFEFEF] rounded-lg transition-colors cursor-pointer min-h-[40px]"
                title="Ganti Bahasa / Switch Language"
                aria-label="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#E54141]" />
                <span className="uppercase font-semibold tracking-wide">
                  {lang === 'id' ? 'ID' : 'EN'}
                </span>
                <span className="text-neutral-400">|</span>
                <span className="text-[#888888]">{lang === 'id' ? 'EN' : 'ID'}</span>
              </button>

              <button
                onClick={() => handleLinkClick('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#E54141] hover:bg-[#D13030] rounded-lg shadow-xs hover:shadow-sm transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 min-h-[40px]"
              >
                <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Controls: Language & Ergonomic Hamburger (44px touch target) */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <button
                onClick={onToggleLang}
                className="flex items-center gap-1 px-2.5 py-2 text-xs font-bold text-[#444444] bg-[#F7F7F7] active:bg-[#ECECEC] rounded-lg cursor-pointer min-h-[42px] touch-manipulation"
                aria-label="Ganti Bahasa"
              >
                <Globe className="w-3.5 h-3.5 text-[#E54141]" />
                <span className="uppercase font-bold">{lang}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-11 h-11 text-[#222222] active:bg-[#F0F0F0] rounded-xl focus:outline-hidden cursor-pointer touch-manipulation"
                aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#E54141]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Android Optimized Mobile Navigation Drawer with Smooth Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/45 backdrop-blur-xs"
            />

            {/* Slide Down Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative top-15 sm:top-18 bg-white border-b border-[#E0E0E0] shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto px-4 pt-3 pb-6 flex flex-col justify-between"
            >
              {/* Navigation list */}
              <nav aria-label="Mobile Navigation" className="space-y-1.5">
                <div className="text-[10px] font-bold tracking-wider uppercase text-[#888888] px-3 py-1">
                  {lang === 'id' ? 'Navigasi Menu' : 'Navigation Menu'}
                </div>

                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-left text-sm font-semibold rounded-xl transition-all cursor-pointer min-h-[48px] touch-manipulation ${
                        isActive
                          ? 'bg-[#FFF1F1] text-[#E54141] font-bold shadow-2xs border-l-3 border-[#E54141]'
                          : 'text-[#333333] hover:bg-[#F7F7F7] active:bg-[#EFEFEF]'
                      }`}
                    >
                      <span>{link.label[lang]}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-[#E54141]" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#AAAAAA]" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Bottom Drawer Actions */}
              <div className="mt-5 pt-4 border-t border-[#EFEFEF] space-y-3">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-white bg-[#E54141] active:bg-[#D13030] rounded-xl shadow-xs cursor-pointer min-h-[48px] touch-manipulation"
                >
                  <span>{lang === 'id' ? 'Hubungi Kantor Korporat' : 'Contact Corporate Desk'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Quick Phone Call Button for Android Users */}
                <a
                  href="tel:+628151852500"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#444444] bg-[#F7F7F7] active:bg-[#EAEAEA] border border-[#E0E0E0] rounded-xl transition-colors cursor-pointer min-h-[42px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E54141]" />
                  <span>Hotline: +62 815 1852 500</span>
                </a>

                <div className="text-[10px] text-center text-[#888888] pt-1">
                  PT Lascramall Commerce Network · Jakarta Timur
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
