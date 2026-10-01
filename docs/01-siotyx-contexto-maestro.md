# Siotyx — Contexto maestro (para trabajar contenido)

> Documento de contexto para redactar casos de estudio del portfolio de Evelyn.
> Fuente: inventario de Figma + SRS de Transporte + decisiones de proyecto.
> **Regla dura: no inventar métricas ni resultados.** Si un texto necesita un número que no está acá, marcarlo como pendiente.

---

## 1. Quién y qué

- **Evelyn ("Pixel")** — UX/UI Designer Semi Senior, Argentina. Única diseñadora del producto (sole designer, sin equipo de diseño arriba).
- Trabaja con un **PM (David López)** y referentes técnicos. Input: tickets de Jira y documentación en Confluence (SRS y User Stories).
- **Nomenclatura (confirmada, importa en CV/LinkedIn):**
  - **Supply Solutions** = la empresa (el empleador).
  - **Siotyx** = la plataforma que agrupa todas las soluciones (el producto).
  - **Core, Transporte (Flota) y Retail** = las soluciones dentro de Siotyx.
  - **TrackIOT** = marca/entidad relacionada (relación exacta pendiente de confirmar).
  - Nunca escribir "trabajo en Siotyx": Siotyx es lo que diseña, no dónde trabaja.

## 2. Qué es Siotyx

Plataforma **B2B de trazabilidad de activos conectada a hardware RFID / IoT**, para logística.

- **Valor central:** el tiempo que se ahorra al identificar activos en cantidad (RFID lee muchos a la vez) y la **trazabilidad** de cada unidad. En Transporte, eso se traduce en control de neumáticos; en Retail, en control de inventario.
- **Arquitectura (decisión de sistema, no una carpeta):** la plataforma son cinco servicios — **Identity, Integration, Courier, Retail, Core** — y las verticales se enganchan vía la **API del Core**.
- **Tres productos, web y mobile cada uno, más un Design System** que los sirve a todos:
  - **Core:** capa transversal (acceso/login, scanner, gestión de etiquetas, ajustes de Wi-Fi y Bluetooth). Es infraestructura de diseño reutilizada en Transporte y Retail.
  - **Transporte / Flota:** 5 sprints mobile + 5 web.
  - **Retail:** en curso (4 secciones mobile + 3 web, más "in progress").
  - **Design System:** 13 páginas de documentación, tokens, componentes e ilustración técnica propia.

## 3. Los dos usuarios y la lógica de plataforma

- **Operario → mobile.** Donde la persona está físicamente presente (en la calle, en el taller, en el depósito): escanea, mide, ejecuta, confirma.
- **Administrador → web.** Supervisión y control de estados: dashboards densos, tablas, auditorías, gestión.
- La misma lógica se aplica en Transporte y luego en Retail.

## 4. Reglas de contenido (tono y estructura)

- **Idioma:** español rioplatense, voseo ("fijate", "hacé", "tenés"). Conciso y directo, sin relleno ni frases de manual.
- **Tono:** profesional, enfocado en **arquitectura de producto, resolución de casos borde, escalabilidad y Design Systems**. Nada de teoría básica de UX.
- **Nada de em dash (—) en el texto visible.** Usar comas, dos puntos o paréntesis. (Preferencia de Evelyn.)
- **Estructura estricta de cada caso de estudio:** Bajada · Ficha · Problema · Proceso · Solución · Impacto · Aprendizaje.
- **No inventar métricas.** Trabajar solo con datos reales. Formato honesto cuando no se recuerda exacto: `~` y `+` (ej: "+40 pantallas").
- **No exponer datos sensibles de clientes.** Siotyx es trabajo real con clientes involucrados.

## 5. Aporte propio vs. requerimiento (cruce SRS de Transporte)

Esto permite decir con precisión en una entrevista qué fue decisión de diseño y qué vino especificado. **No atribuirse de más.**

**Aporte propio, demostrable:**
1. **Lenguaje visual de configuraciones de ejes** (el caso más fuerte). El SRS da la lógica en notación ASCII (`[ ][ ]` por eje, hasta D3, trídem doble = 12 neumáticos). Evelyn construyó: **29 configuraciones de camión ilustradas por partes**, neumáticos como componente con **6 estados** (default, disponible, selected, success, warning, crítico), ejes como componente con **3 tipos** (simple, doble, AUX). El salto de notación de texto a sistema visual de un dominio físico es íntegramente diseño.
2. **Ejes AUX** (1 AUX, 2 AUX, 3 AUX): fuera del alcance escrito (el SRS llegaba a D3).
3. **El estado intermedio del apareamiento.** El SRS pedía un solo estado de alerta (rojo crítico si la diferencia de surco supera el umbral). Evelyn agregó el estado intermedio: **compatible · compatible por margen mínimo · incompatible**. Diseño resolviendo lo que el requerimiento simplificó de más.
4. **Reducción de alcance negociada.** Para alineación/balanceo y para apareamiento propuso además una **versión simple** (checkboxes + observaciones + foto / un solo campo), al entender que la medición real la hacen máquinas del taller. Criterio de alcance, no indecisión.
5. **Corrección de modelo mental (Retail):** el escaneo no identifica el ítem, lo **confirma y lo registra**. Ese cambio reescribió pantallas y copy.

**Requerimiento, no aporte (no atribuirse):**
- Umbral configurable del apareamiento: en el SRS.
- Retiro de servicio por 3 recapados y trazabilidad de parches: RF-09.
- Los 3 pasos de auditoría (tag del vehículo → kilometraje → rueda por rueda con PSI y mm): RF-08.
- "Neumático no corresponde al vehículo" (bloqueo con alerta roja): criterio de aceptación de RF-08.
- Roles (superadmin, admin, operario, taller, conductor, etc.): RF-13.
- SSO Google/Microsoft: RF-01.

**Gaps conocidos (por si los pregunta un entrevistador):**
- "Cuenta bloqueada temporalmente" (RF-01, bloqueo tras 5 intentos / 15 min): no hay pantalla diseñada.
- GPS / mapa interactivo (RF-11): no hay pantallas de mapa en Figma.
- Wi-Fi en Transporte es pantalla vacía (decisión de arquitectura); Bluetooth en Core quedó pausada. Hay que poder decir "esto se diseñó, esto se postergó, esto está en producción".

## 6. Números reales disponibles (confirmados, sin inventar)

- 29 configuraciones de camión ilustradas.
- Componente de neumático con 6 estados; componente de eje con 3 tipos.
- 13 páginas de documentación del Design System.
- 3 productos (Core, Transporte, Retail) × 2 plataformas.
- 5 sprints mobile + 5 web solo en Transporte.
- 7 flujos de mantenimiento físico en el módulo Taller.
- 15 requerimientos funcionales cubiertos (RF-01 a RF-15).

**Números que faltan (pendientes de que Evelyn los consiga):** cuántos vehículos / neumáticos / operarios / sucursales; cuánto tardaba una auditoría antes vs. ahora; desde cuándo en Supply, tamaño del equipo, qué módulos están en producción.

## 7. Posicionamiento del portfolio

- **Hilo conductor:** UX para software B2B complejo conectado al mundo físico / hardware. Recorrido: app de salud (Cober) → kioscos de autoservicio (Microsafe, hardware) → Wi-Fi en espacios comerciales (Neo) → sistemas internos (Aika) → scanners RFID y flotas (Siotyx).
- **Hero preferido:** "Hago que sistemas complejos se sientan simples: diseño UX/UI para plataformas B2B conectadas a hardware."

## 8. Estado del caso de estudio de Transporte (dónde estamos)

El caso "Siotyx Transporte" ya está armado en HTML/CSS. **Columna narrativa:** una cadena de habilitación **Tag → Neumático → Vehículo → Viaje**, con **Taller** y **Auditoría** como interrupciones que devuelven la cadena al inicio. (No está ordenado por sprints: la estructura sigue problema → decisión → resultado.)

Bloques ya maquetados (con sus pantallas reales):
- Hero / portada, Ficha, El problema, Los dos usuarios.
- El tag (lectura RFID, 4 pantallas), el neumático, el vehículo, el viaje (clímax).
- **Taller** (serie): Recapado (el sistema cuenta y avisa), Apareamiento (3 estados + 2 bottom sheets de reemplazo), Rotación y montaje (sobre el croquis de ejes).
- **Auditoría** (web): control de estados, tablero + 3 modales de detalle (incompleta / pendiente / en curso).
- **Control de accesos** (en producción): panel en vivo + el modal de error que escala de 1 a 13, agrupado por eje.
- **Tres decisiones chicas:** polaridad de KPIs (dashboard), foto obligatoria solo cuando hay algo que mostrar, confirmación en acciones destructivas.

Pendientes de contenido/decisión: métricas reales, portada final del hero, y la pantalla de Control de accesos en dark/light como cierre visual.
