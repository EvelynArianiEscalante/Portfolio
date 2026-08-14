/* ═══════════════════════════════════════════════
   COMPONENTE JS: DOCK — magnificación estilo macOS
   Cada ícono crece según qué tan cerca esté del cursor:
   el apuntado crece al máximo, los vecinos un poco menos,
   los lejanos nada. Igual que el dock real.
   ═══════════════════════════════════════════════ */

const dock = document.querySelector('.dock');
const apps = Array.from(dock.querySelectorAll('.dock__app'));

// ── Tu "configuración de magnificación" ──
const ESCALA_MAX = 1.5;  // cuánto crece el ícono bajo el cursor
const RANGO = 100;       // a cuántos px de distancia deja de afectar

dock.addEventListener('mousemove', function (evento) {
  // En celular esto no corre: la magnificación se calcula según la posición
  // del cursor, y en una pantalla táctil no hay cursor. Al tocar, el navegador
  // dispara un mousemove falso y los íconos quedaban agrandados y corridos
  // hasta que tocabas otra cosa.
  if (window.innerWidth <= 700) return;

  apps.forEach(function (app) {
    const rect = app.getBoundingClientRect();
    const centro = rect.left + rect.width / 2;
    const distancia = Math.abs(evento.clientX - centro);

    // factor: 1 justo bajo el cursor, 0 a RANGO px o más (falloff lineal)
    const factor = Math.max(0, 1 - distancia / RANGO);
    const escala = 1 + (ESCALA_MAX - 1) * factor;

    app.style.transform = 'scale(' + escala + ') translateY(' + (-8 * factor) + 'px)';
    // Los vecinos se apartan para no pisarse: el margen crece con el factor
    app.style.marginLeft = (24 * factor) + 'px';
    app.style.marginRight = (24 * factor) + 'px';
  });
});

// Al salir del dock, todo vuelve a su tamaño
dock.addEventListener('mouseleave', function () {
  apps.forEach(function (app) {
    app.style.transform = '';
    app.style.marginLeft = '';
    app.style.marginRight = '';
  });
});
