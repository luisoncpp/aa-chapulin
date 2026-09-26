# berrondo_panic — hoja de hechos

Clase: `sprite`. Espec: §23.0 y §23.2.A. Guion directo: clímax E3/etapa 3, E4/etapa 4, E5/etapa 5 y la entrada de la ruptura §18.7. Referencias ES/EN: `src/case/case5/Private/climax_stage3_success.ts:47-48`, `climax_stage3_success_en.ts:47-48`, `climax_choices.ts:46`, `climax_choices_en.ts:46`, `climax_stage4.ts:54,60`, `climax_stage4_en.ts:54,60`, `climax_stage5.ts:19-20`, `climax_stage5_en.ts:19-20`, `climax_breakdown.ts:9,18-19` y `climax_breakdown_en.ts:9,18-19`.

Activo compartido por ES/EN: no existe `berrondo_panic_en`. El sprite no contiene texto localizado; ES y EN usan la misma imagen y sólo cambia el diálogo.

## Mapa semántico y alcance

- Persona: Lic. Fulgencio Berrondo, abogado y síndico de 71 años, inicialmente acusador coadyuvante y después investigado. El catálogo ES/EN lo identifica como abogado colegiado desde 1955, síndico de una quiebra de 1971 aún abierta y auxiliar de la fiscalía sin honorarios (`src/state/Private/ProfileCatalogCase5Es.ts:52-63`; `ProfileCatalogCase5En.ts:52-63`).
- Candado de identidad compartido: lentes de media luna dorados con cordoncillo negro, leontina de oro, traje negro anticuado de tres piezas, cabello blanco hacia atrás y tomo de media piel bajo el brazo cuando las manos están libres (§23.2.A). `berrondo_idle` es la hoja maestra de la familia.
- Estado: primera pérdida visible de la verticalidad y de la compostura, provocada por la evidencia del estante, la ficha del cedulario y la máquina de escribir. Es pánico contenido del culpable, no todavía la ruptura verbal de `berrondo_breakdown` (§23.2.A; §18.7).
- Medio: busto transparente independiente del fondo. La mano abierta debe poder leerse como apoyada sobre la mesa del estrado en el staging, pero la mesa no se hornea en el sprite.

## Hechos a verificar

### F1 Contenido

- [ ] `PINTAR` — Busto hasta la cintura, con la misma silueta, escala, vestuario e identidad de `berrondo_idle` (§23.2.A, tabla de poses).
- [ ] `PINTAR` — Cuerpo inclinado por primera vez: hombros adelantados, rompiendo la postura perfectamente erguida de `berrondo_idle` (§23.2.A; comparación con `berrondo_idle`).
- [ ] `PINTAR` — Una mano abierta sobre la mesa, en gesto de alarma o defensa; la mano debe conservar anatomía legible y contacto compatible con el borde de la mesa del estrado (§23.2.A).
- [ ] `PINTAR` — Lentes de media luna torcidos, pero todavía presentes y reconocibles (§23.2.A).
- [ ] `PINTAR` — Cejas juntas y boca abierta; la expresión es de pánico y contradicción, no de explicación académica ni de grito caricaturesco (§23.2.A; `climax_stage3_success.ts:47-48`, `climax_stage4.ts:54,60`).
- [ ] `AUSENTE` — El tomo bajo el brazo: en esta pose el tomo ya no está bajo el brazo (§23.2.A).
- [ ] `AUSENTE` — Bigote, pipa, sombrero o bata; colapsar con Jirafales, Chapatín o Barriga rompe la identidad del personaje (§23.2.A).
- [ ] `AUSENTE` — Leontina rota, chaleco desabotonado, cabello despeinado hacia delante, papeles volando o saliva; esos elementos pertenecen a `berrondo_breakdown` y no deben adelantarse (§23.2.A; §18.7).
- [ ] `AUSENTE` — Gota única de sudor como rasgo dominante de `berrondo_sweat`; el pánico se expresa aquí con postura, lentes, cejas y boca (§23.2.A).

### F2 Texto en imagen

- [ ] `AUSENTE` — No imprimir palabras, números, placas ni rótulos legibles en el sprite. Las líneas ES/EN que lo acompañan son diálogo y no deben convertirse en texto dentro de la transparencia (§23.0; §23.2.A).

### F3 Cifras, fechas y horas

- [ ] `NO CONTRADECIR` — La edad canónica es 71; la colegiación es de 1955 y la sindicatura corresponde a 1971, pero ningún dato se imprime en la pose (§3.2; §24.D I4; catálogo ES/EN `ProfileCatalogCase5*.ts:52-63`).
- [ ] `NO CONTRADECIR` — La pose puede acompañar referencias al número de tarjetas del cajón, a la ficha de Don Ramón y al número 41 de la máquina, pero esas cifras pertenecen al diálogo y a las pruebas mostradas, no al sprite (`climax_choices.ts:46`; `climax_stage4.ts:54-60`; `climax_stage5.ts:19-20`).

### F4 Contrato en pantalla

- [ ] `PINTAR` — Tras la lectura de la segunda tira del huacal y la firma de Berrondo, el personaje pasa de `berrondo_sweat` a esta pose cuando admite que no soporta los estantes incompletos y niega que eso sea delito. Debe comunicar que la compostura empieza a ceder, sin convertirse todavía en la ruptura final (`climax_stage3_success.ts:43-50`; variante EN `climax_stage3_success_en.ts:43-50`; §18.3).
- [ ] `PINTAR` — Cuando el Juez ordena traer el cajón de Donceles a Espanto con mil trescientas tarjetas, Berrondo protesta que tomará toda la noche. La pose debe leer como alarma ante una inspección que lo expone, no como explicación jurídica (`climax_choices.ts:45-47`; variante EN `climax_choices_en.ts:45-47`; §18.5).
- [ ] `PINTAR` — Cuando el Juez vincula el fragmento de tarjeta con el cedulario bajo custodia, Berrondo dice que cualquiera pudo arrancarlo; después queda reducido a `¡...!`. La misma postura debe soportar defensa verbal y silencio sin añadir un objeto nuevo (`climax_stage4.ts:52-60`; variante EN `climax_stage4_en.ts:52-60`).
- [ ] `PINTAR` — Cuando se concede usar la máquina de escribir del huacal, Berrondo protesta que es un bien de la masa concursal y que usarlo altera el depósito. La pose debe mostrar resistencia física contenida, no la ruptura del lenguaje (`climax_stage5.ts:17-21`; variante EN `climax_stage5_en.ts:17-21`; §18.6).
- [ ] `PINTAR` — En la apertura de §18.7, tras la línea sin texto `......`, Berrondo todavía usa esta pose para admitir que Casimiro iba a decir su nombre y que no lo recordaba; sólo la línea siguiente cambia a `berrondo_breakdown` (§18.7; `climax_breakdown.ts:9,18-21`; variante EN equivalente).
- [ ] `NO CONTRADECIR` — La pose no puede mostrar la leontina rota ni el cabello despeinado antes de que el narrador describa que Berrondo se levanta y deja caer la leontina (`docs/specs/case-5-el-tomo-trece.md:3670-3674`).
- [ ] `NO CONTRADECIR` — El sprite se superpone a la cámara de juicio y a la mesa del estrado; no debe hornear mesa, fiscalía, juez, papeles, máquina ni cajón en el canal transparente (§23.2.A; los bloques de clímax sólo estampan `pose`).

### F5 Estilo

- [ ] Contrato §23.0 completo en cualquier prompt de regeneración: ilustración 2D estilo *Capcom Ace Attorney* GBA/Nintendo DS en alta definición; cel-shading plano con terminador duro de dos tonos por superficie; contorno carbón `#1A1A1A`, más grueso en silueta; anatomía expresiva y caricaturesca; colores primarios saturados; registro de televisión mexicana setentera, papel, madera, polvo, latón envejecido y luz de tungsteno; sin fotorrealismo, 3D, acuarela, texturas fotográficas, anime moderno, cómic americano, marcas de agua, texto en inglés salvo variantes exigidas ni rosa/magenta en primer plano (§23.0).
- [ ] `NO CONTRADECIR` — El pánico es una grieta controlada: hombros adelantados, lentes torcidos, cejas juntas y boca abierta; no usar la tormenta corporal o verbal de un breakdown (§23.2.A).

### F6 Localización

- [ ] `NO CONTRADECIR` — No generar `berrondo_panic_en`: ES y EN comparten exactamente el mismo WebP. Sólo cambian las líneas de `climax_stage3_success*.ts`, `climax_choices*.ts`, `climax_stage4*.ts`, `climax_stage5*.ts` y `climax_breakdown*.ts` (§23.2.A; referencias F4).
- [ ] `NO CONTRADECIR` — Mantener idénticos entre idiomas encuadre, transparencia, escala, silueta, ropa, accesorios, ausencia del tomo y grado de pánico; no introducir letras ni símbolos localizados (§23.0; §23.2.A).

## Consistencia (regenerar juntos)

- `berrondo_idle` — comparte identidad, escala, traje, lentes, leontina y construcción facial; es el candado de identidad y la base de la familia. Regenerar juntos, este activo no es fuente de verdad del otro.
- `berrondo_definicion` — comparte silueta, vestuario y rasgos, pero conserva verticalidad, tomo y gesto docente. Regenerar juntos, este activo no es fuente de verdad del otro.
- `berrondo_sweat` — comparte silueta y traje; es la grieta previa con una sola gota y la mano en la corbata. Regenerar juntos, este activo no es fuente de verdad del otro.
- `berrondo_breakdown` — comparte persona y progresión emocional, pero añade leontina rota, chaleco abierto y cabello despeinado sólo después de esta pose. Regenerar juntos, este activo no es fuente de verdad del otro.
- `berrondo_leontina` — comparte el diseño de la leontina de oro, pero es un plano 1×1 del objeto y no una pose de personaje. Regenerar juntos, este activo no es fuente de verdad del otro.
- `perfil_berrondo` — comparte la identidad narrativa de Berrondo y se recorta de la familia de poses, pero no debe heredar el gesto de pánico. Regenerar juntos, este activo no es fuente de verdad del otro.
- `climax_stage3_success`, `climax_choices`, `climax_stage4`, `climax_stage5`, `climax_breakdown` y sus gemelos EN — comparten la progresión de staging y la misma pose visual; regenerar juntos para mantener continuidad de identidad, escala y transparencia. Este activo no es fuente de verdad del guion ni de los otros activos.

## Conflictos abiertos

- §23.2.A describe el uso como “clímax, etapas 3 y 4”, pero el guion también lo usa en la etapa 5 (`climax_stage5.ts:19-20`) y en la entrada de §18.7 (`climax_breakdown.ts:9,18-19`). La hoja sigue el contrato visual de §23.2.A y documenta esos usos adicionales; resolver la etiqueta de alcance pertenece al spec, no a esta hoja.
- La descripción exige “una mano abierta sobre la mesa”, mientras los scripts sólo estampan la pose y no declaran una mesa en cada línea (`climax_stage3_success.ts:47-48`, `climax_stage4.ts:54,60`, `climax_stage5.ts:19-20`). El sprite debe mantener la mano compatible con el staging de estrado, pero no hornear la mesa ni asumir un fondo específico.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, por protocolo. No se confirma ni se descarta ningún defecto visual de la exportación actual.
- La hoja queda como contrato previo de aceptación: identidad Berrondo, pérdida controlada de verticalidad, mano abierta, lentes torcidos, tomo ausente, transparencia sin texto, separación estricta frente a `berrondo_sweat` y `berrondo_breakdown`, y paridad visual ES/EN.
