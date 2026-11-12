# Athlete Index — Site plan

Based on [research.md](research.md). Status: **awaiting approval**.

## Decisions already made

| Topic | Decision |
|---|---|
| Logo | Split Time mark (a stopwatch with a lightning-bolt hand) rebuilt as inline SVG. Wordmark "ATHLETE **INDEX**" in Archivo Black Italic |
| Hosting | GitHub Pages, deployed by GitHub Actions |
| Analytics | Plausible (cookieless), behind a config flag. No consent banner |
| Forms | Formspree. Endpoint set in config, with a honeypot and time-trap for spam (no puzzle CAPTCHA, per WCAG 3.3.8) |
| Domain | `[SITE_URL]` placeholder in a single config value |
| Sports at launch | Football, basketball, baseball/softball |
| Plans | Athlete (monthly or annual, free trial) and Recruiter. Prices are `[PRICE]` placeholders |
| Primary CTA | **Start free trial**, linking to the app sign-up URL from config |
| Minimum age | Under-13s allowed through **parent-created accounts with verifiable parental consent**. Parent or guardian is the account holder and payer for all under-18s **[LAWYER]** |
| Trust features | The site describes all four: verified vs self-reported results, parent-linked accounts, verified recruiters, and visibility controls. Each is **gated: confirm the app ships it before launch** |

## Positioning

**Core promise (refined):** *Your numbers, your film, your story, in one place where college recruiters look.*

**Differentiators:**
- Results labelled "verified" or "self-reported"
- A living feed, not a static résumé
- Prices shown up front, no sales calls, cancel in one click
- Built for families, with parent controls
- An AI Assistant instead of a four-figure "recruiting coach"

**Tone:**
- Bold and fast like a sports broadcast.
- Credible and plain.
- Never promises scholarships.
- Covers every level: D1, D2, D3, NAIA and JUCO.

---

## Sitemap

| Page | URL | Goal |
|---|---|---|
| Home | `/` | Get athletes and parents to start a trial. Send recruiters to their page |
| Features | `/features` | Show in depth how each feature helps an athlete get recruited, then convert |
| Pricing | `/pricing` | Remove doubts about cost and cancellation, then convert to a trial |
| For Parents | `/parents` | Give the paying audience safety, cost and honesty answers. *(Added on the strength of research: parents pay and hold the strongest objections)* |
| For Recruiters | `/recruiters` | Pitch signal quality. Collect recruiter interest through a form |
| About | `/about` | Mission and honesty principles |
| Contact | `/contact` | Support and general contact form |
| Privacy Policy | `/privacy` | Draft with a "needs legal review" banner. Includes children's privacy (COPPA) |
| Terms of Service | `/terms` | Draft with a "needs legal review" banner |
| 404 | `/404` | Get lost visitors back to Home or a trial |

---

## Home page, section by section

1. **Header.** Logo, nav (Features, Pricing, Parents, Recruiters), a "Log in" text link and a **Start free trial** button. On mobile, a menu button opens the nav, and the CTA stays visible.
2. **Hero.** One message, one action.
   - **Headline options:**
     - A. **"Get seen. Get recruited."**
     - B. **"Your numbers. Your film. In front of recruiters."**
     - C. **"Put your game where recruiters look."**
   - **Subhead options:**
     - A. "Build your athlete profile, post verified results and highlights, and get found by college coaches. All in one place."
     - B. "One profile for your measurables, PRs and film, built so recruiters at every level can find you fast."
     - C. "Stop emailing stats into the void. Post your results once and let recruiters search for you."
   - **CTAs:** **Start free trial** and a secondary "See how it works" (scrolls to step 3). Below them, the line "`[TRIAL LENGTH]` free, then `[PRICE]`/mo. Cancel anytime in one click."
   - **Visual:** an HTML/CSS mock of a phone showing a fictional athlete profile, with a "40-yard dash 4.48s · Verified" result card, a highlight thumbnail and a feed post, plus a counter that animates on load. All names are fictional and marked as samples.
3. **Proof strip.**
   - `[STAT: athletes]`, `[STAT: results posted]`, `[STAT: recruiters]` as counters, and `[LOGO: partner]` slots.
   - All are visibly marked as placeholders and hidden by a config flag until real.
   - A pre-launch alternative: "Founding athletes wanted: be one of the first `[N]`."
4. **How it works, in three steps:**
   1. Build your profile
   2. Post your results
   3. Get discovered

   Each step has an icon and one sentence.
5. **Features** (alternating layout, each with a mock visual):
   - Profiles and measurables
   - Performance posts and PRs (verified badge)
   - Highlight videos
   - Search and discovery
   - AI Assistant (labelled as AI)

   A text link goes to /features.
6. **Who it's for.** Accessible tabs for Athletes, Parents, Coaches and Recruiters. Each tab has 3 tailored benefits and its own CTA. The Parents and Recruiters tabs link to their pages.
7. **Safety and honesty band.** For parents:
   - Parent-linked accounts
   - Verified recruiters
   - You control who sees your profile
   - Results labelled verified or self-reported
   - We never sell your data or promise scholarships
   - `[MIN AGE]` policy
8. **Testimonials.** Three cards that say "PLACEHOLDER — real testimonial needed", each with a slot for name, sport, class and quote. Hidden behind a flag until real (FTC rule).
9. **Pricing preview.** The two plan cards with `[PRICE]`, the trial and renewal disclosure, and a link to /pricing.
10. **FAQ** (top 6 objections, as accessible `<details>` elements):
    - Is it worth it?
    - Do recruiters actually use it?
    - How do I cancel?
    - Is my child's info safe?
    - Does it guarantee a scholarship? (No.)
    - Is this allowed under NCAA rules?
11. **Final CTA band.** "Your next PR could be the one a coach sees." **Start free trial**.
12. **Footer.** Nav, legal links, `[SOCIAL]` links, `[CONTACT EMAIL]`, the "Not affiliated with the NCAA" line, and ©.

On mobile, a sticky bottom **Start free trial** bar appears after the hero scrolls away. It uses `scroll-padding-bottom` so it never covers focus.

### Other pages, in brief
- **Features:** a deeper section for each feature, sport examples for football, basketball and baseball/softball, and a CTA after every second section.
- **Pricing:**
  - A monthly/annual toggle that works without JS (radio buttons with CSS).
  - Plan cards and a comparison table that becomes a stacked list on mobile.
  - The trial and auto-renewal disclosure.
  - The pricing FAQ: billing, trial, cancel, refunds, family payment, recruiter plan.
- **Parents:** safety controls, cost honesty against "$1k+ recruiting services" (no competitor named), honest odds (cited NCAA figures), the minimum-age policy and a FAQ.
- **Recruiters:** the signal story (verified results, filters by class and position, short film, coach endorsements), contact-rule awareness, and a recruiter-interest form (name, school, role, sport, division, email). No "NCAA-approved" claim.
- **About:** the mission and five honesty principles. The team is `[TEAM]`.
- **Contact:** a form (name, email, I am a…, message), `[CONTACT EMAIL]`, and an expected response time `[SLA]`.
- **Legal:** structured drafts, each with a banner "Draft — needs legal review — not in effect".

## Messaging hierarchy by audience

| Audience | Main message | Proof points | CTA |
|---|---|---|---|
| Athletes | Get seen by recruiters at every level | Profile in minutes, verified PRs, highlight film, AI help with emails and next steps | Start free trial |
| Parents | A safe, honest way to help your kid get recruited | Prices shown up front, cancel in one click, parent-linked account, verified recruiters, no guarantees or sales calls | Start free trial (secondary link: For Parents) |
| Coaches and trainers | Showcase your athletes and back their numbers | Verify and endorse results, one place for your roster's film | Start free trial |
| Recruiters | Find athletes worth evaluating, faster | Verified measurables, filters, short film, coach endorsements | Request recruiter access (form) |

## Conversion strategy
- **Primary CTA:** **Start free trial**, linking to `[SIGNUP_URL]`. It appears in the header, hero, after features, in each audience tab, in pricing, in the final band and in the mobile sticky bar. The trial and renewal line sits next to it each time.
- **Secondary CTAs:**
  - "See how it works"
  - "Compare plans" (/pricing)
  - "For parents"
  - "Request recruiter access"
  - "Log in" (app URL)
- **Analytics events (Plausible):**
  - `cta_click` with `{location, label}`
  - `form_submit` with `{form}`
  - `faq_open` with `{question}`
  - `audience_tab` with `{tab}`
  - These fire from `data-` attributes through one small script.

## Tech stack
- **Astro (static) + Tailwind CSS v4**
  - Ships zero JS by default, builds to static HTML that suits GitHub Pages, and keeps one component per section.
  - Content lives in `src/content/site.ts` (copy, pricing, FAQ, testimonials, flags). URLs and keys live in `src/config.ts`.
- **Fonts:** Archivo (display) and Space Grotesk (body).
  - They are **self-hosted from the same Google Fonts files through Fontsource**, not loaded from fonts.googleapis.com. This avoids the third-party request (faster LCP, and Google doesn't receive visitors' IPs) and keeps the same fonts.
  - Fallbacks are size-adjusted.
  - **This differs from the brief's "load from Google Fonts".** Flag it if you'd prefer the hosted CSS.
- **Design tokens** (CSS custom properties, Tailwind theme):

  | Token | Value | Notes |
  |---|---|---|
  | `--bg` | `#0E0E10` | |
  | `--surface` | `#17171B` | |
  | `--text` | `#FFFFFF` | |
  | `--muted` | `#A1A1AA` | |
  | `--accent` | `#FF6A1F` | Dark labels on it |
  | `--light-bg` | `#F4F1EC` | |
  | `--light-text` | `#0E0E10` | |
  | `--accent-on-light` | `#C2410C` | |

- **Tests (TDD, all running in CI):**
  - **Playwright e2e:**
    - Each page's title, meta, canonical, OG tags and JSON-LD.
    - Every CTA's href and analytics attributes.
    - Form validation and submission against a mocked endpoint.
    - Keyboard tabs and FAQ.
    - Reduced motion.
    - No horizontal scroll at 375, 768, 1280 and 1920 px.
    - The 404 page.
    - Sitemap and robots.
  - **axe-core:** zero WCAG 2.2 AA violations on every page, in dark and light sections.
  - **Lighthouse CI:** assert ≥ 0.9 in all four categories on every page.
- **CI/CD:** GitHub Actions runs the gates on every PR as separate jobs (lint and typecheck, build, e2e+axe, Lighthouse). On merge to `main`, it deploys to GitHub Pages.

## Build increments (one PR each, landed before the next)
1. Scaffold:
   - Astro, Tailwind, tokens and fonts.
   - Config and content files.
   - Base layout with SEO head, JSON-LD, sitemap and robots.
   - 404 page.
   - CI gates and the Pages deploy.
2. Header, footer and the mobile nav, plus the analytics hook and CTA event tracking.
3. Home: hero with the profile mock, proof strip, How it works.
4. Home: feature sections and the audience tabs.
5. Home: safety band, testimonials, pricing preview, FAQ and final CTA.
6. Pricing page.
7. Features and Parents pages.
8. Recruiters and Contact pages, with Formspree forms and spam protection.
9. About page and the legal drafts.
10. Verification:
    - Lighthouse and axe sweep, with fixes.
    - Screenshots at the four breakpoints.
    - `docs/launch-report.md`.

---

## Placeholders and open questions (all in one place)

**Content to fill in**
1. `[SITE_URL]`: marketing domain.
2. `[SIGNUP_URL]`: app sign-up link. I'll default to `https://app.athleteindex.dev`; confirm the exact path, e.g. `/signup`.
3. `[PRICE]` for Athlete monthly and annual, and Recruiter. Also `[TRIAL LENGTH]` and whether a card is required for the trial.
4. `[CONTACT EMAIL]`, `[SUPPORT RESPONSE TIME]`, `[SOCIAL]` links.
5. `[FORMSPREE_ID]` × 2: contact form and recruiter form.
6. `[PLAUSIBLE_DOMAIN]`: create a Plausible site.
7. `[STAT: athletes | results posted | recruiters]`, `[LOGO: partners]` and `[TESTIMONIAL × 3]`. All hidden by flags until real.
8. `[TEAM]` and company legal name and address, for About, the legal pages and the Organization JSON-LD.
9. OG share image: I'll generate one from the logo and brand. Confirm it's acceptable.

**Confirm in the app before launch** (the site claims these)
10. Results labelled verified or self-reported.
11. Parent-linked accounts, with parental consent for under-13s.
12. Verified recruiter accounts.
13. Profile visibility controls, including no search-engine indexing for minors.
14. One-click online cancellation (California auto-renewal law).

**For your lawyer**
15. The COPPA under-13 flow: verifiable parental consent method, separate consent for recruiter visibility, AI-training consent, and the retention and security programs.
16. The privacy policy and terms drafts: minors' capacity to contract, arbitration, a limited licence to uploaded video.
17. Auto-renewal and trial disclosure wording.
18. Whether Florida HB 3, Texas SCOPE, the Maryland Kids Code and California's Age-Appropriate Design Code apply.
19. NCAA scouting-service approval (ECAG) if the recruiter plan is sold to D1 football or basketball programs, and whether the fee structure clears the agent rules.
20. Whether California's companion-chatbot law (SB 243) applies to the AI Assistant.
21. Confirming a US-only launch.

**Repo**
22. Which GitHub owner should the repo live under: `bennettobrien-cw` or an organization?
23. Public or private? GitHub Pages on a private repo needs a paid plan.
