# berrondo_definicion — hoja de hechos

Clase: `sprite`. Espec: §23.0, §23.2.A. Guion: apertura D1, conversaciones del despacho D2, hotspot de bodega D2 y Testimonio 8 de Berrondo D3 (`trial_day3_t3`); las variantes ES/EN usan el mismo archivo de sprite.

## Mapa semántico

- Personaje: Lic. Fulgencio Berrondo, abogado y síndico de 71 años; su identidad visual se fija por lentes de media luna dorados, leontina de oro y tomo bajo el brazo (§12.3, §23.2.A; `docs/specs/case-5-el-tomo-trece.md:136,4001-4008`).
- Estado: pose docente y pedante de Berrondo, usada cuando define términos o formula explicaciones jurídicas; no es sudor, pánico ni ruptura (§23.2.A).
- Variantes: no existe `berrondo_definicion_en`; ES y EN cambian únicamente el diálogo que acompaña al mismo sprite (`src/case/case5/Private/trial_day1_success.ts:154`; `trial_day1_success_en.ts:154`).

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto hasta la cintura, tres cuartos, con la misma silueta y escala de `berrondo_idle` (§23.2.A, descripción de `berrondo_definicion`).
- [ ] `PINTAR` — Hombre de 71 años, delgado, alto y muy erguido; cara larga afeitada al ras, pómulos marcados, arrugas verticales, nariz recta, labios finos, cabello blanco peinado hacia atrás con raya alta a la izquierda y sin calva (§12.3; §23.2.A).
- [ ] `PINTAR` — Cejas blancas pobladas; lentes de media luna con montura dorada en la punta de la nariz y cordoncillo negro (§23.2.A).
- [ ] `PINTAR` — Traje negro anticuado de tres piezas, chaleco cruzado, camisa blanca de cuello duro y corbata gris perla de nudo pequeño (§23.2.A).
- [ ] `PINTAR` — Leontina de oro desde un ojal hasta el bolsillo y tomo encuadernado en media piel bajo el brazo izquierdo (§23.2.A).
- [ ] `PINTAR` — Índice derecho levantado a la altura del hombro; cabeza ligeramente ladeada; cejas alzadas; boca abierta en media sílaba; lentes bajados un milímetro más (§23.2.A, tabla de poses).
- [ ] `PINTAR` — Gesto de catedrático, nunca de regaño (§23.2.A).
- [ ] `AUSENTE` — Bigote, pipa, sombrero, bata o cualquier rasgo que lo colapse con Jirafales, Chapatín o Barriga (§23.2.A).
- [ ] `AUSENTE` — Gota de sudor, mandíbula apretada, lentes torcidos, leontina rota, cabello despeinado, papeles volando o gesto de berrinche; esos estados pertenecen a `berrondo_sweat`, `berrondo_panic` y `berrondo_breakdown` (§23.2.A).

### F2 Texto en imagen

- [ ] `NO CONTRADECIR` — El sprite no contiene texto, placas ni rótulos legibles; el idioma está únicamente en las líneas de diálogo que lo estampan (§23.0; §23.2.A).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La edad de 71 años y los 27 años de práctica son hechos de identidad/narración, no texto que deba imprimirse en el sprite (§12.3; `src/case/case5/Private/trial_day3_t3.ts:30,78,115`).
- [ ] `NO CONTRADECIR` — Las horas del 4 de diciembre, la credencial, el gafete y la diligencia pertenecen al diálogo; no deben convertirse en marcas visuales del sprite (§15.4; `trial_day3_t3.ts:39-46,68-79,110-117`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Cuando Berrondo define «coadyuvante» durante la apertura, la pose debe leer como explicación pedante y autocontrolada (`src/case/case5/Private/trial_day1_success.ts:154`; `trial_day1_success_en.ts:154`).
- [ ] `PINTAR` — En el despacho, acompaña definiciones de «masa concursal», «concurrencia», «cedulario», «cosas fuera del comercio» y la explicación de dos refranes; debe conservar la misma identidad aunque el fondo sea el despacho (`despacho_berrondo_talks.ts:17-75`; variante EN en `despacho_berrondo_talks_en.ts:18-75`).
- [ ] `PINTAR` — En la bodega, explica el resellado de depósitos y la prohibición de escribir sobre bienes depositados; la pose no debe sugerir que está manipulando físicamente el huacal (`bodega_masa_hotspots.ts:21,66`; `bodega_masa_hotspots_en.ts:21,66`).
- [ ] `PINTAR` — En D2, refuerza explicaciones sobre la empresa liquidada, los bienes de la masa y el aviso al síndico (`trial_day2_t2.ts:81,102`; variante EN en `trial_day2_t2_en.ts:81,102`).
- [ ] `PINTAR` — En D3-T3, acompaña cuatro definiciones sobre declarar como investigado, diferencia entre gafete y credencial, regla de testigos y deber del depositario (`trial_day3_t3.ts:30,43,78,115`; variante EN en `trial_day3_t3_en.ts:30,43,78,115`).
- [ ] `NO CONTRADECIR` — El sprite puede aparecer en mesa de fiscalía, estrado, despacho o bodega, pero el fondo, escritorio, huacal y demás entorno se dibujan en sus propios activos y no deben hornearse en la transparencia del personaje (§23.2.A; `bg_despacho_berrondo.md`).

### F5 Estilo

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA/Nintendo DS) en alta definición; , ; contorno carbón nítido y continuo `#1A1A1A`, más grueso en silueta que en detalles; anatomía expresiva/caricaturesca; colores primarios saturados; televisión mexicana de los setenta, universo Chespirito/Chapulín, melodrama judicial serio con registro de papel, madera, polvo, latón envejecido y luz de tungsteno; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo variantes exigidas, ni rosa/magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — El tomo, lentes y leontina funcionan como candado de identidad compartido; `berrondo_idle` es la hoja maestra, no una referencia para cambiar la pose en cada uso (§23.2.A).

### F6 Localización

- [ ] `NO CONTRADECIR` — No generar una variante `_en`: el sprite es idéntico en ES/EN y sólo se localiza el texto del diálogo (§23.2.A; `trial_day1_success*.ts`, `despacho_berrondo_talks*.ts`, `trial_day3_t3*.ts`).
- [ ] `NO CONTRADECIR` — Mantener composición, escala, vestuario, identidad y gesto idénticos entre idiomas; no introducir letras ni palabras en la imagen (§23.0, §23.2.A).

## Consistencia (regenerar juntos)

- `berrondo_idle` — comparte identidad, escala, traje, lentes, leontina y tomo; es el candado de identidad y la fuente maestra de las poses Berrondo. No es fuente de verdad de éste para el gesto.
- `berrondo_sweat` — comparte la misma silueta y vestuario; sólo cambia la grieta emocional. No es fuente de verdad de éste.
- `berrondo_panic` — comparte la identidad, pero cambia verticalidad, lentes y tomo en el clímax. No es fuente de verdad de éste.
- `berrondo_breakdown` — comparte personaje y leontina, pero representa la ruptura final del lenguaje. No es fuente de verdad de éste.
- `berrondo_leontina` — comparte la identidad del objeto de oro, no el cuerpo ni la pose. Regenerar juntos sólo para el diseño de la leontina; este activo no es fuente de verdad del plano del objeto.
- `bg_despacho_berrondo`, `bg_bodega_masa` y los fondos de juicio — comparten los espacios donde el sprite aparece. Regenerar juntos para escala/composición de staging, pero el sprite no es fuente de verdad de esos fondos ni debe hornearse en ellos.
- Gemelos ES/EN del guion — comparten exactamente el mismo sprite; sólo cambia el diálogo. No existe un archivo visual localizado.

## Conflictos abiertos

- §23.2A titula la pose «cuando define una palabra que nadie preguntó», pero el guion también la usa para explicaciones jurídicas, reglas y refranes solicitados o funcionales (`despacho_berrondo_talks*.ts`, `trial_day2_t2*.ts`, `trial_day3_t3*.ts`). No es un conflicto visual: conservar la descripción gestual de §23.2 y documentar que el uso narrativo es más amplio.
- La línea inglesa de D1 localiza «Coadyuvante» como «Amicus» mientras la línea española conserva el término jurídico; la pose sigue siendo neutral y no requiere variante visual (`trial_day1_success.ts:154`; `trial_day1_success_en.ts:154`).

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por protocolo. No se confirma ni se descarta ningún defecto visual del archivo actual.
- La hoja queda como contrato previo de aceptación: identidad, gesto, ausencia de rasgos ajenos, transparencia sin texto y consistencia con las otras poses de Berrondo.
