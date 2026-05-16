/**
 * Accessible image lightbox - progressive enhancement
 */
(function () {
  'use strict';

  var lightbox = document.querySelector('[data-lightbox]');
  var lightboxImg = lightbox ? lightbox.querySelector('[data-lightbox-img]') : null;
  var closeBtn = lightbox ? lightbox.querySelector('[data-lightbox-close]') : null;

  if (!lightbox || !lightboxImg) {
    return;
  }

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.removeAttribute('src');
    lightboxImg.alt = '';
  }

  var items = document.querySelectorAll('[data-gallery-item]');
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
      var img = this.querySelector('img');
      if (img) {
        open(img.src, img.alt);
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', close);
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      close();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      close();
    }
  });
})();
