# Siotyx Flota (Transporte) — Funcionamiento y flujos

> Mapa completo del producto Transporte / Gestión de Flotas para redactar contenido.
> Fuente: inventario de Figma (5 sprints mobile + 5 web) y la cadena narrativa del caso.
> No inventar métricas.

---

## Modelo mental del producto

Todo gira alrededor de una **cadena de habilitación**:

**Tag → Neumático → Vehículo → Viaje**

- Un **tag RFID** identifica una unidad física.
- Un **neumático** se registra y se le asigna un tag.
- Un **vehículo** se arma (configuración de ejes) y se le asignan neumáticos, uno por uno.
- Un **viaje** solo se habilita si el estado de los neumáticos lo permite.

**Taller** y **Auditoría** son interrupciones de esa cadena: sacan una unidad de circulación, la revisan o la reparan, y la devuelven al inicio.

**Dos usuarios:**
- **Operario (mobile):** escanea, mide, ejecuta operaciones físicas, confirma.
- **Administrador (web):** supervisa, controla estados, audita, gestiona.

---

## MOBILE — Operario (5 sprints)

### Sprint 1 · Lectura de tags
- Home, login, reset password (2 pasos), bottom sheet menú (5 variantes).
- Scanner para **alta de tags** y scanner para **asignar**.
- Tags detectadas para dar de alta → resultado de altas → resultado con error → overlay.
- **Tag detectado: 5 resoluciones distintas de una misma lectura** (caso borde fuerte):
  1. Vehículo asignado y disponible para viaje.
  2. Con neumático y vehículo asignado.
  3. Neumático asignado y vehículo sin asignar.
  4. Sin vehículo ni neumático.
  5. Tag no identificada.
  > Una sola lectura puede caer en cinco estados; cada uno ofrece la acción siguiente.

### Sprint 2A · Neumáticos y medición con sonda
- Asignar tag a: vehículo de la flota · vehículo nuevo · neumático de inventario · neumático nuevo.
- Formulario de registro de neumático + scanner para registrarlo.
- **Medición con sonda por bandas de rodamiento** (hardware físico): paso 1 → Midiendo INT → Resultado INT → Midiendo CEN → Resultado CEN → Midiendo EXT → Resultado EXT.
- Resultado final con **tres diagnósticos: balanceado · irregular · crítico**.
- Prototipado como bottom sheet con scroll interno + vista expandida completa.
- Ingreso manual: variante **recapado** y **no recapado**.
- Fotografías: variante *recomendado* vs *obligatorio* (evidencia condicional según el caso).
- Alerta de volver a medir · neumático en mantenimiento · registrado OK (nuevo / desgaste irregular).

### Sprint 2B · Registro de vehículos (5 pasos)
1. **Configuración de ejes:** Rígido · Tractor · Bitrén (+ estado "una configuración seleccionada").
2. Datos del vehículo.
3. Lectura y asignación de tag → vehículo asignado.
4. **Asignación de neumáticos uno por uno**, con validación por neumático: de inventario con todos los datos · sin datos de PSI y mm · **PSI irregular · PSI crítico · profundidad irregular · profundidad crítica** · confirmación y éxito por neumático · selección de tipo de neumático. (Dos variantes de interacción exploradas: con y sin inputs.)
5. Revisión final → registro vinculado con éxito.
- Registros recientes · pendientes · modal de decisión (irregular) · **salir sin guardar vs. salir guardando en pendiente**.

### Sprint 3 · Etiquetas, flota y viajes
- **Bajas:** de tag de vehículo · de tag de neumático · formularios de baja con motivo + tooltip · visualización de imágenes · modal de confirmación final · modal "tag eliminada".
- **Reasignación de etiqueta.**
- Secciones con navigation bar: **Flota (vehículos) · Neumáticos · Viajes**.
- Detalle de vehículo por estado: sin vehículo asignado · en viaje · en taller · disponible · con vehículo asignado.
- Detalle de neumático (3 variantes).
- **Estado de neumáticos en dos visualizaciones: vista de ejes (cenital) y vista lista.**
- **Programación de viaje (4 pasos):** detalles → vehículo y conductor (conductor asignado / sin conductor / sin vehículo / buscador sin resultados) → **validación del estado de neumáticos (óptimo / advertencia / crítico) cruzada con la decisión de enviar al taller** → confirmación.
  > Un neumático en estado crítico puede bloquear el viaje: la validación frena, no deja arrancar con el dato equivocado.

### Sprint 4 · Notificaciones y Taller
- Notificaciones (vista completa + vista real con bottom bar) · Home · Taller (menú de operaciones).
- **Siete flujos de mantenimiento físico**, cada uno con la misma estructura: scanner → info del neumático → acción → confirmación → éxito.

| Flujo | Particularidad |
|---|---|
| **Rotación** | Selección de nueva posición → confirmación → rotación exitosa (sobre el croquis de ejes). |
| **Montaje** | Selección de vehículo → selección de posición → posición seleccionada. |
| **Desmontaje** | Detalle de desmontaje → vista de ejes → confirmación. |
| **Apareamiento** | Info neumático 1 y 2 → resultados **colapsados / expandidos** · en margen · incompatibles · opción escáner · **opción simple de un solo campo** · selección de neumático · bottom paso 1 y 2. |
| **Alineación y balanceo** | Versión simplificada (se mide con máquinas del taller). |
| **Calibración de presión** | Ingreso de presión medida. |
| **Reparación de pinchaduras** | Bottom sheet "otro" + confirmación. |
| **Recapado** | **Retirar de servicio a los 3 recapados** · estado no reparable. A los 2 recapados avisa (monitoreo), al 3ro la alerta pasa a roja y el botón cambia de "finalizar recapado" a "retirar de servicio". |

### Sprint 5 · Auditoría mobile
- Pestañas Activas / Historial · estados: en curso · pendiente · incompleta · finalizada.
- **Flujo de 3 pasos:** kilometraje del vehículo (1/3) → neumáticos (2/3: listado, parcial, todos escaneados) → revisión final (3/3).
- Finalizado: óptimo · advertencia · crítico · modal envío a taller · **modal "neumático no corresponde al vehículo"** (frena el registro del dato equivocado) · bottom sheets de mediciones.

---

## WEB — Administrador (5 sprints)

### Sprint 1
- Login (3 variantes) · reset password · **Home Dashboard** (dos anchos) · métricas · **filtros de dashboard + set completo de interacciones + indicador de filtros activos** · gestión de usuarios internos · gestión de clientes · ajustes.
- **Control de accesos en Dark Mode y Light Mode** (dos sets completos) · modal de detalles de acceso + tooltip · comportamiento de tabla.
- **Dashboard KPIs (4 indicadores con regla de polaridad propia):** viajes finalizados (sube = verde), unidades en taller (sube = rojo), viajes en curso, disponibilidad de flota (no tiene dirección: tiene un rango saludable).
  > La polaridad de cada KPI es una decisión de diseño: un número que sube no siempre es buena noticia.

### Sprint 2
- Neumáticos · Flota · Registro de vehículo (Rígido / Tractor / Bitrén).
- **Datos del vehículo con tabs: Overview · Neumáticos · Kilometraje · Mantenimiento** (+ variante cards closed).
- Registro de vehículos pendientes · registro exitoso · revisión final · modal registro de nuevo neumático · toast · salir sin guardar vs. guardar en pendiente.

### Sprint 3
- **Baja de etiqueta desde tres puntos de entrada:** desde Neumáticos · desde Vehículos · desde Ajustes. Gestión de altas y bajas · tabla de bajas en Ajustes · menú contextual · modales · modal "tag eliminada" · tooltip de motivo.
- Viajes · programación pendientes · **programación 4 pasos (1/4 → 4/4)** + exitosa · vehículo y conductor (4 estados) · validación de neumáticos (óptimo / advertencia / crítico) · vista de ejes · modal cancelar viaje · detalles de viaje · iniciar viaje ahora · enviar vehículo al taller.

### Sprint 4
- Alertas y notificaciones · modal notificaciones (2 variantes) · Taller · **modal orden de mantenimiento** · modal detalles · menú.
  > Diferencia clave web/mobile: en web el administrador **crea** la orden de mantenimiento; en mobile el operario la **ejecuta**.

### Sprint 5 · Auditoría web
- Auditoría · nueva auditoría · **modales de detalle por estado: pendiente · incompleta · en curso · finalizada** (óptimo / advertencia / crítico) · eliminar auditoría · notificación · tooltip · comportamiento de tabla.
- La auditoría se dispara sola (por kilometraje) o a pedido del administrador. El estado "incompleta" guarda el progreso escaneado y manda el intento al historial; desde el detalle el admin decide eliminarla o notificar al operario para que la retome.

---

## Control de accesos (en producción)

- Portal que registra **entradas y salidas de camiones por lectura RFID en el portón**, sin intervención humana. Está operativo en producción.
- Panel/log en vivo: Vehículo · Operación (Entrada/Salida) · Estado (Autorizado / Error de Validación) · Tiempo.
- **Cuando la lectura falla, un único modal escala de 1 a 13 errores sin cambiar de patrón:** un camión puede llegar con 13 etiquetas con error (la del vehículo + las de 12 neumáticos). El modal **agrupa por eje, se colapsa y tipifica el motivo** (tag no encontrada, tag duplicada, etc.).
- Diseñado en **dark mode y light mode** en paralelo.

---

## Decisiones de diseño para destacar (criterio de sistema)

- **Un mismo patrón que aguanta de 1 a 13 errores** sin romperse (modal de control de accesos).
- **Polaridad de KPIs:** cada indicador tiene su regla; la disponibilidad de flota tiene rango, no dirección.
- **Evidencia condicional:** la foto se pide solo cuando aporta (estado crítico), no como trámite.
- **Confirmación en acciones destructivas:** eliminar un vehículo (sin vuelta atrás) siempre frena con confirmación.
- **Sin callejones:** cada bloqueo o error ofrece la acción siguiente en la misma pantalla.
- **5 resoluciones de una sola lectura de tag:** cobertura exhaustiva de estados.
- **Negociación de alcance:** versiones simples para lo que en la práctica resuelve una máquina del taller.
