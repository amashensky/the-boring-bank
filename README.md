# The Boring Bank — Website

Next.js 14 (App Router) site for theboringbank.com.

## Stack
- Next.js 14.2 (App Router, TypeScript)
- next/font (Inter + Fraunces, self-hosted)
- Plain CSS with CSS variables (no Tailwind, no UI kit)
- Zero runtime dependencies beyond Next/React

## Pages
- `/` — Homepage (hero, Deal Certificate, trusted strip, stats, how it works, advantage, CTA)
- `/how-it-works` — 6-phase process deep dive
- `/team` — Founders + story
- `/for-sellers` — Seller-focused landing with comparison table and FAQ
- `/for-buyers` — Buyer-focused landing
- `/contact` — Intake form (client component, no backend wired yet)

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### Option A — New Vercel project (fastest)
1. `git init && git add . && git commit -m "Initial v2 site"`
2. Push to a new GitHub repo
3. Go to vercel.com → New Project → Import the repo
4. Vercel auto-detects Next.js. Click Deploy. Done in ~90 seconds.
5. In your Vercel project settings → Domains, add `theboringbank.com` (you'll need to point DNS at Vercel)

### Option B — Replace your existing Vercel project
If `theboringbank.com` is already on Vercel:
1. Replace the contents of your existing repo with these files (keep `.git`)
2. `git add . && git commit -m "Homepage v2 redesign" && git push`
3. Vercel auto-deploys to the production domain

### Option C — Preview branch first (recommended)
```bash
git checkout -b redesign-v2
# copy these files into your existing repo
git add . && git commit -m "Homepage v2 redesign"
git push -u origin redesign-v2
```
Vercel creates a preview URL automatically. Review it, merge to main when ready.

## Before Going Live — Checklist

- [ ] Replace `[Co-Founder Name]` and `[Advisor Name]` on `/team` with real names
- [ ] Replace `[Firm]` placeholders in bios
- [ ] Replace the 6 firms in the "Backed by operators and advisors from" strip with real advisors
- [ ] Verify or replace the stats (72hr, $1–50M, 180+, 0%)
- [ ] Update `[Broker-Dealer Name]` in the footer once partner is confirmed
- [ ] Update `[Street Address]` on the contact page
- [ ] Wire the contact form to a real handler (Formspree, Resend, or API route)
- [ ] Swap placeholder `hello@theboringbank.com` if a different inbox is used
- [ ] Fill in Disclosures, Privacy, Terms, Form CRS pages (placeholders in footer)
- [ ] Add a real logo mark (currently the "B" placeholder)
- [ ] Add favicon + Open Graph image in `/app`

## Wiring the Contact Form

The form in `app/contact/ContactForm.tsx` currently just shows a success state. To make it actually send:

**Option 1 — Formspree / Getform** (no backend):
Set the form's `action` to your Formspree endpoint and change the `onSubmit` to allow default submission.

**Option 2 — Next.js API route**:
Create `app/api/contact/route.ts`, use `fetch('/api/contact', { method: 'POST', body: JSON.stringify(...) })` in the form, and wire to Resend / SendGrid / your CRM.

## Customizing the Palette

All colors are CSS variables at the top of `app/globals.css`:
```css
--bg: #FAFAF7;        /* page background */
--surface: #FFFFFF;   /* card / elevated surfaces */
--ink: #1A1A18;       /* primary type */
--ink-2: #3A3A36;     /* secondary type */
--muted: #7A7872;     /* captions, labels */
```
Change those six values and the whole site reskins.

