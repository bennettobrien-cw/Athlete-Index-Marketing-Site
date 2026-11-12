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

export const hero = {
  headline: "Get seen. Get recruited.",
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
