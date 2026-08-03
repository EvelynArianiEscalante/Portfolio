# Portfolio — Evelyn Ariani

Portfolio personal de diseño UX/UI, construido desde cero en HTML, CSS y JavaScript puro — sin frameworks.

**Concepto:** el sitio es un escritorio estilo macOS. Los proyectos viven en carpetas que se abren como ventanas del Finder, la experiencia se recorre como un sistema operativo, y la barra de menú funciona como navegación tradicional para quien quiere ir directo al contenido.

## Estructura del proyecto

```
portfolio/
│
├── index.html                  → Home: el escritorio (carpetas, ventanas, dock)
├── README.md                   → Este archivo
├── .gitignore                  → Archivos que Git ignora
│
├── assets/                     → Todo lo que NO es código
│   ├── images/                 → Imágenes por sección (casos, lab, sobre mí)
│   ├── icons/                  → Íconos SVG
│   ├── fonts/                  → Tipografías (Figtree se carga desde Google Fonts)
│   └── docs/                   → CV en PDF y otros descargables
│
├── css/                        → Estilos, organizados como un design system
│   ├── base/                   → reset.css, variables.css (tokens), tipografia.css
│   ├── layout/                 → escritorio.css, menubar.css
│   ├── components/             → icono-escritorio.css, ventana.css, dock.css
│   └── pages/                  → home.css (posiciones y ajustes del escritorio)
│
├── js/                         → JavaScript
│   ├── components/             → ventanas.js (abrir/cerrar/arrastrar), reloj.js
│   ├── animations/             → Animaciones (pendiente)
│   └── utils/                  → Funciones auxiliares reutilizables
│
├── pages/                      → Páginas del sitio (además del home)
│   ├── casos-de-estudio/       → index.html (listado) + un HTML por caso
│   ├── sistema-de-diseno/      → Sección dedicada al design system (pendiente)
│   ├── sobre-mi/               → Bio, experiencia y contacto (pendiente)
│   └── lab/                    → Experimentos y maquetas exploratorias
│
└── docs/                       → Notas del proyecto (contexto, decisiones, pendientes)
```

## Convenciones

- **Nombres de archivos y carpetas:** siempre en minúsculas, sin espacios ni tildes, con guiones (`caso-app-logistica.html`).
- **Tokens primero:** colores, tipografía y espaciados viven como variables CSS en `css/base/variables.css` y se reutilizan en todo el sitio — igual que las variables de un design system en Figma. Ningún color se escribe "a mano" fuera de ahí.
- **Un componente = un archivo,** tanto en CSS como en JS.
- **Clases con BEM:** `bloque__elemento--variante` (ej. `ventana__titulo`, `icono--carpeta`).
- **Imágenes:** optimizadas antes de subir (WebP o JPG comprimido), en la subcarpeta de su sección.

## Principio del proyecto

Calidad antes que cantidad: pocos casos de estudio, bien contados, sobre una base de código ordenada y escalable.
