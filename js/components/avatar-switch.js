/* ═══════════════════════════════════════════════
   COMPONENTE: AVATAR SWITCH
   Alterna el memoji y la foto real en la ventana "Sobre mí".

   Detalle importante: el botón nace con el atributo "hidden" en el HTML y
   este script lo muestra SOLO si la foto real carga bien. Así, mientras el
   archivo profile-photo.jpg no exista, no aparece un control que no funciona.
   Un botón que no hace nada es peor que no tener botón.
   ═══════════════════════════════════════════════ */

(function () {
  const caja = document.querySelector('.sobremi__avatar');
  if (!caja) return;

  const avatar = caja.querySelector('.sobremi__foto--avatar');
  const foto   = caja.querySelector('.sobremi__foto--real');
  const boton  = caja.querySelector('.sobremi__switch');
  if (!avatar || !foto || !boton) return;

  // ── ¿Existe la foto real? ──
  // complete + naturalWidth cubre el caso de que la imagen ya esté cargada
  // desde la caché antes de que corra este script (ahí "load" no se dispara).
  function habilitar() { boton.hidden = false; }
  if (foto.complete && foto.naturalWidth > 0) habilitar();
  foto.addEventListener('load', habilitar);
  foto.addEventListener('error', function () { boton.hidden = true; });

  // ── El intercambio ──
  boton.addEventListener('click', function () {
    const seVeElAvatar = avatar.classList.contains('visible');
    avatar.classList.toggle('visible', !seVeElAvatar);
    foto.classList.toggle('visible', seVeElAvatar);
    boton.setAttribute('aria-pressed', String(seVeElAvatar));
    // El memoji es un video: si no se ve, se pausa (no gastar batería de gusto)
    if (seVeElAvatar) { avatar.pause(); } else { avatar.play(); }
  });
})();
