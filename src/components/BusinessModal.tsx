import React, { useEffect } from 'react';
import { BusinessPillar, Language } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BusinessModalProps {
  pillar: BusinessPillar | null;
  onClose: () => void;
  lang: Language;
  onInquire: (pillarTitle: string) => void;
}

export const BusinessModal: React.FC<BusinessModalProps> = ({
  pillar,
  onClose,
  lang,
  onInquire,
}) => {
  // Lock body scroll on mobile when modal is active
  useEffect(() => {
    if (pillar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [pillar]);

  if (!pillar) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="business-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
    >
      {/* Backdrop tap to close */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl border border-[#E8E8E8] max-h-[92vh] sm:max-h-[85vh] flex flex-col overflow-hidden z-10"
      >
        {/* Mobile Pull Indicator Bar */}
        <div className="w-12 h-1.5 bg-[#DDDDDD] rounded-full mx-auto mt-2 sm:hidden shrink-0" />

        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-[#E8E8E8] bg-[#F7F7F7] shrink-0">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E54141] truncate mr-2">
            <Compass className="w-4 h-4 shrink-0" />
            <span className="truncate">BIDANG USAHA KORPORASI · LASCRAMALL</span>
          </div>

          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 text-[#666666] active:text-[#222222] active:bg-[#EAEAEA] rounded-xl transition-colors cursor-pointer shrink-0"
            aria-label="Tutup rincian bidang usaha"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-5 overflow-y-auto flex-1">
          {pillar.image && (
            <div className="aspect-16/9 sm:aspect-16/8 w-full rounded-xl overflow-hidden border border-[#E8E8E8] bg-[#F7F7F7]">
              <img
                src={pillar.image}
                alt={pillar.title[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div>
            <h3
              id="business-modal-title"
              className="text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight leading-tight"
            >
              {pillar.title[lang]}
            </h3>
            <p className="mt-2.5 text-sm sm:text-base text-[#555555] leading-relaxed">
              {pillar.fullDesc[lang]}
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#F7F7F7] border border-[#EAEAEA] space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#222222] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E54141]" />
              <span>{lang === 'id' ? 'Kapabilitas & Standar Layanan' : 'Key Capabilities & Service Standards'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {pillar.keyCapabilities[lang].map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#444444] leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E54141] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Focus */}
          <div className="border-l-3 border-[#E54141] pl-3.5 py-0.5 bg-[#FFF8F8] p-3 rounded-r-xl">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#E54141] mb-1">
              {lang === 'id' ? 'Fokus Strategis' : 'Strategic Focus'}
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#222222] leading-relaxed">
              {pillar.strategicFocus[lang]}
            </p>
          </div>
        </div>

        {/* Modal Actions (Sticky bottom bar with ergonomic touch targets) */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#F7F7F7] border-t border-[#E8E8E8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
          <div className="text-[11px] text-[#777777] hidden sm:block">
            {lang === 'id' ? 'Tertarik bermitra dalam pilar ini?' : 'Interested in partnering in this vertical?'}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-3 sm:py-2.5 text-xs font-semibold text-[#555555] active:text-[#222222] active:bg-[#EAEAEA] rounded-xl cursor-pointer min-h-[44px] text-center"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>
            <button
              onClick={() => {
                onInquire(pillar.title[lang]);
                onClose();
              }}
              className="flex-2 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 text-xs font-semibold text-white bg-[#E54141] hover:bg-[#D13030] active:bg-[#B72424] rounded-xl transition-colors cursor-pointer min-h-[44px] touch-manipulation"
            >
              <span>{lang === 'id' ? 'Ajukan Kemitraan' : 'Initiate Partnership'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
