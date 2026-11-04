import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiPlay, FiLock, FiImage } from 'react-icons/fi';

// Approved records need consent plus the actual supplied details and clip.
export const clientClips: {
  id: string;
  approved: boolean;
  firstName: string;
  lastInitial: string;
  businessType: string;
  city: string;
  clipUrl: string;
}[] = [{
  id: "faith",
  approved: false,
  firstName: "Faith",
  lastInitial: "G",
  businessType: "",
  city: "",
  clipUrl: ""
}, {
  id: "miri",
  approved: false,
  firstName: "Miri",
  lastInitial: "C",
  businessType: "",
  city: "",
  clipUrl: ""
}, {
  id: "abdul",
  approved: false,
  firstName: "Abdul",
  lastInitial: "",
  businessType: "",
  city: "",
  clipUrl: ""
}, {
  id: "nathanael",
  approved: false,
  firstName: "Nathanael",
  lastInitial: "",
  businessType: "",
  city: "",
  clipUrl: ""
}];
export function PhotoPlaceholder({
  label,
  className = ''
}: {
  label: string;
  className?: string;
}) {
  return <div className={'photo-placeholder ' + className} role="img" aria-label={label + ' photo placeholder'}><FiImage aria-hidden="true" /><span>PHOTO PLACEHOLDER</span><b>{label}</b><small>Real photo to be supplied</small></div>;
}
const proofVideos = ['kD6Mu7V0eqU', '2GJiK9GdjEQ', 'OqyIwlXkEpQ'];
export function Proof() {
  const reduced = useReducedMotion();
  const [playing,setPlaying] = useState<string|null>(null);
  const trigger=useRef<HTMLButtonElement|null>(null);
  useEffect(()=>{
    if(!playing) return;
    const prior=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setPlaying(null); if(e.key==='Tab'){const els=[...document.querySelectorAll<HTMLElement>('.proof-video-dialog button, .proof-video-dialog iframe, .proof-video-dialog a')]; const first=els[0],last=els[els.length-1]; if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}}};
    document.addEventListener('keydown',key);
    return ()=>{document.body.style.overflow=prior;document.removeEventListener('keydown',key);trigger.current?.focus()};
  },[playing]);
  return <section className="section proof proof-complete" id="client-stories" aria-labelledby="proof-title">
    <span className="eyebrow">REAL PEOPLE ONLY</span><h2 id="proof-title">Real owners. Real businesses.<br/><em>Solving real problems.</em></h2>
    <p>We're early, and we're building in the open. Here's what our first clients said.</p>
    <div className="proof-clips">{proofVideos.map((id,i)=><motion.article className="client-video-card" key={id} initial={{y:reduced?0:20}} whileInView={{y:0}} viewport={{once:true}} transition={{duration:.5,delay:i*.08}}>
      <button className="client-video-cover" aria-label={'Play client conversation '+(i+1)} onClick={e=>{trigger.current=e.currentTarget;setPlaying(id)}}><img src={'https://i.ytimg.com/vi/'+id+'/hqdefault.jpg'} alt={'Client conversation '+(i+1)} loading="lazy"/><span className="client-play"><FiPlay/></span></button>
      <div className="client-video-copy"><small>REAL CONVERSATIONS</small><h3>Hear their story.</h3><a href={'https://www.youtube.com/watch?v='+id}>Watch the conversation <FiPlay/></a></div>
    </motion.article>)}</div>
    {playing&&<div className="modal proof-video-dialog" role="dialog" aria-modal="true" aria-label="Client conversation" onClick={()=>setPlaying(null)}><div onClick={e=>e.stopPropagation()}><button className="close" autoFocus onClick={()=>setPlaying(null)} aria-label="Close client video">×</button><iframe src={'https://www.youtube-nocookie.com/embed/'+playing+'?autoplay=1'} title="Client conversation" allow="autoplay; encrypted-media; fullscreen" allowFullScreen/><a href={'https://www.youtube.com/watch?v='+playing}>Watch on YouTube</a></div></div>}
  </section>;
}
