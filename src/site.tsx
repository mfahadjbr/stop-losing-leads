import { Pricing } from './pricing';
import { CommunityBlock, WorkspaceImage, ConversationImage } from './community';
import { FiYoutube, FiFacebook } from 'react-icons/fi';
import { TeamImage } from './team-image';
import { PhotoPlaceholder, Proof } from './proof-section';
export { Quiz } from './quiz-page';
import { brief } from './brief-content';
import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Hero, Plan, FinalCTA } from './redesign';
import { Videos } from './video-gallery';
export { Plan, FinalCTA } from './redesign';
import { FiArrowUpRight, FiArrowRight, FiArrowLeft, FiPhone, FiMessageSquare, FiCheck, FiMenu, FiX, FiPlay, FiClock, FiUsers, FiLayers, FiZap, FiCalendar, FiMail, FiMapPin } from 'react-icons/fi';
const A = '/assets/';
export const CTA = () => <a className="button" href="/book">Book My Lead Leak Diagnostic <FiArrowUpRight /></a>;
function Reveal({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={{
    opacity: 1,
    y: reduce ? 0 : 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: .6
  }}>{children}</motion.div>;
}
export function Shell({
  children
}: {
  children: ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 50); update(); window.addEventListener('scroll', update, {passive:true}); return () => window.removeEventListener('scroll', update); }, []);
  return <><a className="skip" href="#main">Skip to content</a><header className={scrolled ? 'is-scrolled' : ''}><a href="/" className="brand" aria-label="Stop Losing Leads HQ home"><img src={A + 'logo.png'} alt="Stop Losing Leads HQ" /></a><nav aria-label="Main navigation" className="desktop-nav"><a href="/">Home</a><a href="/our-story">Our Story</a><a href="/business-lab">Business Lab</a><a href="/contact">Talk to Our Team</a></nav><a className="nav-cta" href="/book">Book My Lead Leak Diagnostic <span className="button-arrow"><FiArrowUpRight /></span></a></header><main id="main">{children}</main><footer><div className="footer-atmosphere" aria-hidden="true" /><div className="footer-top"><div><a href="/" className="footer-brand"><img src={A + 'logo.png'} alt="Stop Losing Leads HQ" /></a></div><div><a href="/">Home</a><a href="/our-story">Our Story</a><a href="/business-lab">Business Lab</a><a href="/contact">Talk to Our Team</a><a href="/quiz">Lead Leak Quiz</a></div><div><a href="tel:+19402027945">(940) 202 7945</a><a href="mailto:hello@mail.stoplosingleadshq.com">hello@mail.stoplosingleadshq.com</a><p>Carrollton TX<br />Monday to Friday · 9am to 5pm Central</p></div></div><div className="footer-social"><a href="https://www.youtube.com/@stoplosingleadshq"><FiYoutube />YouTube <FiArrowUpRight /></a><a href="https://www.facebook.com/profile.php?id=61575410375946"><FiFacebook />Facebook <FiArrowUpRight /></a><a href="https://www.skool.com/thebusinesslab-5864/about"><FiUsers />Skool <FiArrowUpRight /></a></div></footer></>;
}
const problems = [{
  icon: FiPhone,
  title: 'The phone rings and nobody picks up.',
  body: 'That caller just Googled your competitor. They picked up on the first ring.'
}, {
  icon: FiClock,
  title: 'The web form sits overnight.',
  body: 'That prospect contacted three businesses. You replied last.'
}, {
  icon: FiMessageSquare,
  title: "One reply then silence.",
  body: 'Nobody follows up again. A good lead goes cold.'
}, {
  icon: FiUsers,
  title: 'Old contacts collect dust.',
  body: 'You already paid to reach these people. Give them a reason to come back.'
}];
const before = ["A missed call goes to voicemail then to your competitor", 'A web form waits until tonight.', "One reply then silence", 'Old contacts sit in a spreadsheet.', 'You answer the phone between jobs.'];
const after = ['A missed call gets a text back in seconds.', 'A web form gets an answer before they close the tab', 'Follow up keeps going until they book or say no', 'Old contacts get a reason to come back.', "You do the job and the system answers"];
function Comparison() {
  const labels = ['Missed calls', 'Web inquiries', 'Follow up', 'Past contacts', 'Your time'];
  const icons = [FiPhone, FiMessageSquare, FiClock, FiUsers, FiCalendar];
  return <section className="section compare compare-v3"><div className="section-heading"><span className="eyebrow">SAME LEADS. A DIFFERENT WAY TO WORK.</span><h2>More follow through.<br /><em>Less falling through.</em></h2></div><div className="change-table"><div className="change-head"><span>WHERE IT CHANGES</span><span>Without a system</span><span><span className="live-dot" /> With your system</span></div>{labels.map((label, i) => {
        const Icon = icons[i];
        return <div className="change-row" key={label}><div className="change-label"><span><Icon /></span><b>{label}</b></div><p className="change-before"><FiX />{before[i]}</p><p className="change-after"><FiCheck />{after[i]}</p></div>;
      })}</div><small>Illustrative workflows. Your system is shaped around your business.</small></section>;
}
export function Guide() {
  return <section className="section guide"><Reveal><TeamImage className="guide-team-image" /></Reveal><Reveal><span className="eyebrow">YOUR BUSINESS DESERVES A GUIDE</span><h2>{brief.guide.headline}</h2>{brief.guide.paragraphs.map(p => <p key={p}>{p}</p>)}<a className="button meet-team-button" href="/our-story#team">Meet the team <span className="button-arrow"><FiArrowUpRight /></span></a></Reveal></section>;
}
const faqs = [['Do I need more leads first?', "No. If you get prospects but struggle to respond quickly or follow up consistently this matters now. The system works with the contacts you already have."], ['Do you replace my marketing?', 'No. We do not run ads or SEO. We focus on what happens after a prospect comes in. Your marketing brings people in. We make sure they convert.'], ['Do I need to be tech savvy?', "No. We handle everything. You approve the plan we build and install. Most clients go live without touching a single setting."], ['What if I already have a CRM?', 'That is exactly who we help. A CRM without automations is an expensive contact list. We turn it into an automated follow up and nurture machine.'], ['What does it cost?', brief.pricingAnswer]];
export function Home() {
  return <><Hero /><section className="section problem" id="problem"><Reveal className="section-heading"><div><span className="eyebrow">THE LEAK ISN'T ALWAYS OBVIOUS</span><h2>You're not short on leads.<br /><em>You're losing the ones you have.</em></h2></div></Reveal><div className="problem-grid">{problems.map((p, i) => <Reveal key={p.title}><p.icon /><span className="card-index">0{i + 1}</span><h3>{p.title}</h3><p>{p.body}</p></Reveal>)}</div><div className="problem-end"><p>{brief.problemClosing}</p></div></section><Guide /><Plan /><Pricing /><Comparison /><Proof /><Videos /><section className="stakes"><span className="eyebrow">STEWARD WHAT YOU ALREADY HAVE</span><h2>{brief.stakes.headline}</h2><p>{brief.stakes.body}</p></section><FinalCTA /><CommunityBlock /><section id="faq" className="section faq"><div><span className="eyebrow">COMMON QUESTIONS</span><h2>Common questions.</h2></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section></>;
}
export function Story() {
  return <><section className="section page-hero"><span className="eyebrow">OUR STORY · CARROLLTON TEXAS</span><h1>We built this<br /><em>for ourselves first.</em></h1></section><section className="section story-grid"><div className="story-photo-grid"><TeamImage className="story-team-image" /></div><article>{brief.story.map(p => <p key={p}>{p}</p>)}<CTA /></article></section><section className="section team" id="team"><span className="eyebrow">THE PEOPLE & THE SYSTEMS</span><h2>Meet the team.</h2><ConversationImage /><div className="team-grid">{[['Kevin', "Co founder systems architect", "Designs every follow up system and runs his own businesses on them."], ['Marcie', "Co founder coaching and client success", 'Walked away from thirty years in corporate to help owners steward what they already have.'], ['Jordanna', "Co founder strategy and client relationships", "Makes sure every system fits the business it\u2019s built for and signs off before anything goes live."], ['Mav (AI agent)', "Strategy agent works with Jordanna", "Finds the leak shapes the message names the next move."], ['River (AI agent)', "Execution agent works with Kevin and Marcie", "Ships the work: content scheduling reporting and the numbers."]].map(([n, r, b], i) => <div key={n}><div className="team-avatar">{i > 2 ? <FiZap /> : <span>{n[0]}</span>}</div><h3>{n}</h3><small>{r}</small><p>{b}</p></div>)}</div><p>And the team behind us who make it all possible.</p></section><Videos /><FinalCTA /></>;
}
export function Contact() {
  const [ready, setReady] = useState(false);
  return <section className="section contact-page"><div><span className="eyebrow">LET'S FIND YOUR LEAK</span><h1>Talk to<br /><em>our team.</em></h1><p>{brief.contact.body}</p><ol>{brief.contact.steps.map(p => <li key={p}>{p}</li>)}</ol><div className="contact-reach"><a href="tel:+19402027945"><span className="reach-icon"><FiPhone /></span><span><small>CALL OUR TEAM</small><strong>(940) 202 7945</strong></span><FiArrowUpRight /></a><a href="mailto:hello@mail.stoplosingleadshq.com"><span className="reach-icon"><FiMail /></span><span><small>SEND US A NOTE</small><strong>Email our team</strong></span><FiArrowUpRight /></a><div><span className="reach-icon"><FiMapPin /></span><span><strong>Carrollton TX</strong><p>Mon to Fri · 9am to 5pm Central</p></span></div><p className="reach-fast"><span/>We respond fast. (Obviously.)</p></div><div className="contact-story"><ConversationImage /><p>{brief.story[0].split('. ').slice(0, 2).join('. ')}.</p></div></div><form id="diagnostic-form" onSubmit={e => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const body = Array.from(data.entries()).map(([k, v]) => k + ': ' + v).join('\n');
      window.location.href = 'mailto:hello@mail.stoplosingleadshq.com?subject=' + encodeURIComponent('Lead Leak Diagnostic request') + '&body=' + encodeURIComponent(body);
      setReady(true);
    }}><h2>A little about your business.</h2><p>This form opens your email app with your details. Send the email there to reach our team.</p><div className="form-grid"><label>Full Name<input name="Full Name" type="text" autoComplete="name" placeholder="Your full name" /></label><label>Phone Number *<input name="Phone Number" type="tel" autoComplete="tel" placeholder="Your phone number" required /></label><label>Email Address *<input name="Email Address" type="email" autoComplete="email" placeholder="you@business.com" required /></label><label>Business Name<input name="Business Name" type="text" autoComplete="organization" placeholder="Your business name" /></label></div><label>Message<textarea name="Message" rows={5} placeholder="Tell us a little about your business and how we can help." /></label><button type="submit" className="button">Book My Lead Leak Diagnostic <FiArrowUpRight /></button>{ready && <p role="status">Please send the draft from your email app. If it did not open call (940) 202 7945.</p>}</form></section>;
}
