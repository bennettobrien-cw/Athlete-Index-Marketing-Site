# Athlete Index — Marketing site research

Researched 2026-11-11. Sources are linked inline. Items marked **[unverified]** come from third parties, vendors or competitors and could not be confirmed from a primary source. Items marked **[LAWYER]** need review by counsel. Nothing here is legal advice.

---

## 1. Marketing website fundamentals (2026)

### Hero and value proposition
- Visitors judge a page in the first ~10 seconds, and that is when most of them leave. Average visits last under a minute. [NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/), based on Microsoft Research (2010).
- Use a five-second test ("what is this, and who is it for?") as a check on first impressions. The 5-second length itself has little evidence behind it. Run the test at phone width too. [Smashing](https://smashingmagazine.com/2023/12/five-second-testing-case-study)
- Plain language converts better:
  - Unbounce's 2024 benchmark covers about 41k pages. Median conversion was 6.6% across industries and 3.8% for SaaS.
  - Copy at a 5th–7th grade reading level reportedly converted at an 11.1% median, against 5.3% for copy at a college reading level. [Unbounce](https://unbounce.com/conversion-benchmark-report/), via [MarketingProfs](https://marketingprofs.com/charts/2024/52374/landing-page-conversion-benchmarks). The reading-level split is **[unverified]** in the full report.
- **Recipe:**
  - A headline that states the outcome.
  - A subhead that says who it's for and how it works.
  - One primary CTA that names the offer.
  - A real product visual: a profile shown on a phone.
  - A short line for parents next to the CTA.

### Social proof
- Testimonials with photos held attention longest in CXL's eye-tracking study and were recalled best. [CXL](https://cxl.com/social-proof/)
- Put proof next to decision points, and make it specific: name, sport, class, result.
- **FTC Rule on Consumer Reviews and Testimonials (16 CFR 465), in effect since 2024-10-21.** [Federal Register](https://www.federalregister.gov/documents/2024/08/22/2024-18519/trade-regulation-rule-on-the-use-of-consumer-reviews-and-testimonials)
  - It bans fake or AI-written testimonials, reviews from people who never used the product, and undisclosed reviews by insiders.
  - It allows civil penalties for a first violation.
  - Under the Endorsement Guides, an outstanding outcome ("committed D1") needs a disclosure if it isn't typical.
  - Don't show college or team logos without permission.

### CTAs
- Avoid the vague "Get Started". In NN/g eyetracking, it stopped users from looking for information. Name what happens on click ("Start free trial", "Build my profile"). [NN/g](https://www.nngroup.com/articles/get-started/), [NN/g link labels](https://www.nngroup.com/articles/better-link-labels/)
- Avoid "Learn more" links that make no sense on their own. Screen-reader users hear them out of context. [NN/g](https://www.nngroup.com/articles/learn-more-links/)
- **Pattern:**
  - One primary CTA with the same wording everywhere: hero, after major sections, and the final band.
  - A secondary CTA with less emphasis.
  - An entry path for each audience.

### Pricing page
- Plan comparison is where people decide. If users can't quickly confirm a key feature, they leave. Add tooltips for jargon. [Baymard](https://baymard.com/blog/new-research-digital-subscription-services)
- Comparison tables are hard to read on mobile. Use stacked plan cards and a short comparison below them. [Smashing](https://smashingmagazine.com/2022/07/designing-better-pricing-page)
- "Three plans is optimal" and stats on trials with or without a card are vendor folklore with no credible primary data. Treat them as convention.
- **Subscription law:**
  - **FTC click-to-cancel rule:** vacated by the 8th Circuit on 2025-07-08. The FTC reopened rulemaking with an advance notice on 2026-03-11. ROSCA enforcement continues meanwhile. [Latham](https://www.lw.com/en/insights/eighth-circuit-vacates-ftc-click-to-cancel-rule), [Covington](https://www.cov.com/en/news-and-insights/insights/2026/03/ftc-launches-new-rulemaking-on-the-negative-option-rule)
  - **California auto-renewal law (AB 2863, effective 2025-07-01)** covers free-to-paid trials. It requires clear disclosure, express consent to auto-renewal, online cancellation and an annual reminder. [KTS](https://ktslaw.com/insights/alert/2024/10/california-latest-automatic-renewal-law-amendments-take-effect-in-july-2025)
  - About 30 states have similar laws.

### FAQ and objection handling
- Write questions in users' own words and make them distinct from answers. Use accessible accordions or jump links, and keep answers current. [NN/g](https://www.nngroup.com/articles/faq-ux-deconstructed/)
- Answer cost and cancellation on the pricing page itself, not only in the FAQ.

### Trust signals
- Make pricing, renewal and cancellation terms easy to find. Also link a privacy policy and a page on minors' data and visibility.
- Show real contact details. Use security badges only where they're accurate, and mention press only if it really happened.

### Mobile-first
- 95% of US teens have or can get a smartphone, and 46% are online "almost constantly". [Pew 2024](https://www.pewresearch.org/internet/2024/12/12/teens-social-media-and-technology-2024/)
- No credible source gives a mobile vs desktop split for parents. Measure it after launch.
- Thumb-zone heat maps aren't universal; Hoober revised his own 2013 study. [UXmatters](https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php) Keep main actions large and reachable.
- A sticky mobile CTA is fine if it never covers focused elements (WCAG 2.4.11).

### Page speed
- **Core Web Vitals "good" thresholds** (75th percentile): LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. [web.dev](https://web.dev/articles/vitals)
- Deloitte's "Milliseconds Make Millions" (2020, commissioned by Google): a 0.1 s mobile speed gain went with +8.4% retail conversion. It is a correlation study, so treat it as directional. [web.dev](https://web.dev/case-studies/milliseconds-make-millions)
- Static Astro with no JS by default fits well. The main risks are hero media (LCP), font swaps (CLS) and third-party scripts (INP).

### SEO basics
- **FAQ rich results no longer appear in Google** (limited since 2023-08, gone since 2026-05-07). [Google](https://developers.google.com/search/blog/2023/08/howto-faq-changes), [SEJ](https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/)
  - FAQPage JSON-LD is still valid schema and is read by other consumers, including AI answer engines, but expect no Google SERP feature from it.
- **Markup to add:**
  - `Organization`
  - `WebSite`
  - `SoftwareApplication` (no `aggregateRating` until real ratings exist)
  - `BreadcrumbList` on inner pages
- **On every page:**
  - a unique `<title>` (50–60 characters) and meta description;
  - a self-referencing canonical URL;
  - Open Graph and Twitter tags with a 1200×630 image;
  - inclusion in `sitemap.xml`, plus a `robots.txt` for the site.

### Accessibility (WCAG 2.2 AA)
- **New criteria at A/AA** ([W3C](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)):
  - 2.4.11 Focus Not Obscured: sticky bars must not hide focused elements.
  - 2.5.7 Dragging Movements: drag interactions need a single-tap alternative.
  - 2.5.8 Target Size: at least 24×24 CSS px.
  - 3.2.6 Consistent Help: help and contact stay in the same place on every page.
  - 3.3.7 Redundant Entry: don't make people re-enter information.
  - 3.3.8 Accessible Authentication: no puzzle-only CAPTCHA.
- **Brand contrast** (computed):

  | Pair | Ratio | Result |
  |---|---|---|
  | `#FF6A1F` on `#0E0E10` | 6.73:1 | ✅ AA text |
  | `#0E0E10` on `#FF6A1F` | 6.73:1 | ✅ AA. **Use dark labels on orange buttons.** |
  | `#FFFFFF` on `#FF6A1F` | 2.86:1 | ❌ Fails even for large text. **Never use white on orange.** |
  | `#FFFFFF` on `#C2410C` | 5.18:1 | ✅ The orange to use for text and buttons on light sections |

### Analytics and consent
- Plausible sets no cookies and no localStorage. It uses a daily-rotated hash and stores no raw IPs. [Plausible](https://plausible.io/data-policy)
  - It is widely treated as needing no consent banner under GDPR/ePrivacy, though strict regulators such as CNIL have taken a different reading. **[LAWYER]**
- GA4 sets cookies, so EU/UK visitors need opt-in consent.
- US state laws require "Do Not Sell/Share" plus honouring Global Privacy Control only when ad pixels are used. Under-16s need an opt-in in California.
- **Plausible with no ad pixels means no banner.**

---

## 2. Competitor teardown

| | NCSA | Hudl | SportsRecruits | FieldLevel | CaptainU | Prep Baseball Report | ProductiveRecruit |
|---|---|---|---|---|---|---|---|
| **Positioning** | Full service with human "recruiting coaches" | Team video and analytics; recruiting comes as a byproduct | Club-sport recruiting network | Coaches vouch for athletes to college coaches | Marketplace for athletes, colleges and events | Baseball scouting, rankings and showcases | Self-serve AI outreach |
| **Hero** | "Expert guidance on getting recruited" | "Change the Way You See the Game" | "This is where recruiting happens" | *(site returned errors)* | "GAIN EXPOSURE. GET RECRUITED." | "Covering All the Bases of Amateur Baseball" | "Reach every college coach. See who's interested." |
| **Primary CTA** | Build Your Profile | Contact Sales | Get Started Free | — | Get recruited | Become a Member | Get started |
| **Pricing** | Free tier. Paid tiers hidden behind a sales call; third parties estimate $1.2k–$4.2k+ **[unverified]** | Free athlete profile for athletes on Hudl teams. Personal plans not shown | Free profile. Pro price hidden (third parties say $250–399/yr) **[unverified]** | Free core. Premium price not public | "From $22.50/mo, never a contract" | Memberships, no prices shown | **$39/mo or $349/yr, 7-day trial, cancel in clicks, "no sales calls"** |
| **Social proof** | Commitment, coach and expert counts. College logos. Testimonials | "Millions of athletes". Case studies | Counts of college views, commitments and roster needs. Association logos | NJCAA "Official Recruiting Network". About 4.9★ on the App Store **[aggregator]** | User, coach and event counts. Club logos | Its own events and rankings | Counts of organizations and athletes. Testimonials |
| **Trust for minors** | BBB and security badges. No minor-specific privacy statement | Opt-in to recruiter visibility | Generic privacy and CCPA links only | — | NCAA-compliance line. COPPA children's privacy link | None | None |
| **Does well** | Volume of proof. Parent education content | Video, AI, recruiter opt-in model | Concrete "roster needs" hook | Credible signal from coaches vouching | Public entry price. No-contract message | **Measurables verified at its own events** | Transparent pricing. AI is the core |
| **Does badly** | Hidden pricing, hard-sell calls, hard to cancel **[competitor sources]**. Polarized reviews | Athlete is secondary. Nothing for parents | Hidden pricing. No parent copy | Premium seen as too expensive. App crashes | Trustpilot 2.0/5: upsell alerts, charges after cancelling ([Trustpilot](https://ca.trustpilot.com/review/captainu.com)) | Visibility depends on paying for events | No profile, discovery or social layer |

Sources: [NCSA cost page](https://www.ncsasports.org/who-is-ncsa/what-does-ncsa-do/what-does-ncsa-cost-how-much), [Hudl recruiting](https://www.hudl.com/blog/new-hudl-recruiting-tools-college-search-contact), [SportsRecruits](https://www.sportsrecruits.com/), [FieldLevel premium](https://support.fieldlevel.com/en/articles/811867-fieldlevel-premium-plans), [CaptainU](https://www.captainu.com/), [PBR](https://www.prepbaseballreport.com/), [ProductiveRecruit pricing](https://productiverecruit.com/pricing). There is also a report that NCSA's policy gives it a perpetual, irrevocable licence to uploaded video **[unverified]**: [DeleteMe](https://joindeleteme.com/?p=18337).

### Gaps Athlete Index can own
1. **Prices on the page, no sales calls, cancel in one click.** Most competitors hide their prices.
2. **Real interest signals, not bait.** CaptainU's worst reviews are about upsells disguised as "a recruiter viewed you" alerts.
3. **Built for parents and minors.** No competitor's homepage makes a clear safety promise for minors.
4. **Labelled results:** each one marked verified or self-reported, with its source. Coaches discount self-reported numbers, and PBR earns its credibility by verifying at its own events.
5. **A living profile, not a static résumé.** A feed of results, updates and highlights, plus two-way search across athletes, teams, recruiters and events.
6. **An AI Assistant as an always-on guide** at subscription prices, against human "recruiting coaches" at four figures.
7. **Four clear entry paths** for athletes, parents, coaches and recruiters.
8. **Honest proof.** No invented numbers; show real counts only once they exist.

---

## 3. Audience insights

**The reality for all audiences.** About 7% of high-school athletes play NCAA sports; D1 rates are 1–3.4% depending on sport. Rates for our launch sports, as overall / D1 ([NCAA 2024-25](https://www.ncaa.org/student-athletes/probability-of-competing-beyond-high-school)):

| Sport | Overall | D1 |
|---|---|---|
| Football | 8.1% | 3.4% |
| Men's basketball | 3.6% | 1.1% |
| Women's basketball | 4.7% | 1.4% |
| Baseball | 8.8% | 2.7% |
| Softball | 6.5% | 2.1% |

Honest positioning covers every level (D1, D2, D3, NAIA and JUCO) and never promises scholarships.

### What shapes recruiting
- **How coaches find athletes:** mainly through high-school and club coach referrals, camps and showcases, and film. Online profiles act as a first filter. [FieldLevel](https://www.fieldlevel.com/resources/recruiting-guide/how-college-recruiting-works/)
- **Measurables:** coaches discount self-reported numbers, and verified or electronically timed results carry weight. [Signing Day Sports](https://signingdaysports.zendesk.com/hc/en-us/articles/13791952034071-What-are-video-verified-measurables)
- **Film:** coaches reportedly give a reel 15–30 s, so the best plays go first **[vendor source]**. [FieldLevel](https://www.fieldlevel.com/resources/blog/how-coaches-evaluate-recruiting-video/)
- **Contact rules:** for most D1 sports, coach contact starts on June 15 after sophomore year, with exceptions by sport. Athletes may reach out at any time. [NCAA D2 guide](https://ncaaorg.s3.amazonaws.com/compliance/recruiting/calendar/2024-25/2024-25D2REC_RecGuide.pdf)
- **Fewer roster spots:** after the House settlement (2025), roster caps and the transfer portal have tightened spots for high-school recruits. Most of this is commentary; hard data is thin.
- **Family spending:** families spent an average of $1,016 on a child's main sport in 2024, up 46% since 2019. [Project Play](https://projectplay.org/news/2025/2/24/project-play-survey-family-spending-on-youth-sports-rises-46-over-five-years)

| Audience | Worries | What they need to see before signing up | Their words |
|---|---|---|---|
| **Athletes** | Being invisible. Being "too late". Not being good enough. A profile that looks awkward | A good-looking profile in minutes, on a phone. Proof that coaches look. A free start | get recruited, offers, commit, film/tape, measurables, verified, class of 2028, PWO, portal, NIL |
| **Parents** (payers) | Cost and upsells. Recruiting-service "scams". Hard-sell calls. Cancellation traps. Child safety. Missing the window | Prices shown up front. A trial with no tricks. One-click cancel. No guarantees. Parent controls. Who can see and contact their child | scholarship, exposure, "is it worth it", "is it a scam", cancel, contract, "what level is my kid" |
| **Coaches and trainers** | Admin load. Being bypassed. Players overselling. Liability for minors' data | Fast roster tools. The ability to verify or endorse stats. Fits alongside Hudl and GameChanger | film, verify, evals, club/AAU/travel, showcase, "my kids" |
| **Recruiters and scouts** | Noise. Unreliable data. Compliance exposure. Wasted time | Filters by class, position, verified measurables, GPA and location. Short film. Coach references. Exports | evals, board, film, verified, academic fit, contact period |

---

## 4. Legal and trust requirements (US-first) — all items **[LAWYER]**

1. **COPPA, amended rule.** Effective 2025-06-23; compliance required since **2026-04-22**. [Federal Register](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule)
   - It applies on *actual knowledge* that a user is under 13. Collecting birthdate or grad year gives that knowledge.
   - The amended rule adds:
     - separate consent for non-integral third-party disclosure, which includes ads and **training AI on children's data**;
     - a posted written data-retention policy;
     - a written information security program.
   - **Decision for counsel:** (a) set a 13+ minimum with a neutral age gate, or (b) offer parent-created under-13 accounts with verifiable parental consent, which is much heavier.
   - **Site impact:** state the minimum age. A children's privacy section is needed either way.
2. **State minors' laws.** Many of these are in litigation, so a 50-state matrix is needed.
   - **CCPA/CPRA:** opt-in before selling or sharing data of under-16s.
   - **California Age-Appropriate Design Code:** partly enjoined (9th Cir. 2026-03); high-privacy defaults reportedly enforceable. [Cooley](https://www.cooley.com/news/insight/2026/2026-03-30-netchoice-v-bonta-ninth-circuit-narrows-injunction-against-californias-ageappropriate-design-code-act)
   - **Maryland Kids Code:** in effect.
   - **Texas SCOPE Act:** parental tools and no targeted ads for minors are reportedly in force.
   - **Texas app-store law (SB 2420):** enforceable as of mid-2026; relevant to native apps.
   - **Florida HB 3:** enforceable after Oct 2026. Whether its "social media platform" definition covers Athlete Index needs analysis. [JURIST](https://www.jurist.org/news/2026/10/federal-appeals-court-finds-florida-social-media-ban-for-minors-likely-constitutional/)
3. **FERPA:** doesn't bind a private platform that families sign up for directly. It matters if school staff upload grades or transcripts.
4. **NCAA rules.**
   - **Bylaw 13.14.3:** D1 football and basketball programs may only subscribe to scouting services approved by the NCAA's certification group (ECAG). [NCAA](https://www.ncaa.org/sports/2020/11/24/institutional-responsibilities-regarding-recruiting-scouting-service-approvals.aspx)
   - **Fees:** never tie them to placements or scholarship amounts (agent rules).
   - **Messaging:** must respect contact dates.
   - **Site impact:** don't call the service "NCAA-approved" unless it is.
5. **Privacy policy and Terms of Service.**
   - Required policies: CalOPPA, the CCPA notice, COPPA notices, and honouring Global Privacy Control.
   - Minors can't reliably be bound by contracts, so a parent accepts for under-18s.
   - Grant only a limited, revocable licence to uploaded video.
   - Include a "no guarantee of recruitment" disclaimer.
   - Counsel to review arbitration for minors.
   - **EU/UK:** UK Children's Code, Online Safety Act, DSA Art. 28. Launch US-only until reviewed.
6. **Auto-renewal and free trials:** see the California law in §1. Show the price after the trial, how renewal works and how to cancel next to every trial CTA, and charge the parent's card for minors.
7. **AI Assistant:** California SB 243 (companion chatbots, effective 2026-01-01) may apply depending on the assistant's scope. Label it as AI, keep it focused on tasks, and don't train it on minors' data without consent. [FPF](https://fpf.org/blog/understanding-the-new-wave-of-chatbot-legislation-california-sb-243-and-beyond/)
8. **Cookies:** with Plausible and no ad pixels, there is no banner and no Do Not Sell link on the marketing site.

**Minors' visibility (product best practice; the site should only claim what the app actually does):**
- Profiles visible to verified coaches only and not indexed by search engines.
- Hide birthdate, address, contact details and live event locations.
- Strip GPS data from media.
- Parent-linked accounts.
- Verified recruiters, with parents copied on messages.
- Report and block.
- Easy deletion.

---

## 5. What this means for our site (prioritized decisions for the plan)

1. **Position as the honest, athlete-first alternative.** Show prices, run no sales calls, cancel in one click, and make no guarantees. This is the clearest gap among competitors, and it answers parents' top objection.
2. **Lead with an outcome in plain words** at a 6th–8th grade level. Use one primary CTA with the same wording everywhere ("Start free trial"), and a secondary "See how it works".
3. **Build parent trust into the home page itself**, not only the legal pages. Include a "Safety & privacy" section, a parent audience tab, the minimum age, and who can see and contact an athlete. Claim only safety features the app actually has (see open questions).
4. **Make results and highlights the hero of the visual.** Show the measurable card with a verified or self-reported label, because credibility is what recruiters care about.
5. **Pricing page:**
   - Stacked plan cards, then a short comparison table.
   - Trial length, the price after the trial, how renewal works and how to cancel shown next to every trial CTA, to comply with California's auto-renewal law.
   - The pricing FAQ on the same page.
6. **No invented proof.** Use visible `[PLACEHOLDER]` blocks for every stat, testimonial and logo. Don't show college or team logos. Launch with a "founding athletes" frame instead of fake counts.
7. **Honest framing about levels:** D1 through JUCO and NAIA. Use the public NCAA probability figures (cited) for education, not as marketing claims.
8. **A recruiter page that sells the quality of the signal:** verified results, filters, short film and contact-rule awareness. Avoid any "NCAA-approved" claim unless ECAG approval is obtained.
9. **Accessibility in the design tokens:**
   - Orange buttons with dark labels.
   - `#C2410C` for orange on light sections.
   - Visible focus rings, 24px minimum targets, and a sticky CTA that never covers focus.
10. **Performance and privacy:** static Astro, near-zero JS, self-hosted subset fonts with `font-display: swap`, Plausible only, no banner.
11. **SEO:**
    - Organization, WebSite and SoftwareApplication JSON-LD.
    - FAQPage JSON-LD kept but expected to give no Google rich result.
    - Per-page meta, canonical URLs, OG images and the sitemap.
12. **Legal pages are drafts with a "needs legal review" banner,** US-only at launch, and the items in §4 are listed for counsel.
