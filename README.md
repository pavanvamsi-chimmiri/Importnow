# Let's ImportNow

A China-to-India import website. Clients pick a product; Let's ImportNow handles sourcing, factory inspection, shipping, customs, and doorstep delivery through a registered company in Shanghai.

## Links

| | |
| --- | --- |
| **Website** | [https://importnow.vercel.app](https://importnow.vercel.app) |
| **GitHub** | [https://github.com/pavanvamsi-chimmiri/Importnow](https://github.com/pavanvamsi-chimmiri/Importnow) |

## What we built

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
12. **Contact** — form that opens WhatsApp with the filled details.
13. **Footer** and a floating WhatsApp button.
14. **Sign in / Sign up** — homepage-style ImportNow pages (China → India route, stats, and account forms).

### What works
- Smooth-scroll navigation on desktop and mobile.
- Sign in and Sign up with local account storage.
- Quote buttons and contact form open WhatsApp.
- FAQ expand/collapse.
- Journey steps auto-advance.
- Responsive layout for phones, tablets, and desktops.

## Technology

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Fonts: Sora (headings), Inter (body)

## Project structure

```
src/
├── app/                 # layout, home, signin, signup, global styles, site icon
├── components/          # Header, Footer, Logo, RouteShips, Auth, CityMarquee, WhatsApp
├── sections/            # Hero, Services, Journey, Industries, License, Trips,
│                        # Projects, Testimonials, FAQ, Contact
├── lib/constants.ts     # all copy and content
└── types/               # TypeScript types
```

## Tools used

- **Cursor** — build, restyle, and deploy
- **Playwright** — inspect layouts and capture screenshots
- **Vercel** — hosting
