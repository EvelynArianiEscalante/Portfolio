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

## PENDIENTES (en orden sugerido)

0. **DOS ARCHIVOS QUE SOLO PUEDE SUBIR EVELYN** (todo el código ya está listo
   y esperándolos):
   - `assets/docs/cv-evelyn-ariani-escalante.pdf` → el botón "Descargar CV en
     PDF" ya está maquetado en el sidebar de la ventana Notas de `index.html`,
     con el atributo `hidden` puesto. Cuando el PDF exista, borrar la palabra
     `hidden` de esa línea y listo.
   - `assets/images/og-preview.jpg` (1200×630 px) → las etiquetas Open Graph
     ya están en el `<head>` de `index.html` y `health-app.html` apuntando a
     ese nombre. Sin la imagen el preview sale sin foto, no se rompe nada.

1. **Responsive / mobile** — el sitio NO está adaptado a mobile aún. Decidir
   qué es el "escritorio" en un celular. Prioritario: los reclutadores abren
   desde el teléfono.
2. **Screenshots de Figma** — reemplazar la foto placeholder repetida
   (picsum, clase `.thumb--placeholder`) por captures reales. Es el mayor
   salto de calidad disponible.
3. **Páginas de caso restantes** — el molde es `pages/casos-de-estudio/health-app.html`
   (+ `css/pages/caso.css`). Falta: Pedidos, AIKA (contenido listo en
   `docs/contenido-casos.md`), WiFi (contenido pendiente de extraer), y los
   casos de Siotyx (contenido a construir con Evelyn).
4. **Contenido WiFi Marketing** — el nodo de Figma `4075:8974` da error del
   servidor; pedirle a Evelyn el texto o reintentar.
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
- 2026-08-06: previews reales cargadas para Health App, WiFi, Pedidos y AIKA.
  Siguen con foto de relleno (picsum): Transporte, Retail y Design System.
- 2026-08-04: PENDIENTE DE DISCUSIÓN, no tocar sin Evelyn — el H1 del hero
  ("Hago que sistemas complejos se sientan simples") le parece bien por ahora;
  lo revisa al final del trabajo de contenido.
