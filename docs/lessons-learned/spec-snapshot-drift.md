# Un agente que clona el repo trabaja contra una foto del spec, no contra el spec

El Caso 3 se implementó completo —guiones ES/EN, tipos, estado, motor, pipeline, tests— a partir de `docs/specs/case-3-la-noche-del-grito.md` **en la revisión que existía cuando el agente clonó el repositorio**. Mientras corría, el spec recibió dos commits de corrección (211 inserciones / 163 borrados, sólo en `docs/`). El agente nunca los vio: su copia del spec siguió siendo la del commit base, y la rama entregada era internamente coherente con un documento que ya no era la fuente de verdad.

## Por qué no se nota

El síntoma es el peor posible: **no hay error**. Compila, los tests pasan, `fallow` está limpio, el juego corre. Lo único que está mal es el contenido — horas, nombres de pruebas, nombres de poses, el orden de las locaciones — y eso no lo atrapa ningún compilador.

Peor: el código estaba coherente **consigo mismo**. La libreta del doctor decía 10:50, y el alegato que se construía sobre ella decía 10:45. Las dos versiones venían del mismo documento; la corrección había arreglado una y el agente había copiado la otra.

## Cómo detectarlo en un minuto

Antes de auditar una sola línea de guión, comparar el spec de la rama contra el de la rama principal:

```bash
git diff --stat $(git merge-base HEAD main) main -- docs/specs/
```

Si sale vacío, el agente leyó lo mismo que hay hoy. Si sale con cambios, **ese diff es la lista de tareas** — es mucho más barato leer 200 líneas de diff del spec que releer 3.000 líneas de guión buscando qué está mal.

En este caso el diff dio, gratis, casi todas las divergencias: `informe_medico` → `informe_barriga`, `aniceto_terciopelo` → `aniceto_idle`, `centro_detencion` → `detention`, 10:45 → 10:50, "tres cuartos de hora" → "veinte minutos", `minUpdateStage` → `requiredUpdateStage`, y una escena entera (las 10:52 de Ñoño) que simplemente no existía.

## Lo que el diff no da

Dos cosas hay que buscar a mano, y son las que rompen el caso:

1. **Renombres de identificadores que el spec hace en prosa.** El spec dice "se renombró la pose"; el código tiene 32 referencias repartidas entre `src/types/`, guiones ES, guiones EN y un script de Python. Un `grep` por el nombre viejo en todo el repo —incluidos `.py` y `.md`— es obligatorio; el typecheck no ayuda porque `LocationId` es `(string & {})` y traga cualquier cadena.

2. **Restricciones que sólo viven en notas de redacción.** El spec corregido añadió una nota de coherencia física (dos rutas independientes en el segundo piso) cuya consecuencia dura es que una declaración concreta **debe seguir siendo literalmente cierta**. Eso no aparece como línea de diálogo cambiada: aparece como una nota que prohíbe un cambio futuro. Vale la pena convertir esas notas en tests, porque son exactamente las que un agente posterior romperá sin darse cuenta ([[trial-gating-is-inventory-only]] es el mismo patrón).

## La regla

Cuando el trabajo lo produjo un agente que clona y corre solo, **el primer paso de la revisión es traer la rama principal y releer la especificación mergeada de punta a punta**, no leer el código entregado. El código es una traducción fiel de un original equivocado; auditarlo contra sí mismo no revela nada.
