import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  filterNewsArticles,
  BUSINESS_PILLARS,
  CORPORATE_VALUES,
  CORPORATE_ARTICLES,
  COMPANY_DETAILS
} from './corporateData';
import { ContactFormData } from '../types';

test('BUSINESS_PILLARS contains all 5 required business units', () => {
  assert.equal(BUSINESS_PILLARS.length, 5);
  const titles = BUSINESS_PILLARS.map(p => p.title.en);
  assert.ok(titles.includes('Ecommerce & Digital Commerce'));
  assert.ok(titles.includes('Online Marketplace'));
  assert.ok(titles.includes('Digital Products & Services'));
  assert.ok(titles.includes('Gaming Digital Assets'));
  assert.ok(titles.includes('Technology & Digital Business Development'));
});

test('CORPORATE_VALUES contains all 6 required corporate values', () => {
  assert.equal(CORPORATE_VALUES.length, 6);
  const titles = CORPORATE_VALUES.map(v => v.title);
  assert.ok(titles.includes('Innovation'));
  assert.ok(titles.includes('Integrity'));
  assert.ok(titles.includes('Excellence'));
  assert.ok(titles.includes('Customer Focus'));
  assert.ok(titles.includes('Growth'));
  assert.ok(titles.includes('Trust'));
});

test('COMPANY_DETAILS preserves official legal name and headline tagline', () => {
  assert.equal(COMPANY_DETAILS.legalName, 'PT LASCRAMALL COMMERCE NETWORK');
  assert.equal(COMPANY_DETAILS.brandName, 'LASCRAMALL');
  assert.equal(COMPANY_DETAILS.tagline.id, 'Connecting Business. Empowering Digital Commerce.');
});

test('validateContactForm rejects empty or invalid submissions', () => {
  const emptyForm: ContactFormData = {
    fullName: '',
    companyName: '',
    email: 'not-an-email',
    phone: '123',
    inquiryType: 'business',
    message: 'short'
  };

  const errors = validateContactForm(emptyForm);
  assert.ok(errors.fullName);
  assert.ok(errors.companyName);
  assert.ok(errors.email);
  assert.ok(errors.phone);
  assert.ok(errors.message);
});

test('validateContactForm accepts complete valid enterprise inquiry', () => {
  const validForm: ContactFormData = {
    fullName: 'Budi Santoso',
    companyName: 'PT Mitra Sukses Nusantara',
    email: 'budi.santoso@mitrasukses.co.id',
    phone: '+6281234567890',
    inquiryType: 'partnership',
    message: 'Kami ingin menjajaki kemitraan strategis distribusi produk digital komersial.'
  };

  const errors = validateContactForm(validForm);
  assert.deepEqual(errors, {});
});

test('filterNewsArticles filters by category and keyword query', () => {
  const corporateOnly = filterNewsArticles(CORPORATE_ARTICLES, 'Corporate', '', 'id');
  assert.ok(corporateOnly.length > 0);
  for (const item of corporateOnly) {
    assert.equal(item.category, 'Corporate');
  }

  const searchResults = filterNewsArticles(CORPORATE_ARTICLES, 'All', 'Infrastruktur', 'id');
  assert.ok(searchResults.length >= 1);
});

test('DESWARTHA_DATA encapsulates parent identity, vision, 7 missions, and 9-letter philosophy', async () => {
  const { DESWARTHA_DATA } = await import('./corporateData');
  assert.equal(DESWARTHA_DATA.name, 'Deswartha Group');
  assert.ok(DESWARTHA_DATA.vision.en.includes('integrated, structured, resilient, and internationally oriented'));
  
  // Mission check: exactly 7 points
  assert.equal(DESWARTHA_DATA.missions.en.length, 7);
  assert.equal(DESWARTHA_DATA.missions.id.length, 7);

  // Philosophy check: exactly 9 letters in exact sequence D-E-S-W-A-R-T-H-A
  assert.equal(DESWARTHA_DATA.philosophy.length, 9);
  const sequence = DESWARTHA_DATA.philosophy.map(p => p.letter).join('');
  assert.equal(sequence, 'DESWARTHA');

  const words = DESWARTHA_DATA.philosophy.map(p => p.word);
  assert.deepEqual(words, [
    'Direction',
    'Excellence',
    'System',
    'Wisdom',
    'Accountability',
    'Resilience',
    'Trust',
    'Hierarchy',
    'Authority'
  ]);

  // Central Governance Functions check: 7 functions
  assert.equal(DESWARTHA_DATA.governanceFunctions.length, 7);

  // Corporate culture statements
  assert.deepEqual(DESWARTHA_DATA.culture.principles, [
    'SYSTEM DI ATAS SEGALANYA',
    'HASIL: NYATA, TERUKUR, BERULANG'
  ]);
  assert.deepEqual(DESWARTHA_DATA.culture.slogans, [
    'SYSTEM JALAN',
    'DATA BICARA',
    'RISIKO TERKENDALI',
    'PROFIT NYATA',
    'DESWARTHA'
  ]);

  // Subsidiary link check
  assert.equal(DESWARTHA_DATA.subsidiary.name, 'PT Lascramall Commerce Network');
  assert.equal(DESWARTHA_DATA.subsidiary.brand, 'LASCRAMALL');
});

test('LEADERSHIP_DATA contains required founder profile, message, 6 principles, and 6 responsibilities', async () => {
  const { LEADERSHIP_DATA } = await import('./corporateData');
  assert.ok(LEADERSHIP_DATA.namePlaceholder);
  assert.equal(LEADERSHIP_DATA.parentAffiliation, 'Deswartha Group');
  assert.equal(LEADERSHIP_DATA.organization, 'PT Lascramall Commerce Network');

  // 6 Leadership Principles check
  assert.equal(LEADERSHIP_DATA.principles.length, 6);
  const principleTitles = LEADERSHIP_DATA.principles.map(p => p.title);
  assert.ok(principleTitles.includes('System-Driven Management'));
  assert.ok(principleTitles.includes('Integrity & Accountability'));
  assert.ok(principleTitles.includes('Data-Driven Decisions'));
  assert.ok(principleTitles.includes('Operational Excellence'));
  assert.ok(principleTitles.includes('Innovation & Technology'));
  assert.ok(principleTitles.includes('Sustainable Growth'));

  // 6 Leadership Responsibilities check
  assert.equal(LEADERSHIP_DATA.responsibilities.length, 6);
  const respTitles = LEADERSHIP_DATA.responsibilities.map(r => r.title);
  assert.ok(respTitles.includes('Corporate Strategy & Business Development'));
  assert.ok(respTitles.includes('Organizational Leadership'));
  assert.ok(respTitles.includes('Corporate Governance'));
  assert.ok(respTitles.includes('Financial & Business Performance Oversight'));
  assert.ok(respTitles.includes('Technology & Digital Transformation'));
  assert.ok(respTitles.includes('Long-Term Business Sustainability'));

  // Message check
  assert.ok(LEADERSHIP_DATA.message.id.headline);
  assert.ok(LEADERSHIP_DATA.message.en.headline);
  assert.ok(LEADERSHIP_DATA.message.en.paragraphs.length >= 3);
});
