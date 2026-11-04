# Stop Losing Leads HQ

Local preview: http://127.0.0.1:3000/
Business Lab: http://127.0.0.1:3000/business-lab

Current six pages: Home, Our Story, Business Lab, Talk to Our Team, Lead Leak Quiz, Book Your Lead Leak Diagnostic.

The latest direct user request supersedes the prior five-page map by adding Business Lab. See brief-audit.md for current verified behavior and pending integrations. Historical changes are in progress.md.

Run: npm install then npm run dev.
Checks: python scripts/verify_acceptance.py, npm run check, npm run build.

Images generated/edited on November 5 are in public/assets/business-lab-workspace-v1.png and public/assets/team-conversation-edited-v1.png. Exact prompts and provenance: nov5-image-prompts.md. Website captions identify generated/edited imagery. Individual face/name identities were not guessed.

Booking is static at the user's request. Forms prepare email drafts and do not claim an appointment or message was confirmed. A future public HTTPS booking URL can use VITE_BOOKING_URL, without credentials.

Real client clips require approval plus complete details. Supplied YouTube clips remain fixed until a live channel feed is connected. These limits are labeled in the interface.
