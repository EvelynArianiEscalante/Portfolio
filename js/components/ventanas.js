/* ═══════════════════════════════════════════════
   COMPONENTE JS: VENTANAS
   Tres responsabilidades:
   1. Abrir: cualquier elemento con data-ventana="id" abre esa ventana.
   2. Cerrar: el semáforo rojo (data-cierra) cierra la suya.
   3. Arrastrar: la barra de título (data-arrastra) mueve la ventana.
   La última ventana tocada siempre queda arriba (z-index creciente).
   ═══════════════════════════════════════════════ */

// Contador global de capas: cada vez que se toca una ventana, sube.
let zIndice = 100;

// ── 1. ABRIR ──
document.querySelectorAll('[data-ventana]').forEach(function (disparador) {
  disparador.addEventListener('click', function () {
    const ventana = document.getElementById(disparador.dataset.ventana);
    if (!ventana) return; // si el id no existe, no rompe: simplemente no hace nada
    ventana.classList.add('abierta');
    zIndice = zIndice + 1;
    ventana.style.zIndex = zIndice;
  });
});

// ── 2. CERRAR ──
document.querySelectorAll('[data-cierra]').forEach(function (boton) {
  boton.addEventListener('click', function (evento) {
    // stopPropagation: que el clic en "cerrar" no dispare también el arrastre
    evento.stopPropagation();
    boton.closest('.ventana').classList.remove('abierta');
  });
});

// ── 3. ARRASTRAR ──
document.querySelectorAll('[data-arrastra]').forEach(function (barra) {
  barra.addEventListener('pointerdown', function (evento) {
    // Si el clic empezó en el botón de cerrar, no arrastramos
    if (evento.target.dataset.cierra !== undefined) return;

    const ventana = barra.closest('.ventana');
    zIndice = zIndice + 1;
    ventana.style.zIndex = zIndice;

    // Distancia entre donde se hizo clic y la esquina de la ventana:
    // así la ventana no "salta" al empezar a moverla.
    const rect = ventana.getBoundingClientRect();
    const dx = evento.clientX - rect.left;
    const dy = evento.clientY - rect.top;

    function mover(e) {
      ventana.style.left = (e.clientX - dx) + 'px';
      ventana.style.top = (e.clientY - dy) + 'px';
      ventana.style.marginLeft = '0'; // anula el centrado inicial del CSS
    }

    function soltar() {
      document.removeEventListener('pointermove', mover);
      document.removeEventListener('pointerup', soltar);
    }

    document.addEventListener('pointermove', mover);
    document.addEventListener('pointerup', soltar);
  });
});

// ── Cambio de nota dentro de la ventana Notes ──
document.querySelectorAll('[data-nota]').forEach(function (item) {
  item.addEventListener('click', function () {
    // Desactivar todas, activar la clickeada
    document.querySelectorAll('.notas__item').forEach(function (i) {
      i.classList.remove('activo');
    });
    item.classList.add('activo');

    // Mostrar solo el contenido correspondiente
    document.querySelectorAll('.notas__contenido').forEach(function (contenido) {
      contenido.style.display = (contenido.id === 'nota-' + item.dataset.nota) ? 'block' : 'none';
    });
  });
});
