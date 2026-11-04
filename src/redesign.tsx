import { TeamImage } from './team-image';
import { PhotoPlaceholder } from './proof-section';
import { brief } from './brief-content';
import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { FiArrowUpRight, FiArrowRight, FiCheck, FiPhone, FiMessageSquare, FiCalendar } from 'react-icons/fi';
function Action() {
  return <a className="button" href="/book">Book My Lead Leak Diagnostic <FiArrowUpRight /></a>;
}
export function Hero() {
  const reduced = useReducedMotion();
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.hero-photo-slot', {
        y: 10
      }, {
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
      });
    });
    return () => mm.revert();
  }, []);
  return <section className="hero hero-v2"><div className="hero-scrim" /><motion.div className="hero-content" initial={{
      y: reduced ? 0 : 18
    }} animate={{
      y: 0
    }} transition={{
      duration: .8
    }}><span className="eyebrow"><span /> FOLLOW UP FOR SERVICE BUSINESSES</span><h1>You already paid<br />for the lead.<br /><em>Let's make sure<br />somebody answers it.</em></h1><p>{brief.hero.body}</p><Action /><a className="quiz-link" href="/quiz"><span>{brief.hero.quiz}</span><span className="quiz-link-arrow" aria-hidden="true"><FiArrowUpRight /></span></a></motion.div><div className="hero-photo-slot"><TeamImage priority /></div><div className="hero-assurance"><div><FiCheck /><span>Built for you</span></div><div><FiCheck /><span>Run by us</span></div><div><FiCheck /><span>Owned by you</span></div><p className="hero-closing-line">You do the work. We handle the follow up.</p></div></section>;
}
const steps = brief.steps.map((step, i) => ({
  ...step,
  icon: [FiPhone, FiMessageSquare, FiCalendar][i]
}));
export function Plan() {
  const reduced = useReducedMotion();
  return <section id="how-it-works" className="section plan plan-v2"><div className="plan-intro"><span className="eyebrow">A CLEAR PATH FORWARD</span><h2>Here's how<br /><em>it works.</em></h2><Action /></div><div className="journey"><svg className="journey-path" viewBox="0 0 1000 480" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M 0 335 C 130 465 230 240 390 270 S 580 330 730 105 S 900 65 980 85" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>{steps.map((step, i) => <motion.article className={'journey-step journey-step-' + i} key={step.title} initial={{
        y: reduced ? 0 : 20
      }} whileInView={{
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: .6,
        delay: reduced ? 0 : i * .12
      }}><span className="journey-dot"><step.icon /></span><span className="journey-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></motion.article>)}</div></section>;
}
export function FinalCTA() {
  return <section className="final-cta final-cta-v2"><div className="cta-scrim" /><div className="cta-copy"><span className="eyebrow">GET BACK TO YOUR BUSINESS. AND YOUR EVENINGS.</span><h2>Let's find<br /><em>your leak.</em></h2><p>{brief.final.body}</p><Action /><small>No pitch on the first call.</small></div></section>;
}
