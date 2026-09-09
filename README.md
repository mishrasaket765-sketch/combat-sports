# Combat Sports Analysis

Premium marketing website for Combat Sports Analysis using Next.js App Router, TypeScript, Tailwind CSS, and Sanity.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open http://localhost:3000.

## Sanity

Set the three public Sanity variables in `.env.local`. Run `npx sanity login`. Start Next.js and open `/studio`. The Studio contains only `About`, `Privacy Policy`, and `Terms & Conditions`.

To populate the supplied content, create a Sanity write token and put it in `SANITY_API_WRITE_TOKEN`, then run `npm run seed`. Review the imported legal content in Studio before publishing.

## Hero video

Add your licensed boxing/combat-sports footage as `public/media/hero.mp4`. The component is already configured with `autoplay`, `muted`, `loop`, and `playsInline`; `hero-poster.svg` is the fallback.

## Routes

- `/` code-managed home
- `/about` Sanity-managed
- `/privacy-policy` Sanity-managed
- `/terms-and-conditions` Sanity-managed
- `/studio` embedded Sanity Studio

## Important

No phone number or email was invented because the supplied legal documents only direct users to the official support channel inside the app or official website. The navbar uses the sourced 13+ requirement as the right-side numeric badge.
