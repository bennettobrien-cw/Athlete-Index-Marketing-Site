export const product = {
  name: "Athlete Index",
  summary:
    "Athlete Index is where athletes build a recruiting profile with measurables, verified results and highlight film, and where college recruiters search for talent.",
};

export const pages = {
  home: {
    path: "",
    title: "Athlete Index | Get seen. Get recruited.",
    description:
      "Put your game where recruiters look. Your measurables, PRs and highlight film in one athlete profile college coaches can search. Start a free trial.",
  },
  features: {
    path: "features/",
    title: "Features | Athlete Index",
    description:
      "Athlete profiles with measurables, verified performance posts, highlight film, recruiter search and an AI Assistant. See how Athlete Index helps you get recruited.",
  },
  parents: {
    path: "parents/",
    title: "For Parents | Athlete Index",
    description:
      "A safe, honest way to help your athlete get recruited. Prices on the page, parent-linked accounts, verified recruiters and no scholarship promises.",
  },
  contact: {
    path: "contact/",
    title: "Contact | Athlete Index",
    description:
      "Questions about Athlete Index, your account or recruiter access? Send us a message and a real person on our team will get back to you.",
  },
  recruiters: {
    path: "recruiters/",
    title: "For Recruiters | Athlete Index",
    description:
      "Find athletes worth a second look, faster. Search by sport, class, position and verified numbers, with film tied to results. Request recruiter access.",
  },
  pricing: {
    path: "pricing/",
    title: "Pricing | Athlete Index",
    description:
      "Athlete Index pricing for athletes, families and recruiters. Start with a free trial, see every price on the page, and cancel online in one click.",
  },
  notFound: {
    path: "404/",
    title: "Page not found | Athlete Index",
    description:
      "This page is out of bounds. Head back to the Athlete Index home page or start your free trial and build your recruiting profile.",
    noindex: true,
    heading: "Out of bounds.",
    body: "We couldn't find that page. It may have moved, or the link may be wrong.",
    homeLabel: "Back to home",
  },
};

export const pricing = {
  trialLength: "[TRIAL LENGTH]",
  athleteMonthly: "[PRICE]",
  athleteAnnual: "[PRICE]",
  recruiterMonthly: "[PRICE]",
};

export const trialTerms = `${pricing.trialLength} free, then ${pricing.athleteMonthly}/mo. Cancel anytime in one click.`;

export const plans = [
  {
    id: "athlete",
    name: "Athlete",
    audience: "For athletes and their families",
    price: pricing.athleteMonthly,
    period: "/mo",
    annual: { price: pricing.athleteAnnual, period: "/yr" },
    alternative: `or ${pricing.athleteAnnual}/yr billed annually`,
    features: [
      "Full profile with measurables",
      "Unlimited results and updates",
      "Highlight video uploads",
      "Search teams, recruiters and events",
      "AI Assistant",
      "Parent-linked account",
    ],
    cta: { label: "Start free trial", to: "signup" },
    terms: trialTerms,
    featured: true,
  },
  {
    id: "recruiter",
    name: "Recruiter",
    audience: "For college coaches and scouts",
    price: pricing.recruiterMonthly,
    period: "/mo",
    alternative: "Team and department plans on request",
    features: [
      "Search by sport, class, position and numbers",
      "Verified and coach-confirmed results",
      "Highlight film on every profile",
      "Saved searches and shortlists",
      "Verified recruiter badge",
    ],
    cta: { label: "Request recruiter access", to: "recruiters/" },
    terms: "We verify every recruiter before access is turned on.",
    featured: false,
  },
];

export const pricingPage = {
  eyebrow: "Pricing",
  heading: "Prices on the page. No sales calls.",
  intro:
    "Start free. If Athlete Index isn't for you, cancel online in one click before the trial ends and you won't be charged.",
  billing: [
    { id: "monthly", label: "Monthly" },
    { id: "annual", label: "Annual" },
  ],
  comparison: {
    caption: "Compare plans",
    columns: ["Feature", "Athlete", "Recruiter"],
    rows: [
      ["Profile with measurables", true, false],
      ["Post results and updates", true, false],
      ["Highlight video uploads", true, false],
      ["Verified result badges", "Earn them", "Filter by them"],
      ["Search athletes by class, position and numbers", false, true],
      ["Search teams, recruiters and events", true, true],
      ["AI Assistant", true, false],
      ["Parent-linked account", true, false],
      ["Saved searches and shortlists", false, true],
      ["Verified recruiter badge", false, true],
      ["Free trial", pricing.trialLength, "On request"],
      ["Cancel online in one click", true, true],
    ] as [string, boolean | string, boolean | string][],
  },
};

export const trialSteps = {
  heading: "How the free trial works",
  steps: [
    {
      title: "Start your trial",
      body: `Sign up with a parent's card or your own. You won't be charged during the ${pricing.trialLength} trial.`,
    },
    {
      title: "Get a reminder",
      body: "We email you [REMINDER DAYS] days before the trial ends, with the price and a link to cancel.",
    },
    {
      title: "Your plan renews",
      body: `If you don't cancel, your plan starts at ${pricing.athleteMonthly}/mo or ${pricing.athleteAnnual}/yr and renews automatically until you cancel.`,
    },
    {
      title: "Cancel anytime",
      body: "Cancel online in one click from your account settings. No calls and no forms.",
    },
  ],
  autoRenewTerms:
    "Subscriptions renew automatically at the then-current price until cancelled. Cancel online at any time; cancellation takes effect at the end of the current billing period. [LEGAL REVIEW: confirm renewal, reminder and refund terms.]",
};

export const pricingFaq = {
  heading: "Pricing questions",
  items: [
    {
      question: "Do I need a card to start the trial?",
      answer: "[CONFIRM: whether a card is required to start the trial.]",
    },
    {
      question: "Can a parent pay for their athlete?",
      answer:
        "Yes. A parent or guardian can be the account holder and payer, and athletes under 18 need one. Trial reminders and receipts go to the person who pays.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Online, in one click, from your account settings. No phone calls and no forms. You keep access until the end of the period you've paid for.",
    },
    {
      question: "Do you offer refunds?",
      answer: "[CONFIRM: refund policy, including partial-period refunds.]",
    },
    {
      question: "Can I pay yearly?",
      answer: `Yes. The Athlete plan is ${pricing.athleteMonthly}/mo, or ${pricing.athleteAnnual}/yr paid annually. [CONFIRM: annual saving to state here.]`,
    },
    {
      question: "How does recruiter pricing work?",
      answer:
        "Recruiter access is for verified college coaches and scouts. Request access, we verify you, and then we turn your account on. Team and department plans are available on request.",
    },
  ],
};

export const pricingPreview = {
  heading: "Simple, honest pricing",
  intro: "Two plans. Prices on the page. No sales calls, ever.",
  linkLabel: "Compare plans and read the pricing FAQ",
};

export const hero = {
  eyebrow: "Football · Basketball · Baseball & Softball",
  headline: "Get seen. Get recruited.",
  subhead:
    "Put your game where recruiters look: your measurables, PRs and film in one profile coaches can search.",
  secondaryCta: "See how it works",
  recruiterStrip: {
    lead: "Recruiting?",
    text: "Find verified athletes by class, position and numbers",
  },
  alternatives: {
    headline: "Your numbers. Your film. In front of recruiters.",
    subhead:
      "Stop emailing stats into the void. Post your results once and let recruiters search for you.",
  },
};

export const proof = {
  show: true,
  note: "Placeholder numbers. Replace with real, verifiable counts before launch.",
  stats: [
    {
      value: "[STAT: athletes]",
      label: "athletes building profiles",
      placeholder: true,
    },
    {
      value: "[STAT: results posted]",
      label: "results posted",
      placeholder: true,
    },
    {
      value: "[STAT: recruiters]",
      label: "verified recruiters searching",
      placeholder: true,
    },
  ],
};

export const howItWorks = {
  heading: "How it works",
  intro: "Three steps. Most athletes finish the first one before practice.",
  steps: [
    {
      title: "Build your profile",
      body: "Add your sport, position, class and measurables. Link the film you already have.",
    },
    {
      title: "Post your results",
      body: "Share PRs, game stats and highlights as they happen. Verified results get a badge recruiters trust.",
    },
    {
      title: "Get discovered",
      body: "Recruiters search by class, position and numbers. Your profile puts you in those results.",
    },
  ],
};

export const features = {
  heading: "Built for getting recruited",
  intro:
    "Everything a coach needs to say yes to a second look, in one place you control.",
  linkLabel: "See every feature",
  items: [
    {
      id: "profiles",
      kicker: "Profiles & measurables",
      title: "Your profile, built in minutes",
      body: "Sport, position, class, height, weight and the numbers coaches filter by. One link you can drop in every email and bio.",
      points: [
        "The measurables coaches actually search",
        "Grades and test scores, only if you choose to share them",
        "One link that always shows your latest",
      ],
    },
    {
      id: "results",
      kicker: "Performance posts & PRs",
      title: "Every PR, on the record",
      body: "Post a new 40 time, a career high or a personal best the day it happens. Each result says whether it was verified or self-reported, so coaches know what they're looking at.",
      points: [
        "Verified results get a badge and a source",
        "Your progress shows up as a timeline",
        "Updates keep your profile fresh",
      ],
    },
    {
      id: "highlights",
      kicker: "Highlight videos",
      title: "Film that gets watched",
      body: "Upload highlights or link the film you already have. Put your best plays first, because coaches decide fast.",
      points: [
        "Upload clips or link existing film",
        "Pin your best reel to the top",
        "Plays tied to the results they prove",
      ],
    },
    {
      id: "discovery",
      kicker: "Search & discovery",
      title: "Show up when recruiters search",
      body: "Recruiters filter by sport, class, position and numbers. You can search too: teams, recruiters and events.",
      points: [
        "Found by class, position and measurables",
        "Search teams, recruiters and events",
        "Visibility settings you control",
      ],
    },
    {
      id: "ai",
      kicker: "AI Assistant",
      title: "A recruiting assistant that's always on",
      body: "Get help writing coach emails, planning your next showcase and understanding contact rules. It's AI, so double-check anything that matters.",
      points: [
        "Drafts emails to coaches in your voice",
        "Plans camps, showcases and next steps",
        "Explains recruiting rules in plain words",
      ],
      aiLabel: "AI",
    },
  ],
};

export const featuresPage = {
  eyebrow: "Features",
  heading: "Everything a coach needs to see",
  intro:
    "Your numbers, your film and your progress in one profile, built so recruiters can find you and trust what they find.",
  midCta: {
    heading: "Build your profile in minutes",
    body: "Start with what you have. Add results and film as they come.",
  },
  sports: {
    heading: "Built for your sport",
    intro:
      "Every sport has its own numbers. Your profile shows the ones coaches in your sport filter by.",
    items: [
      {
        id: "football",
        name: "Football",
        measurables: [
          "40-yard dash",
          "Pro shuttle (5-10-5)",
          "Vertical and broad jump",
          "Height, weight and position",
          "Season stats",
        ],
      },
      {
        id: "basketball",
        name: "Basketball",
        measurables: [
          "Height, wingspan and standing reach",
          "Max vertical",
          "Lane agility",
          "Points, rebounds and assists",
          "Shooting splits",
        ],
      },
      {
        id: "baseball-softball",
        name: "Baseball & Softball",
        measurables: [
          "60-yard dash or home to first",
          "Exit velocity",
          "Pitch velocity",
          "Pop time",
          "Batting and fielding stats",
        ],
      },
    ],
  },
};

export const parentsPage = {
  eyebrow: "For parents",
  heading: "Help your athlete get seen. Safely and honestly.",
  intro:
    "You've spent the weekends, the gas money and the tournament fees. Here's what Athlete Index does, what it costs and what it will never do.",
  cost: {
    heading: "What it costs",
    body: "Some recruiting services cost families thousands and only share the price on a sales call. Ours is on the pricing page: one plan, a free trial, and cancel online in one click.",
    linkLabel: "See pricing",
  },
  odds: {
    heading: "The honest odds",
    intro:
      "Most high school athletes don't play in college, and most who do play outside Division I. That's why we're built for every level: D1, D2, D3, NAIA and JUCO.",
    caption: "Odds of playing in college, by sport",
    columns: ["Sport", "Any NCAA division", "Division I"],
    rows: [
      ["Football", "8.1%", "3.4%"],
      ["Men's basketball", "3.6%", "1.1%"],
      ["Women's basketball", "4.7%", "1.4%"],
      ["Baseball", "8.8%", "2.7%"],
      ["Softball", "6.5%", "2.1%"],
    ],
    source: {
      label:
        "Source: NCAA, Estimated probability of competing in college athletics (2024-25)",
      href: "https://www.ncaa.org/student-athletes/probability-of-competing-beyond-high-school",
    },
  },
  faq: {
    heading: "Parent questions",
    items: [
      {
        question: "Who owns the account?",
        answer:
          "For athletes under 18, a parent or guardian is the account holder and payer. Athletes under 13 need a parent to create the account, with verified parental consent.",
      },
      {
        question: "Who can contact my athlete?",
        answer:
          "Only verified recruiters can reach out, and a linked parent can see who has. College coaches also follow their own rules about when they can make contact.",
      },
      {
        question: "Will you sell our data or show ads to my child?",
        answer:
          "No. We never sell athlete data, and we don't run targeted ads to minors.",
      },
      {
        question: "Can we delete everything if we leave?",
        answer:
          "Yes. You can delete the profile and its data from account settings. [CONFIRM: deletion timeline.]",
      },
      {
        question: "Is it worth it if my athlete isn't D1 material?",
        answer:
          "Yes. Most college roster spots are outside Division I. Athlete Index is built to help athletes find the right fit at every level.",
      },
    ],
  },
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "select" | "textarea";
  autocomplete?: string;
  options?: string[];
  required: boolean;
  error: string;
};

export const formMessages = {
  success: "Thanks! Your message is on its way. We'll reply by email.",
  failure:
    "Something went wrong and your message wasn't sent. Please try again, or email us instead.",
};

export const contactPage = {
  eyebrow: "Contact",
  heading: "Talk to a real person",
  intro:
    "Questions about your account, billing or recruiter access? Send a message and we'll reply by email within [SUPPORT RESPONSE TIME].",
  emailLabel: "Prefer email?",
  email: "[CONTACT EMAIL]",
  form: {
    id: "contact-form",
    label: "Contact us",
    submitLabel: "Send message",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        autocomplete: "name",
        required: true,
        error: "Enter your name.",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        autocomplete: "email",
        required: true,
        error: "Enter an email address like name@example.com.",
      },
      {
        name: "role",
        label: "I am a…",
        type: "select",
        options: [
          "Athlete",
          "Parent or guardian",
          "Coach or trainer",
          "College recruiter",
          "Other",
        ],
        required: false,
        error: "",
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
        error: "Write a short message.",
      },
    ] as FormField[],
  },
};

export const recruitersPage = {
  eyebrow: "For recruiters",
  heading: "Find athletes worth a second look. Faster.",
  intro:
    "Less noise, better signal. Search athletes by the numbers you actually recruit on, and see how each one was measured.",
  why: {
    heading: "Why recruiters use Athlete Index",
    items: [
      {
        title: "Verified results",
        body: "Every result says how it was measured: laser-timed at an event, confirmed by a coach, or self-reported.",
      },
      {
        title: "Filters that match your board",
        body: "Search by sport, class, position, measurables and location. Save searches and build shortlists.",
      },
      {
        title: "Short film, tied to the numbers",
        body: "Highlights sit next to the results they prove, best plays first.",
      },
      {
        title: "Coach endorsements",
        body: "High school and club coaches can confirm results they timed, so you're not relying on claims alone.",
      },
    ],
  },
  contactRules:
    "You stay in control of compliance. Athlete Index doesn't change when your association lets you contact a prospect, so follow your own recruiting calendar.",
  form: {
    id: "recruiter-form",
    label: "Request recruiter access",
    heading: "Request recruiter access",
    intro:
      "We verify every recruiter before turning on access. Use your school or program email so we can confirm it quickly.",
    submitLabel: "Request access",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        autocomplete: "name",
        required: true,
        error: "Enter your name.",
      },
      {
        name: "email",
        label: "Work email",
        type: "email",
        autocomplete: "email",
        required: true,
        error: "Enter your school or program email.",
      },
      {
        name: "school",
        label: "School or program",
        type: "text",
        autocomplete: "organization",
        required: true,
        error: "Enter your school or program.",
      },
      {
        name: "role",
        label: "Role",
        type: "select",
        options: [
          "Head coach",
          "Assistant coach",
          "Recruiting coordinator",
          "Scout",
          "Other",
        ],
        required: true,
        error: "Choose your role.",
      },
      {
        name: "sport",
        label: "Sport",
        type: "select",
        options: ["Football", "Basketball", "Baseball", "Softball"],
        required: true,
        error: "Choose your sport.",
      },
      {
        name: "division",
        label: "Division",
        type: "select",
        options: [
          "NCAA D1",
          "NCAA D2",
          "NCAA D3",
          "NAIA",
          "NJCAA / JUCO",
          "Other",
        ],
        required: true,
        error: "Choose your division.",
      },
    ] as FormField[],
  },
};

export const audiences = {
  heading: "Who it's for",
  intro:
    "One platform, built around the four people in every recruiting story.",
  tabs: [
    {
      id: "athletes",
      label: "Athletes",
      headline: "Get on the radar of coaches at every level",
      points: [
        "A profile that looks pro on day one",
        "Results and film coaches can trust",
        "Know your next move with the AI Assistant",
      ],
      cta: { label: "Start free trial", to: "signup" },
    },
    {
      id: "parents",
      label: "Parents",
      headline: "Help your athlete get seen, safely and honestly",
      points: [
        "Price shown up front. No sales calls. Cancel in one click.",
        "A parent-linked account and control over who sees what",
        "Verified recruiters only, and no scholarship promises",
      ],
      cta: { label: "Start free trial", to: "signup" },
    },
    {
      id: "coaches",
      label: "Coaches",
      headline: "Showcase your athletes and back their numbers",
      points: [
        "Confirm the results you timed yourself",
        "Point college coaches to one profile per athlete",
        "Works alongside the film tools you already use",
      ],
      cta: { label: "Start free trial", to: "signup" },
    },
    {
      id: "recruiters",
      label: "Recruiters",
      headline: "Find athletes worth a second look, faster",
      points: [
        "Filter by sport, class, position and verified numbers",
        "Short film tied to the results it proves",
        "Coach-confirmed results, not just self-reported claims",
      ],
      cta: { label: "Request recruiter access", to: "recruiters/" },
    },
  ],
};

export const safety = {
  heading: "Safe for families",
  intro:
    "Most of our athletes are minors. We built the rules around that, not the other way round.",
  items: [
    {
      title: "Prices on the page",
      body: "No sales calls and no surprise fees. Cancel online in one click.",
    },
    {
      title: "Parent-linked accounts",
      body: "Parents can see and manage their athlete's account.",
    },
    {
      title: "Verified recruiters",
      body: "Recruiters are checked before they can search or reach out.",
    },
    {
      title: "You control visibility",
      body: "Choose who sees your profile. Minors' profiles stay out of search engines.",
    },
    {
      title: "Honest results",
      body: "Every result is labelled verified or self-reported.",
    },
    {
      title: "No data sales, no guarantees",
      body: "We never sell athlete data, and we never promise scholarships.",
    },
  ],
  minAgePolicy:
    "Under 13? A parent or guardian creates and manages the account, with verified parental consent.",
  parentsLink: "More for parents",
};

export const testimonials = {
  show: true,
  heading: "What athletes say",
  note: "Placeholder testimonials. Replace with real quotes, with written permission, before launch.",
  items: [
    {
      quote: "[TESTIMONIAL: athlete quote about getting noticed]",
      name: "[NAME]",
      detail: "[SPORT] · Class of [YEAR]",
      placeholder: true,
    },
    {
      quote: "[TESTIMONIAL: parent quote about cost, safety or ease]",
      name: "[NAME]",
      detail: "Parent of a [SPORT] athlete",
      placeholder: true,
    },
    {
      quote: "[TESTIMONIAL: coach or recruiter quote about verified results]",
      name: "[NAME]",
      detail: "[ROLE] · [PROGRAM]",
      placeholder: true,
    },
  ],
};

export const homeFaq = {
  heading: "Questions, answered",
  items: [
    {
      question: "Is Athlete Index worth it?",
      answer:
        "It costs less than one showcase weekend, and your profile works for you every day of the year. Try it free first, and cancel in one click if it's not for you.",
    },
    {
      question: "Do recruiters actually use it?",
      answer:
        "Recruiters search for athletes by sport, class, position and numbers. We're growing, and we'll share real numbers as they come in. We will never make them up.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Online, in one click, from your account settings. No phone calls and no forms.",
    },
    {
      question: "Is my child's information safe?",
      answer:
        "Parents can link to and manage their athlete's account. Recruiters are verified before they can search, minors' profiles stay out of search engines, and we never sell athlete data. Under-13 accounts are created and managed by a parent.",
    },
    {
      question: "Does Athlete Index guarantee a scholarship?",
      answer:
        "No. No honest service can. We help coaches find you and trust your numbers. Your play, grades and character do the rest.",
    },
    {
      question: "Is this allowed under NCAA rules?",
      answer:
        "Athletes and families can use recruiting profiles. College coaches follow their own association's rules about when they can contact you. Athlete Index is not affiliated with or endorsed by the NCAA, NAIA or NJCAA.",
    },
  ],
};

export const finalCta = {
  heading: "Your next PR could be the one a coach sees.",
  body: "Build your profile tonight. Post your first result tomorrow.",
};

export const sampleProfile = {
  label: "Sample athlete profile",
  badge: "Sample profile",
  initials: "JE",
  name: "Jordan Ellis",
  details: "Wide receiver · Class of 2028 · 6'1\" · 185 lb",
  sport: "Football",
  results: [
    {
      event: "40-yard dash",
      value: 4.48,
      unit: "s",
      decimals: 2,
      verified: true,
      source: "Laser-timed at a combine",
    },
    {
      event: "Pro shuttle",
      value: 4.12,
      unit: "s",
      decimals: 2,
      verified: true,
      source: "Confirmed by coach",
    },
    {
      event: "Vertical jump",
      value: 36.5,
      unit: '"',
      decimals: 1,
      verified: false,
      source: "Self-reported",
    },
  ],
  post: {
    kicker: "New PR",
    text: "Dropped my 40 from 4.61 to 4.48 this spring. Film from the combine below.",
  },
  highlight: { title: "Junior season highlights", duration: "2:14" },
};

export const nav = [
  { label: "Features", path: "features/" },
  { label: "Pricing", path: "pricing/" },
  { label: "Parents", path: "parents/" },
  { label: "Recruiters", path: "recruiters/" },
];

export const footer = {
  tagline:
    "Your numbers, your film, your story. In one place where recruiters look.",
  groups: [
    { heading: "Product", links: nav },
    {
      heading: "Company",
      links: [
        { label: "About", path: "about/" },
        { label: "Contact", path: "contact/" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", path: "privacy/" },
        { label: "Terms of Service", path: "terms/" },
      ],
    },
  ],
  disclaimer:
    "Athlete Index is not affiliated with or endorsed by the NCAA, NAIA or NJCAA. No service can guarantee recruitment or a scholarship, and neither do we.",
};

export const cta = {
  primary: "Start free trial",
};
