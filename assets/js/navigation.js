/**
 * Mobile navigation — responsive only (below 64rem), keyboard accessible
 */
(function () {
  'use strict';

  var DESKTOP_QUERY = '(min-width: 64rem)';
  var toggle = document.querySelector('[data-nav-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  var closeBtn = document.querySelector('[data-nav-close]');
  var backdrop = document.querySelector('[data-nav-backdrop]');
  var mediaQuery = window.matchMedia(DESKTOP_QUERY);

  if (!toggle || !mobileNav) {
    return;
  }

  function isDesktop() {
    return mediaQuery.matches;
  }

  function openNav() {
    if (isDesktop()) {
      return;
    }
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function closeNav() {
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function handleViewportChange() {
    if (isDesktop()) {
      closeNav();
    }
  }

  toggle.addEventListener('click', function () {
    if (isDesktop()) {
      return;
    }
    if (mobileNav.classList.contains('is-open')) {
      closeNav();
      toggle.focus();
    } else {
      openNav();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeNav);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeNav);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeNav();
      toggle.focus();
    }
  });

  var links = mobileNav.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', closeNav);
  }

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleViewportChange);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleViewportChange);
  }

  handleViewportChange();
})();
