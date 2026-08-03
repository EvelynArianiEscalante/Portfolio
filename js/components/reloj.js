/* ═══════════════════════════════════════════════
   COMPONENTE JS: RELOJ de la barra de menú
   Muestra fecha y hora reales, en español, y se
   actualiza solo cada minuto.
   ═══════════════════════════════════════════════ */

function actualizarReloj() {
  const opciones = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  };
  const elemento = document.getElementById('reloj');
  if (elemento) {
    elemento.textContent = new Date().toLocaleString('es-AR', opciones);
  }
}

actualizarReloj();                    // primera vez, al cargar
setInterval(actualizarReloj, 60000);  // y después, una vez por minuto
