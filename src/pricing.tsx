import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiPhoneIncoming, FiRepeat, FiShield } from 'react-icons/fi';

export const plans = [
  { name: 'Response Rescue', who: 'For owners who miss calls and reply too slowly.', features: ['Missed call text back in seconds.', 'Instant replies to web forms and texts.'], icon: FiPhoneIncoming },
  { name: 'Revenue Accelerator', who: 'For owners who reply once and then the lead goes quiet.', features: ['Everything in Response Rescue.', 'Follow up that keeps going until they book or say no.'], icon: FiRepeat },
  { name: 'Revenue Protection Pro', who: 'For owners who want every leak closed and the numbers to prove it.', features: ['Speed, follow up and a plan for your old contacts.', 'Reporting so you see what you are winning back.'], icon: FiShield },
];

export function Pricing() {
  const reduced = useReducedMotion();
  return <section id="pricing" className="section pricing" aria-labelledby="pricing-title">
    <div className="pricing-heading"><span className="eyebrow">A PLAN FOR YOUR LEAK</span><h2 id="pricing-title">Simple plans. Pick the one that closes your leak.</h2><p>Every business leaks in a different place. Here is how we fix each one. Not sure which fits? Book a diagnostic and we'll tell you honestly.</p></div>
    <div className="pricing-grid">{plans.map((plan, i) => <motion.article key={plan.name} className={'pricing-card' + (i === 2 ? ' most-complete' : '')} initial={{ y: reduced ? 0 : 18 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: reduced ? 0 : i * .08 }}>
      <div className="plan-top"><span className="plan-icon"><plan.icon aria-hidden="true" /></span>{i === 2 && <span className="plan-badge">Most complete</span>}</div>
      <h3>{plan.name}</h3><p className="plan-who">{plan.who}</p>
      <ul>{plan.features.map(feature => <li key={feature}><FiCheck aria-hidden="true"/><span>{feature}</span></li>)}</ul>
      <div className="plan-bottom"><p className="plan-price"><strong>[PRICE]</strong> <span>per month</span></p><a className="button" href="/book">Book My Lead Leak Diagnostic <FiArrowUpRight aria-hidden="true"/></a></div>
    </motion.article>)}</div>
    <p className="pricing-assurance">You own your data and your system. We never pitch on the first call. We tell you if you don't need us.</p>
  </section>;
}
