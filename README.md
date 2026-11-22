# Let's ImportNow

A China-to-India import website. Clients pick a product; Let's ImportNow handles sourcing, factory inspection, shipping, customs, and doorstep delivery through a registered company in Shanghai.

## Links

| | |
| --- | --- |
| **Website** | [https://importnow.vercel.app](https://importnow.vercel.app) |
| **GitHub** | [https://github.com/pavanvamsi-chimmiri/Importnow](https://github.com/pavanvamsi-chimmiri/Importnow) |
| **Document (PDF)** | [lets-importnow-project.pdf](https://importnow.vercel.app/lets-importnow-project.pdf) |

## What we have done

### Brand and UI
- Product name **Let's ImportNow**, with a cargo-ship mark instead of the default browser icon.
- China-red / India-saffron / India-green palette on an ocean-navy background.
- **China cargo ship** and **India cargo ship** on the recently-delivered cards and in the hero.

### Website sections
1. **Header** — Let's ImportNow logo, section links, Sign in / Sign up, mobile menu.
2. **Hero** — headline, stats, globe, China → India ship route (Shanghai to Chennai).
3. **City marquee** — scrolling China and India city names.
4. **Services** — sourcing, factory inspection, quality control, shipping, customs, doorstep delivery.
5. **How it works** — six-step journey with a live shipment progress bar.
6. **What we import** — furniture, electronics, EV, lighting, supermarket goods, machinery.
7. **Shanghai licence** — registered China company card.
8. **China trips** — Canton Fair trips and inclusions.
9. **Recently delivered** — four client shipments with China and India ships.
10. **Testimonials** — three client stories.
11. **FAQ** — accordion answers about MOQ, delivery time, GST, IEC, factory visits.
12. **Contact** — quote form for sourcing details.
13. **Footer**
14. **Sign in / Sign up** — same homepage look, with account forms.

### What works
- Smooth-scroll navigation on desktop and mobile.
- Sign in, Sign up, and Sign out.
- Quote buttons take the visitor to the contact form.
- FAQ expand/collapse.
- Journey steps auto-advance.
- Responsive layout for phones, tablets, and desktops.

## How we developed it

The site is a Next.js App Router project. Shared pieces (header, footer, logo, ships) live in `src/components`. Each homepage block is a section in `src/sections`. Copy for services, industries, trips, FAQs, and stories sits in `src/lib/constants.ts`. The live site is hosted on Vercel from GitHub.

## Files

```
src/
├── app/                 # layout, home, signin, signup, global styles
├── components/          # Header, Footer, Logo, RouteShips, CityMarquee
├── sections/            # Hero, Services, Journey, Industries, License, Trips,
│                        # Projects, Testimonials, FAQ, Contact
├── lib/                 # site copy and helpers
└── types/               # TypeScript types
public/                  # icons and the downloadable project PDF
```

## Technology

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Fonts: Sora (headings), Inter (body)

## Tools used

- **Cursor** — build, restyle, and deploy
- **Playwright** — inspect layouts and capture screenshots
- **Vercel** — hosting
