from pathlib import Path
p=Path('src/quiz-page.tsx')
s=p.read_text()
a=s.index('export const quizQuestions'); b=s.index('export function Quiz')
s=s[:a]+'''export const quizQuestions = [
  {title:'How do most of your leads reach you?', options:['Phone calls','Web forms','Texts or messages','Referrals']},
  {title:'How fast do you usually reply to a new lead?', options:['Within a few minutes','Within a few hours','The next day','It depends on the day']},
  {title:'What happens when you miss a call?', options:['They get a text back right away','They leave a voicemail','I call back when I can','Nothing happens']},
  {title:'When a lead goes quiet, how many times do you follow up?', options:['Many times','Two or three times','Once','Never']},
  {title:'What do you do with your old contacts?', options:['We message them often','We message them sometimes','They sit in a list',"We don’t have a list"]}
];
export function scoreQuiz(answers:number[]) {
  const speed = [0,1,3,2][answers[1] ?? 0] + [0,2,1,3][answers[2] ?? 0];
  const scores = [speed, [0,2,4,6][answers[3] ?? 0], [0,2,4,6][answers[4] ?? 0]];
  return scores.indexOf(Math.max(...scores));
}
''' + s[b:]
a=s.index('  const scores =');b=s.index('  return <section',a)
s=s[:a]+'''  const resultIndex = scoreQuiz(answers);
  const results = [
    ['Speed leak', "Your leads wait too long for an answer. A missed call or a slow reply sends them to the next business. The fix is to answer in seconds, even when you’re on a job."],
    ['Follow up leak', "You reply once, and then it goes quiet. Most people need more than one touch before they book. The fix is follow up that keeps going until they book or say no."],
    ['Database leak', "You already have people who know you, but nobody is talking to them. Old contacts and past customers are sitting untouched. The fix is a reason for them to come back."]
  ];
''' + s[b:]
p.write_text(s)
p=Path('src/site.tsx');s=p.read_text();s=s.replace('const [menu, setMenu] = useState(false);', '''const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 50); update(); window.addEventListener('scroll', update, {passive:true}); return () => window.removeEventListener('scroll', update); }, []);''')
s=s.replace('<header>','<header className={scrolled ? \'is-scrolled\' : \'\'}>')
s=s.replace('className={menu ? \'open\' : \'\'}','className="desktop-nav"')
a=s.index('<button className="menu"');b=s.index('</header>',a);s=s[:a]+s[b:]
s=s.replace('<footer>','<footer><div className="footer-atmosphere" aria-hidden="true" />')
p.write_text(s)
p=Path('src/community.tsx');s=p.read_text().replace('<WorkspaceImage /><div>','<div>');s=s.replace('<figcaption>AI edited from the supplied owners reference</figcaption>','');p.write_text(s)
p=Path('src/team-image.tsx');s=p.read_text();a=s.index('<figcaption>');b=s.index('</figcaption>',a)+len('</figcaption>');s=s[:a]+s[b:];p.write_text(s)
p=Path('src/redesign.tsx');s=p.read_text().replace('<TeamImage className="cta-team-image" />','');p.write_text(s)
p=Path('src/booking-page.tsx');s=p.read_text();s=s.replace('BOOKING CALENDAR PLACEHOLDER','STATIC CALENDAR PREVIEW').replace('Live availability is not connected yet. Choose a requested date and send your details by email. Our team will confirm a time. This does not reserve an appointment.','Choose a date to preview your diagnostic request. Live availability is not connected.');s=s.replace('required /></label>','placeholder={name === \'Name\' ? \'Your full name\' : name === \'Phone\' ? \'Your phone number\' : name === \'Email\' ? \'you@business.com\' : \'Your business name\'} required /></label>');p.write_text(s)
