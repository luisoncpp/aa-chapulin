# berrondo_sweat — hoja de hechos

Clase: `sprite`. Espec: §23.0 y §23.2.A. Guion directo: `trial_day3_success_berrondo.ts`, `trial_day4_success.ts`, `climax_stage1.ts`, `climax_stage2.ts` y `climax_stage3_success.ts`; variantes EN equivalentes. Variantes ES/EN: no hay archivo `_en`; el mismo sprite debe servir para ambos idiomas.

## Mapa semántico y alcance

Lic. Fulgencio Berrondo, hombre de 71 años, abogado y síndico de la quiebra 114/1971. `berrondo_sweat` representa la primera grieta visible de su compostura: sigue siendo el mismo abogado anciano, erguido y formal, pero con una sola gota de sudor y la mano ajustando la corbata. No es todavía pánico, ruptura ni una pose cómica.

Alias y candados seguidos: Berrondo, Lic. Fulgencio Berrondo, leontina de oro, lentes de media luna, tomo bajo el brazo, traje negro de tres piezas, corbata gris perla, primera gota de sudor, está sudando desde ayer.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto hasta la cintura, en la misma silueta de Berrondo, con hombre alto, delgado y muy erguido; conservar cara larga afeitada, pómulos marcados, arrugas verticales, nariz recta, labios finos, cabello blanco peinado hacia atrás con raya alta a la izquierda, cejas blancas pobladas y lentes de media luna dorados con cordoncillo negro (§23.2.A).
- [ ] `PINTAR` — Mantener el traje negro de tres piezas de corte anticuado, camisa blanca de cuello duro, corbata gris perla de nudo pequeño y leontina de oro cruzando el chaleco (§23.2.A).
- [ ] `PINTAR` — Mantener el tomo encuadernado en media piel bajo el brazo izquierdo; la identidad del personaje exige leontina + lentes de media luna + tomo (§23.2.A).
- [ ] `PINTAR` — Conservar la misma silueta y traje de `berrondo_idle`; la mano derecha ha subido a ajustarse el nudo de la corbata (§23.2.A).
- [ ] `PINTAR` — Mandíbula apretada y mirada al frente: tensión contenida, no gesto de grito ni de descontrol (§23.2.A).
- [ ] `PINTAR` — Una sola gota de sudor en la sien derecha (§23.2.A).

### F2 Texto en imagen

- [ ] `AUSENTE` — No incluir texto, rótulos, bocadillos, marcas de agua ni letras dentro del sprite; ninguna variante lingüística requiere texto pintado (§23.0; §23.2.A).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La pose aparece después de que el guion identifica la primera gota de sudor en tres jornadas; no convertir la gota en una condición previa a ese momento (`trial_day3_success_berrondo.ts:21-25`; EN `trial_day3_success_berrondo_en.ts:21-25`).
- [ ] `NO CONTRADECIR` — En el día 4 la defensa dice que Berrondo está sudando desde ayer; la pose puede reutilizarse como continuidad del mismo sudor, sin aumentar la cantidad de gotas ni cambiarlo a pánico (`trial_day4_success.ts:75-76`; EN `trial_day4_success_en.ts:75-76`).
- [ ] `NO CONTRADECIR` — Las cifras de doscientos acuses al mes y la devolución del gafete a las 16:50 pertenecen al diálogo mostrado junto a la pose, no deben imprimirse en el sprite (`trial_day3_success_berrondo.ts:25`; `docs/specs/case-5-el-tomo-trece.md:238`; §24.A–§24.B).

### F4 Contrato en pantalla

- [ ] `PINTAR` — En D3-T3, Berrondo usa esta pose al responder «Acabo de declararlo» y al admitir que firma doscientos acuses al mes; la gota es la primera señal visible de que la compostura empieza a fallar (`trial_day3_success_berrondo.ts:21-25`; EN `trial_day3_success_berrondo_en.ts:21-25`).
- [ ] `PINTAR` — En el mismo bloque, la pose vuelve a aparecer durante la reacción de silencio/contención de Berrondo; debe seguir siendo sobria y consistente, no transformarse en `berrondo_panic` (`trial_day3_success_berrondo.ts:25`; `climax_stage1.ts:30-33`; EN equivalentes).
- [ ] `NO CONTRADECIR` — En D4, Berrondo utiliza la pose al afirmar que nada de lo discutido estaba oculto y después del hallazgo del registro de noviembre; debe comunicar presión sostenida desde el día anterior (`trial_day4_success.ts:75,99`; EN `trial_day4_success_en.ts:75,99`).
- [ ] `NO CONTRADECIR` — En el clímax E1/E2/E3, esta pose acompaña rectificaciones y la frase «Un estante incompleto es un desorden»; el personaje todavía conserva verticalidad, tomo y traje, porque la pérdida de verticalidad y el tomo ausente pertenecen a `berrondo_panic` (§23.2.A; `climax_stage1.ts:30-33`; `climax_stage2.ts:26`; `climax_stage3_success.ts:45-46`; variantes EN equivalentes).
- [ ] `AUSENTE` — No dibujar lentes torcidos, hombros adelantados, mano abierta sobre la mesa, boca abierta, leontina rota, chaleco desabotonado, cabello despeinado, papeles volando ni saliva; esos cambios pertenecen a `berrondo_panic` o `berrondo_breakdown` (§23.2.A).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 completo en el prompt: ilustración 2D estilo *Capcom Ace Attorney* (linaje GBA / Nintendo DS) en alta definición; cel-shading de colores planos con terminador de sombra duro, dos tonos por superficie y ; contorno oscuro nítido y continuo en carbón `#1A1A1A`, más grueso en la silueta exterior que en los detalles internos; anatomía facial expresiva y exagerada, al borde de la caricatura; colores primarios saturados.
- [ ] Contrato §23.0 completo en el prompt: televisión mexicana de los años setenta, universo Chespirito / El Chapulín Colorado; melodrama de tribunal tratado en serio por el sistema y absurdo en los personajes; registro de papel, madera y polvo, con archivo judicial, expedientes atados con listón, madera barnizada, latón envejecido y luz de tungsteno.
- [ ] `AUSENTE` — Fotorrealismo, render 3D, acuarela, texturas fotográficas, anime moderno, estética de cómic americano de superhéroes, marcas de agua, texto en inglés y cualquier tono rosa o magenta en primer plano (§23.0; `docs/architecture/asset-pipeline.md`).
- [ ] `NO CONTRADECIR` — No colapsar la identidad con el Profesor Jirafales, Don Cecilio, Chapatín o Señor Barriga: nunca bigote, pipa, sombrero ni bata; el candado es leontina + lentes de media luna + tomo (§23.2.A).

### F6 Localización

- [ ] `NO CONTRADECIR` — ES y EN comparten exactamente la misma composición, silueta, gesto, ropa, gota y accesorios; sólo cambia el diálogo (`trial_day3_success_berrondo.ts` / `_en.ts`, `trial_day4_success.ts` / `_en.ts`).
- [ ] `AUSENTE` — No localizar texto porque el sprite no contiene texto legible; las cadenas «Primera gota de sudor en tres jornadas» / «First drop of sweat in three days» y «Está sudando. Desde ayer» / «He is sweating. He has been sweating since yesterday» viven en el guion, no en la imagen (`trial_day3_success_berrondo.ts:22`; `trial_day4_success.ts:76`; variantes EN equivalentes).

## Consistencia (regenerar juntos)

- `berrondo_idle` — comparte la identidad maestra, la silueta, el traje, los lentes, la leontina y el tomo; **regenerar juntos, este activo no es fuente de verdad del otro**. `berrondo_idle` es el candado de identidad (§23.2.A).
- `berrondo_definicion` — comparte personaje, ropa, accesorios y construcción facial; sólo cambia el gesto docente y la mano levantada; **regenerar juntos, este activo no es fuente de verdad del otro** (§23.2.A).
- `berrondo_panic` — comparte la base del personaje, pero debe reservar la pérdida de verticalidad, lentes torcidos y tomo ausente para la escalada posterior; **regenerar juntos, este activo no es fuente de verdad del otro** (§23.2.A).
- `berrondo_breakdown` — comparte identidad y vestuario base, pero representa la ruptura final del lenguaje con leontina rota y cabello despeinado; **regenerar juntos, este activo no es fuente de verdad del otro** (§23.2.A).
- `perfil_berrondo` — comparte la identidad narrativa del mismo personaje y sus estados de Acta; **regenerar juntos, este activo no es fuente de verdad del otro** (spec §8, §13.3 y §23.2.A; `docs/specs/case-5-el-tomo-trece.md:342`).
- `berrondo_leontina` — comparte la leontina de oro como objeto de identidad, pero es un plano 1×1 separado y no una pose de personaje; **regenerar juntos, este activo no es fuente de verdad del otro** (§23.2.A).

## Conflictos abiertos

- No se detecta conflicto entre el arte y el guion para esta pose: «primera gota» aparece en D3 y «está sudando desde ayer» en D4, una continuidad temporal compatible (`trial_day3_success_berrondo.ts:22`; `trial_day4_success.ts:76`; variantes EN equivalentes).
- La pose se usa también en `climax_stage1`, `climax_stage2` y `climax_stage3_success`, pero §23.2.A define su estado estable y reserva la escalada física a `berrondo_panic`/`berrondo_breakdown`; la hoja conserva esa separación en lugar de inferir cambios no descritos.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por protocolo. No se confirma ningún defecto visual de la exportación actual.
- La hoja queda como contrato previo de aceptación: verificar identidad, una sola gota en la sien derecha, mano en la corbata, verticalidad, tomo bajo el brazo y ausencia de elementos de pánico/ruptura.
