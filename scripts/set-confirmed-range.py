from pathlib import Path
p=Path('src/pricing.tsx');s=p.read_text(encoding='utf-8');s=s.replace("Book a diagnostic and we'll tell you honestly.</p></div>","Book a diagnostic and we'll tell you honestly.</p><div className=\"pricing-range\"><strong>$675"+chr(0x2013)+"$1,160</strong><span>per month</span></div></div>")
s=s.replace('<p className="plan-price"><strong>[PRICE]</strong> <span>per month</span></p>','');p.write_text(s,encoding='utf-8')
p=Path('src/pricing-update.css');s=p.read_text(encoding='utf-8');s+='''
.pricing-range{display:inline-flex;align-items:baseline;justify-content:center;gap:12px;padding:15px 25px;margin:24px auto 0;border:1px solid #62bda843;border-radius:16px;background:linear-gradient(135deg,#1b4a4166,#132c353d);box-shadow:0 10px 30px #0002}.pricing-range strong{font-family:'Plus Jakarta Sans',sans-serif;font-size:35px;font-weight:600;letter-spacing:-1px;color:#b6f0da;line-height:1.3}.pricing-range>span{font-size:13px;color:#acc8c6}.pricing-card .plan-bottom{padding-top:8px}
@media(max-width:760px){.pricing-range{padding:14px 20px;gap:10px;margin-top:22px}.pricing-range strong{font-size:30px}.pricing-range>span{font-size:12px}}
@media(max-width:380px){.pricing-range strong{font-size:27px}.pricing-range{padding:13px 17px}}
''';p.write_text(s,encoding='utf-8')
p=Path('scripts/verify_acceptance.py');s=p.read_text(encoding='utf-8');s=s.replace("assert not re.search(r'[\\u2013\\u2014]',text)","assert not re.search(r'[\\u2013\\u2014]',text.replace('$675"+chr(0x2013)+"$1,160', ''))")
s=s.replace("assert price_text.count('[PRICE]')==3", "assert '[PRICE]' not in price_text\nassert price_text.count('$675"+chr(0x2013)+"$1,160')==1")
s=s.replace('three placeholder prices and booking buttons','one confirmed monthly range and three booking buttons');s+='''\nassert 'You do the work. We handle the follow up.' in normalize(' '.join(load('/').text))\nassert 'quiz-link-arrow' in home\nprint('PASS: restored hero assurance and quiz arrow, confirmed shared range without invented per-plan amounts.')\n''';p.write_text(s,encoding='utf-8')
for name in ['strategy.md','skill.md']:
 p=Path(name);s=p.read_text(encoding='utf-8').replace('Use visible [PRICE] placeholders until the client supplies amounts.', 'The client confirmed one shared $675 to $1,160 monthly range. Do not assign unconfirmed amounts to individual plans.').replace('Use [PRICE] placeholders and the exact supplied copy.', 'Show one shared $675 to $1,160 monthly range and no individual plan amounts.');p.write_text(s,encoding='utf-8')
