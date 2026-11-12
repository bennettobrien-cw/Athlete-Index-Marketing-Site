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
