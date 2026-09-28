import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

spec_path = os.path.abspath(r"docs\specs\case-5-el-tomo-trece.md")
with open(spec_path, "r", encoding="utf-8") as f:
    text = f.read()

def safe_replace(t, old, new, name):
    if old not in t:
        print(f"ERROR: {name} not found!")
        return t
    print(f"SUCCESS: {name} replaced.")
    return t.replace(old, new)

# 1. Section 14.2
old_14_2 = """### 14.2 Locación 2: Fiscalía (`fiscalia_c5`, `bg_fiscalia.webp`)

- **Personajes:** Super Sam (`supersam_sweat`, `supersam_point`). En esta locación no se usa `supersam_idle`: la bolsa de lona está doblada sobre la silla, no en su mano."""

new_14_2 = """### 14.2 Locación 2: Fiscalía (`fiscalia_c5`, `bg_fiscalia.webp`)

- **Personajes:** Super Sam (`supersam_case1_idle`, `supersam_crossed`, `supersam_thinking`, `supersam_watch`, `supersam_point`, `supersam_sweat`). En esta locación no se usa `supersam_idle`: la bolsa de lona está doblada sobre la silla, no en su mano."""

text = safe_replace(text, old_14_2, new_14_2, "14.2 header")

# Intro lines in 14.2
old_intro = """SUPER SAM: Counselor. [pose: supersam_sweat]
DEFENSA: Señor fiscal. [pose: chapulin_idle]
SUPER SAM: Si viene a que retire la acusación, la respuesta es no. Si viene a que le dé una prueba, la respuesta es no. [pose: supersam_point]
SUPER SAM: Si viene a preguntarme por qué tengo cara de no haber dormido, la respuesta también es no. [pose: supersam_sweat]
DEFENSA: Vengo por el oficio de la diligencia. [pose: chapulin_point]
SUPER SAM: ...Ah. [pose: supersam_sweat]
SUPER SAM: Ése sí se lo doy. [pose: supersam_sweat]"""

new_intro = """SUPER SAM: Counselor. [pose: supersam_case1_idle]
DEFENSA: Señor fiscal. [pose: chapulin_idle]
SUPER SAM: Si viene a que retire la acusación, la respuesta es no. Si viene a que le dé una prueba, la respuesta es no. [pose: supersam_point]
SUPER SAM: Si viene a preguntarme por qué tengo cara de no haber dormido, la respuesta también es no. [pose: supersam_sweat]
DEFENSA: Vengo por el oficio de la diligencia. [pose: chapulin_point]
SUPER SAM: ...Ah. [pose: supersam_thinking]
SUPER SAM: Ése sí se lo doy. [pose: supersam_case1_idle]"""

text = safe_replace(text, old_intro, new_intro, "14.2 intro")

# Hotspot in 14.2
old_hotspot = """SUPER SAM: Ésa es mi bolsa. [pose: supersam_sweat]
DEFENSA: Está vacía. [pose: chapulin_idle]
SUPER SAM: Desde agosto. [pose: supersam_sweat]
DEFENSA: Pues la que usted trae al hombro se ve bien llena. [pose: chapulin_idle]
SUPER SAM: Algodón, counselor. [pose: supersam_sweat]
DEFENSA: Señor fiscal, en agosto usted me acusó a mí. [pose: chapulin_point]
SUPER SAM: Lo sé perfectamente, counselor. Cerré ese caso en cinco minutos. Five. [pose: supersam_sweat]
SUPER SAM: Y llevo más de tres meses cargando una bolsa vacía para que no se me olvide por qué los cerré tan rápido. [pose: supersam_sweat]
DEFENSA: ...¿Perdón? [pose: chapulin_panic]
SUPER SAM: Nada. Get out of my office. [pose: supersam_point]"""

new_hotspot = """SUPER SAM: Ésa es mi bolsa. [pose: supersam_crossed]
DEFENSA: Está vacía. [pose: chapulin_idle]
SUPER SAM: Desde agosto. [pose: supersam_thinking]
DEFENSA: Pues la que usted trae al hombro se ve bien llena. [pose: chapulin_idle]
SUPER SAM: Algodón, counselor. [pose: supersam_sweat]
DEFENSA: Señor fiscal, en agosto usted me acusó a mí. [pose: chapulin_point]
SUPER SAM: Lo sé perfectamente, counselor. Cerré ese caso en cinco minutos. Five. [pose: supersam_watch]
SUPER SAM: Y llevo más de tres meses rellenándola de algodón para que no se me olvide por qué los cerré tan rápido. [pose: supersam_sweat]
DEFENSA: ...¿Perdón? [pose: chapulin_panic]
SUPER SAM: Nada. Get out of my office. [pose: supersam_point]"""

text = safe_replace(text, old_hotspot, new_hotspot, "14.2 hotspot")

# Talk 1 in 14.2
old_talk1 = """SUPER SAM: Oficio 4471, del veintiséis de noviembre. Mío, firmado por mí, ordenado por mí. [pose: supersam_sweat]
DEFENSA: «Diligencia de cotejo documental. Citado a petición del interno: Ramón Valdés. Archivo Judicial. Cuatro de diciembre, 17:00.» [pose: chapulin_idle]
DEFENSA: Y al calce, la lista de distribución: «c.c.p. Actuaría adscrita. c.c.p. Dirección del Archivo. c.c.p. **Sindicatura de la quiebra 114/1971**.» [pose: chapulin_point]
SUPER SAM: Es un trámite, counselor. Se notifica a quien tiene interés jurídico. Lo hace la máquina, no el hombre. [pose: supersam_sweat]
DEFENSA: Señor fiscal, ¿usted sabía que ese oficio salía de aquí con esa lista? [pose: chapulin_point]
SUPER SAM: ...Yo firmo ciento cuarenta oficios a la semana. [pose: supersam_sweat]
SUPER SAM: Y hasta anteayer creía que eso era eficiencia. [pose: supersam_sweat]"""

new_talk1 = """SUPER SAM: Oficio 4471, del veintiséis de noviembre. Mío, firmado por mí, ordenado por mí. [pose: supersam_crossed]
DEFENSA: «Diligencia de cotejo documental. Citado a petición del interno: Ramón Valdés. Archivo Judicial. Cuatro de diciembre, 17:00.» [pose: chapulin_idle]
DEFENSA: Y al calce, la lista de distribución: «c.c.p. Actuaría adscrita. c.c.p. Dirección del Archivo. c.c.p. **Sindicatura de la quiebra 114/1971**.» [pose: chapulin_point]
SUPER SAM: Es un trámite, counselor. Se notifica a quien tiene interés jurídico. Lo hace la máquina, no el hombre. [pose: supersam_crossed]
DEFENSA: Señor fiscal, ¿usted sabía que ese oficio salía de aquí con esa lista? [pose: chapulin_point]
SUPER SAM: ...Yo firmo ciento cuarenta oficios a la semana. [pose: supersam_thinking]
SUPER SAM: Y hasta anteayer creía que eso era eficiencia. [pose: supersam_sweat]"""

text = safe_replace(text, old_talk1, new_talk1, "14.2 talk1")

# Talk 2 in 14.2
old_talk2 = """SUPER SAM: ...¿Cómo dice? [pose: supersam_sweat]
DEFENSA: El señor Lengua le escribió el ocho de noviembre. Usted ordenó la diligencia el veintiséis. [pose: chapulin_point]
DEFENSA: Dieciocho días, señor fiscal. Usted, que cobra por minuto. [pose: chapulin_idle]
SUPER SAM: Era un preso ofreciendo un fichero a cambio de menos condena, counselor. Eso me llega todas las semanas. [pose: supersam_sweat]
SUPER SAM: Presos que ofrecen mapas del tesoro. Presos que ofrecen nombres. Presos que ofrecen a su madre. [pose: supersam_sweat]
DEFENSA: ¿Y qué hizo usted con éste? [pose: chapulin_idle]
SUPER SAM: Lo puse en un cajón. [pose: supersam_sweat]
SUPER SAM: Y el veintiséis lo saqué porque estaba limpiando el cajón. [pose: supersam_sweat]
NARRADOR: Super Sam se queda callado un momento largo, con la mano sobre la calculadora.
SUPER SAM: Counselor. Vaya usted al penal y pida los efectos de ese hombre. [pose: supersam_sweat]
DEFENSA: ¿Y por qué me lo dice usted? [pose: chapulin_idle]
SUPER SAM: Porque yo no los pedí. [pose: supersam_sweat]
SUPER SAM: Time is money, counselor. Y hay días en que a uno le sale carísimo. [pose: supersam_sweat]"""

new_talk2 = """SUPER SAM: ...¿Cómo dice? [pose: supersam_thinking]
DEFENSA: El señor Lengua le escribió el ocho de noviembre. Usted ordenó la diligencia el veintiséis. [pose: chapulin_point]
DEFENSA: Dieciocho días, señor fiscal. Usted, que cobra por minuto. [pose: chapulin_idle]
SUPER SAM: Era un preso ofreciendo un fichero a cambio de menos condena, counselor. Eso me llega todas las semanas. [pose: supersam_crossed]
SUPER SAM: Presos que ofrecen mapas del tesoro. Presos que ofrecen nombres. Presos que ofrecen a su madre. [pose: supersam_point]
DEFENSA: ¿Y qué hizo usted con éste? [pose: chapulin_idle]
SUPER SAM: Lo puse en un cajón. [pose: supersam_thinking]
SUPER SAM: Y el veintiséis lo saqué porque estaba limpiando el cajón. [pose: supersam_sweat]
NARRADOR: Super Sam se queda callado un momento largo, con la mano sobre la calculadora.
SUPER SAM: Counselor. Vaya usted al penal y pida los efectos de ese hombre. [pose: supersam_case1_idle]
DEFENSA: ¿Y por qué me lo dice usted? [pose: chapulin_idle]
SUPER SAM: Porque yo no los pedí. [pose: supersam_sweat]
SUPER SAM: Time is money, counselor. Y hay días en que a uno le sale carísimo. [pose: supersam_watch]"""

text = safe_replace(text, old_talk2, new_talk2, "14.2 talk2")

# D1
old_t7_d1 = """DEFENSA: ¡UN MOMENTO! Dieciocho días. ¿Por qué? [sfx: whoosh; cutin: objection_un_momento; pose: chapulin_point]
SUPER SAM: Porque un preso que ofrece un fichero a cambio de menos condena me llega todas las semanas, counselor. [bg: bg_witness; furniture: podium; pose: supersam_idle]"""

new_t7_d1 = """DEFENSA: ¡UN MOMENTO! Dieciocho días. ¿Por qué? [sfx: whoosh; cutin: objection_un_momento; pose: chapulin_point]
SUPER SAM: Porque un preso que ofrece un fichero a cambio de menos condena me llega todas las semanas, counselor. [bg: bg_witness; furniture: podium; pose: supersam_crossed]"""

text = safe_replace(text, old_t7_d1, new_t7_d1, "15.3 d1")

# D2
old_t7_d2 = """DEFENSA: ¡UN MOMENTO! ¿El sábado cuesta la mitad? [sfx: whoosh; pose: chapulin_point]
SUPER SAM: Sábado, sin público, sin horas extra del actuario, con dos custodios de guardia que ya están pagados. [bg: bg_witness; furniture: podium; pose: supersam_idle]"""

new_t7_d2 = """DEFENSA: ¡UN MOMENTO! ¿El sábado cuesta la mitad? [sfx: whoosh; pose: chapulin_point]
SUPER SAM: Sábado, sin público, sin horas extra del actuario, con dos custodios de guardia que ya están pagados. [bg: bg_witness; furniture: podium; pose: supersam_point]"""

text = safe_replace(text, old_t7_d2, new_t7_d2, "15.3 d2")

# D3
old_t7_d3 = """SUPER SAM: El actuario, la dirección del Archivo y yo. Tres personas. [bg: bg_witness; furniture: podium; pose: supersam_idle]
DEFENSA: ¿Y los custodios? [pose: chapulin_idle]
SUPER SAM: Los custodios se enteran la mañana del traslado. Es política. [bg: bg_witness; furniture: podium; pose: supersam_idle]"""

new_t7_d3 = """SUPER SAM: El actuario, la dirección del Archivo y yo. Tres personas. [bg: bg_witness; furniture: podium; pose: supersam_point]
DEFENSA: ¿Y los custodios? [pose: chapulin_idle]
SUPER SAM: Los custodios se enteran la mañana del traslado. Es política. [bg: bg_witness; furniture: podium; pose: supersam_point]"""

text = safe_replace(text, old_t7_d3, new_t7_d3, "15.3 d3")

# D5
old_t7_d5 = """DEFENSA: ¡UN MOMENTO! Señor fiscal, usted no tiene por qué decir esto. [sfx: whoosh; pose: chapulin_point]
SUPER SAM: Lo sé, counselor. [bg: bg_witness; furniture: podium; pose: supersam_idle]
DEFENSA: Le pueden quitar la cédula. [pose: chapulin_idle]
SUPER SAM: También lo sé. [bg: bg_witness; furniture: podium; pose: supersam_idle]
DEFENSA: ¿Entonces por qué? [pose: chapulin_panic]
SUPER SAM: Porque hay un hombre muerto que me escribió el ocho de noviembre y yo lo dejé dieciocho días en un cajón. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
SUPER SAM: Y porque si no lo digo yo hoy, mañana lo va a tener que sacar usted a golpes, y eso me cuesta más caro. [bg: bg_witness; furniture: podium; pose: supersam_idle]
NARRADOR: Silencio absoluto. [bg: bg_gallery_case5_sam_witness_berrondo; furniture: none]
DEFENSA: ¿Cómo se lo entregaron? [pose: chapulin_idle]
SUPER SAM: Un sobre por debajo de la puerta con una hora y una dirección. A esa hora, en ese callejón, había un bulto envuelto en papel de estraza. [bg: bg_witness; furniture: podium; pose: supersam_idle]
SUPER SAM: Lo abrí ahí mismo y lo conté. Yo siempre cuento, counselor. Es lo único que sé hacer bien. [bg: bg_witness; furniture: podium; pose: supersam_sweat]"""

new_t7_d5 = """DEFENSA: ¡UN MOMENTO! Señor fiscal, usted no tiene por qué decir esto. [sfx: whoosh; pose: chapulin_point]
SUPER SAM: Lo sé, counselor. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
DEFENSA: Le pueden quitar la cédula. [pose: chapulin_idle]
SUPER SAM: También lo sé. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
DEFENSA: ¿Entonces por qué? [pose: chapulin_panic]
SUPER SAM: Porque hay un hombre muerto que me escribió el ocho de noviembre y yo lo dejé dieciocho días en un cajón. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
SUPER SAM: Y porque si no lo digo yo hoy, mañana lo va a tener que sacar usted a golpes, y eso me cuesta más caro. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
NARRADOR: Silencio absoluto. [bg: bg_gallery_case5_sam_witness_berrondo; furniture: none]
DEFENSA: ¿Cómo se lo entregaron? [pose: chapulin_idle]
SUPER SAM: Un sobre por debajo de la puerta con una hora y una dirección. A esa hora, en ese callejón, había un bulto envuelto en papel de estraza. [bg: bg_witness; furniture: podium; pose: supersam_thinking]
SUPER SAM: Lo abrí ahí mismo y lo conté. Yo siempre cuento, counselor. Es lo único que sé hacer bien. [bg: bg_witness; furniture: podium; pose: supersam_point]"""

text = safe_replace(text, old_t7_d5, new_t7_d5, "15.3 d5")

# D6
old_t7_d6 = """SUPER SAM: En la suya todo sale más barato. [bg: bg_witness; furniture: podium; pose: supersam_point]"""
new_t7_d6 = """SUPER SAM: En la suya todo sale más barato. [bg: bg_witness; furniture: podium; pose: supersam_case1_idle]"""
text = safe_replace(text, old_t7_d6, new_t7_d6, "15.3 d6")

# Oficio success in 15.3
old_oficio_succ = """SUPER SAM: ...Seiscientos, Your Honor. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
JUEZ: ¿Cómo dice? [pose: judge_thinking]
SUPER SAM: Que firmo seiscientos oficios al mes, y que no he leído lo que va hasta abajo de ninguno en once años. [bg: bg_witness; furniture: podium; pose: supersam_sweat]"""

new_oficio_succ = """SUPER SAM: ...Seiscientos, Your Honor. [bg: bg_witness; furniture: podium; pose: supersam_thinking]
JUEZ: ¿Cómo dice? [pose: judge_thinking]
SUPER SAM: Que firmo seiscientos oficios al mes, y que no he leído lo que va hasta abajo de ninguno en once años. [bg: bg_witness; furniture: podium; pose: supersam_sweat]"""

text = safe_replace(text, old_oficio_succ, new_oficio_succ, "15.3 oficio success")

# Expediente success in 15.3
old_exp_succ = """NARRADOR: Super Sam se queda mirando ese renglón. [bg: bg_witness; furniture: podium; pose: supersam_sweat; bgm: suspense]"""
new_exp_succ = """NARRADOR: Super Sam se queda mirando ese renglón. [bg: bg_witness; furniture: podium; pose: supersam_thinking; bgm: suspense]"""

text = safe_replace(text, old_exp_succ, new_exp_succ, "15.3 exp success")

old_exp_recused = """SUPER SAM: ...Your Honor. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
SUPER SAM: La fiscalía —yo— solicito ser separado de este asunto y puesto a disposición de la Contraloría. [bg: bg_witness; furniture: podium; pose: supersam_idle]
JUEZ: Se le tiene por separado. El secretario de acuerdos continuará en representación social. [sfx: gavel; pose: judge_gavel]
[ACTUALIZAR-PERFIL perfil_supersam]
JUEZ: Y esta corte le dice una cosa, señor Sullivan, porque no se la va a decir nadie más. [pose: judge_thinking]
JUEZ: Lo que usted hizo hoy no lo absuelve. Pero no lo hizo por barato. [pose: judge_neutral]
SUPER SAM: ...Thank you, Your Honor. [pose: supersam_sweat]"""

new_exp_recused = """SUPER SAM: ...Your Honor. [bg: bg_witness; furniture: podium; pose: supersam_sweat]
SUPER SAM: La fiscalía —yo— solicito ser separado de este asunto y puesto a disposición de la Contraloría. [bg: bg_witness; furniture: podium; pose: supersam_case1_idle]
JUEZ: Se le tiene por separado. El secretario de acuerdos continuará en representación social. [sfx: gavel; pose: judge_gavel]
[ACTUALIZAR-PERFIL perfil_supersam]
JUEZ: Y esta corte le dice una cosa, señor Sullivan, porque no se la va a decir nadie más. [pose: judge_thinking]
JUEZ: Lo que usted hizo hoy no lo absuelve. Pero no lo hizo por barato. [pose: judge_neutral]
SUPER SAM: ...Thank you, Your Honor. [pose: supersam_case1_idle]"""

text = safe_replace(text, old_exp_recused, new_exp_recused, "15.3 exp recused")

# 3. Section 19.3 Epilogue
old_epilogue = """SUPER SAM: Counselor. [bg: bg_waiting_room; furniture: none; pose: supersam_sweat]
DEFENSA: Señor fiscal. [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
SUPER SAM: Ya no. Me suspendieron esta tarde. Seis meses y probablemente para siempre. [bg: bg_waiting_room; furniture: none; pose: supersam_sweat]
DON RAMÓN: Lo siento. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
SUPER SAM: No lo sienta. Me salió barato. [bg: bg_waiting_room; furniture: none; pose: supersam_sweat]
SUPER SAM: Un hombre al que dejé dieciocho días en un cajón pagó la diferencia. [bg: bg_waiting_room; furniture: none; pose: supersam_sweat]
DEFENSA: Señor fiscal... ¿y la bolsa? [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
SUPER SAM: La dejé en la sala de audiencias. El secretario despejó la mesa y la sacó a esta sala de espera. [bg: bg_waiting_room; furniture: none; pose: supersam_sweat]
SUPER SAM: Ya me acuerdo solo. [bg: bg_waiting_room; furniture: none; pose: supersam_sweat]"""

new_epilogue = """SUPER SAM: Counselor. [bg: bg_waiting_room; furniture: none; pose: supersam_case1_idle]
DEFENSA: Señor fiscal. [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
SUPER SAM: Ya no. Me suspendieron esta tarde. Seis meses y probablemente para siempre. [bg: bg_waiting_room; furniture: none; pose: supersam_crossed]
DON RAMÓN: Lo siento. [bg: bg_waiting_room; furniture: none; pose: donramon_idle]
SUPER SAM: No lo sienta. Me salió barato. [bg: bg_waiting_room; furniture: none; pose: supersam_case1_idle]
SUPER SAM: Un hombre al que dejé dieciocho días en un cajón pagó la diferencia. [bg: bg_waiting_room; furniture: none; pose: supersam_sweat]
DEFENSA: Señor fiscal... ¿y la bolsa? [bg: bg_waiting_room; furniture: none; pose: chapulin_idle]
SUPER SAM: La dejé en la sala de audiencias. El secretario despejó la mesa y la sacó a esta sala de espera. [bg: bg_waiting_room; furniture: none; pose: supersam_thinking]
SUPER SAM: Ya me acuerdo solo. [bg: bg_waiting_room; furniture: none; pose: supersam_case1_idle]"""

text = safe_replace(text, old_epilogue, new_epilogue, "19.3 epilogue")

# 4. Section 23.2 Sprites reutilizados
old_sprites = """**Sprites reutilizados sin cambios:** `donramon_idle / slam / shock / point / sweat / panic`; `chapulin_idle / point / panic / slam`; `supersam_idle / slam / point / sweat / breakdown`;"""
new_sprites = """**Sprites reutilizados sin cambios:** `donramon_idle / slam / shock / point / sweat / panic`; `chapulin_idle / point / panic / slam`; `supersam_idle / slam / point / sweat / breakdown / case1_idle / crossed / thinking / watch`;"""

text = safe_replace(text, old_sprites, new_sprites, "23.2 sprites")

import tempfile
tmp_file = spec_path + ".tmp"
with open(tmp_file, "w", encoding="utf-8") as f:
    f.write(text)
os.replace(tmp_file, spec_path)

print("Finished safely replacing and writing spec.")
