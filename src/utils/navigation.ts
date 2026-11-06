import { NavSection, Language } from '../types';

export const ROUTE_PATHS: Record<NavSection, string> = {
  home: '/',
  about: '/about',
  business: '/business',
  parent: '/parent-company',
  leadership: '/leadership',
  values: '/values',
  contact: '/contact',
};

export const PAGE_ORDER: NavSection[] = ['home', 'about', 'business', 'parent', 'leadership', 'values', 'contact'];

export function getPageIndex(section: NavSection): number {
  const index = PAGE_ORDER.indexOf(section);
  return index === -1 ? 0 : index;
}

export function getNextPage(current: NavSection): NavSection | null {
  const index = getPageIndex(current);
  if (index < PAGE_ORDER.length - 1) {
    return PAGE_ORDER[index + 1];
  }
  return null;
}

export function getPrevPage(current: NavSection): NavSection | null {
  const index = getPageIndex(current);
  if (index > 0) {
    return PAGE_ORDER[index - 1];
  }
  return null;
}

export const PATH_TO_ROUTE: Record<string, NavSection> = {
  '/': 'home',
  '/home': 'home',
  '/about': 'about',
  '/about-us': 'about',
  '/business': 'business',
  '/our-business': 'business',
  '/services': 'business',
  '/parent': 'parent',
  '/parent-company': 'parent',
  '/deswartha': 'parent',
  '/deswartha-group': 'parent',
  '/leadership': 'leadership',
  '/founder': 'leadership',
  '/corporate-leadership': 'leadership',
  '/values': 'values',
  '/our-values': 'values',
  '/contact': 'contact',
  '/contact-us': 'contact',
};

/**
 * Resolves the active section from a browser pathname or hash string
 */
export function resolveRouteFromLocation(pathname: string, hash: string): NavSection {
  // Check hash first (e.g. #/about or #about)
  if (hash) {
    const cleanHash = hash.replace(/^#\/?/, '').toLowerCase().trim();
    if (cleanHash === 'about' || cleanHash === 'about-us') return 'about';
    if (cleanHash === 'business' || cleanHash === 'our-business' || cleanHash === 'services') return 'business';
    if (cleanHash === 'parent' || cleanHash === 'parent-company' || cleanHash === 'deswartha' || cleanHash === 'deswartha-group') return 'parent';
    if (cleanHash === 'leadership' || cleanHash === 'founder' || cleanHash === 'corporate-leadership') return 'leadership';
    if (cleanHash === 'values' || cleanHash === 'our-values') return 'values';
    if (cleanHash === 'contact' || cleanHash === 'contact-us') return 'contact';
    if (cleanHash === 'home' || cleanHash === '') return 'home';
  }

  // Check pathname
  const cleanPath = pathname.toLowerCase().replace(/\/$/, '') || '/';
  if (PATH_TO_ROUTE[cleanPath]) {
    return PATH_TO_ROUTE[cleanPath];
  }

  // Check prefix match
  if (cleanPath.startsWith('/about')) return 'about';
  if (cleanPath.startsWith('/business') || cleanPath.startsWith('/services')) return 'business';
  if (cleanPath.startsWith('/parent') || cleanPath.startsWith('/deswartha')) return 'parent';
  if (cleanPath.startsWith('/leadership') || cleanPath.startsWith('/founder')) return 'leadership';
  if (cleanPath.startsWith('/values')) return 'values';
  if (cleanPath.startsWith('/contact')) return 'contact';

  return 'home';
}

export function getPageMeta(section: NavSection, lang: Language): { title: string; subtitle: string; breadcrumb: string } {
  switch (section) {
    case 'about':
      return {
        title: lang === 'id' ? 'Tentang Perusahaan' : 'About Our Enterprise',
        subtitle: lang === 'id'
          ? 'Profil, visi & misi, latar belakang, dan filosofi tata kelola PT Lascramall Commerce Network.'
          : 'Corporate profile, vision & mission, history, and governance philosophy of PT Lascramall Commerce Network.',
        breadcrumb: lang === 'id' ? 'Tentang Kami' : 'About Us'
      };
    case 'business':
      return {
        title: lang === 'id' ? 'Bidang Usaha Strategis' : 'Our Strategic Business',
        subtitle: lang === 'id'
          ? 'Portofolio lima pilar niaga digital, marketplace, agregasi produk digital, dan inovasi teknologi informasi.'
          : 'Five integrated pillars covering digital commerce, marketplace, digital asset aggregation, and tech development.',
        breadcrumb: lang === 'id' ? 'Bidang Usaha' : 'Our Business'
      };
    case 'parent':
      return {
        title: 'Deswartha Group – Parent Company',
        subtitle: lang === 'id'
          ? 'Organisasi korporat induk yang bertanggung jawab atas penentuan arah strategis, tata kelola, dan ekosistem bisnis.'
          : 'Parent corporate organization responsible for strategic direction, corporate governance, and business ecosystem.',
        breadcrumb: lang === 'id' ? 'Parent Company (Deswartha)' : 'Parent Company (Deswartha)'
      };
    case 'leadership':
      return {
        title: lang === 'id' ? 'Leadership' : 'Leadership',
        subtitle: lang === 'id'
          ? 'Kepemimpinan, visi strategis, dan komitmen pendiri dalam membangun ekosistem niaga digital terpercaya.'
          : 'Leadership, Vision & Corporate Direction of PT Lascramall Commerce Network.',
        breadcrumb: lang === 'id' ? 'Leadership' : 'Leadership'
      };
    case 'values':
      return {
        title: lang === 'id' ? 'Prinsip & Budaya Korporasi' : 'Corporate Values & Culture',
        subtitle: lang === 'id'
          ? 'Enam pilar nilai utama yang mendasari integritas, keunggulan tata kelola, dan kemitraan jangka panjang kami.'
          : 'Six core foundational values guiding integrity, corporate governance, and long-term partnerships.',
        breadcrumb: lang === 'id' ? 'Nilai Perusahaan' : 'Our Values'
      };
    case 'contact':
      return {
        title: lang === 'id' ? 'Hubungi Perusahaan' : 'Contact Corporate Desk',
        subtitle: lang === 'id'
          ? 'Komunikasi resmi, kantor operasional, direktori kemitraan, dan formulir inisiasi kerja sama bisnis.'
          : 'Official inquiries, corporate headquarters, partnership directory, and business collaboration portal.',
        breadcrumb: lang === 'id' ? 'Kontak' : 'Contact Us'
      };
    case 'home':
    default:
      return {
        title: 'PT Lascramall Commerce Network',
        subtitle: 'Connecting Business. Empowering Digital Commerce.',
        breadcrumb: 'Home'
      };
  }
}
