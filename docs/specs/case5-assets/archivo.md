# archivo — hoja de hechos

Clase: `music`. Espec: §23.0, §23.7. Guion: D1, vestíbulo del Archivo Judicial (`archivo_vestibulo`) en español e inglés.

## Mapa semántico

- **Lugar/uso:** Archivo Judicial del Distrito; ambiente de investigación del edificio, con uso directo confirmado en el vestíbulo de D1.
- **Registro narrativo:** edificio público, trabajo rutinario y material de archivo; no peligro inmediato.
- **Identidad sonora:** madera, papel y polvo; atmósfera de archivo judicial mexicano de los años setenta.
- **Medio:** pista procedural MIDI de 16-bit, no imagen y sin variante localizada.

## Hechos a verificar

### F1 Contenido musical

- [ ] `PINTAR` — Componer una pista procedural de 16-bit lenta, de registro medio, asociada al Archivo Judicial (§23.7).
- [ ] `PINTAR` — Evocar madera, papel y polvo, no persecución ni peligro inmediato (§23.7).
- [ ] `PINTAR` — Mantener la percusión no agresiva (§23.7).
- [ ] `NO CONTRADECIR` — La pista debe convivir con la dirección temática del episodio: papel, madera, polvo, expedientes, madera barnizada, latón envejecido y luz de tungsteno (§23.0).

### F2 Texto en la imagen

- [ ] `AUSENTE` — No aplica: `archivo` es música y no debe generar texto, rótulos ni una variante visual (§23.7; `docs/specs/case5-assets/README.md`).

### F3 Cifras/fechas/horas

- [ ] `NO CONTRADECIR` — La pista acompaña el vestíbulo de D1, cuya entrada ocurre el 6 de diciembre a las 10:15 AM; esos datos pertenecen a la escena y no deben convertirse en señales sonoras literales (§10.2; `src/case/case5/Private/archivo_vestibulo.ts:18`).

### F4 Contrato en pantalla / runtime

- [ ] `PINTAR` — La escena española `archivo_vestibulo` declara `bgm: 'archivo'` como música base del `InvestigationScene` (`src/case/case5/Private/archivo_vestibulo.ts:14`).
- [ ] `PINTAR` — La primera línea de la escena española vuelve a estampar `bgm: 'archivo'` junto con el fondo del vestíbulo (`src/case/case5/Private/archivo_vestibulo.ts:18`).
- [ ] `PINTAR` — La escena inglesa `archivo_vestibulo_en` declara la misma pista como música base (`src/case/case5/Private/archivo_vestibulo_en.ts:14`).
- [ ] `PINTAR` — La primera línea de la escena inglesa vuelve a estampar `bgm: 'archivo'` junto con el fondo del vestíbulo (`src/case/case5/Private/archivo_vestibulo_en.ts:18`).
- [ ] `NO CONTRADECIR` — La pista debe poder repetirse como BGM de investigación sin reclamar tensión de peligro; el diálogo del vestíbulo describe papel viejo, cera, ropa secándose, humedad y una rutina de conserjería (`src/case/case5/Private/archivo_vestibulo.ts:18-30`; `src/case/case5/Private/archivo_vestibulo_en.ts:18-30`).
- [ ] `NO CONTRADECIR` — El catálogo la registra como `archivo` y el tipo cerrado `TrackName` la admite (`src/audio/Private/TrackCatalog.ts:19,48`; `src/types/Private/audio.ts:21-43`).

### F5 Estilo y prohibidos

- [ ] Contrato §23.0 aplicado al equivalente sonoro: estética 16-bit procedural; carácter mexicano setentero de archivo judicial; predominio expresivo de papel, madera y polvo. Las prohibiciones visuales de §23.0 (fotorrealismo, magenta, marcas de agua y texto en imagen) no son parámetros auditables de esta pista.
- [ ] `AUSENTE` — Percusión agresiva, energía de persecución o dramatismo de clímax (§23.7).

### F6 Localización

- [ ] `NO CONTRADECIR` — No existe `archivo_en`: el mismo track se comparte entre ES y EN; sólo cambian los textos de la escena (`src/case/case5/Private/archivo_vestibulo.ts:14,18`; `src/case/case5/Private/archivo_vestibulo_en.ts:14,18`).

## Consistencia (regenerar/aceptar juntos)

- `archivo_vestibulo` / `archivo_vestibulo_en` — comparten el mismo momento jugable, fondo y contrato BGM. Regenerar/aceptar juntos; este activo no es fuente de verdad del otro.
- `bg_archivo_vestibulo` — comparte la identidad del vestíbulo del Archivo: granito encerado, madera, latón, papel y polvo. Regenerar/aceptar juntos como paquete audiovisual; este activo no es fuente de verdad del otro (§23.1, §23.7).
- `bg_archivo_pasillo7`, `bg_bodega_masa`, `bg_archivo_caldera` — pertenecen al mismo edificio y sirven para comprobar que `archivo` conserva una identidad institucional sin sonar a peligro; regenerar/aceptar juntos sólo si el spec resuelve el conflicto de asignación descrito abajo. Este activo no es fuente de verdad de los otros.
- `suspense`, `investigation_core` — pistas de contraste usadas por otras locaciones del Archivo; comparar el primer compás para preservar la frontera entre atmósfera rutinaria, suspense e investigación técnica. Este activo no es fuente de verdad de los otros.

## Conflictos abiertos

- §23.7 describe `archivo` como BGM del “Archivo Judicial (vestíbulo D1 e investigación del edificio)”, pero los guiones actuales sólo lo asignan al vestíbulo: `archivo_pasillo7` usa `suspense` (`src/case/case5/Private/archivo_pasillo7.ts:13,17` y `_en.ts:13,17`), `bodega_masa_intro` usa `suspense` (`src/case/case5/Private/bodega_masa_intro.ts:11`) y `archivo_caldera` usa `investigation_core` (`src/case/case5/Private/archivo_caldera.ts:13,17` y `_en.ts:13,17`). No resolver aquí si la prosa de §23.7 es intención futura o si los guiones son la asignación definitiva.
- La implementación actual fija `archivoTrack` en `84 BPM` y longitud `128` (`src/audio/Private/tracks/Case5Tracks.ts:10-12`), pero §23.7 sólo exige “lento” y no fija BPM ni duración. Estos valores son de implementación, no hechos adicionales del spec; cualquier regeneración debe conservar la intención de §23.7.

## Hallazgos de auditoría 2026-09-19

- No se inspeccionó ninguna imagen, porque este activo es musical y el protocolo exige que la hoja se derive del spec y del guion, no de una imagen.
- No se realizó auditoría auditiva ni se ejecutaron tests, lint, auditorías o procesamiento de assets. No hay defectos confirmados en la hoja; queda pendiente verificar la pista generada contra §23.7 y resolver el alcance de uso indicado en “Conflictos abiertos”.
