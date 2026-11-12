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
