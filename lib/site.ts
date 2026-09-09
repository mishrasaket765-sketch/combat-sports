export const site = {
  name: "Combat Sports Analysis",
  legalName: "Combat Sports Tech LLC",
  tagline: "See the fight. Understand the fight. Improve the fight.",
  description:
    "A data-driven boxing performance analysis platform for fighters, coaches, trainers, analysts, and serious combat-sports teams.",
  supportText: "Contact Us",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
export const pillars = [
  {
    number: "01",
    title: "Technical clarity",
    text: "Turn rounds of footage into a structured view of technique, punch selection, timing, defense, and movement.",
  },
  {
    number: "02",
    title: "Tactical intelligence",
    text: "Spot the patterns behind exchanges: what creates openings, what gets punished, and where momentum shifts.",
  },
  {
    number: "03",
    title: "Performance trends",
    text: "Track training and fight information over time with structured ratings, statistics, averages, and visual trends.",
  },
  {
    number: "04",
    title: "Actionable preparation",
    text: "Move from observation to a cleaner training brief for the next camp, opponent, sparring block, or competition.",
  },
];
export const analysisCards = [
  ["Technique", "Jab, cross, hook, uppercut, combinations, mechanics"],
  ["Defense", "Guard, slips, rolls, blocks, parries, exits"],
  ["Movement", "Distance, angles, stance, ring position, footwork"],
  ["Timing", "Initiative, counters, reactions, tempo changes"],
  ["Shot selection", "Volume, accuracy, combinations, body-head choice"],
  ["Tactics", "Patterns, adaptation, pressure, pacing, fight IQ"],
];
