export type NavSection = 'home' | 'about' | 'business' | 'parent' | 'leadership' | 'values' | 'contact';

export type Language = 'id' | 'en';

export interface LeadershipPrinciple {
  id: string;
  title: string;
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  iconName: string;
}

export interface LeadershipResponsibility {
  id: string;
  title: string;
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
}

export interface FounderData {
  namePlaceholder: string;
  title: {
    id: string;
    en: string;
  };
  organization: string;
  parentAffiliation: string;
  portraitPlaceholderNote: {
    id: string;
    en: string;
  };
  backgroundPlaceholder: {
    id: string;
    en: string;
  };
  message: {
    id: {
      headline: string;
      paragraphs: string[];
    };
    en: {
      headline: string;
      paragraphs: string[];
    };
  };
  principles: LeadershipPrinciple[];
  responsibilities: LeadershipResponsibility[];
}

export interface DeswarthaPhilosophyLetter {
  letter: string;
  word: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
}

export interface GovernanceFunction {
  id: string;
  title: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  iconName: string;
}

export interface DeswarthaCorporateData {
  name: string;
  role: {
    id: string;
    en: string;
  };
  overview: {
    id: string;
    en: string;
  };
  vision: {
    id: string;
    en: string;
  };
  missions: {
    id: string[];
    en: string[];
  };
  philosophy: DeswarthaPhilosophyLetter[];
  governanceFunctions: GovernanceFunction[];
  culture: {
    principles: string[];
    slogans: string[];
  };
  subsidiary: {
    name: string;
    brand: string;
    description: {
      id: string;
      en: string;
    };
  };
}

export interface BusinessPillar {
  id: string;
  slug: string;
  title: {
    id: string;
    en: string;
  };
  shortDesc: {
    id: string;
    en: string;
  };
  fullDesc: {
    id: string;
    en: string;
  };
  keyCapabilities: {
    id: string[];
    en: string[];
  };
  strategicFocus: {
    id: string;
    en: string;
  };
  iconName: string;
  image?: string;
}

export interface CorporateValue {
  id: string;
  title: string;
  subtitle: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  principles: {
    id: string[];
    en: string[];
  };
  iconName: string;
}

export interface NewsArticle {
  id: string;
  title: {
    id: string;
    en: string;
  };
  category: 'Corporate' | 'Technology' | 'Partnership' | 'Ecosystem';
  date: string;
  readTime: string;
  summary: {
    id: string;
    en: string;
  };
  content: {
    id: string[];
    en: string[];
  };
  author: string;
  featured?: boolean;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  inquiryType: 'business' | 'partnership' | 'technology' | 'general';
  message: string;
}

export interface FormValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  message?: string;
}
