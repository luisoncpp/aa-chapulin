# examine_efectos — hoja de hechos

Clase: `examine`. Espec: §23.0, §23.3, §5.3 y §24.C. Guion: investigación D3 penal (`hotspot_caja`), D3 `openingPresent`, clímax E5 y catálogo ES/EN. La hoja cubre `examine_efectos.webp` y `examine_efectos_en.webp`.

## Mapa semántico y alcance

Es la vista ampliada de los efectos de Casimiro Lengua recuperados de la caja 214-J en la bodega de efectos del penal el 8 de diciembre. El activo debe comunicar dos núcleos probatorios: la libreta negra donde Casimiro dejó cinco puntos sobre la máquina y los documentos, y la copia al carbón de su oficio del 8 de noviembre. Los dos relojes parados son objetos visibles asociados a los efectos y aparecen al lado del segundo panel. La vista no es una fotografía de la caja completa ni una reconstrucción de la bodega.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Composición de dos paneles: izquierda, libreta de pasta negra abierta; derecha, copia al carbón del oficio; los dos relojes de pulsera parados deben quedar al lado del material documental (§23.3, `docs/specs/case-5-el-tomo-trece.md:4062`; `src/state/Private/EvidenceCatalogCase5EsB.ts:64-69`).
- [ ] `PINTAR` — La libreta está abierta por los cinco puntos numerados, con letra menuda y regular, márgenes trazados a regla y apariencia de escritura apretada; el punto cinco está más torcido que los otros cuatro (§23.3, `docs/specs/case-5-el-tomo-trece.md:4062`; §14.3, `docs/specs/case-5-el-tomo-trece.md:2333,2337`).
- [ ] `PINTAR` — La copia del oficio es morada y traslúcida, como copia al carbón, y lleva encima la palabra manuscrita `pendiente` escrita a lápiz por otra mano (§23.3, `docs/specs/case-5-el-tomo-trece.md:4062`).
- [ ] `PINTAR` — Los dos relojes de pulsera están parados y aparecen juntos junto a la copia/documentos; el diseño no debe convertirlos en un reloj único ni presentarlos funcionando (§14.3, `docs/specs/case-5-el-tomo-trece.md:2326`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4062`).
- [ ] `NO CONTRADECIR` — La libreta y la copia son los dos componentes probatorios catalogados de `efectos_casimiro`; los relojes son parte visible de los efectos del fallecido, no una tercera prueba independiente (§5.3, `docs/specs/case-5-el-tomo-trece.md:299`; `src/state/Private/EvidenceCatalogCase5EsB.ts:64-69`).

### F2 Texto en imagen

- [ ] `TEXTO EXACTO` — La libreta debe permitir leer cinco puntos numerados; el punto uno conserva la referencia a la tarjeta decomisada en julio y la `s` caída, el punto dos la ficha del museo de agosto y la `s` caída, el punto tres el mismo aparato, el punto cuatro el aparato usado entre 1962 y 1971, y el punto cinco el deseo de salvarse (§14.3, `docs/specs/case-5-el-tomo-trece.md:2392-2400`; `src/case/case5/Private/penal_efectos_hotspots.ts:25-29`).
- [ ] `TEXTO EXACTO` — La copia debe mostrar el oficio dirigido al ministerio público: la oferta de entregar un fichero a cambio de que se estudie la reducción de la condena, con fecha `8 de noviembre`/`8 NOV` visible en el documento o sello de acuse (§14.3, `docs/specs/case-5-el-tomo-trece.md:2330-2332`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4062`).
- [ ] `TEXTO EXACTO` — La anotación añadida encima de la copia debe decir `pendiente`, manuscrita a lápiz por una mano distinta; no sustituirla por una conclusión como “culpable” o “prueba” (§23.3, `docs/specs/case-5-el-tomo-trece.md:4062`).
- [ ] `AUSENTE` — No añadir flechas, círculos, realces, pies explicativos ni texto ajeno a los documentos; la legibilidad sostiene el argumento, pero la imagen no debe señalar cuál punto es la respuesta (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4062`).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — El oficio/copia pertenece al 8 de noviembre; la fecha puede aparecer como `8 NOV` en el sello de acuse, no como una fecha de diciembre (§23.3, `docs/specs/case-5-el-tomo-trece.md:4062`; §14.3, `docs/specs/case-5-el-tomo-trece.md:2332`).
- [ ] `NO CONTRADECIR` — Los cinco puntos fueron escritos por Casimiro en el penal el 8 de noviembre y la libreta se presenta el 8 de diciembre; no convertir la página en una nota escrita el día de la diligencia (§15.1, `docs/specs/case-5-el-tomo-trece.md:2392-2405`; §24.C F10, `docs/specs/case-5-el-tomo-trece.md:4162`).
- [ ] `NO CONTRADECIR` — Los relojes están parados durante la investigación; el epílogo posterior dice que ambos daban la hora bien, pero esa reparación/estado posterior no pertenece a esta lámina (§14.3, `docs/specs/case-5-el-tomo-trece.md:2326-2329`; `docs/specs/case-5-el-tomo-trece.md:3900`).
- [ ] `NO CONTRADECIR` — La referencia a 1962–1971 pertenece al punto cuatro y a la historia de Casimiro tecleando en el aparato; no exige imprimir años fuera de la libreta ni añadir una etiqueta temporal al panel (§14.3, `docs/specs/case-5-el-tomo-trece.md:2397-2398`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En la investigación, el narrador enumera dentro de la caja dos relojes parados, un moño de corbata, la libreta negra y el papel carbón doblado en cuatro; la lámina no puede negar que los efectos recuperados incluyen esos objetos (§14.3, `docs/specs/case-5-el-tomo-trece.md:2326`; `src/case/case5/Private/penal_efectos_hotspots.ts:15`).
- [ ] `PINTAR` — La copia debe ser reconocible como copia de un oficio oficial y conservar la fecha del 8 de noviembre, porque la defensa lee su oferta de colaboración y usa ese documento para anclar el contacto de la víctima con la fiscalía (§14.3, `docs/specs/case-5-el-tomo-trece.md:2330-2332`; `src/case/case5/Private/penal_efectos_hotspots.ts:19-21`).
- [ ] `PINTAR` — La libreta debe sostener la lectura de cinco puntos numerados: la defensa presenta `efectos_casimiro` y lee los puntos uno a cinco en la apertura del día 3 (§15.1, `docs/specs/case-5-el-tomo-trece.md:2389-2402`; `src/case/case5/Private/trial_day3_success.ts:9-17`).
- [ ] `NO CONTRADECIR` — El punto cuatro identifica dónde está el aparato porque Casimiro tecleó en él de 1962 a 1971; la libreta puede mostrar esa frase, pero no debe dibujar la máquina de escribir ni afirmar por imagen quién pulsó las teclas (§14.3, `docs/specs/case-5-el-tomo-trece.md:2397-2398`; §24.C F10, `docs/specs/case-5-el-tomo-trece.md:4162`).
- [ ] `NO CONTRADECIR` — Los efectos llevan a la pregunta de apertura «¿Qué iba a señalar la víctima en esa diligencia?» y a la respuesta de que iba a señalar el origen común de los documentos; la imagen debe contener los cinco puntos, pero no imprimir la conclusión judicial ni atribuir por sí sola el homicidio (§15.1, `docs/specs/case-5-el-tomo-trece.md:2385-2405`; §24.C I16, `docs/specs/case-5-el-tomo-trece.md:4198`).
- [ ] `NO CONTRADECIR` — La presencia de la libreta no absuelve a Casimiro: el juez deja firme su condena de julio y separa lo que hizo entonces de lo que intentó hacer en noviembre (§15.1, `docs/specs/case-5-el-tomo-trece.md:2402-2405`).

### F5 Estilo

- [ ] Contrato §23.0 completo pegado en el prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* GBA/DS en alta definición; ; contorno carbón `#1A1A1A` nítido y continuo, más grueso en la silueta; colores primarios saturados; tema de televisión mexicana de los setenta/Chespirito, con papel, madera, polvo, archivo judicial, madera barnizada, latón envejecido y luz de tungsteno; prohibidos fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo la variante EN exigida, y cualquier rosa o magenta en primer plano (§23.0, `docs/specs/case-5-el-tomo-trece.md:3974-3980`).
- [ ] `AUSENTE` — No usar fotorealismo, magenta/rosa en primer plano, flechas, círculos ni realces de color; la composición debe parecer una vista pericial estilizada y sobria, no una infografía que resuelva el argumento (§23.0; §23.3, `docs/specs/case-5-el-tomo-trece.md:3974-3980,4062`).

### F6 Localización

- [ ] `examine_efectos_en.webp` existe como gemelo localizado: misma composición, escala, libreta, cinco puntos, irregularidad del punto cinco, copia morada, anotación `pendiente`, relojes, fechas y marcas físicas; sólo cambia el texto legible exigido por la variante inglesa (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`).
- [ ] `TEXTO EXACTO` — La variante EN debe conservar cinco puntos legibles y la misma cadena probatoria: `November 8`, la card seized in July, the museum card in August, the same device, typing from `1962 to 1971`, and the final statement about wanting to save himself (`src/case/case5/Private/penal_efectos_hotspots_en.ts:20-29`; `src/state/Private/EvidenceCatalogCase5EnB.ts:64-69`).
- [ ] `TEXTO EXACTO` — La variante EN debe mantener la anotación manuscrita equivalente `pending` sólo si se traduce el texto visible de `pendiente`; el sello/fecha y las marcas físicas permanecen iguales, y el catálogo EN debe seguir describiendo la copia como la carta del 8 de noviembre (§23.3, `docs/specs/case-5-el-tomo-trece.md:4064`; `src/state/Private/EvidenceCatalogCase5EnB.ts:64-69`).
- [ ] `NO CONTRADECIR` — La regla de conservar una `s` minúscula caída sólo aplica a las líneas traducidas impresas en las láminas cuestionadas; esta lámina debe conservar el defecto en la libreta si el texto visible lo muestra, pero no inventar una `s` caída en la anotación `pending` ni en una traducción que no la exige (§23.3, `docs/specs/case-5-el-tomo-trece.md:4068`).

## Consistencia (regenerar juntos)

- `examine_efectos` ES ↔ `examine_efectos_en` — gemelos de idioma: comparten encuadre, materiales, cinco puntos, punto cinco torcido, copia al carbón morada, acuse del 8 de noviembre, anotación manuscrita, relojes y estado parado; sólo cambia el texto legible. Regenerar juntos; este activo no es fuente de verdad del otro (§23.3).
- `efectos_casimiro` — comparte el objeto de Acta: libreta negra y copia al carbón del oficio; el catálogo fija la identidad general, mientras esta lámina fija los detalles visuales exigidos. Regenerar juntos; la prueba catalogada no es fuente de verdad de esta lámina (§5.3; `src/state/Private/EvidenceCatalogCase5EsB.ts:64-69`).
- `penal_efectos` / `hotspot_caja` — comparte la caja 214-J, los dos relojes, el moño, la libreta y el papel carbón; el escenario fija el contexto de extracción y la lámina amplía sólo los documentos y relojes. Regenerar juntos; este activo no es fuente de verdad del otro (§14.3, `docs/specs/case-5-el-tomo-trece.md:2306-2352`).
- `examine_maquina` — comparte la `s` minúscula caída y la cadena de documentos mecanografiados; la libreta observa el defecto y la máquina es el aparato que luego se coteja. Regenerar juntos; esta lámina no es fuente de verdad del aparato (§23.3, `docs/specs/case-5-el-tomo-trece.md:4059,4062`; §24.C F10, `docs/specs/case-5-el-tomo-trece.md:4162`).
- `examine_esquina_tarjeta`, `examine_expediente_serie`, `examine_ficha_domicilio` y `examine_nota_renta` — comparten la `s` caída y la cadena documental que la libreta enumera; sus textos y defectos deben ser compatibles, pero ninguno es fuente de verdad de la libreta (§23.3, `docs/specs/case-5-el-tomo-trece.md:4047,4051,4055,4060,4062`; §24.C F10).
- `bg_penal_efectos` — comparte la bodega, la caja abierta y la mesa de trabajo; el fondo fija el contexto sin texto legible y esta lámina fija el contenido probatorio. Regenerar juntos; el fondo no es fuente de verdad de los detalles de esta lámina (§23.1, `docs/specs/case-5-el-tomo-trece.md:3992`).

## Conflictos abiertos

- El catálogo describe `efectos_casimiro` como **dos piezas** —libreta y copia al carbón—, mientras la investigación enumera dentro de la caja también un moño de corbata y dos relojes, y el caption del catálogo exige que los relojes aparezcan al lado (`src/state/Private/EvidenceCatalogCase5EsB.ts:64-69`; `src/case/case5/Private/penal_efectos_hotspots.ts:15`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4062`). La especificación visual exige los relojes pero no exige pintar el moño; no resolver aquí si el moño debe aparecer en la lámina.
- El diálogo dice que el papel carbón está doblado en cuatro y luego lo presenta como la copia del oficio, mientras §23.3 pide una copia morada y traslúcida con el sello `8 NOV` y la anotación `pendiente` (`src/case/case5/Private/penal_efectos_hotspots.ts:15,19-21`; §23.3, `docs/specs/case-5-el-tomo-trece.md:4062`). No cambiar el contrato visual: registrar la tensión de estado físico y conservar la copia exigida por §23.3.

## Hallazgos de auditoría 2026-09-19

**Veredicto: NO CUMPLE** (contenido, texto, cifras y localización; estilo con desviación registrada). Se auditaron `examine_efectos.png` (ES) y `examine_efectos_en.png` (EN) juntas. Los gemelos ni siquiera comparten composición: el gemelo ES no contiene la libreta y presenta un panel de menú ajeno al spec.

### Cumple

- **EN F1/F2:** libreta de tapa negra abierta con cinco puntos numerados legibles (F1 libreta; F4 `trial_day3_success.ts:9-17`).
- **EN F2/F3:** copia al carbón morada con anotación manuscrita `pending` a lápiz por otra mano y sello `RECIBIDO NOV 8 1976` — cumple el 8 de noviembre y la anotación exigida (F2 `pendiente`; F3 8 NOV).
- **EN F1:** los dos relojes son de pulsera, están juntos junto a la copia y aparecen parados (F1 relojes; §14.3:2326).
- **Ambas F1:** la copia es morada y se lee como papel carbón (material correcto).

### Defectos confirmados

1. **AUSENTE / MAYOR — ES:** la libreta negra no aparece. El panel izquierdo es un tablero no-diegético con «1. IDENTIDAD … 5. CONCLUSIÓN», que no es la libreta de Casimiro. Rompe F1 libreta, F4 `trial_day3_success.ts:9-17` y `penal_efectos_hotspots.ts:25-29`.
2. **CONTRADICE / MAYOR — Ambas:** los cinco puntos no contienen la cadena probatoria exigida (tarjeta decomisada en julio, ficha del museo de agosto, el mismo aparato, tecleo 1962–1971, el deseo de salvarse). ES imprime en su lugar la **conclusión judicial** («IDENTIDAD/HECHOS/PRUEBAS/TESTIGOS/CONCLUSIÓN»), lo que además viola F4 «no imprimir la conclusión judicial» (`docs/specs/case-5-el-tomo-trece.md:4198`, §15.1:2385-2405). EN inventa contenido ajeno («witnesses», «fingerprints», «time of death») y además un error tipográfico «still **beink** verified». Rompe F2 exacto (§14.3:2392-2400; `penal_efectos_hotspots.ts:25-29`; `_en.ts:20-29`).
3. **CONTRADICE / MAYOR — ES:** la copia va dirigida al «JUZGADO QUINTO DE LO CIVIL / ARCHIVO GENERAL» con asunto «DEMANDA POR DAÑOS» y fecha «14 DE MAYO DE 1974»; el spec exige el oficio al **ministerio público** del **8 de noviembre** con la oferta del fichero a cambio de estudiar la reducción de condena (F2; §14.3:2330-2332; `penal_efectos_hotspots.ts:19-21`).
4. **CONTRADICE / MAYOR — ES:** el sello dice «RECIBIDO ★ 1974», sin `8 NOV`; F3 exige la fecha del 8 de noviembre en el sello de acuse (§23.3:4062, §14.3:2332).
5. **AUSENTE / MAYOR — ES:** no existe la anotación manuscrita `pendiente` sobre la copia (F2, §23.3:4062).
6. **DRIFT / MAYOR — ES↔EN (F6):** los gemelos no comparten composición: ES tiene expediente atado con moño, candelero y relojes de bolsillo sin libreta; EN tiene libreta, relojes de pulsera y papeles detrás. F6 exige misma composición, escala y materiales (§23.3:4064).
7. **CONTRADICE / MEDIO — ES:** los relojes son de **bolsillo**, no de pulsera (F1, §14.3:2326; coherente con `penal_efectos` que los enumera como de pulsera).
8. **CONTRADICE / MEDIO — ES:** texto en inglés no exigido en la variante ES: «Case 5», «EXAMINE» (F5 §23.0:3974-3980 prohíbe texto en inglés salvo la variante EN).
9. **AUSENTE / MEDIO — Ambas:** rótulos impresos no pedidos sobre los documentos («COPIA CARBÓN — OFICIO» en ES; «CARBON COPY – OFFICIAL LETTER» y «NOTIFÍQUESE Y CÚMPLASE» en EN) y texto ajeno a los documentos; §23.0/AUSENTE F2 prohíbe texto no diegético que resuelva la lectura.
10. **CONTRADICE / MEDIO — EN:** cuerpo de la copia mezclado en español («No. DE OFICIO», «ASUNTO», «PARTES», párrafo «Por el presente se tiene por recibido…») en la variante EN; introduce además contenido inventado (SUMARIO 12/76, «EL PUEBLO VS. J. HERRERA», audiencia del 21 de noviembre de 1976 a las 10:00) ajeno a la oferta del 8 de noviembre (F2/F6).
11. **AUSENTE / MENOR — EN:** el punto cinco no se lee visiblemente más torcido que los otros cuatro (F1, §23.3/§14.3:2333,2337); mismo defecto estructural en ES donde no hay libreta.
12. **F5 — Desviación de estilo registrada (decisión del revisor):** ambas imágenes presentan sombreado pictórico con degradados suaves y textura fotográfica, contra el literal §23.0 «…, prohibidos texturas fotográficas» (§23.0:3974-3980). No se retira: queda para decisión del revisor.

Nota: la presencia del moño de corbata (expediente, ES) se registra sin resolver el conflicto abierto de la hoja (§23.3 no exige pintarlo ni prohibirlo).

### Correcciones de auditoría

- Se reemplaza la entrada anterior «No se inspeccionó ninguna imagen por protocolo…» (2026-09-19) por esta auditoría con inspección real de ambos gemelos.
- No hay ✓ de pasadas previas que corregir: esta es la primera auditoría con recortes.
- Trazas: los ítems F1–F6 de la hoja permanecen sin marcar `[x]`; el veredicto global es no cumple, por lo que no se cierra ninguno.

### Recomendación (orden del conjunto de consistencia)

1. **Gemelos ES↔EN juntos:** fijar una única composición — libreta negra abierta a la izquierda, copia morada a la derecha, dos relojes de pulsera parados juntos junto a la copia — idéntica en encuadre, escala y materiales en ambas variantes.
2. Pintar la libreta con los cinco puntos exactos del §14.3:2392-2400 (tarjeta de julio, ficha del museo de agosto, el mismo aparato, tecleo 1962–1971, deseo de salvarse), punto cinco más torcido; prohibido el menú «IDENTIDAD…CONCLUSIÓN».
3. Reescribir la copia como el oficio del 8 de noviembre al ministerio público con la oferta del fichero por la reducción de condena; sello `8 NOV`; anotación manuscrita `pendiente`/`pending` a lápiz por otra mano.
4. Eliminar todo texto ajeno: rótulos «COPIA CARBÓN/OFICIO», «Case 5», «EXAMINE», cabezas de expediente inventadas y fechas ajenas (14 de mayo de 1974, 21 de noviembre, 10:00).
5. Corregir el estilo a cel-shading plano con terminador duro según §23.0,  ni textura fotográfica; revisar con el conjunto `examine_maquina`, `examine_esquina_tarjeta`, `examine_expediente_serie`, `examine_ficha_domicilio` y `examine_nota_renta` la `s` caída y la cadena documental.
