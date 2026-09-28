with open("docs/specs/case-5-el-tomo-trece.md", "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find("hotspot_bolsa")
if pos != -1:
    print(text[pos:pos+1000])
