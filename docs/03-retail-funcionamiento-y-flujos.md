# Siotyx Retail — Funcionamiento y flujos

> Mapa del producto Retail para redactar contenido.
> Fuente: inventario de Figma (web + mobile, secciones aprobadas + in progress).
> Estado: **en curso.** No inventar métricas.

---

## Modelo mental del producto

Paralelo al de Flota, mismo ADN de plataforma:

**Tag → Ítem → Ubicación → Pedido**

- Un **tag** (RFID o código de barras) identifica un ítem de inventario.
- Un **ítem** se recibe, se ingresa y se ubica en el depósito.
- Una **ubicación** se desglosa en Pasillo / Fila / Nivel.
- Un **pedido** se arma eligiendo productos del inventario.

**Corrección de modelo mental (aporte propio de diseño):** el escaneo **no identifica** el ítem, lo **confirma y lo registra**. Ese cambio reescribió pantallas y copy.

**Dos usuarios:**
- **Operario de depósito (mobile):** recibe, escanea, ingresa, hace picking, busca.
- **Supervisor (web):** dashboard, recepción, almacén, pedidos.

---

## WEB — Supervisor

### Aprobado
- **Home / Dashboard:** 4 KPI cards + **tabla de actividades recientes con paginación** ("Mostrando 8 de 120 eventos de hoy"). **Sidebar en dos estados: colapsado (80px) y expandido (200px)**, con el layout recalculado en cada uno.
- **Recepción:** listado con buscador local + filtro · tabla con columnas Hora / Evento / Detalle / Ubicación / Estado · detalle de recepción · tooltip.

### In progress
- **Ingresos:** listado + detalle de ingreso.
- **Almacén:** tabla sin columna de estado.
- **Pedidos:** listado con botón "Crear nuevo pedido" en el header de la tabla, chips de origen.
- **Creación de pedido — 4 estados progresivos del modal:**
  1. Sin productos agregados.
  2. Producto seleccionado (se activa el botón agregar).
  3. Con lista de productos.
  4. Altura máxima con scroll interno.
- **Componente dropdown buscador** de productos, con íconos que distinguen **Unitario (Fingerprint)** de **Lote (Stack)** y SKU a la derecha.
- **Contador por producto** (menos / cantidad / más) + eliminar, con resumen tipo "2 productos · 22 items".
- Detalle de pedido · toast.

---

## MOBILE — Operario de depósito

### Aprobado
- **Home Retail:** saludo + badge de estado + sección OPERACIONES con 5 cards.
- **Recepción:** recepciones pendientes · recepción (progress cards) · **ítems de recepción con barra de progreso y chips de filtro** · bottom sheet de filtros (por Tipo y por Estados) · variantes Todos / Selecciona · recepción finalizada.
- **Escáner de código de barras:** escáner · **escáner sin conexión** · escaneando (animación) · **recepción exitosa unitario** · **recepción exitosa lote** · código no coincide · falla de lectura.
  > Dos modos reales: unitario y lote. Más el estado sin conexión (el depósito no siempre tiene señal).
- **Ingreso — asignación de tags:** pendientes de ingreso · ingresos · continuación de recepción · scanner · **Tag detectada (tipo de producto externo)** vs **Tag detectada (tipo de producto desde Siotyx)** (dos variantes según de dónde viene el dato) · ingreso · ingreso finalizado · **ingreso empty**.

### In progress
- **Picking:** pendientes.
- **Buscador de proximidad:** animación de manómetro · **producto encontrado con ubicación desglosada en Pasillo / Fila / Nivel** · producto no encontrado.
  > El mismo manómetro de proximidad del Core: el lector guía físicamente hasta la etiqueta.

---

## Qué comparte con Flota (y con el Core)

- **Scanner del Core:** detección, escaneo masivo vs. uno por uno, estado sin conexión, action sheet, manómetro de proximidad (lejos / acercándose / muy cerca).
- **Cobertura de estados:** error, vacío, parcial, no encontrado, no coincide, sin conexión. Sistemáticamente en todos los flujos.
- **Criterio de plataforma:** mobile donde el operario está presente, web para supervisión.
- **Mismo Design System:** tokens, componentes e ilustración.

## Para el contenido del caso (si se arma un caso Retail)

- El ángulo más fuerte es el **modelo único que atraviesa dos verticales**: la misma lógica de tag → unidad → ubicación/posición → operación, en Transporte y en Retail, sin rediseñar la base.
- La **corrección de modelo mental** (escanear confirma, no identifica) es un buen "aprendizaje" de caso.
- Estado honesto: Retail está **en curso** (hay secciones aprobadas y otras in progress). Decirlo así, no como terminado.
