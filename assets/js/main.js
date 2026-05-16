/**
 * Site-wide utilities - contact form, footer year
 */
(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var form = document.querySelector('[data-contact-form]');
  if (!form) {
    return;
  }

  var statusEl = form.querySelector('[data-form-status]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      showStatus('error', 'Please check the highlighted fields and try again.');
      return;
    }

    var formData = new FormData(form);
    var topic = formData.get('topic') || 'General';
    var subject = encodeURIComponent('Temple enquiry: ' + topic);
    var body = encodeURIComponent(
      'Name: ' + formData.get('name') + '\n' +
      'Email: ' + formData.get('email') + '\n' +
      'Phone: ' + (formData.get('phone') || 'Not provided') + '\n\n' +
      'Message:\n' + formData.get('message')
    );

    window.location.href =
      'mailto:saibaba.bellandur@gmail.com?subject=' + subject + '&body=' + body;

    showStatus(
      'success',
      'Thank you. Your email app should open with your message ready to send. If it did not open, please email saibaba.bellandur@gmail.com directly.'
    );
    form.reset();
  });

  function showStatus(type, message) {
    if (!statusEl) {
      return;
    }
    statusEl.hidden = false;
    statusEl.className = 'form-status form-status--' + type;
    statusEl.setAttribute('role', 'status');
    statusEl.setAttribute('aria-live', 'polite');
    statusEl.textContent = message;
  }
})();
