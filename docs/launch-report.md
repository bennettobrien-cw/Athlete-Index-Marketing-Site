# Athlete Index marketing site: launch report

**Status:** Built and deployed on 2026-11-12. Not ready for public launch until the four pre-launch issues below are closed.

**Live preview:** https://bennettobrien-cw.github.io/Athlete-Index-Marketing-Site/

**Pre-launch issues:**
- [#11 Fill in content placeholders](https://github.com/bennettobrien-cw/Athlete-Index-Marketing-Site/issues/11)
- [#12 Legal review](https://github.com/bennettobrien-cw/Athlete-Index-Marketing-Site/issues/12)
- [#13 Confirm app features](https://github.com/bennettobrien-cw/Athlete-Index-Marketing-Site/issues/13)
- [#14 Connect live services](https://github.com/bennettobrien-cw/Athlete-Index-Marketing-Site/issues/14)

Background: [research](research.md) · [site plan](site-plan.md)

---

## 1. What was built

The site is built with Astro 7 and Tailwind 4 as static HTML. It ships no JavaScript beyond a few small scripts: the mobile menu, audience tabs, the stopwatch counter, the forms and analytics. It is hosted on GitHub Pages.

| Page | Key sections |
|---|---|
| **Home** `/` | See the section list below the table. |
| **Features** `/features/` | The five features in depth, a mid-page trial band, example measurables for football, basketball and baseball/softball, and a final CTA. |
| **Pricing** `/pricing/` | Plan cards with a Monthly/Annual switch that works without JS. A four-step "How the free trial works" explainer with auto-renewal terms. A 12-row comparison table. A pricing FAQ. |
| **Parents** `/parents/` *(added on the strength of the research)* | A trial CTA, the safety band, "What it costs", "The honest odds" (NCAA 2024-25 figures linked to their source), and a parent FAQ. |
| **Recruiters** `/recruiters/` | The four-point signal-quality pitch, a note on contact rules, and a **Request recruiter access** form. The site makes no "NCAA-approved" claim, and CI blocks one. |
| **About** `/about/` | The mission, five principles, and a `[TEAM]` placeholder. |
| **Contact** `/contact/` | A contact form, plus contact email and response-time placeholders. |
| **Privacy Policy** `/privacy/`, **Terms of Service** `/terms/` | Structured drafts with a "Draft — needs legal review" banner. Both are `noindex` and left out of the sitemap. |
| **404** | Links back home and to the trial. |

The home page sections, in order:
1. A hero with a stopwatch-style sample profile and a recruiter strip.
2. A proof strip of placeholder stats.
3. How it works, in three steps.
4. Five feature sections.
5. Athletes / Parents / Coaches / Recruiters tabs.
6. The "Safe for families" band, with the under-13 policy.
7. Testimonial placeholders.
8. A pricing preview.
9. An FAQ of six questions.
10. A final CTA band.

**Across the site:**
- **Configuration:** one config file (`src/config.ts`) holds the site URL, app and sign-up URLs, Plausible domain and Formspree endpoints.
- **Content:** all copy, pricing, FAQs and testimonials live in `src/content/site.ts`, and the legal text in `src/content/legal.ts`.
- **SEO:**
  - Each page has its own title, description, canonical URL, and Open Graph and Twitter tags.
  - Each page shares one Open Graph image, `public/og.png`, rebuilt with `npm run og-image`.
  - The home page carries `sitemap.xml`, `robots.txt`, and JSON-LD for Organization, WebSite, SoftwareApplication and FAQPage.
- **Analytics:** Plausible, which is cookieless, so there is no consent banner. It is switched off until `plausibleDomain` is set. Events tracked:
  - `cta_click` with location and label;
  - `audience_tab`;
  - `faq_open`;
  - `form_submit`.
- **Forms:** sent to Formspree as JSON.
  - Inline, screen-reader-friendly errors.
  - A honeypot field and a 3-second time trap for spam, with no puzzle CAPTCHA.
  - Success and failure messages shown in a live region.
- **Brand:**
  - The Split Time mark is rebuilt as SVG.
  - Archivo and Space Grotesk are self-hosted.
  - The colours are defined as design tokens.
  - Orange buttons always carry dark text, because white on `#FF6A1F` is only 2.86:1 contrast.

**Changes from the plan, and why:**
- **No sticky "Start free trial" bar on phones.** The sticky header already shows that button at every width, and a second bar risked covering focused elements (WCAG 2.4.11).
- **Fonts load with `font-display: optional` and are preloaded.** On a slow first visit, the fallback font is kept rather than swapped mid-read. This took layout shift from up to 0.12 to 0.

## 2. Quality checks

**What CI blocks.** Every pull request must pass four separate checks before it can merge: Format, Type check, E2E and accessibility, and Lighthouse. On every page, the E2E and accessibility suite (50 Playwright tests in 16 files) fails the build if:
- axe finds any WCAG 2.2 AA violation;
- the page scrolls sideways or cuts off content at 375, 768, 1280 or 1920 px;
- headings skip a level;
- layout shift is 0.1 or more while slow fonts load;
- a page in the sitemap lacks a unique title and description, a self-referencing canonical, or exactly one `h1`.

**Lighthouse.** Scores are the median of three runs per page, measured on 2026-11-12 at Lighthouse's default mobile emulation.

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 0.8 s | 0.000 | 8 ms |
| `/features/` | 100 | 100 | 100 | 100 | 0.8 s | 0.000 | 0 ms |
| `/pricing/` | 100 | 100 | 100 | 100 | 0.8 s | 0.000 | 0 ms |
| `/parents/` | 100 | 100 | 100 | 100 | 0.8 s | 0.000 | 0 ms |
| `/recruiters/` | 100 | 100 | 100 | 100 | 0.8 s | 0.000 | 0 ms |
| `/about/` | 100 | 100 | 100 | 100 | 0.8 s | 0.000 | 0 ms |
| `/contact/` | 100 | 100 | 100 | 100 | 0.8 s | 0.000 | 0 ms |
| `/privacy/` | 100 | 100 | 100 | 63* | 0.8 s | 0.000 | 0 ms |
| `/terms/` | 100 | 100 | 100 | 63* | 0.8 s | 0.000 | 0 ms |
| `/404.html` | 100 | 100 | 100 | 63* | 0.8 s | 0.000 | 0 ms |

\* These pages are deliberately `noindex`, which is the only SEO audit they fail. CI checks them on the other three categories.

**Fixed during the verification pass:**
- **Heading order.** The pricing plan cards jumped from `h1` to `h3`. A visually hidden `h2` now sits between them.
- **Layout shift.** Font swaps caused shifts of up to 0.12 on `/recruiters/`. The fonts are now preloaded and use `font-display: optional`.
- **Lighthouse coverage.** Lighthouse had only been auto-discovering 5 pages. It now audits all 10.

## 3. Placeholders to fill in (issue #11)

Everything below is visibly bracketed on the site, so nothing invented ships by accident.

### Config: `src/config.ts` (issue #14)

| Value | Now | Needed |
|---|---|---|
| `siteUrl` | GitHub Pages URL | The marketing domain, plus a `CNAME` |
| `signupUrl` | `https://app.athleteindex.dev` | Confirm the exact sign-up path |
| `forms.contact` | `CONTACT_FORM_ID` | A Formspree form ID |
| `forms.recruiter` | `RECRUITER_FORM_ID` | A Formspree form ID |
| `plausibleDomain` | empty (analytics off) | Your Plausible site domain |

### Content: `src/content/site.ts`

| Placeholder | Where it appears |
|---|---|
| `[PRICE]` ×3 | Athlete monthly, Athlete annual, Recruiter monthly. Shown on Home, Pricing and in the trial terms. |
| `[TRIAL LENGTH]` | Trial terms beside every trial CTA, and the comparison table |
| `[REMINDER DAYS]` | "How the free trial works" |
| `[STAT: athletes]`, `[STAT: results posted]`, `[STAT: recruiters]` | Home proof strip. **Set `proof.show: false`** if you don't have real, verifiable numbers at launch. |
| `[TESTIMONIAL: …]` ×3, with `[NAME]`, `[SPORT]`, `[YEAR]`, `[ROLE]`, `[PROGRAM]` | Home testimonials. Use only real quotes with written permission (FTC rule, 16 CFR 465), otherwise **set `testimonials.show: false`**. |
| `[CONTACT EMAIL]`, `[SUPPORT RESPONSE TIME]` | Contact page |
| `[TEAM: …]` | About page |
| `[CONFIRM: …]` ×4 | Whether the trial needs a card, the refund policy, the annual saving, and the data-deletion timeline (Pricing and Parents FAQs) |

### Legal: `src/content/legal.ts`

| Placeholder | Where it appears |
|---|---|
| `[COMPANY LEGAL NAME]`, `[COMPANY ADDRESS]`, `[EFFECTIVE DATE]` | Both legal pages |
| `[PAYMENT PROCESSOR]`, `[AI PROVIDER]`, `[VERIFIABLE PARENTAL CONSENT METHOD]` | Privacy Policy |
| `[RETENTION PERIODS: …]`, `[BACKUP RETENTION PERIOD]` | Privacy Policy, Terms of Service |
| `[CONFIRM: …]` ×3 | App analytics provider, visibility controls, refund policy |

The sample athlete "Jordan Ellis" and the names in the feature mockups are fictional and labelled as samples.

## 4. Needs legal review (issue #12)

None of the legal text is final. Your lawyer should review:

1. **COPPA (amended rule; compliance required since 2026-04-22).** You chose to allow under-13 accounts through parents.
   - The method for verifiable parental consent.
   - The direct notice to parents.
   - Whether recruiters seeing an under-13 profile needs separate consent.
   - The written data-retention policy and security programme.
   - A ban on using children's data to train AI without consent.
2. **Auto-renewing free trials.**
   - California's Automatic Renewal Law as amended by AB 2863, and roughly 30 other state laws.
   - Capturing express consent at checkout.
   - The reminder before the trial ends, the annual reminder, and online cancellation.
   - The FTC's renewed rulemaking on subscriptions ("negative option" offers).
3. **Terms for minors.** A parent accepts for under-18s. Also review:
   - arbitration and class-action waivers;
   - warranty disclaimers and limits of liability;
   - the licence for uploaded content, which the drafts make revocable.
4. **State laws on minors' privacy and design.** Check which apply:
   - California Age-Appropriate Design Code (partly blocked by courts);
   - Maryland Kids Code;
   - Texas SCOPE Act;
   - Florida HB 3;
   - state laws on app-store age verification, if native apps ship.
5. **AI Assistant.** Whether California SB 243 (companion chatbots) applies, and what AI disclosures are needed.
6. **NCAA rules.**
   - If the Recruiter plan is sold to D1 football or basketball programs, check whether the NCAA must approve Athlete Index as a scouting service (Bylaw 13.14.3).
   - Confirm that no fee depends on recruiting outcomes.
7. **Cookies.** Confirm that cookieless Plausible needs no banner, given that some EU regulators read the rules strictly. Confirm a US-only launch.
8. **Claims on the marketing site** (issue #13 tracks the app side). The site states these as facts:
   - verified results, parent-linked accounts and verified recruiters;
   - minors' profiles kept out of search engines;
   - no data sales, and no targeted ads to minors;
   - one-click cancellation.

When the drafts are approved:
1. Remove the draft banner.
2. Take the pages out of `draftLegalPaths`, so they are indexed and appear in the sitemap.
3. Remove their exemption from the Lighthouse SEO check.

## 5. Top 5 recommendations for conversion after launch

1. **Get real proof, then show it.** This is the biggest lever.
   - Collect 5–10 short testimonials with permission: athletes, parents, and one or two coaches or recruiters. Include sport, class and the level they committed to.
   - Gather two or three athlete success stories, such as "posted a verified 40, got a D2 camp invite".
   - Turn the proof strip on only with numbers you can defend.
2. **A/B test the hero.**
   - Test "Get seen. Get recruited." against "Your numbers. Your film. In front of recruiters."; both are already in `hero.alternatives`.
   - Measure `cta_click` from the `hero` location through to trial starts in the app.
   - Separately, test the CTA wording "Start free trial" against "Build my free profile".
3. **Show a real, consented athlete profile.** Replace the fictional sample with a real profile, or a short screen recording of building one. Let visitors open a public sample profile in the app without signing up.
4. **Watch where parents drop off.**
   - Track how far parents get from `/parents/` into the trial.
   - Use `faq_open` to see which objections come up most, and move the top two into the hero area of Pricing and Parents.
   - Test showing the price after the trial right on the button, e.g. "Start free trial — then $X/mo".
5. **Build recruiter supply in parallel.** Athletes pay to be seen by recruiters, so a credible "recruiters searching" number and a few named programs (with permission) will lift athlete conversion.
   - Follow up every recruiter access request within a day.
   - Add a recruiter-only landing page for outreach.
   - Measure `form_submit` on `recruiter-form`.

## 6. How to run, build and deploy

You need Node 24+. On this machine it is installed in `~/.local/opt` and linked into `~/.local/bin`.

```bash
npm ci                               # install dependencies
npm run dev                          # local dev server at http://localhost:4321/Athlete-Index-Marketing-Site/
npm run build                        # static build into dist/
npm run preview                      # serve the build locally

npm run lint                         # Prettier format check
npm run check                        # Astro + TypeScript type check
npx playwright install chromium      # once, before the first e2e run
npm run test:e2e                     # builds, serves on :4392 and runs all Playwright tests
CHROME_PATH=/path/to/chrome npm run lighthouse   # Lighthouse CI on every built page (run npm run build first)
npm run og-image                     # regenerate public/og.png from scripts/og-image.html
```

**Editing content:** change `src/content/site.ts` or `src/content/legal.ts`, then open a PR. CI checks every page.

**Deploying:**
- Every merge to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
- `main` is protected: changes go through a PR, and all four CI checks must pass.

**Moving to a custom domain:**
1. Set `siteUrl` in `src/config.ts`. A root domain such as `https://athleteindex.com/` makes the base path `/` automatically.
2. Add `public/CNAME` containing the domain.
3. Point DNS at GitHub Pages, and set the custom domain in the repo's Pages settings.
4. Re-run Lighthouse. The canonical URLs, sitemap, robots.txt and Open Graph URLs all follow `siteUrl`.
