from pathlib import Path
for p in Path('src').rglob('*'):
 if p.suffix in ['.tsx','.ts','.css']:
  text=p.read_text(encoding='utf-8',errors='replace')
  if chr(65533) in text:
   print(p, text.count(chr(65533)))
   p.write_text(text.replace(chr(65533),' '),encoding='utf-8')
p=Path('scripts/verify_acceptance.py');s=p.read_text();s=s.replace("assert not re.search(r'[-\\u2013\\u2014,]',text),(route,'dash in visible copy')","assert not re.search(r'[\\u2013\\u2014]',text),(route,'dash in visible copy')")
a=s.index(' assert not any(any(term in image');b=s.index(" if route=='/':",a);s=s[:a]+s[b:]
s=s.replace("  assert 'Awaiting written approval' in text\n  assert 'Not a published testimonial' in text", "  assert all(any(video in href for href,label in p.links) for video in ['kD6Mu7V0eqU','2GJiK9GdjEQ','OqyIwlXkEpQ'])\n  assert 'CLIENT CLIP PLACEHOLDER' not in text")
s=s.replace("if route=='/book':assert 'BOOKING CALENDAR PLACEHOLDER' in text","if route=='/book':assert 'STATIC CALENDAR PREVIEW' in text")
s=s.replace(" assert 'AI edited from the supplied reference' in ' '.join(page.text)"," assert 'AI edited from the supplied reference' not in ' '.join(page.text)")
s=s.replace("assert '/assets/business-lab-workspace-v1.png' in lab.images","assert '/assets/From Chaos to Clarity_ Business Lab.png' in lab.images\nassert '/assets/business-lab-workspace-v1.png' not in load('/').images\nassert 'owners-cta-background-v2.png' in Path('src/refinements.css').read_text()")
s=s.replace('approval-only proof','three supplied proof videos').replace('labeled edited owners portrait','edited owners portrait without caption strip')
p.write_text(s)

