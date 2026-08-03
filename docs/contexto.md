# Contexto del proyecto — Portfolio de Evelyn

> Este archivo le da contexto a Claude (y a cualquier futura sesión) sobre quién soy
> y cómo quiero trabajar. Mantenerlo actualizado a medida que el proyecto avanza.

## Quién soy

- Diseñadora UX/UI, rol Semi Senior.
- Especializada en software complejo B2B conectado a hardware.
- Diseño en Figma. Estoy creando un sistema de diseño desde cero.
- Email: eescalante@supplysolutions.ai

<!-- COMPLETAR: pegar aquí bio, experiencia y logros desde el proyecto de Claude -->

## Objetivo del portfolio

- Calidad antes que cantidad: pocos casos de estudio, bien contados.
- Código ordenado y escalable (la estructura está documentada en el README).
- Moderno, con alguna animación, pero sin complejidad innecesaria.

## Secciones

1. **Casos de estudio UX/UI** — proyectos con proceso completo.
2. **Sistema de diseño** — el design system que estoy construyendo.
3. **Sobre mí + contacto** — bio, experiencia, CV descargable.
4. **Lab** — experimentos: este portfolio hecho en código, mi trabajo con IA, la evolución del proyecto.

<!-- COMPLETAR: lista de proyectos/casos de estudio que quiero mostrar -->

## Cómo quiero trabajar con Claude

- **Aprender, no solo recibir código.** Mis conocimientos de código son básicos:
  explicarme qué hace cada cosa y por qué, sin asumir que ya lo sé.
- Estoy aprendiendo **VS Code**: incluir tips de uso cuando sea relevante
  (atajos, extensiones útiles, cómo previsualizar el sitio).
- Stack: **HTML, CSS y JavaScript puro**, sin frameworks.
- Avanzar paso a paso: entender una pieza antes de pasar a la siguiente.
- Respetar las convenciones del README (nombres en minúsculas con guiones,
  un componente por archivo, tokens en `css/base/`).

## Decisiones tomadas

- 2026-08-02: estructura de carpetas creada y documentada en README.md.
- 2026-08-02: **dirección visual elegida** — portfolio como escritorio estilo macOS
  (referencia: plantilla "MakOS"): fondo oscuro con grano fotográfico, ventanas
  reales arrastrables, dock glass, tipografía Figtree. Las maquetas exploratorias
  quedaron en `pages/lab/` (v1 descartada, v2 aprobada como base).
- 2026-08-02: **estructura del escritorio** — jerarquía deliberada: carpeta
  `Siotyx` (contiene Core, Transporte, Retail) + carpeta `Proyectos anteriores`
  (Health app design, Sistema WiFi Marketing, Pedidos & Gestión, AIKA) +
  Design System y Sobre mí como items sueltos. La menubar es navegación real
  (camino rápido para reclutadores); "Proyectos" lleva a un índice plano de casos.
- 2026-08-02: **"Sistema de Pedidos & Gestión" = Microsafe renombrado**
  (kioscos de autoservicio con hardware). Mantener consistencia de renombrado.
- 2026-08-02: sitio real construido: tokens en `css/base/variables.css`
  (paleta oscura), componentes separados (icono-escritorio, ventana, dock),
  JS en `js/components/` (ventanas + reloj). Home = `index.html`.

## Pendientes visuales

- Reemplazar la foto placeholder repetida (picsum) por screenshots reales de Figma.
- Imagen de fondo definitiva (persona en b/n o visual UX) en vez del gradiente.
- Páginas de caso completas (los "Ver caso completo →" apuntan a `#`).
- Páginas de Sistema de diseño y Sobre mí (links de menubar en `#`).
- URLs reales de LinkedIn y Behance en el dock.

<!-- Ir anotando aquí decisiones importantes con su fecha -->
