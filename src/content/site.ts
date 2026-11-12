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
};

export const trialTerms = `${pricing.trialLength} free, then ${pricing.athleteMonthly}/mo. Cancel anytime in one click.`;

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
