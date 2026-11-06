/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { NavSection, Language } from './types';
import { resolveRouteFromLocation, ROUTE_PATHS, getPageMeta, getPageIndex } from './utils/navigation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BusinessPage } from './pages/BusinessPage';
import { ValuesPage } from './pages/ValuesPage';
import { ContactPage } from './pages/ContactPage';
import { ParentCompanyPage } from './pages/ParentCompanyPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { SwipeablePageContainer } from './components/SwipeablePageContainer';
import { PageTransitionIndicator } from './components/PageTransitionIndicator';
import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavSection>(() => {
    if (typeof window !== 'undefined') {
      return resolveRouteFromLocation(window.location.pathname, window.location.hash);
    }
    return 'home';
  });

  const [direction, setDirection] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [lang, setLang] = useState<Language>('id');
  const [inquiryTopic, setInquiryTopic] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync route on popstate (browser back / forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const resolved = resolveRouteFromLocation(window.location.pathname, window.location.hash);
      const prevIdx = getPageIndex(currentPage);
      const nextIdx = getPageIndex(resolved);
      setDirection(nextIdx > prevIdx ? 1 : -1);
      setCurrentPage(resolved);
      window.scrollTo({ top: 0, behavior: 'instant' });
      triggerProgressBar();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage]);

  // Update document title dynamically based on active page & language
  useEffect(() => {
    const meta = getPageMeta(currentPage, lang);
    if (currentPage === 'home') {
      document.title = 'PT Lascramall Commerce Network | Official Corporate Profile';
    } else {
      document.title = `${meta.title} | PT Lascramall Commerce Network`;
    }
  }, [currentPage, lang]);

  // Monitor scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerProgressBar = () => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    setIsTransitioning(true);
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handleNavigate = (page: NavSection, customDirection?: number) => {
    if (page === currentPage) return;

    const prevIndex = getPageIndex(currentPage);
    const nextIndex = getPageIndex(page);
    const newDirection = customDirection !== undefined ? customDirection : (nextIndex > prevIndex ? 1 : -1);

    setDirection(newDirection);
    setCurrentPage(page);
    triggerProgressBar();

    const targetPath = ROUTE_PATHS[page] || '/';

    // Update browser address bar cleanly without full page reload
    if (window.location.pathname !== targetPath) {
      try {
        window.history.pushState({ page }, '', targetPath);
      } catch {
        window.location.hash = targetPath === '/' ? '' : targetPath;
      }
    }

    // Always scroll smoothly to top on page switch
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleInquirePillar = (pillarTitle: string) => {
    setInquiryTopic(pillarTitle);
    handleNavigate('contact', 1);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222] overflow-x-clip selection:bg-[#E54141] selection:text-white">
      {/* Brand-Colored Top Loading Progress Bar & Mobile Swipe Cue Indicator */}
      <PageTransitionIndicator
        isTransitioning={isTransitioning}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
      />

      {/* Top Navigation Bar with active page tab indicator */}
      <Navbar
        activeSection={currentPage}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Distinct Standalone Page View with Swipe-to-Navigate Gestures (Framer Motion) */}
      <main className="flex-1 w-full overflow-x-clip">
        <AnimatePresence mode="wait" custom={direction}>
          <SwipeablePageContainer
            key={currentPage}
            currentPage={currentPage}
            direction={direction}
            onNavigate={handleNavigate}
          >
            {currentPage === 'home' && (
              <HomePage onNavigate={handleNavigate} lang={lang} />
            )}

            {currentPage === 'about' && (
              <AboutPage onNavigate={handleNavigate} lang={lang} />
            )}

            {currentPage === 'business' && (
              <BusinessPage
                onNavigate={handleNavigate}
                lang={lang}
                onInquirePillar={handleInquirePillar}
              />
            )}

            {currentPage === 'parent' && (
              <ParentCompanyPage onNavigate={handleNavigate} lang={lang} />
            )}

            {currentPage === 'leadership' && (
              <LeadershipPage onNavigate={handleNavigate} lang={lang} />
            )}

            {currentPage === 'values' && (
              <ValuesPage onNavigate={handleNavigate} lang={lang} />
            )}

            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                lang={lang}
                preselectedTopic={inquiryTopic}
              />
            )}
          </SwipeablePageContainer>
        </AnimatePresence>
      </main>

      {/* Corporate Footer with direct links to all 5 pages */}
      <Footer onNavigate={handleNavigate} lang={lang} />

      {/* Android Optimized Back to Top Floating Action Button (48x48px touch target) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-14 sm:bottom-6 right-5 sm:right-6 z-40 w-12 h-12 flex items-center justify-center bg-white text-[#222222] hover:text-[#E54141] active:text-[#D13030] rounded-full border border-[#E0E0E0] shadow-lg active:scale-95 transition-all cursor-pointer touch-manipulation"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
