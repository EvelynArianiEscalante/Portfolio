/* ═══════════════════════════════════════════════
   COMPONENTE JS: RELOJ de la barra de menú
   Muestra fecha y hora reales, en español, y se
   actualiza solo cada minuto.
   ═══════════════════════════════════════════════ */

function actualizarReloj() {
  // En celular solo la hora. "jue, 13 ago, 04:20 p.m." mide demasiado y
  // empuja los links de la barra hasta partirlos en dos renglones.
  // Como un iPhone real, que en la barra de estado muestra solo la hora.
  const esCelular = window.innerWidth <= 700;

  const opciones = esCelular
    ? { hour: '2-digit', minute: '2-digit' }
    : { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };

  const elemento = document.getElementById('reloj');
  if (elemento) {
    elemento.textContent = new Date().toLocaleString('es-AR', opciones);
  }
}

// Si se gira el teléfono o se cambia el tamaño de la ventana, el formato
// se recalcula: puede haber cruzado el umbral de los 700px.
window.addEventListener('resize', actualizarReloj);

actualizarReloj();                    // primera vez, al cargar
setInterval(actualizarReloj, 60000);  // y después, una vez por minuto
