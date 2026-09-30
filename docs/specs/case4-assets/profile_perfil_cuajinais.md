# profile_perfil_cuajinais — hoja de hechos

Clase: `profile`. Espec: §3, §5.1 y §15. Guion: alta del perfil en la detención y actualización durante el caso. Catálogos: `src/state/Private/ProfileCatalogCase4Es.ts:64-74` y `src/state/Private/ProfileCatalogCase4En.ts:64-74`.

Activo compartido ES/EN: `assets/profile_perfil_cuajinais.webp`, exportado a 256 × 256 desde `tools/raw/profile_perfil_cuajinais_raw.png`. Icono cuadrado de busto, sin texto ni marco, aislado sobre fondo transparente. `assets/examine_foto.webp` es referencia de identidad, no el retrato final.

## Hechos a verificar

### F1 Contenido

- [x] `PINTAR` — Retrato del mismo hombre identificado como El Cuajinais, con traje de lana marrón y cicatriz en la mejilla izquierda (§3; `examine_foto.webp` como referencia visual de identidad).
- [x] `PINTAR` — Encuadre de busto que permita reconocer el rostro y la cicatriz; no reproducir la pose tendida de la escena (§15; `docs/specs/case-4-el-caso-del-hotel-buena-vista.md:1360`).
- [x] `AUSENTE` — Billetera, habitación, cuerpo tendido, herida de bala, sangre, arma, botella y demás objetos de la escena. La ficha es del personaje, no de la evidencia (`ProfileCatalogCase4Es.ts:64-74`; `ProfileCatalogCase4En.ts:64-74`).

### F2 Texto en imagen

- [x] `AUSENTE` — Sin letras, rótulos, firma, marco ni elementos de interfaz.

### F3 Cifras/fechas/horas

- [x] `NO CONTRADECIR` — El retrato no fija fecha, suite ni circunstancia de muerte; esos datos sólo aparecen en el catálogo y el guion (§5.1; catálogos ES/EN).

### F4 Contrato en pantalla

- [x] `NO CONTRADECIR` — La descripción inicial lo presenta como huésped muerto en la Suite 304 y antiguo conocido de Botija; no añadir hechos narrativos al bitmap (`ProfileCatalogCase4Es.ts:64-74`; `ProfileCatalogCase4En.ts:64-74`).

### F5 Estilo

- [x] Ilustración de personaje con acabado cel-shaded de aventura legal, contorno oscuro limpio, color legible a tamaño de icono; nada fotorealista. Mantener el estilo de `assets/maruja_idle.webp` como referencia visual; el spec no define un §23.0 para el Caso 4.

### F6 Localización

- [x] Un único archivo compartido por ES y EN; la localización sólo cambia el texto del catálogo (spec §15; catálogos ES/EN).

## Consistencia (regenerar juntos)

- `perfil_cuajinais` ES↔EN — misma imagen y mismo recorte; sólo cambia el catálogo.
- `examine_foto.webp` — comparte identidad visual del personaje, pero no composición ni estado; usar únicamente como referencia y no regenerarlo junto con el perfil.

## Conflictos abiertos

- Ninguno.

## Hallazgos de auditoría 2026-09-29

**Veredicto:** cumple en identidad, contenido, estilo y exclusiones.

**Cumple**

- F1 — El busto conserva la identidad del hombre de la referencia, muestra traje marrón y una cicatriz en su mejilla izquierda.
- F1 — La composición es un retrato erguido; el fondo y la pose de la foto de escena no aparecen.
- F1/F2 — No aparecen billetera, escena del crimen, arma, sangre, texto ni marco.
- F4/F6 — La imagen no añade hechos narrativos y puede compartirse sin cambios entre ES y EN.
- F5 — Contorno oscuro limpio, cel shading y rasgos legibles a 256 × 256.

**Defectos confirmados:** ninguno.
