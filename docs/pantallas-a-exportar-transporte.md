# Pantallas a exportar — Caso Siotyx Transporte

**Cómo funciona:** exportá cada pantalla desde Figma con el nombre indicado
y guardá los PNG en `assets/images/casos-de-estudio/transporte/originals/`.
**Nada más.** Claude convierte a WebP, hace los recortes derivados, escribe
los epígrafes y conecta todo al HTML. Vos no tocás código.

**Formato:** PNG a 2x. Sin marco de navegador, sin sombras, sin mockups de
dispositivo, sin inclinación. Solo la pantalla.

---

## ⚠️ ANTES de exportar — 2 correcciones en Figma

1. **Datos dummy repetidos:** en el dashboard web hay cinco filas con la
   misma patente y en mobile doce tags con el mismo ID. Variarlos.
2. **Botón "Reasignar":** en la pantalla de neumático sin vehículo asignado
   debe decir **"Asignar"**. Corregir, o no mostrar esa pantalla con el
   botón visible.

**Regla general:** toda patente/dominio, nombre de conductor y EPC/ID que
se vea tiene que ser ficticio (tipo "AB 123 CD").

---

## 📱 Del archivo MOBILE — 13 exports

| # | Nombre del archivo | Qué pantalla es | Ojo con |
|---|---|---|---|
| 1 | `tag-detectado.png` | Tag detectado con neumático asignado (ficha completa) | EPC ficticio |
| 2 | `tag-no-identificada.png` | Tag no identificada, con botón "Reportar tag" visible | EPC ficticio |
| 3 | `tags-detectadas.png` | Las 12 tags detectadas listas para dar de alta | IDs variados |
| 4 | `resultado-altas.png` | Resultado de altas: 12 leídas / 10 exitosas / 2 con error | — |
| 5 | `preparar-medicion.png` | "Preparar medición" completa: diagrama INT/CEN/EXT/PSI + los 4 pasos | — |
| 6 | `configuracion-ejes.png` | Configuración de ejes con el acordeón S1-D1 abierto, camión ilustrado y chips | — |
| 7 | `apareamiento-3-estados.png` | Los TRES estados de apareamiento juntos, lado a lado: 0.5mm / 3mm / 5mm | van juntos o no se entiende |
| 8 | `recapados-2-vs-3.png` | El neumático con 2 recapados JUNTO al de 3 (cambio de color y de botón) | van juntos |
| 9 | `croquis-posicion.png` | Selección de posición sobre el croquis de ejes del camión | — |
| 10 | `auditoria-en-curso.png` | Auditoría en curso sobre el croquis, con posiciones ya escaneadas | — |
| 11 | `revision-final-critica.png` | Revisión final de auditoría en crítico, botón "Enviar a taller" | — |
| 12 | `baja-con-foto.png` | Formulario de baja con la foto obligatoria | — |
| 13 | `grilla-camiones.png` | Varias ilustraciones de camión juntas, SIN interfaz alrededor (armar composición en Figma) | tu activo más fuerte: que respire |

## 🖥️ Del archivo WEB — 5 exports

| # | Nombre del archivo | Qué pantalla es | Ojo con |
|---|---|---|---|
| 14 | `dashboard.png` | Dashboard completo con las 4 cards de KPI visibles | patentes variadas y ficticias |
| 15 | `ficha-vehiculo.png` | "Detalles del vehículo": croquis de ejes + cards de posición, una en amarillo | dominio ficticio |
| 16 | `validacion-critica.png` | Validación de neumáticos en crítico: lista marcada, mensaje de bloqueo y los 2 botones de salida | conductor y dominio ficticios |
| 17 | `auditoria-incompleta.png` | Auditoría incompleta: contador 4 de 8 + botón de notificar al operario | — |
| 18 | `modales-error.png` | Los TRES modales de error juntos en una imagen: 1 tag / 1 neumático / 13 colapsado y expandido | EPCs y patentes ficticios |

---

## 🤖 De esto se encarga Claude (NO exportar)

- La **portada** del caso: sale de `dashboard.png` recortado a 21:9.
- El **detalle del diagrama del neumático** ampliado: recorte de
  `preparar-medicion.png`.
- La **card de KPI** de la tira de detalles: recorte de `dashboard.png`.
- El reuso de `tag-no-identificada.png` y `modales-error.png` en la tira
  de detalles.
- Conversión a WebP, epígrafes, y conexión de todo al HTML.

Cuando estén los PNG en la carpeta, avisale a Claude con un
"ya están las pantallas de transporte" y se encarga del resto.
