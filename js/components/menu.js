/* ═══════════════════════════════════════════════
   COMPONENTE JS: MENÚ HAMBURGUESA (solo celular)
   El botón abre y cierra el panel de navegación.
   Todo el aspecto lo maneja el CSS: acá solo se prende y apaga
   una clase (.abierto) y se actualiza aria-expanded.
   ═══════════════════════════════════════════════ */

const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu-principal');

if (botonMenu && menu) {

  // Una sola función para abrir y cerrar: recibe si tiene que quedar abierto.
  function ponerMenu(abierto) {
    menu.classList.toggle('abierto', abierto);
    // aria-expanded no es decoración: es cómo un lector de pantalla sabe
    // si el menú está desplegado. Además el CSS lo usa para animar la X.
    botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    botonMenu.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  }

  botonMenu.addEventListener('click', function () {
    const estaAbierto = botonMenu.getAttribute('aria-expanded') === 'true';
    ponerMenu(!estaAbierto);
  });

  // Al tocar cualquier opción, el menú se cierra solo. Sin esto quedaría
  // tapando el contenido que la persona acaba de pedir (por ejemplo, la
  // ventana Sobre mí, que se abre sin cambiar de página).
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      ponerMenu(false);
    });
  });

  // Tocar fuera del menú también lo cierra: es lo que uno espera.
  document.addEventListener('click', function (evento) {
    const clicAdentro = menu.contains(evento.target) || botonMenu.contains(evento.target);
    if (!clicAdentro) ponerMenu(false);
  });

  // Escape cierra, para quien navega con teclado.
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') ponerMenu(false);
  });

  // Si la ventana se agranda hasta el tamaño de escritorio, el menú vuelve a
  // estar siempre visible: hay que dejar el botón en estado "cerrado" para
  // que no quede la X dibujada.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 700) ponerMenu(false);
  });
}
