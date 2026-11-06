import React from 'react';
import { NewsArticle, Language } from '../types';
import { X, Calendar, Clock, User, Share2, Check } from 'lucide-react';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
  lang: Language;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, lang }) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#E8E8E8] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E8E8] bg-[#F7F7F7]">
          {/* Zero-pill metadata */}
          <div className="flex items-center gap-2 text-xs text-[#666666]">
            <span className="font-bold uppercase text-[#E54141]">{article.category}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#666666] hover:text-[#222222] hover:bg-[#EAEAEA] rounded-md transition-colors cursor-pointer"
            aria-label="Tutup artikel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-6 max-h-[75vh] overflow-y-auto">
          <h2
            id="article-modal-title"
            className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight leading-tight"
          >
            {article.title[lang]}
          </h2>

          <div className="flex items-center justify-between py-3 border-y border-[#F0F0F0] text-xs text-[#666666]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#E54141]" />
              <span>{article.author}</span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-[#E54141] hover:text-[#D13030] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">Tautan Tersalin</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Salin Tautan' : 'Copy Link'}</span>
                </>
              )}
            </button>
          </div>

          {/* Lead Summary */}
          <div className="p-4 rounded-xl bg-[#FFF1F1] border-l-4 border-[#E54141] text-sm text-[#333333] font-medium leading-relaxed">
            {article.summary[lang]}
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#444444] leading-relaxed">
            {article.content[lang].map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-[#F0F0F0] text-xs text-[#888888]">
            <p>
              {lang === 'id'
                ? 'Rilis resmi diterbitkan oleh Tim Komunikasi Korporat PT Lascramall Ecommerce Network untuk tujuan informasi publik.'
                : 'Official news release published by the Corporate Communications Team of PT Lascramall Ecommerce Network for informational purposes.'}
            </p>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-4 bg-[#F7F7F7] border-t border-[#E8E8E8] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#E54141] hover:bg-[#D13030] rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'id' ? 'Selesai Membaca' : 'Close Article'}
          </button>
        </div>
      </div>
    </div>
  );
};
