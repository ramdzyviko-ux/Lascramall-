import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveRouteFromLocation, ROUTE_PATHS, getPageMeta, PAGE_ORDER, getPageIndex, getNextPage, getPrevPage } from './navigation';

test('resolveRouteFromLocation correctly parses pathnames', () => {
  assert.equal(resolveRouteFromLocation('/', ''), 'home');
  assert.equal(resolveRouteFromLocation('/about', ''), 'about');
  assert.equal(resolveRouteFromLocation('/about-us', ''), 'about');
  assert.equal(resolveRouteFromLocation('/business', ''), 'business');
  assert.equal(resolveRouteFromLocation('/services', ''), 'business');
  assert.equal(resolveRouteFromLocation('/parent', ''), 'parent');
  assert.equal(resolveRouteFromLocation('/parent-company', ''), 'parent');
  assert.equal(resolveRouteFromLocation('/deswartha', ''), 'parent');
  assert.equal(resolveRouteFromLocation('/leadership', ''), 'leadership');
  assert.equal(resolveRouteFromLocation('/founder', ''), 'leadership');
  assert.equal(resolveRouteFromLocation('/values', ''), 'values');
  assert.equal(resolveRouteFromLocation('/contact', ''), 'contact');
  assert.equal(resolveRouteFromLocation('/unknown-page', ''), 'home');
});

test('resolveRouteFromLocation correctly parses hashes', () => {
  assert.equal(resolveRouteFromLocation('/', '#about'), 'about');
  assert.equal(resolveRouteFromLocation('/', '#/business'), 'business');
  assert.equal(resolveRouteFromLocation('/', '#parent'), 'parent');
  assert.equal(resolveRouteFromLocation('/', '#deswartha'), 'parent');
  assert.equal(resolveRouteFromLocation('/', '#leadership'), 'leadership');
  assert.equal(resolveRouteFromLocation('/', '#founder'), 'leadership');
  assert.equal(resolveRouteFromLocation('/', '#values'), 'values');
  assert.equal(resolveRouteFromLocation('/', '#contact'), 'contact');
  assert.equal(resolveRouteFromLocation('/', '#home'), 'home');
});

test('ROUTE_PATHS maps all pages cleanly', () => {
  assert.equal(ROUTE_PATHS.home, '/');
  assert.equal(ROUTE_PATHS.about, '/about');
  assert.equal(ROUTE_PATHS.business, '/business');
  assert.equal(ROUTE_PATHS.parent, '/parent-company');
  assert.equal(ROUTE_PATHS.leadership, '/leadership');
  assert.equal(ROUTE_PATHS.values, '/values');
  assert.equal(ROUTE_PATHS.contact, '/contact');
});

test('getPageMeta returns appropriate titles for both languages', () => {
  const idMeta = getPageMeta('about', 'id');
  assert.equal(idMeta.breadcrumb, 'Tentang Kami');
  assert.ok(idMeta.title.includes('Tentang'));

  const enMeta = getPageMeta('contact', 'en');
  assert.equal(enMeta.breadcrumb, 'Contact Us');
  assert.ok(enMeta.title.includes('Contact'));

  const parentMeta = getPageMeta('parent', 'en');
  assert.equal(parentMeta.title, 'Deswartha Group – Parent Company');

  const leadershipMeta = getPageMeta('leadership', 'en');
  assert.equal(leadershipMeta.title, 'Leadership');
});

test('PAGE_ORDER and swipe helper functions work as expected', () => {
  assert.equal(getPageIndex('home'), 0);
  assert.equal(getPageIndex('parent'), 3);
  assert.equal(getPageIndex('leadership'), 4);
  assert.equal(getPageIndex('contact'), 6);
  assert.equal(getNextPage('home'), 'about');
  assert.equal(getNextPage('about'), 'business');
  assert.equal(getNextPage('business'), 'parent');
  assert.equal(getNextPage('parent'), 'leadership');
  assert.equal(getNextPage('leadership'), 'values');
  assert.equal(getNextPage('values'), 'contact');
  assert.equal(getNextPage('contact'), null);

  assert.equal(getPrevPage('home'), null);
  assert.equal(getPrevPage('about'), 'home');
  assert.equal(getPrevPage('business'), 'about');
  assert.equal(getPrevPage('parent'), 'business');
  assert.equal(getPrevPage('leadership'), 'parent');
  assert.equal(getPrevPage('values'), 'leadership');
  assert.equal(getPrevPage('contact'), 'values');
});

