import React from 'react';
import { Language } from '../types';
import { CORPORATE_VALUES } from '../utils/corporateData';
import {
  Lightbulb,
  ShieldCheck,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ValuesSectionProps {
  lang: Language;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ lang }) => {
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
    <section id="values" className="py-20 lg:py-28 bg-[#F7F7F7] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E54141] mb-2">
            <span>OUR VALUES</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span className="text-[#666666] font-medium">PRINSIP & BUDAYA KORPORASI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
            {lang === 'id'
              ? 'Enam Nilai Fundamental Penggerak Integritas'
              : 'Six Foundational Values Driving Corporate Integrity'}
          </h2>
          <p className="mt-3 text-base text-[#666666] leading-relaxed">
            {lang === 'id'
              ? 'Prinsip kerja dan komitmen etika yang menjadi pedoman operasional seluruh jajaran PT Lascramall Commerce Network dalam melayani mitra dan pasar.'
              : 'The core tenets and ethical commitments guiding every operational endeavor at PT Lascramall Commerce Network.'}
          </p>
        </div>

        {/* 6 Values Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORPORATE_VALUES.map((val, idx) => {
            const Icon = getIcon(val.iconName);
            const valueNumber = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={val.id}
                className="p-8 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF1F1] text-[#E54141] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#888888] tabular-nums">
                      {valueNumber}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#222222] tracking-tight">
                    {val.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#E54141] mt-0.5 mb-3">
                    {val.subtitle[lang]}
                  </div>

                  <p className="text-sm text-[#555555] leading-relaxed">
                    {val.description[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F0F0F0] space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#999999]">
                    {lang === 'id' ? 'Komitmen Pelaksanaan' : 'Implementation Tenet'}
                  </div>
                  {val.principles[lang].map((p, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E54141] shrink-0 mt-1.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Statement Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-[#E8E8E8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFF1F1] text-[#E54141] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#222222]">
                {lang === 'id' ? 'Kepatuhan Regulasi & Standar Industri' : 'Regulatory Rigor & Statutory Compliance'}
              </h4>
              <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
                {lang === 'id'
                  ? 'Seluruh kegiatan bisnis dijalankan sesuai kerangka hukum perdagangan dan sistem elektronik Republik Indonesia.'
                  : 'All commercial operations adhere strictly to the electronic trade and systems statutory frameworks of Indonesia.'}
              </p>
            </div>
          </div>
          <div className="shrink-0 text-xs font-semibold text-[#E54141] uppercase tracking-wider border border-[#E54141]/30 bg-[#FFF1F1] px-4 py-2 rounded-lg">
            ISO / GCG ALIGNED
          </div>
        </div>
      </div>
    </section>
  );
};
