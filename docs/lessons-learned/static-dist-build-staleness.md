# Las pruebas no actualizan la aplicación estática

## Contexto

`index.html` carga `dist/main.js`, pero Vitest transforma los módulos de `src/` directamente.

## Patrón efectivo

Tras cambiar un guion o el motor, ejecuta `npm run build` antes de probar el juego en el navegador. Una suite verde sólo confirma el código fuente. No actualiza los módulos que consume la aplicación estática.
