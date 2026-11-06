import React, { useState, useMemo } from 'react';
import { NewsArticle, Language } from '../types';
import { CORPORATE_ARTICLES, filterNewsArticles } from '../utils/corporateData';
import { ArticleModal } from './ArticleModal';
import { Search, Calendar, Clock, ArrowRight, Newspaper, ChevronRight } from 'lucide-react';

interface NewsSectionProps {
  lang: Language;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Corporate', 'Technology', 'Partnership'];

  const filteredArticles = useMemo(() => {
    return filterNewsArticles(CORPORATE_ARTICLES, selectedCategory, searchQuery, lang);
  }, [selectedCategory, searchQuery, lang]);

  return (
    <section id="news" className="py-20 lg:py-28 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E54141] mb-2">
            <span>NEWS & UPDATES</span>
            <span aria-hidden="true" className="text-neutral-300">/</span>
            <span className="text-[#666666] font-medium">SIARAN PERS & PERKEMBANGAN KORPORASI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
            {lang === 'id'
              ? 'Warta Terkini & Langkah Strategis Perusahaan'
              : 'Latest Announcements & Strategic Corporate Milestones'}
          </h2>
          <p className="mt-3 text-base text-[#666666] leading-relaxed">
            {lang === 'id'
              ? 'Pusat informasi publik mengenai perkembangan teknologi, penguatan infrastruktur, kemitraan, dan tata kelola PT Lascramall Ecommerce Network.'
              : 'Public disclosure hub for technological developments, infrastructure advancements, alliances, and governance.'}
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E8E8]">
          {/* Category Tabs (Interactive Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F7F7F7] rounded-xl border border-[#EAEAEA] overflow-x-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#E54141] font-semibold shadow-xs'
                      : 'text-[#555555] hover:text-[#222222]'
                  }`}
                >
                  {cat === 'All' ? (lang === 'id' ? 'Semua Berita' : 'All Updates') : cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'id' ? 'Cari warta / pengumuman...' : 'Search releases...'}
              className="w-full pl-9 pr-3 py-2 text-xs text-[#222222] bg-[#F7F7F7] border border-[#E0E0E0] rounded-xl focus:outline-hidden focus:border-[#E54141] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Articles List / Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-[#F7F7F7] rounded-2xl border border-[#E8E8E8]">
            <Newspaper className="w-10 h-10 text-[#AAAAAA] mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#222222]">
              {lang === 'id' ? 'Tidak ada berita yang sesuai' : 'No articles match your query'}
            </h3>
            <p className="text-xs text-[#666666] mt-1">
              {lang === 'id' ? 'Coba ubah kata kunci atau pilih kategori lain.' : 'Try adjusting your search criteria.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => {
              return (
                <article
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="group p-8 rounded-2xl bg-white border border-[#E8E8E8] hover:border-[#E54141]/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Unboxed Zero-pill metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#666666] mb-4">
                      <span className="font-bold text-[#E54141] uppercase">{article.category}</span>
                      <span aria-hidden="true" className="text-neutral-300">·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </span>
                      <span aria-hidden="true" className="text-neutral-300">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#222222] tracking-tight group-hover:text-[#E54141] transition-colors line-clamp-2">
                      {article.title[lang]}
                    </h3>

                    <p className="mt-3 text-sm text-[#555555] leading-relaxed line-clamp-3">
                      {article.summary[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
                    <span className="text-xs text-[#888888]">{article.author}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#E54141] group-hover:translate-x-0.5 transition-transform">
                      <span>{lang === 'id' ? 'Baca Selengkapnya' : 'Read Full Release'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Article Detail Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        lang={lang}
      />
    </section>
  );
};
