import { NavLink, Service, Industry, JourneyStep, Testimonial, FAQ, Project } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#journey" },
  { label: "What we import", href: "#products" },
  { label: "China trips", href: "#trips" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "sourcing",
    number: "01",
    title: "Product sourcing",
    description: "We find verified manufacturers across Yiwu, Guangzhou, Shenzhen and Foshan, and negotiate prices on your behalf.",
    icon: "search",
  },
  {
    id: "inspection",
    number: "02",
    title: "Factory inspection",
    description: "Our team visits the factory in person. We check licences, samples and production capacity before you pay.",
    icon: "factory",
  },
  {
    id: "quality",
    number: "03",
    title: "Quality control",
    description: "Pre-shipment checks with photo and video reports, done before the container is sealed.",
    icon: "check",
  },
  {
    id: "shipping",
    number: "04",
    title: "Shipping & logistics",
    description: "Full-container and shared-container sea freight from Chinese ports, plus air cargo for urgent orders.",
    icon: "ship",
  },
  {
    id: "customs",
    number: "05",
    title: "Customs clearance",
    description: "Documentation, duties, GST and clearance at Indian ports. No surprises when the ship lands.",
    icon: "document",
  },
  {
    id: "delivery",
    number: "06",
    title: "Doorstep delivery",
    description: "From the port straight to your shop, warehouse, villa or site, with the container unloaded on location.",
    icon: "truck",
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 1,
    title: "Source the right factory",
    description: "Tell us the product. We shortlist verified manufacturers and get you real prices, not middleman quotes.",
  },
  {
    id: 2,
    title: "Inspect & approve samples",
    description: "Our team visits the factory and checks samples. You approve over video call.",
  },
  {
    id: 3,
    title: "Quality check & loading",
    description: "Every carton is checked and counted before the container is loaded and sealed.",
  },
  {
    id: 4,
    title: "Ocean freight",
    description: "Your container sails from the Chinese port to India, and we track it the whole way.",
  },
  {
    id: 5,
    title: "Customs clearance",
    description: "Duties, GST and paperwork are handled at the Indian port, so the container is released quickly.",
  },
  {
    id: 6,
    title: "Delivered to your door",
    description: "The container reaches your shop, warehouse or site and is unloaded on location.",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "furniture",
    hub: "FOSHAN HUB",
    title: "Furniture & interiors",
    items: [
      "Complete home and villa furniture",
      "Office desks and executive chairs",
      "Banquet hall and hotel fit-outs",
    ],
    badge: "Height-adjustable desk from ₹45,000 · MOQ 1",
    icon: "armchair",
  },
  {
    id: "electronics",
    hub: "SHENZHEN HUB",
    title: "Electronics & tech",
    items: [
      "LED screens and digital signage",
      "Mobile accessories in bulk",
      "Power bank rental kiosks",
    ],
    badge: "Business ideas India doesn't have yet",
    icon: "monitor",
  },
  {
    id: "ev",
    hub: "GUANGZHOU HUB",
    title: "EV & automotive",
    items: [
      "Electric scooters as kits for assembly in India",
      "Battery cells sourced separately",
      "Car LED lights with your own brand",
    ],
    badge: "Car LED private label · MOQ 500",
    icon: "car",
  },
  {
    id: "lighting",
    hub: "GUZHEN HUB",
    title: "Lighting",
    items: [
      "Decorative and architectural lighting",
      "Commercial LED fixtures",
      "Custom designs for projects",
    ],
    badge: "Direct from the lighting capital of China",
    icon: "lightbulb",
  },
  {
    id: "supermarket",
    hub: "YIWU HUB",
    title: "Supermarket & general goods",
    items: [
      "Complete store stock in one container",
      "Home, kitchen, toys and gifts",
      "Choose products over video call",
    ],
    badge: "World's largest small-goods market",
    icon: "shoppingCart",
  },
  {
    id: "machinery",
    hub: "PAN-CHINA",
    title: "Machinery & automation",
    items: [
      "Production and packaging machines",
      "Smart vending and robotic kiosks",
      "Spares and after-sales support",
    ],
    badge: "Tell us the machine, we find the factory",
    icon: "cog",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "villa",
    route: "Foshan → Villa",
    title: "Complete villa furniture",
    description: "Sofas, dining sets, office furniture and pergolas, all in one container delivered to a luxury villa.",
    tags: ["Full container", "Door delivery"],
  },
  {
    id: "sagar",
    route: "Yiwu → Adilabad",
    title: "Sagar Supermarket",
    description: "Complete supermarket stock sourced from Yiwu over video calls and delivered to the client's warehouse.",
    tags: ["Retail", "Video sourcing"],
  },
  {
    id: "sreeman",
    route: "China → Convention",
    title: "Sreeman Convention Centre",
    description: "Cots, beds, dining sets and office furniture for a convention venue, with better finish for the same budget.",
    tags: ["Hospitality", "Bulk order"],
  },
  {
    id: "desks",
    route: "China → Hyderabad",
    title: "Smart office desks",
    description: "Motorised height-adjustable L-shaped desks, imported even as a single piece.",
    tags: ["MOQ 1", "~30 days"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sai",
    content: "I came to source LED screens and electronics. The Guangzhou and Shenzhen markets were easy to navigate, and hotels, food and travel were all taken care of.",
    author: "Sai",
    role: "Ad-tech startup · Siddipet",
  },
  {
    id: "mahender",
    content: "Twelve days covering the Canton Fair and factories of my choice. Visa, guidance, Indian food every day. It felt like a personal trip, not a business tour.",
    author: "Mahender Reddy",
    role: "Canton Fair trip client",
  },
  {
    id: "sagar",
    content: "We picked our products on video calls, and the container came straight from Yiwu to our warehouse. The whole process was hassle-free.",
    author: "Sagar Supermarket",
    role: "Retail · Adilabad",
  },
];

export const FAQS: FAQ[] = [
  {
    id: "moq",
    question: "Can I import just one piece?",
    answer: "Yes, for many products. Furniture like height-adjustable desks can be imported with a minimum order of one piece. Private-label products, such as car LED lights, usually start from around 500 units.",
  },
  {
    id: "delivery",
    question: "How long does delivery take?",
    answer: "Most sea shipments reach your door in about 30 to 40 days, depending on the product, the factory's production time and the destination port. Air cargo is faster for urgent orders.",
  },
  {
    id: "customs",
    question: "Do you handle customs and GST?",
    answer: "Yes. We prepare the documentation and manage duties, GST and clearance at the Indian port, then deliver to your address.",
  },
  {
    id: "iec",
    question: "Do I need an Import Export Code (IEC)?",
    answer: "For commercial imports, yes. If you don't have one yet, we'll guide you through getting it.",
  },
  {
    id: "visit",
    question: "Can I visit the factories myself?",
    answer: "Absolutely. Join one of our guided China business trips, or we can arrange visits to the factories you've shortlisted.",
  },
  {
    id: "best",
    question: "What's the best business to start by importing from China?",
    answer: "It depends on your interests and budget. Popular choices with our clients include furniture, EV scooters, car accessories, lighting and supermarket goods. Talk to us and we'll suggest options that fit your market.",
  },
];

export const MARQUEE_CITIES = [
  "Siddipet", "Guangzhou", "Chennai", "Shanghai", "Nhava Sheva",
  "Guzhen", "Vizag", "Ningbo", "Mumbai", "Yiwu", "Adilabad",
  "Foshan", "Hyderabad", "Shenzhen",
];

export const TRIP_LOCATIONS = ["Guangzhou", "Shenzhen", "Yiwu", "Foshan", "Macau", "Glass bridge"];

export const TRIP_INCLUSIONS = [
  { icon: "fileText", text: "Visa guidance & invitation letter" },
  { icon: "building", text: "Hotels close to the fair" },
  { icon: "utensils", text: "Indian food daily, veg & non-veg" },
  { icon: "users", text: "Guides & translators" },
  { icon: "factory", text: "Factory visits you choose" },
  { icon: "compass", text: "Sightseeing between markets" },
];

export const LICENSE_FEATURES = [
  "Registered business licence issued in Shanghai, China",
  "Chinese company bank account, so payments to factories are safe and traceable",
  "Team on the ground for factory visits, quality checks and market trips",
  "Indian founder on both sides: talk to us in Telugu, Hindi or English",
];

export const CONTACT_INFO = {
  phone: "+91 99897 24320",
  instagram: "@importnow.in",
  offices: "Hyderabad, India · Shanghai, China",
};
