import { FinalCTA } from './redesign';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiUsers, FiLayers, FiMessageSquare, FiCompass, FiTool } from 'react-icons/fi';
import { Videos } from './video-gallery';
const skool = 'https://www.skool.com/thebusinesslab-5864/about';
export function WorkspaceImage({
  className = ''
}: {
  className?: string;
}) {
  return <figure className={'community-image ' + className}><img src="/assets/business-lab-workspace-v1.png" alt="Generated illustration of a warm workspace for business owners" loading="lazy" width={1536} height={1024} /><figcaption>Generated workspace visual</figcaption></figure>;
}
export function ConversationImage() {
  return <figure className="conversation-image"><img src="/assets/team-conversation-edited-v1.png" alt="Edited meeting portrait of the three owners from the supplied reference" loading="lazy" width={1536} height={1024} /></figure>;
}
export function CommunityBlock() {
  return <section className="section community-block"><div><span className="eyebrow">THE BUSINESS LAB</span><h2>A room for<br /><em>business owners.</em></h2><p>The Business Lab is the community every client joins and the room for owners who are not ready for done for you.</p><a className="button community-link" href="/business-lab">The Business Lab <FiArrowUpRight /></a></div></section>;
}
export function BusinessLab() {
  const reduced = useReducedMotion();
  return <><section className="section community-hero"><motion.div initial={{
        y: reduced ? 0 : 18
      }} animate={{
        y: 0
      }} transition={{
        duration: .65
      }}><span className="eyebrow">THE BUSINESS LAB</span><h1>Build your business<br /><em>with other owners.</em></h1><p>The Business Lab is the community every client joins and the room for owners who are not ready for done for you.</p><a className="button" href={skool}>The Business Lab on Skool <FiArrowUpRight /></a></motion.div><figure className="community-image lab-brand-image"><img src="/assets/From Chaos to Clarity_ Business Lab.png" alt="The Business Lab owners at a strategy workspace" width={1149} height={1371}/></figure></section><section className="section community-purpose"><div className="section-heading"><span className="eyebrow">A PLACE TO WORK ON YOUR BUSINESS</span><h2>You do not need another course.<br /><em>You need the follow up handled.</em></h2></div><div className="community-points">{[[FiUsers, 'A room for owners', 'Work on your systems alongside other business owners.'], [FiCompass, 'Steward what you have', 'Start with the leads and contacts you already paid for.'], [FiTool, 'Real conversations', 'See the conversations inside our Business Lab sessions.']].map(([Icon, title, body], i) => {
          const I = Icon as typeof FiUsers;
          return <motion.article key={i} initial={{
            y: reduced ? 0 : 18
          }} whileInView={{
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: .5,
            delay: reduced ? 0 : i * .1
          }}><I /><h3>{title as string}</h3><p>{body as string}</p></motion.article>;
        })}</div></section><Videos /><section className="section community-close"><h2>Before you buy more leads<br /><em>steward the ones you already have.</em></h2><a className="button" href="/book">Book My Lead Leak Diagnostic <FiArrowUpRight /></a><a className="text-link" href={skool}>The Business Lab on Skool <FiArrowUpRight /></a></section><FinalCTA /></>;
}
