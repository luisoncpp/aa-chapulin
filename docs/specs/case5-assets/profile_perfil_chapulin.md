# profile_perfil_chapulin — hoja de hechos
Clase: `profile`. Espec: §6.1 y §23.5. Guion: D1 celda (`celda.ts` / `celda_en.ts`), actualización de GIRO 3 (`trial_day3_success_berrondo.ts` / `_en.ts`).

## Mapa semántico

- Persona: El Chapulín Colorado, defensor titular del Caso 5 por designación de Don Ramón.
- Identidad visual compartida: busto recortado de `chapulin_idle`; el perfil no inventa una pose ni una vestimenta distinta.
- Función narrativa: no tiene título, lleva antenitas y litiga con la insignia de abogado prestada por su cliente.
- Medio: icono cuadrado de Acta de Personajes, sin texto ni marco, sobre fondo plano propio.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto reconocible de El Chapulín Colorado, recortado de la pose `chapulin_idle` correspondiente (§23.5).
- [ ] `PINTAR` — La identidad debe conservar las antenitas y el diseño del Chapulín; el perfil representa al defensor del Caso 5, no a Don Ramón ni a otro personaje (§6.1; `src/state/Private/ProfileCatalogCase5Es.ts:21-29`).
- [ ] `NO CONTRADECIR` — La imagen debe poder acompañar el rol de defensor titular designado por el acusado y la insignia prestada; esas relaciones se expresan en el catálogo, no requieren texto pintado (§6.1; `src/state/Private/ProfileCatalogCase5Es.ts:25-28`).

### F2 Texto en imagen

- [ ] `AUSENTE` — No debe haber nombre, rol, etiquetas, marco ni otro texto dentro del icono (§23.5).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La ficha se entrega en la celda del día 1, después de que Chapulín recibe la insignia y se entregan las fichas de Don Ramón y Casimiro; la imagen no debe imprimir esa secuencia ni ninguna fecha (`src/case/case5/Private/celda.ts:20-28`; EN `celda_en.ts:20-28`).
- [ ] `NO CONTRADECIR` — La actualización de GIRO 3 afirma que ganó tres jornadas seguidas y aún no demostró que alguien estuviera en el pasillo; es texto de `updates[]`, no un cambio visual obligatorio del busto (§6.1; `src/case/case5/Private/trial_day3_success_berrondo.ts:29-51`; EN `_en.ts:29-51`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — El icono usado por la entrada `perfil_chapulin` debe ser `assets/profile_perfil_chapulin.webp` en ES y EN; ambas variantes comparten la misma imagen (§23.5; `src/state/Private/ProfileCatalogCase5Es.ts:21-26`; `ProfileCatalogCase5En.ts:21-26`).
- [ ] `NO CONTRADECIR` — La ficha aparece durante la escena de celda como la tarjeta del propio Chapulín, junto con Don Ramón y Casimiro, y queda disponible en el Acta de Personajes (`src/case/case5/Private/celda.ts:40-48`; EN `celda_en.ts:40-48`).
- [ ] `NO CONTRADECIR` — La misma tarjeta recibe una actualización al cierre de GIRO 3, después de que el Juez señala que la defensa ganó tres jornadas sin colocar a nadie en el pasillo (`src/case/case5/Private/trial_day3_success_berrondo.ts:29-51`; EN `trial_day3_success_berrondo_en.ts:29-51`).
- [ ] `NO CONTRADECIR` — Durante un contrainterrogatorio la tarjeta de persona no ofrece botón de presentar; el señalamiento de persona sólo está autorizado en los dos puntos definidos por §6.2 (§6.2; `docs/flows/character-record-flow.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada, al borde de la caricatura; colores primarios saturados; televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado, melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes, con registro de papel, madera, polvo, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés salvo variantes EN exigidas y cualquier tono rosa o magenta en primer plano por el pipeline sobre `#FF00FF` (§23.0).
- [ ] `PINTAR` — Lienzo final de 256 × 256, busto sobre un color plano distinto por persona, con fondo nunca magenta (§23.5).

### F6 Localización

- [ ] `PINTAR` — El archivo de imagen es común a ES y EN: el icono no contiene texto localizado (§23.3, §23.5; `ProfileCatalogCase5Es.ts:25`, `ProfileCatalogCase5En.ts:25`).
- [ ] `TEXTO EXACTO` — En ES, la ficha usa `name: El Chapulín Colorado`, `role: Defensor titular` y la descripción: `Defensor titular, por designación del propio acusado. No tiene título, tiene antenitas. Litiga con la insignia prestada de su cliente.` (`src/state/Private/ProfileCatalogCase5Es.ts:22-28`).
- [ ] `TEXTO EXACTO` — En EN, la ficha usa `name: El Chapulín Colorado`, `role: Lead defense` y la descripción: `Lead defense counsel, appointed by the defendant himself. No law degree, has antennae. Litigates with his client’s borrowed badge.` (`src/state/Private/ProfileCatalogCase5En.ts:22-28`).
- [ ] `TEXTO EXACTO` — La actualización ES es `Ganó tres jornadas seguidas y no ha demostrado todavía que alguien estuviera en ese pasillo.`; la EN es `He has won three trial days in a row and still has not shown that anyone was in that corridor.` (`ProfileCatalogCase5Es.ts:29-31`; `ProfileCatalogCase5En.ts:29-31`).

## Consistencia (regenerar juntos)

- `chapulin_idle` — comparte identidad, ropa, antenitas, rostro y diseño base; el busto del perfil debe ser un recorte de esa pose. **Regenerar juntos; este activo no es fuente de verdad del otro.**
- `chapulin_point`, `chapulin_slam`, `chapulin_panic` — comparten la identidad del personaje y deben conservar el mismo diseño de Chapulín. **Regenerar juntos; este activo no es fuente de verdad de los otros.**
- `profile_perfil_chapulin` de Caso 1 — comparte el mismo archivo físico y la misma identidad, aunque el catálogo de cada caso le asigna contexto narrativo distinto. **Regenerar juntos; este activo no es fuente de verdad del otro.**
- `profile_perfil_donramon`, `profile_perfil_casimiro` y el resto de las diez fichas de §6.1 — comparten el sistema de iconos: 256 × 256, busto, color plano individual, sin texto ni marco. **Regenerar juntos; este activo no es fuente de verdad de los otros.**

## Conflictos abiertos

- §23.5 titula la sección “Iconos de persona (10 nuevos)” y describe los diez perfiles de Caso 5 como nuevos, pero el manifiesto del Caso 1 ya registra `assets/profile_perfil_chapulin.webp` recortado de `chapulin_idle` (`docs/specs/case-1-asset-manifest.md:62`) y los catálogos de Caso 1 ya lo consumen (`src/state/Private/ProfileCatalogCase1Es.ts:10-16`; `ProfileCatalogCase1En.ts:10-16`). Esta hoja conserva la identidad compartida y no decide si el archivo debe contarse como reutilizado o regenerado.
- §6.1 llama a Chapulín “defensor titular” y el catálogo Case 5 conserva ese rol, mientras que el catálogo Case 1 lo presenta como “acusado”; es una diferencia de contexto entre episodios, no una diferencia visual resoluble desde este activo (`src/state/Private/ProfileCatalogCase5Es.ts:23-28`; `ProfileCatalogCase1Es.ts:10-16`).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por instrucción del protocolo. No se confirma ni se descarta ningún defecto visual del archivo actual.
- Hoja derivada únicamente de §6.1, §23.0, §23.3, §23.5, el Libro de hechos y las referencias ES/EN citadas.
