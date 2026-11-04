from pathlib import Path
p=Path('src/proof-section.tsx');s=p.read_text();s="import { useEffect, useRef, useState } from 'react';\n"+s;s=s[:s.index('export function Proof()')]+'''const proofVideos = ['kD6Mu7V0eqU', '2GJiK9GdjEQ', 'OqyIwlXkEpQ'];
export function Proof() {
  const reduced = useReducedMotion();
  const [playing,setPlaying] = useState<string|null>(null);
  const trigger=useRef<HTMLButtonElement|null>(null);
  useEffect(()=>{
    if(!playing) return;
    const prior=document.body.style.overflow;
    document.body.style.overflow='hidden';
    const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setPlaying(null)};
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
''';p.write_text(s)
