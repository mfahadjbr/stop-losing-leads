# Stop Losing Leads HQ rebuild

Local review project using TanStack Start, React, TypeScript, Tailwind CSS, Framer Motion, GSAP and React Icons.

## Run
npm install
npm run dev

Open http://127.0.0.1:3000

## Validation
npm run build
npm run check

## Routes
Home /, How it works /how-it-works, Our story /our-story, Business Lab /business-lab, Lead Leak Quiz /quiz, Talk to our team /contact.

## Client inputs before production
- Approved testimonial photos, quotes, names, business/city and permission to publish. Owner videos are Business Lab content, not client proof.
- Founder group photo and individual photos with confirmed identities. Initials are used on founder cards until photos are provided.
- Confirm founder biographies and role descriptions from the supplied brief.
- Confirm diagnostic duration (the references differ between 15 and 30 minutes).
- Production form endpoint or CRM connection and exact approved SMS consent wording. Current form transparently prepares an email draft and requires the visitor to send it.
- Existing legal policy links are retained on the original domain pending approved replacement text.
- Videos use the seven supplied IDs. Automated newest-Shorts retrieval requires a channel feed/API integration; it is not represented as active.

The supplied images are retained in assets/ and copied to public/assets/. Hero is an original UI composition with supplied brand artwork, not a claimed founders photograph. No public pricing, invented statistics, reviews or guarantees.

## Design refinement
The current review uses a centered rounded navbar, contained photographic hero and CTA, rounded panels and curved process timeline. Generated visual prompts and provenance are recorded in image-prompts.md. Nunito Sans and Plus Jakarta Sans are locally hosted. Sofia Pro is not included because no licensed font file was supplied.
