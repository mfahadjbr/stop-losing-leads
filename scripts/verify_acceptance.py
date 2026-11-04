from html.parser import HTMLParser
from pathlib import Path
from urllib.request import urlopen
from urllib.error import HTTPError
import re
class PublicPage(HTMLParser):
 def __init__(self):super().__init__();self.hidden=0;self.text=[];self.links=[];self.anchor=None;self.checks=[];self.images=[];self.nav=False;self.navtext=[];self.details=0
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag in ('script','style'):self.hidden+=1
  if tag=='nav':self.nav=True
  if tag=='details':self.details+=1
  if tag=='a':self.anchor=[a.get('href',''),[]]
  if tag=='input' and a.get('type')=='checkbox':self.checks.append(a)
  if tag=='img':self.images.append(a.get('src',''))
 def handle_endtag(self,tag):
  if tag in ('script','style'):self.hidden-=1
  if tag=='nav':self.nav=False
  if tag=='a' and self.anchor:self.links.append((self.anchor[0],' '.join(self.anchor[1]).strip()));self.anchor=None
 def handle_data(self,d):
  if self.hidden:return
  self.text.append(d)
  if self.nav:self.navtext.append(d)
  if self.anchor:self.anchor[1].append(d)
def load(route):
 p=PublicPage();p.feed(urlopen('http://127.0.0.1:3000'+route).read().decode());return p
routes=['/','/our-story','/business-lab','/contact','/quiz','/book']
for route in routes:
 p=load(route);text=' '.join(' '.join(p.text).split())
 for word in ['$','per month','/mo','tier','Response Rescue','Revenue Accelerator','Revenue Protection Pro','Mike R.','Dave K.','Sarah T.','500+','3x','guarantee']:
  assert word.lower() not in text.lower(),(route,word)
 assert not re.search(r'[\u2013\u2014]',text),(route,'dash in visible copy')
 assert ' '.join(' '.join(p.navtext).split())=='Home Our Story Business Lab Talk to Our Team',(route,'nav')
 for href,label in p.links:
  if label=='Book My Lead Leak Diagnostic':assert href=='/book',(route,href)
 if route=='/':
  assert p.details==5
  assert all(any(video in href for href,label in p.links) for video in ['kD6Mu7V0eqU','2GJiK9GdjEQ','OqyIwlXkEpQ'])
  assert 'CLIENT CLIP PLACEHOLDER' not in text
  assert 'How it works' not in ' '.join(p.navtext)
 if route=='/contact':
  assert len(p.checks)==2
  assert all('checked' not in c for c in p.checks)
 if route=='/book':assert 'STATIC CALENDAR PREVIEW' in text
 print('PASS',route)
for old in ['/how-it-works']:
 try:
  response=urlopen('http://127.0.0.1:3000'+old)
  raise AssertionError('Old page still exists '+old)
 except HTTPError as e:assert e.code==404
print('PASS: current six routes, no old public pages, required nav, matching booking CTAs, five FAQs, two unchecked SMS choices, three supplied proof videos, no prohibited content or visible dashes.')

# Verify supplied copy against the latest content document and rendered pages.
import json
raw=Path('src/brief-content.ts').read_text(encoding='utf-8')
copy=json.loads(raw.split(' = ',1)[1].rsplit(' as const',1)[0])
source=Path('latest-content-source.txt').read_text(encoding='utf-8-sig')
blocks=[copy['hero']['body'],copy['problemClosing'],copy['guide']['headline'],*copy['guide']['paragraphs'],*[x['body'] for x in copy['steps']],copy['stakes']['headline'],copy['stakes']['body'],copy['final']['body'],*copy['story'],copy['contact']['body'],*copy['contact']['steps'],copy['pricingAnswer']]
for block in blocks:assert block in source.replace(',', ''),block
normalize=lambda value:' '.join(value.split())
rendered={route:normalize(' '.join(load(route).text)) for route in ['/','/our-story','/contact']}
for block in blocks[:11]+[copy['pricingAnswer']]:assert normalize(block) in rendered['/'],block
for block in copy['story']:assert normalize(block) in rendered['/our-story'],block
for block in [copy['contact']['body'],*copy['contact']['steps']]:assert normalize(block) in rendered['/contact'],block
for route in ['/','/our-story']:
 page=load(route)
 assert '/assets/owners-group-edited-v1.png' in page.images
 assert 'AI edited from the supplied reference' not in ' '.join(page.text)
print('PASS:',len(blocks),'latest source copy blocks, rendered content, and edited owners portrait without caption strip.')

# Current visual cleanup requests.
for route in routes:
 p=load(route)
 for target in ['https://www.youtube.com/@stoplosingleadshq','https://www.facebook.com/profile.php?id=61575410375946','https://www.skool.com/thebusinesslab-5864/about']:
  assert any(href==target for href,label in p.links),(route,target)
home=urlopen('http://127.0.0.1:3000/').read().decode()
assert 'founder-strip' not in home
assert 'hero-assurance-caption' not in home
assert 'meet-team-button' in home
contact=load('/contact')
assert '/assets/team-conversation-edited-v1.png' in contact.images
lab=load('/business-lab')
assert '/assets/From Chaos to Clarity_ Business Lab.png' in lab.images
assert '/assets/business-lab-workspace-v1.png' not in load('/').images
assert 'owners-cta-background-v2.png' in Path('src/refinements.css').read_text()
print('PASS: new Business Lab page, generated images, footer socials, removed placeholder strip, removed hero caption and punctuation cleanup.')
