/**
 * Accessible FAQ accordion
 */
(function () {
  'use strict';

  var triggers = document.querySelectorAll('[data-accordion-trigger]');

  for (var i = 0; i < triggers.length; i++) {
    (function (trigger) {
      var panelId = trigger.getAttribute('aria-controls');
      var panel = panelId ? document.getElementById(panelId) : null;

      if (!panel) {
        return;
      }

      trigger.addEventListener('click', function () {
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        panel.hidden = expanded;
      });
    })(triggers[i]);
  }
})();
