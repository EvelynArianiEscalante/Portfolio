# Contexto del proyecto — Portfolio de Evelyn

> **DOCUMENTO DE TRASPASO.** Si sos una sesión nueva de Claude (cualquier
> modelo): leé este archivo completo + `docs/contenido-casos.md` + `docs/cv.md`
> antes de hacer nada. Con eso tenés todo el contexto.

## Quién es Evelyn y cómo trabajar con ella

- Diseñadora UX/UI Semi Senior, Argentina. Responder en español rioplatense con voseo.
- Trabaja en Supply Solutions diseñando Siotyx (plataforma B2B logística + hardware RFID).
- Conocimientos básicos de código: **explicar cada cosa y por qué, sin asumir**.
  Está aprendiendo VS Code y Git — dar tips cuando sea relevante.
- Rol de Claude: mentor crítico, no asistente complaciente. No validar por defecto.
- No inventar métricas ni datos JAMÁS. Solo números verificables.
- Ser conciso. Máximo 2 preguntas por respuesta. Código: completo y funcionando.

## Estado del proyecto (2026-08-03)

**El sitio está PUBLICADO:** https://evelynarianiescalante.github.io/Portfolio/
**Repo:** https://github.com/EvelynArianiEscalante/Portfolio (rama main)
**Flujo de trabajo:** editar en VS Code → ver con Live Server → `git add .` +
`git commit -m "..."` + `git push` → el sitio público se actualiza solo.

### Concepto y dirección visual (APROBADOS)

Portfolio = **escritorio estilo macOS** (referencia: plantilla "MakOS").
Fondo oscuro con grano, íconos de escritorio, ventanas arrastrables reales,
dock glass con memoji animado en video, Figtree. Menubar = navegación real
(camino rápido del reclutador). Regla de oro: la metáfora nunca bloquea el
contenido — máximo 1-2 clics a cualquier caso.

### Arquitectura del escritorio (APROBADA)

- Carpeta **Siotyx** → Finder con Core, Transporte, Retail
- Carpeta **Proyectos anteriores** → Health App, WiFi Marketing, Pedidos & Gestión, AIKA
- **Design System** y **Sobre mí** como items sueltos
- Cada proyecto abre ventana-preview: bajada + ficha técnica (timeline/rol/skills)
  + link "Ver caso completo" → página propia
- Jerarquía deliberada: Siotyx y el DS son lo principal; lo anterior es respaldo

### Estructura de código (respetar SIEMPRE)

- Tokens en `css/base/variables.css` — ningún color escrito a mano fuera de ahí
- Un componente = un archivo (`css/components/`, `js/components/`)
- Posiciones/ajustes de página en `css/pages/`
- BEM (`bloque__elemento--variante`), nombres en minúsculas con guiones
- Maquetas exploratorias viejas en `pages/lab/` (superadas, no tocar)

### Nombres de archivos de imagen (regla de Evelyn, 2026-08-05)

- **Carpetas = nombre del proyecto**, tal cual es (`health-app`, `pedidos-gestion`,
  `siotyx-transporte`). Son nombres propios, no se traducen.
- **Archivos adentro = palabras en INGLÉS**, numerados en el orden en que
  aparecen en la página: `1-cover.png`, `3-findings.png`, `5-after.png`.
  El inglés no es estética: evita de raíz la ñ y los acentos.
- **Nunca ñ, acentos ni espacios en un nombre de archivo.** macOS y GitHub
  guardan la ñ distinto, así que la imagen se ve bien en Live Server y aparece
  rota en el sitio publicado, sin ningún error que lo explique. Es el bug más
  difícil de encontrar de todos los que hay acá.

### Decisiones clave tomadas

- "Sistema de Pedidos & Gestión" = Microsafe renombrado (kioscos + hardware)
- **Política de confidencialidad (REVISADA 2026-08-04 — reemplaza la anterior):**
  en los CASOS van solo nombres de PRODUCTO (Siotyx, AIKA, Health App...).
  Los nombres de EMPLEADORES (Cober, Sisu, Fidooo, Micemark, Supply Solutions)
  aparecen **únicamente** en la ventana Notas / CV, en la sección Experiencia.
  Donde antes iba "Empresa" en la ficha de un caso, ahora va "Sector".
  Detalles internos de flujos siguen protegidos ("bajo NDA" en entrevista).
  ⚠️ La versión vieja de esta política decía lo contrario. No revertir.
- Métricas: prohibido el adjetivo sin dato. Si no hay número, se cuenta la
  fuente cualitativa y se aclara que lo es (ver el Impacto de Health App).
- Email de contacto del sitio: evelynescalante.25@gmail.com (personal, NO el laboral)
- LinkedIn: /in/evelynarianiescalante · Behance: /evelynarianiUXer
- Hero: "Hago que sistemas complejos se sientan simples."

## Estrategia de lanzamiento (2026-08-11)

Evelyn NO está aplicando activamente todavía. El plan: terminar el sitio
(screenshots Siotyx, páginas de caso, mobile) ANTES de publicar el link.
- LinkedIn: textos actualizados (titular, Acerca de, Servicios, Experiencia
  con Supply) — ver versiones finales en docs/cv.md y esta sesión.
- El link al portfolio se quitó de Destacados y del perfil A PROPÓSITO:
  se vuelve a poner cuando el sitio esté listo (sobre todo mobile).
- CV PDF final ya descargable desde el sitio (assets/docs/).

## PENDIENTES (en orden sugerido)

0. **PENDIENTES DE EVELYN (el código ya está listo y esperándolos):**
   - `assets/docs/cv-evelyn-ariani-escalante.pdf` → el botón "Descargar CV" del
     sidebar de Perfil profesional está maquetado con `hidden`. Al subir el PDF,
     borrar la palabra `hidden` de esa línea en index.html.
   - `assets/images/og-preview.jpg` (1200×630) → las etiquetas Open Graph ya
     apuntan ahí. Sin la imagen el preview sale sin foto, no rompe nada.
   - **Revisar el texto de "Cómo trabajo"** en la ventana Sobre mí: es una
     propuesta mía, tiene que sonarle a ella.
   - **Aprobar o corregir el puesto de Supply Solutions** en Perfil profesional
     (marcado en naranja, clase `.notas__puesto--revisar`).
   - Isotipo de Supply Solutions: el logo actual es horizontal con texto y
     dentro del cuadrado de 36px queda mucho más chico que los otros siete.

0b. **DOS ARCHIVOS QUE SOLO PUEDE SUBIR EVELYN** (todo el código ya está listo
   y esperándolos):
   - `assets/docs/cv-evelyn-ariani-escalante.pdf` → el botón "Descargar CV en
     PDF" ya está maquetado en el sidebar de la ventana Notas de `index.html`,
     con el atributo `hidden` puesto. Cuando el PDF exista, borrar la palabra
     `hidden` de esa línea y listo.
   - `assets/images/og-preview.jpg` (1200×630 px) → las etiquetas Open Graph
     ya están en el `<head>` de `index.html` y `health-app.html` apuntando a
     ese nombre. Sin la imagen el preview sale sin foto, no se rompe nada.

1. ✅ **Responsive / mobile — PRIMERA VERSIÓN HECHA el 2026-08-13.**
   Dos cortes: **1024px** (tablet / ventana angosta) y **700px** (celular).
   - Tablet: hero más angosto (400px), íconos más chicos y pegados al borde.
     El widget de Spotify y su ícono del dock **se ocultan** — decisión de
     Evelyn: la música es solo de escritorio. Además sus 340px chocaban con
     el dock.
   - Celular: fachada tipo iPhone (decidido con ella). Hero arriba, los tres
     íconos en una fila centrada, dock abajo. Las ventanas pasan a **pantalla
     completa** con la barra sticky (el semáforo rojo hace de "volver"), el
     arrastre se desactiva por JS (`window.innerWidth <= 700` en ventanas.js),
     el Finder va a una columna, el sidebar del CV pasa a fila horizontal
     arriba y la ficha de Sobre mí se apila.
   - Menubar en celular: se ocultan el rol y el link a "Sistema de diseño"
     (selector `[href="#"]:not([data-ventana])` — vuelve solo cuando la
     página exista).
   - Los íconos se centran con `left` + `margin-left` negativo y NO con
     transform, porque transform ya lo usan sus animaciones de entrada/rebote.
   ⚠️ FALTA PROBARLO EN UN TELÉFONO REAL. No se pudo verificar visualmente
   (no hay navegador en el entorno de Claude): revisado solo por código.
2. **Screenshots de Figma** — reemplazar la foto placeholder repetida
   (picsum, clase `.thumb--placeholder`) por captures reales. Es el mayor
   salto de calidad disponible.
3. **Páginas de caso restantes** — el molde es `pages/casos-de-estudio/health-app.html`
   (+ `css/pages/caso.css`). ✅ HECHAS el 2026-08-13: `pedidos-gestion.html` y
   `aika.html` (contenido de `docs/contenido-casos.md`, una sola imagen cada
   una — la 1-preview — hasta que Evelyn exporte más capturas de Figma).
   Links "Ver caso completo" conectados en home e índice de proyectos; la
   navegación circular: health → pedidos → wifi → aika → health.
   ✅ También `wifi-marketing.html` (ver punto 4). Falta solo: los casos de
   Siotyx (contenido a construir con Evelyn).
4. ✅ **Contenido WiFi Marketing — RESUELTO el 2026-08-13.** El nodo viejo
   `4075:8974` sigue dando error, pero Evelyn pasó el node-id correcto:
   **`4076:15550`** (archivo `EW8YfHJvbhoD7LMmSvoLyS`, página "Design System").
   Se leyó por screenshot y se armó la página. ⚠️ Dato a confirmar con ella:
   en el portfolio viejo la bajada de este caso decía "Wordpress E-commerce…",
   que no corresponde a WiFi — se usó la bajada del sitio nuevo en su lugar.
   Timeline correcto: **Jun 2024 – Oct 2024** (lo corrigió Evelyn; yo lo había
   leído mal del screenshot escalado. Lección: para leer texto chico de Figma,
   pedir el screenshot con maxDimension alto o por secciones, no confiar en la
   miniatura).
5. **Páginas Sistema de diseño y Sobre mí** — links de menubar en `#`.
6. **Duraciones de proyectos Siotyx** — el dato "Duración" de la ficha de
   Transporte se quitó (estaba vacío). Volver a agregarlo con el número real.
7. Fondo definitivo del escritorio (imagen b/n) en vez del gradiente.
8. Borrar `.gitkeep` de carpetas ya pobladas y `memojisobremi.MOV` (2.4MB, ya
   convertido a `memoji.mp4`).
9. **Íconos definitivos** — están en Figma (archivo `EW8YfHJvbhoD7LMmSvoLyS`):
   - CV / experiencia: nodo `4145:11584` (Evelyn lo destina solo a CV)
   - LinkedIn: `4146:11609` · Mail: `4148:11617`
   - Folders (reemplazan las carpetas azules): `4145:11586`
   - Proyectos/dock: `4145:11588`
   Evelyn los exporta a mano desde Figma como SVG → `assets/icons/` con
   nombres: cv.svg, linkedin.svg, mail.svg, folder.svg, proyectos.svg.
   (La descarga de assets de Figma está bloqueada desde el sandbox de Claude —
   no intentar por MCP, pedirle los archivos exportados.)
   Decisión tomada: dock limpio con UNA app "Proyectos" (estilo Launchpad)
   que lleva al índice, NO todos los proyectos como apps sueltas.
10. **Rediseñar páginas de caso como ventana Mac maximizada** — barra con
    semáforos arriba, contenido scrolleable adentro, el rojo vuelve al
    escritorio. Aprobado por Evelyn; reemplaza el layout actual de
    `health-app.html` / `caso.css`.

## Historia previa

Portfolio anterior en Figma Sites, caído por suscripción. Todo su contenido
fue extraído y está en `docs/contenido-casos.md` (casos) y `docs/cv.md` (CV
completo con fechas). Figma fuente: archivo `EW8YfHJvbhoD7LMmSvoLyS`.

## Decisiones tomadas (log)

- 2026-08-02: estructura de carpetas + README.
- 2026-08-02: dirección visual macOS aprobada (maquetas en pages/lab).
- 2026-08-03: sitio real construido (tokens, componentes, JS de ventanas).
- 2026-08-03: contenido real extraído de Figma e integrado; fichas técnicas.
- 2026-08-03: memoji animado en el dock (video 46KB en loop).
- 2026-08-03: repo GitHub creado, primer push, GitHub Pages activado. SITIO VIVO.
- 2026-08-04: **cambio de política de confidencialidad** — los empleadores salen
  de los casos y quedan solo en el CV/Notas. "Empresa: Cober" → "Sector: Salud".
- 2026-08-04: los 9 textos `[ ... pendiente ]` visibles se reemplazaron por
  labels neutros ("Vista previa del proyecto", "Resultados del card sorting"…).
  Regla nueva: **nada que diga "pendiente" se publica**.
- 2026-08-04: el Impacto de Health App dejó de decir "reducción significativa"
  y ahora cuenta el feedback del equipo de atención al cliente, aclarando que
  es cualitativo. Clase nueva `.caso-nota` en `caso.css`.
- 2026-08-04: nombre unificado "Health App Redesign" (antes el Finder decía
  "Health app design").
- 2026-08-04: CTA de descarga de CV maquetado en el sidebar de Notas (oculto
  hasta que exista el PDF) + Open Graph en home y en el caso.
- 2026-08-06: **Core deja de ser un proyecto propio.** Sale del Finder de Siotyx
  y de la grilla del índice; su contenido (capa transversal: acceso, scanner,
  gestión de etiquetas, conectividad) se cuenta ahora DENTRO del Design System.
  La ventana `#ventana-core` quedó comentada en index.html por si se revierte.
- 2026-08-06: **grilla de Siotyx en el índice** — Retail ocupa la fila entera
  arriba (clase `.card-proyecto--ancha`), y debajo Transporte a la izquierda y
  Design System a la derecha, en ese orden de lectura.
- 2026-08-06: ventana "Notas" renombrada a **"Perfil profesional"** y cargada con
  el CV completo (3 pestañas: Experiencia, Educación, Skills). Supply Solutions
  queda marcado en NARANJA (`.notas__puesto--revisar`) hasta que Evelyn lo apruebe.
- 2026-08-06: **avatar switch** en la ventana Sobre mí (memoji ↔ foto real).
  Componente en `js/components/avatar-switch.js`. El botón solo aparece si
  `assets/images/sobre-mi/profile-photo.jpg` carga bien.
- 2026-08-06: fondo del escritorio = `background-concretebuild.jpg` con velo
  negro al **55%**. No bajar ese número sin medir: la foto es clara y con menos
  velo el texto blanco queda por debajo del contraste mínimo (4,5:1).
- 2026-08-06: **datos personales tapados en las imágenes de Health App** —
  24 zonas en 5 imágenes: nombre y DNI del afiliado, número de asociado,
  nombres de médicos y de pacientes, números de orden. Se rellenó con el color
  de fondo de cada zona (no barras negras). ⚠️ APRENDIZAJE: el OCR automático
  NO alcanza — dejó pasar una lista entera de afiliados y el texto atenuado del
  cuarto teléfono. Lo que funcionó fue mirar cada imagen ampliada. Si se suman
  imágenes nuevas, revisarlas a ojo antes de publicar.
  Se dejaron a propósito: las fechas de turnos (inventadas) y el teléfono
  4556-4800 del Sanatorio Colegiales (institución pública).
- 2026-08-06: componente `.puntos` con variantes de color (`--problema` rojo /
  `--solucion` verde) en `caso.css`, usado en los hallazgos y en los elementos
  del rediseño de Health App. Una sola card, el color lo define la variante
  vía la variable `--acento`.
  ⚠️ Las variantes se escriben `ul.puntos--solucion` y NO `.puntos--solucion`:
  el valor por defecto lo pone `ul.puntos` y le gana en especificidad.
- 2026-08-06: logos de empresas y de estudios en Perfil profesional
  (`assets/images/sobre-mi/logos/`, 8 archivos).
- 2026-08-06: mapa de Capital Federal en Sobre mí. Usa la URL de Google con
  `?output=embed`, que NO necesita clave de API. Si dejara de funcionar, la
  alternativa está comentada en el HTML (OpenStreetMap).
- 2026-08-06: bloque **"Cómo trabajo"** en Sobre mí (aprender a codear + trabajo
  con IA como diferencial). Texto propuesto por Claude, PENDIENTE de aprobación.
- 2026-08-06: skills reorganizadas — Bootstrap afuera (no lo usa más), y las
  herramientas ahora van agrupadas: Diseño, Research, Gestión, Desarrollo, IA
  (Claude, Claude Code, conectores MCP).
- 2026-08-06: previews reales cargadas para Health App, WiFi, Pedidos y AIKA.
  Siguen con foto de relleno (picsum): Transporte, Retail y Design System.
- 2026-08-04: PENDIENTE DE DISCUSIÓN, no tocar sin Evelyn — el H1 del hero
  ("Hago que sistemas complejos se sientan simples") le parece bien por ahora;
  lo revisa al final del trabajo de contenido.


## Cómo trabajar el sitio (aprendido a los golpes, 2026-08-06)

- **Git desde la sesión de Claude NO funciona.** La carpeta montada no le deja
  borrar sus propios archivos `.lock`, y cada comando deja el repo trabado.
  Claude escribe los archivos; **el commit y el push los hace Evelyn desde
  VS Code**. Si aparece el cartel "Unable to create index.lock", pedirle a
  Claude que lo destrabe.
- **Verificar renderizando, no a ojo.** Claude tiene Chromium: puede abrir el
  sitio, sacar capturas y medir contraste o alineación de verdad. Se usó para
  el fondo de hormigón (velo al 55%) y para la alineación de las cards.
- **Nada que diga "pendiente" se publica.** Los placeholders llevan texto neutro.
- **Antes de publicar imágenes nuevas: mirarlas ampliadas.** Ver el log del
  2026-08-06 sobre datos personales.
