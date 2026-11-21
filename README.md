# Let's ImportNow

A China-to-India import website built for the ImportNow hiring assignment.

The original brief was to recreate [importnow-concept.vercel.app](https://importnow-concept.vercel.app/#home). This project keeps that content and structure, then restyles it as **Let's ImportNow** with China and India cargo ships, a tricolor palette, and working forms and navigation.

## Live links

| Place | URL |
| --- | --- |
| **Vercel (live now)** | [https://fleet-sable-z5kwmiu.tmp.now](https://fleet-sable-z5kwmiu.tmp.now) |
| **GitHub repository** | [https://github.com/pavanvamsi-chimmiri/Importnow](https://github.com/pavanvamsi-chimmiri/Importnow) |
| **Pull request** | [https://github.com/pavanvamsi-chimmiri/Importnow/pull/1](https://github.com/pavanvamsi-chimmiri/Importnow/pull/1) |
| **Local development** | [http://localhost:3000](http://localhost:3000) |
| **Reference website** | [https://importnow-concept.vercel.app](https://importnow-concept.vercel.app/#home) |
| **Project summary (HTML)** | [lets-importnow-summary.html](./public/lets-importnow-summary.html) |
| **Project summary (PDF)** | [lets-importnow-summary.pdf](./public/lets-importnow-summary.pdf) |

After you claim the Vercel deployment and rename the project to `lets-importnow`, the lasting URL will be:

**https://lets-importnow.vercel.app**

### How to rename on Vercel (the claim screen has no name field)

The Claim Deployment popup only asks you to pick a team and click **Transfer**. It does not show a project-name box. After transfer:

1. Open [vercel.com/dashboard](https://vercel.com/dashboard).
2. Open the transferred project (`temporary-fleet-sable-z5kwmiu`).
3. Go to **Settings → General**.
4. Change **Project Name** to `lets-importnow`.
5. Save. Vercel then serves **https://lets-importnow.vercel.app**.

## What we built

### Brand and UI
- Renamed the product to **Let's ImportNow**.
- Used a China-red / India-saffron / India-green palette on an ocean-navy background so the site does not look like the original concept.
- Added a **China cargo ship** (red hull, Chinese flag) and an **India cargo ship** (green hull, Indian flag) on the recently-delivered cards and in the hero.

### Website sections
1. **Header** — Let's ImportNow logo, section links, quote button, mobile menu.
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

### What works
- Smooth-scroll navigation on desktop and mobile.
- Quote buttons and contact form open WhatsApp (`+91 99897 24320`).
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
├── app/                 # layout, page, global styles
├── components/          # Header, Footer, Logo, RouteShips, CityMarquee, WhatsApp
├── sections/            # Hero, Services, Journey, Industries, License, Trips,
│                        # Projects, Testimonials, FAQ, Contact
├── lib/constants.ts     # all copy and content
└── types/               # TypeScript types
public/
├── lets-importnow-summary.html
└── lets-importnow-summary.pdf
```

## Run locally

```bash
git clone https://github.com/pavanvamsi-chimmiri/Importnow.git
cd Importnow
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Import [pavanvamsi-chimmiri/Importnow](https://github.com/pavanvamsi-chimmiri/Importnow) in the [Vercel dashboard](https://vercel.com/new).
2. Set the project name to `lets-importnow`.
3. Deploy. No environment variables are required.

Or from the CLI after `vercel login`:

```bash
npx vercel --yes --prod --project lets-importnow --create-if-missing
```

## Tools used

- **Cursor** — build, restyle, and deploy
- **Playwright** — inspect the reference site and capture screenshots
- **Vercel** — hosting

## License

Created as a hiring / portfolio assignment. Content is based on the ImportNow concept site.
