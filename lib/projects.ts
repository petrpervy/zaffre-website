// Case-study data. Real builds carry outcomes and testimonials. Concept
// redesigns are clearly labeled and never claim client results.

export type Swatch = { hex: string; name: string };
export type ArcStage = { stage: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  niche: string;
  kind: "real" | "concept";
  year: number;
  /** short tile descriptor */
  tagline: string;
  /** one-line outcome */
  outcome: string;
  /** brand color of this project — drives the tile + case accents */
  tint: string;
  /** readable text color on top of tint */
  onTint: string;
  services: string[];
  about: string;
  brief: { need: string; constraint: string };
  type: { display: string; body: string; note: string };
  palette: Swatch[];
  arc: ArcStage[];
  metric?: { value: string; label: string };
  testimonial?: { quote: string; author: string; role: string };
  /** optional before→after split image (public path) — shown on tile hover + case cover */
  beforeAfter?: string;
  /** optional real screenshot (public path) — used as the tile background + case cover */
  image?: string;
  /** optional real design mockups (public paths + captions) — replaces the abstract case-page gallery */
  gallery?: { src: string; caption: string }[];
};

export const projects: Project[] = [
  {
    slug: "cameron-roofing",
    name: "Cameron Roofing",
    niche: "Roofing & exteriors",
    kind: "concept",
    year: 2026,
    tagline: "A roof you don't have to think about.",
    outcome: "A concept redesign for a free-estimate flow that captures the job from the driveway.",
    tint: "#e0922f",
    onTint: "#241803",
    services: ["Web Design", "Web Development", "Estimate Intake", "Local SEO"],
    about:
      "A Rochester roofing, siding and window company running a dated template — a stock nail-gun photo, a wall of award badges, and a cramped sidebar estimate form that buried the one thing that makes them money.",
    brief: {
      need: "Make the free estimate effortless — address and a few phone photos — and put the work, not a badge wall, at the center.",
      constraint:
        "Homeowners decide with a wet roof on a stressed afternoon, on a phone. The estimate had to be one-handed and fast.",
    },
    type: {
      display: "Clash Display",
      body: "Satoshi",
      note: "Clash Display at a medium weight reads confident without shouting; Satoshi keeps the estimate form plain and trustworthy. Sturdy, not flashy.",
    },
    palette: [
      { hex: "#1a1d21", name: "Slate" },
      { hex: "#e0922f", name: "Safety amber" },
      { hex: "#8a8c8f", name: "Galvanized" },
      { hex: "#f4f1ec", name: "Paper" },
    ],
    arc: [
      { stage: "Wireframe", caption: "Estimate intake pulled to the top — address + photos first, everything else supports it." },
      { stage: "Mockup", caption: "A before→after roof slider becomes the hero; amber marks only the estimate action." },
      { stage: "Prototype", caption: "Multi-photo upload from the camera, a same-day callback promise, a sticky estimate CTA." },
    ],
    beforeAfter: "/work/cameron-ba.png",
  },
  {
    slug: "hayleyjane",
    name: "Hayley Jane",
    niche: "Musician",
    kind: "real",
    year: 2024,
    tagline: "Tour, music and merch, all in one room.",
    outcome: "A touring artist's whole world — dates, songs and store — on one stage.",
    tint: "#e8b62f",
    onTint: "#1c1606",
    services: ["Web Design", "Web Development", "Tour & Ticketing", "Merch Store"],
    about:
      "A touring rock-and-folk artist whose audience was scattered across Spotify, Bandsintown, a merch host and a half-dozen social tabs. There was no single place a fan could land, hear the music, find the next show and leave with a ticket — or a shirt.",
    brief: {
      need: "Build one home that turns a curious listener into a fan in a seat: hear the music, see the tour, buy the ticket and the merch without ever leaving.",
      constraint:
        "Live music is felt before it's read. The site had to carry her warmth and energy — bright, sunlit, folk-poster bold — without burying the one button that sells a ticket.",
    },
    type: {
      display: "Roboto Condensed",
      body: "Roboto",
      note: "Roboto Condensed stamps the tour headlines tall and tight like a sun-bleached gig poster; Roboto keeps the date lists, song titles and checkout quiet and legible underneath.",
    },
    palette: [
      { hex: "#ecc451", name: "Sunflower" },
      { hex: "#66661f", name: "Olive" },
      { hex: "#000000", name: "Stage black" },
      { hex: "#ffffff", name: "Paper white" },
    ],
    arc: [
      { stage: "Wireframe", caption: "Tour dates pulled to the top — the next show is the headline, tickets one tap away." },
      { stage: "Mockup", caption: "Condensed poster type over bright sunflower yellow; black carries the headlines, the photography carries the mood." },
      { stage: "Live", caption: "A live Bandsintown tour feed, embedded discography, a merch store and a video reel — one hub, 1,000+ visits a month." },
    ],
    metric: { value: "1,000+", label: "Fan visits a month to a single tour-and-music hub" },
    testimonial: {
      quote:
        "My tour, my music and my store finally live in one place. Fans land, hear a song and grab a ticket without bouncing around five links — and it actually looks like my show feels.",
      author: "Hayley Jane",
      role: "Musician · hayleyjane.com",
    },
    image: "/work/hayley/collage.png",
    gallery: [
      { src: "/work/hayley/brand.png", caption: "Brand & identity" },
      { src: "/work/hayley/home.png", caption: "Home page" },
      { src: "/work/hayley/live.png", caption: "Live performances" },
      { src: "/work/hayley/grid.png", caption: "The screens" },
    ],
  },
  {
    slug: "wren-salon",
    name: "Wren Salon & Spa",
    niche: "Beauty",
    kind: "concept",
    year: 2026,
    tagline: "Your hair is a personal form of expression.",
    outcome: "A concept redesign for a booking-first editorial that fills the chair, not the voicemail.",
    tint: "#b4502e",
    onTint: "#f4eee4",
    services: ["Web Design", "Web Development", "Online Booking", "Art Direction"],
    about:
      "A Monroe Ave hair salon stuck on a dated Weebly — gray swooshes, a script logo, stacked award badges, and a still-live COVID notice that made a good salon read as abandoned.",
    brief: {
      need: "Make booking effortless and make the brand feel like a place worth showing up early for.",
      constraint:
        "The good instinct was buried in their own copy — 'your hair is a personal form of expression.' Lead with it.",
    },
    type: {
      display: "Sentient",
      body: "General Sans",
      note: "Sentient sets the cover line like a fashion magazine; General Sans keeps the service menu and booking UI clean and quiet.",
    },
    palette: [
      { hex: "#221c18", name: "Ink" },
      { hex: "#b4502e", name: "Terracotta" },
      { hex: "#e8dfcf", name: "Oat" },
      { hex: "#f4eee4", name: "Cream" },
    ],
    arc: [
      { stage: "Wireframe", caption: "Booking entry in the hero — service → stylist → time, above the fold." },
      { stage: "Mockup", caption: "Warm editorial hair photography; terracotta marks only Book." },
      { stage: "Prototype", caption: "Real-time availability, a stylist picker, a confirmation that feels like an invitation." },
    ],
    beforeAfter: "/work/wren-ba.png",
  },
  {
    slug: "ironwood-construction",
    name: "Ironwood Construction Co.",
    niche: "Construction",
    kind: "concept",
    year: 2026,
    tagline: "Built right, shown plainly.",
    outcome: "A concept redesign for a portfolio that wins the bid before the first call.",
    tint: "#3d5a73",
    onTint: "#e9eef3",
    services: ["Web Design", "Web Development", "Project Gallery", "Lead Capture"],
    about:
      "A general contractor doing beautiful custom homes and commercial builds, with a website that showed none of it — a dated template, clip-art tools, and a contact form that asked for everything and showed nothing.",
    brief: {
      need: "Make the finished work the entire pitch — big, real project photography — and capture serious leads without a twelve-field form.",
      constraint:
        "A homeowner or developer judges a builder by the last thing they built. The work had to carry the page.",
    },
    type: {
      display: "Clash Display",
      body: "Satoshi",
      note: "Clash Display gives the headlines structural weight; Satoshi keeps project specs and the lead form quiet and legible.",
    },
    palette: [
      { hex: "#1c2024", name: "Iron" },
      { hex: "#3d5a73", name: "Steel blue" },
      { hex: "#a87f53", name: "Oak" },
      { hex: "#eef0f0", name: "Concrete" },
    ],
    arc: [
      { stage: "Wireframe", caption: "Project gallery pulled to the top — the build is the hero, not the pitch." },
      { stage: "Mockup", caption: "Full-bleed project photography; steel marks only the 'Start a project' action." },
      { stage: "Prototype", caption: "A filterable project archive, a short qualified-lead form, a sticky estimate CTA." },
    ],
    beforeAfter: "/work/ironwood-ba.png",
  },
  {
    slug: "greg-manufacturing",
    name: "Greg's Manufacturing",
    niche: "Manufacturing",
    kind: "real",
    year: 2026,
    tagline: "Woods to goods, sold by spec.",
    outcome: "A heritage mill's catalogue, built for buyers up north.",
    tint: "#c0883a",
    onTint: "#1c1206",
    services: ["Web Design", "Web Development", "Product Catalogue", "Local SEO"],
    about:
      "A 90-year Manitoba mill making core boxes, lumber and wood products for mining and drilling crews — stuck on a dated Wix site that hid the catalogue and buried the heritage.",
    brief: {
      need: "A rugged, tactile catalogue site that sells core boxes by spec and ships the brand across the north.",
      constraint:
        "Industrial and Canadian, never glossy-corporate — paper and machinery, no stock photos, no AI sheen.",
    },
    type: {
      display: "Poppins",
      body: "Questrial",
      note: "A heavy black display stamps the headlines like milled lumber; Questrial keeps the spec tables and product copy quiet and legible.",
    },
    palette: [
      { hex: "#1d0e03", name: "Boreal char" },
      { hex: "#c4a882", name: "Amber light" },
      { hex: "#4a6741", name: "Forest" },
      { hex: "#f5f0eb", name: "Cream" },
    ],
    arc: [
      { stage: "Wireframe", caption: "Catalogue pulled forward — core boxes by spec, the heritage story right behind it." },
      { stage: "Mockup", caption: "Charcoal + warm amber machinery light; tactile paper editorial, zero corporate gloss." },
      { stage: "Live", caption: "Scroll-scrubbed machinery cinemas, liquid-glass nav, 54 products, full technical SEO." },
    ],
    metric: { value: "7 pages", label: "Full catalogue + technical SEO migrated off Wix" },
    testimonial: {
      quote:
        "It finally looks like the company we actually are — built up here, shipped across the north. Nothing about it feels like a template.",
      author: "Ownership",
      role: "Greg's Manufacturing, Cranberry Portage MB",
    },
    image: "/work/greg-hero.jpg",
  },
  {
    slug: "wombinary",
    name: "Wombinary",
    niche: "Editorial",
    kind: "real",
    year: 2026,
    tagline: "A dictionary for feelings without words.",
    outcome: "A coined-word dictionary that performs the act of naming.",
    tint: "#cd9442",
    onTint: "#1a1206",
    services: ["Web Design", "Web Development", "Editorial", "Motion"],
    about:
      "A growing dictionary of invented words for feelings that don't have one. The brief: keep the warm, candlelit world, but lift it from costume-antiquarian to a modern editorial dictionary.",
    brief: {
      need: "Make the site perform the act of naming — a hero that dives from a candlelit room into the open book.",
      constraint:
        "Warm and literary without tipping into kitsch. The display type stays light, never bold; one rationed candle-amber accent.",
    },
    type: {
      display: "Fraunces",
      body: "Geist",
      note: "Fraunces held light and italic is the tender voice; Geist Sans for prose and Geist Mono for the dictionary 'apparatus' — phonetics, part of speech, entry tags.",
    },
    palette: [
      { hex: "#140d07", name: "Unlit room" },
      { hex: "#d8a23c", name: "Candle amber" },
      { hex: "#211610", name: "Ink" },
      { hex: "#f1e7d4", name: "Paper" },
    ],
    arc: [
      { stage: "Wireframe", caption: "The hero is a scroll-scrub dive — fly through the room, into the book, to a top-down spread." },
      { stage: "Mockup", caption: "Rooms alternate light and dark for rhythm; film grain kills banding; amber is rationed." },
      { stage: "Live", caption: "A searchable entry grid with word modals, deep-linked entries, and a submit-a-word form." },
    ],
    metric: { value: "26 words", label: "Coined-word dictionary, searchable and shareable" },
    testimonial: {
      quote:
        "It performs the thing it's about — you scroll and you're inside the book. People feel it before they read a word.",
      author: "Founder",
      role: "Wombinary",
    },
    image: "/work/wombinary-hero.jpg",
  },
  {
    slug: "brickstone-dashboard",
    name: "Brickstone Dashboard",
    niche: "Studio concept",
    kind: "concept",
    year: 2026,
    tagline: "Dense B2B data, made quiet.",
    outcome: "An internal concept study for a high-trust dashboard that makes financial complexity feel controlled.",
    tint: "#6872ff",
    onTint: "#f4f5ff",
    services: ["Product Design", "Dashboard UI", "Design System", "Data Visualization"],
    about:
      "A studio exercise in enterprise interface polish: dark-mode reporting, high-value metrics, asset cards and transaction tables presented without the usual SaaS clutter.",
    brief: {
      need: "Show that Zaffre can design operational software, not only brochure sites.",
      constraint:
        "The interface had to feel expensive and calm while still carrying real dashboard density.",
    },
    type: {
      display: "Geist",
      body: "Geist",
      note: "A neutral grotesk keeps the product surface precise; weight and spacing create hierarchy instead of decoration.",
    },
    palette: [
      { hex: "#080a10", name: "Night" },
      { hex: "#151923", name: "Panel" },
      { hex: "#6872ff", name: "Signal blue" },
      { hex: "#d9ddff", name: "Glow text" },
    ],
    arc: [
      { stage: "System", caption: "Information architecture first: value, trend, asset, capital stack, transactions." },
      { stage: "Mockup", caption: "Dark glass panels and restrained blue marks give the data weight without noise." },
      { stage: "Prototype", caption: "A concept direction for founders who need investor-grade software surfaces." },
    ],
    image: "/work/studio-concepts/brickstone-dashboard.jpg",
  },
  {
    slug: "nexora-fintech",
    name: "Nexora Fintech",
    niche: "Studio concept",
    kind: "concept",
    year: 2026,
    tagline: "A finance app with physical weight.",
    outcome: "An internal concept study for a banking product that turns digital balance into a tactile object.",
    tint: "#2f6bff",
    onTint: "#edf3ff",
    services: ["Mobile UI", "Product Mockup", "Fintech UX", "Art Direction"],
    about:
      "A mobile banking concept built around material credibility: a dark mobile interface, a physical card, and a visual system that feels secure without becoming corporate.",
    brief: {
      need: "Make a fintech product feel trustworthy before the user reads any feature copy.",
      constraint:
        "Finance interfaces need clarity first. The atmosphere can be cinematic, but the numbers still have to read immediately.",
    },
    type: {
      display: "Geist",
      body: "Geist",
      note: "A single precise sans keeps the mobile surface practical; contrast comes from scale, not font novelty.",
    },
    palette: [
      { hex: "#071024", name: "Midnight" },
      { hex: "#122a64", name: "Card blue" },
      { hex: "#2f6bff", name: "Zaffre signal" },
      { hex: "#f4f8ff", name: "Interface white" },
    ],
    arc: [
      { stage: "Flow", caption: "Balance, transactions and core payment actions are kept within thumb reach." },
      { stage: "Mockup", caption: "Device and card become one proof object, not a floating app screenshot." },
      { stage: "Prototype", caption: "A concept direction for fintech founders who need credibility on day one." },
    ],
    image: "/work/studio-concepts/nexora-fintech.jpg",
  },
  {
    slug: "aurelia-identity",
    name: "Aurelia Identity",
    niche: "Studio concept",
    kind: "concept",
    year: 2026,
    tagline: "A full brand system in one glance.",
    outcome: "An internal concept study for an identity system that shows logo, type, UI, print and web as one proof sheet.",
    tint: "#b79b6f",
    onTint: "#21170d",
    services: ["Brand Identity", "Web Direction", "UI Kit", "Collateral"],
    about:
      "A brand-system concept that treats the website as part of a larger operating kit: stationery, buttons, type, palette, navigation and service cards all shown together.",
    brief: {
      need: "Show prospects what a designed business system looks like beyond a homepage screenshot.",
      constraint:
        "The palette had to stay quiet and tactile, with enough structure to avoid becoming beige lifestyle branding.",
    },
    type: {
      display: "Fraunces",
      body: "Geist",
      note: "A refined serif carries the identity voice; a clean sans keeps UI elements and service lists functional.",
    },
    palette: [
      { hex: "#f7f5f0", name: "Ivory" },
      { hex: "#efe7da", name: "Warm paper" },
      { hex: "#b79b6f", name: "Brass" },
      { hex: "#221d17", name: "Ink" },
    ],
    arc: [
      { stage: "Inventory", caption: "Every brand touchpoint is treated as part of the same system." },
      { stage: "Mockup", caption: "The proof sheet shows type, palette, UI and collateral in one composed view." },
      { stage: "Prototype", caption: "A concept direction for service businesses that need brand trust before the first call." },
    ],
    image: "/work/studio-concepts/aurelia-identity.jpg",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
