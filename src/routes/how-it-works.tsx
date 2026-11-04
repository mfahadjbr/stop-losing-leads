import {createFileRoute} from '@tanstack/react-router'
import {Plan,FinalCTA} from '../site'
export const Route=createFileRoute('/how-it-works')({component:()=> <><section className="section page-hero"><span className="eyebrow">DONE FOR YOU. OWNED BY YOU.</span><h1>You do the work.<br/><em>The system follows through.</em></h1><p>Instant replies. Consistent follow up. A reason for past customers to come back.</p></section><Plan/><FinalCTA/></>})
