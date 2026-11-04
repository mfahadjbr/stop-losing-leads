from pathlib import Path
for p in Path('src').rglob('*'):
 if p.suffix not in ('.tsx','.ts','.css'):continue
 s=p.read_text(encoding='utf-8')
 for code in [0xb7,0x2197,0x2192,0x2019,0x2018,0x201c,0x201d,0xd7,0x2014,0x25b6,0x2713]:
  ch=chr(code)
  try:bad=ch.encode('utf-8').decode('cp1252')
  except UnicodeDecodeError:continue
  s=s.replace(bad,ch)
 p.write_text(s,encoding='utf-8')
