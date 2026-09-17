// Reveal on scroll: agrega .is-in cuando un elemento [data-reveal] entra al viewport.
// Sin librería. Respeta prefers-reduced-motion (deja todo visible, sin animar).
(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return; // queda visible
  els.forEach(function (el) { el.classList.add('reveal-ready'); void el.offsetWidth; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
