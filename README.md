# Let's ImportNow

A China-to-India import website. Clients pick a product; Let's ImportNow handles sourcing, factory inspection, shipping, customs, and doorstep delivery through a registered company in Shanghai.

## Links

| | |
| --- | --- |
| **Website** | [https://importnow.vercel.app](https://importnow.vercel.app) |
| **GitHub** | [https://github.com/pavanvamsi-chimmiri/Importnow](https://github.com/pavanvamsi-chimmiri/Importnow) |
| **Downloadable PDF** | [lets-importnow-updated-files.pdf](https://importnow.vercel.app/lets-importnow-updated-files.pdf) |

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
12. **Contact** — form that opens WhatsApp with the filled details.
13. **Footer** and a floating WhatsApp button.
14. **Sign in / Sign up** — homepage-style ImportNow pages (China → India route, stats, and account forms).

### Sign in and Sign up
- Header, mobile menu, and footer link to `/signin` and `/signup`.
- Both pages reuse the homepage look: headline, Shanghai → Chennai ships, and stats on one side; the form on the other.
- Sign up collects name, email, city, and password. Sign in uses email and password.
- After login the header shows **Hi, {name}** and **Sign out**.
- Accounts are stored in the browser. Duplicate emails, short passwords, and wrong passwords show errors.

### Files we added
| File | What it does |
| --- | --- |
| `src/app/signin/page.tsx` | Sign in page and form |
| `src/app/signin/layout.tsx` | Sign in tab title |
| `src/app/signup/page.tsx` | Sign up page and form |
| `src/app/signup/layout.tsx` | Sign up tab title |
| `src/components/AuthShowcase.tsx` | Homepage-style China → India panel |
| `src/components/AuthProvider.tsx` | Signed-in user for the header |
| `src/components/Providers.tsx` | Wraps the app with auth |
| `src/lib/auth.ts` | Create account, sign in, sign out |

### Files we updated
| File | What changed |
| --- | --- |
| `src/components/Header.tsx` | Sign in, Sign up, Sign out |
| `src/components/Footer.tsx` | Auth links and PDF download |
| `src/app/layout.tsx` | Shared header, footer, and auth |
| `src/app/page.tsx` | Home uses the shared chrome |
| `src/app/globals.css` | Spacing so auth pages sit below the header |
| `src/types/index.ts` | Account types |
| `README.md` | This write-up |
| `public/lets-importnow-updated-files.html` | New summary document |
| `public/lets-importnow-updated-files.pdf` | Downloadable 2-page PDF |

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
├── lib/                 # constants and account helpers
└── types/               # TypeScript types
```

## Downloadable document

The updated-files PDF lists the work above, every new and changed file, and the live links. Open [lets-importnow-updated-files.html](https://importnow.vercel.app/lets-importnow-updated-files.html) or download [lets-importnow-updated-files.pdf](https://importnow.vercel.app/lets-importnow-updated-files.pdf).

## Tools used

- **Cursor** — build, restyle, and deploy
- **Playwright** — inspect layouts and capture screenshots
- **Vercel** — hosting
