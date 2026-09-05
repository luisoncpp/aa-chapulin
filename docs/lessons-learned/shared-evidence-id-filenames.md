# Shared Evidence IDs Must Not Share Icon Files Across Cases

`EvidenceId` is a global union. `foto_crimen` is Case 1's reversed-HC museum still *and* Case 4's Suite 304 polaroid. Catalogs can isolate *copy* per `caseId`, but `process_case4_assets.py` writing `assets/foto_crimen.webp` silently replaces Case 1 art.

**What to do:** keep the Case 1 filename frozen. Give the later case a unique icon (`foto_suite304.webp`) and set `EvidenceItem.icon` on that catalog entry. Isolated catalogs (`getEvidenceCatalog(lang, 'case4')`) do not isolate the `assets/` directory.

Same trap as Case 3 reusing `informe_medico.webp` (Alma Negra's coin sack) instead of `informe_barriga.webp`.
