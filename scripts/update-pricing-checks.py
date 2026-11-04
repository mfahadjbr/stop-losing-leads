from pathlib import Path
p=Path('scripts/verify_acceptance.py');s=p.read_text();s=s.replace("for word in ['$','per month','/mo','tier','Response Rescue','Revenue Accelerator','Revenue Protection Pro','Mike R.','Dave K.','Sarah T.','500+','3x','guarantee']:","for word in ['Mike R.','Dave K.','Sarah T.','500+','3x','guarantee']:")
s=s.replace("  assert len(p.checks)==2\n  assert all('checked' not in c for c in p.checks)","  assert len(p.checks)==0")
s=s.replace('two unchecked SMS choices','simplified contact form')
s=s.replace("for block in blocks:assert block in source.replace(',', ''),block","for block in blocks[:-1]:assert block in source.replace(',', ''),block")
s+='''
# Latest user override: pricing is public only in the new section and FAQ.
class UpdatedSections(HTMLParser):
 def __init__(self):super().__init__();self.stack=[];self.outside=[];self.content={};self.fields=[];self.pricing_buttons=[];self.anchor=None
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='section':self.stack.append(a.get('id',''))
  if tag in ('input','textarea'):self.fields.append((a.get('name'),a.get('placeholder'), 'required' in a))
  if tag=='a' and 'pricing' in self.stack:self.anchor=[a.get('href'),[]]
 def handle_endtag(self,tag):
  if tag=='section' and self.stack:self.stack.pop()
  if tag=='a' and self.anchor:self.pricing_buttons.append((self.anchor[0],''.join(self.anchor[1]).strip()));self.anchor=None
 def handle_data(self,data):
  for section in self.stack:self.content.setdefault(section,[]).append(data)
  if not any(section in ('pricing','faq') for section in self.stack):self.outside.append(data)
  if self.anchor:self.anchor[1].append(data)
page=UpdatedSections();page.feed(home)
price_text=normalize(' '.join(page.content['pricing']))
for line in [
 'Simple plans. Pick the one that closes your leak.',
 "Every business leaks in a different place. Here is how we fix each one. Not sure which fits? Book a diagnostic and we'll tell you honestly.",
 'Response Rescue','For owners who miss calls and reply too slowly.',
 'Missed call text back in seconds.','Instant replies to web forms and texts.',
 'Revenue Accelerator','For owners who reply once and then the lead goes quiet.',
 'Everything in Response Rescue.','Follow up that keeps going until they book or say no.',
 'Revenue Protection Pro','For owners who want every leak closed and the numbers to prove it.',
 'Speed, follow up and a plan for your old contacts.','Reporting so you see what you are winning back.',
 "You own your data and your system. We never pitch on the first call. We tell you if you don't need us.",
 'Most complete']:
 assert line in price_text,line
assert price_text.count('[PRICE]')==3
assert page.pricing_buttons==[('/book','Book My Lead Leak Diagnostic')]*3
assert home.index('A CLEAR PATH FORWARD') < home.index('id="pricing"') < home.index('SAME LEADS. A DIFFERENT WAY TO WORK.')
assert copy['pricingAnswer']=="Plans are shown above. Every business leaks in a different place, so on your diagnostic we'll show you which plan closes your leak, and whether you need us at all."
assert copy['pricingAnswer'] in normalize(' '.join(page.content['faq']))
for route in routes:
 html=urlopen('http://127.0.0.1:3000'+route).read().decode()
 parsed=UpdatedSections();parsed.feed(html)
 outside=normalize(' '.join(parsed.outside))
 for name in ['Response Rescue','Revenue Accelerator','Revenue Protection Pro','[PRICE]']:
  assert name not in outside,(route,'pricing outside allowed sections')
 assert '/assets/company-logo.png' in html
 if route=='/contact':
  assert [name for name,placeholder,required in parsed.fields]==['Full Name','Phone Number','Email Address','Business Name','Message']
  assert all(placeholder for name,placeholder,required in parsed.fields)
  assert [name for name,placeholder,required in parsed.fields if required]==['Phone Number','Email Address']
 if route=='/our-story':assert '/assets/business-lab-workspace-v1.png' not in html
 if route=='/business-lab':assert 'final-cta-v2' in html
print('PASS: exact public pricing copy and section order, three placeholder prices and booking buttons, new FAQ, favicon, five contact fields, Story image removal and Business Lab CTA.')
'''
p.write_text(s,encoding='utf-8')
p=Path('strategy.md');p.write_text('''# Current rebuild strategy
1. Keep the navy and teal brand theme with gold reserved for the supplied logo.
2. Keep one primary action: Book My Lead Leak Diagnostic. The quiz is the second door.
3. The latest user override requires public pricing on Home between The Plan and What Changes. Plan names and prices are allowed only inside Pricing and FAQ. Use visible [PRICE] placeholders until the client supplies amounts. No invented results or guarantees.
4. Maintain exactly six routes: Home, Our Story, Business Lab, Talk to Our Team, Lead Leak Quiz and Book. How It Works is a Home section.
5. Preserve the exact latest supplied pricing and FAQ text. Each pricing card links to /book. No a la carte menu, sticky quiz bar or audit form.
6. Contact shows only Full Name, Phone Number, Email Address, Business Name and Message. Phone and email are required. Disclose the email draft delivery flow.
7. Keep generated media provenance in the prompt document. Never infer client names, cities or results from video frames.
8. Verify the production build, route acceptance, desktop and mobile layout. Navbar narrows on scroll while retaining its height.
''',encoding='utf-8')
p=Path('skill.md');s=p.read_text();s+='\nLatest override: Home pricing is required between Plan and What Changes. Prices and plan names are allowed only in Pricing and FAQ. Use [PRICE] placeholders and the exact supplied copy. Contact now has only five fields with no SMS boxes.\n';p.write_text(s)
