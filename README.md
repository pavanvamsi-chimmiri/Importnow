# ImportNow Website Clone

A pixel-perfect recreation of the ImportNow website (https://importnow-concept.vercel.app) built with modern web technologies.

## 🚀 Live Demo

The website is deployed and can be viewed at the production URL after deployment.

## 📋 Project Overview

This project is a complete recreation of the ImportNow concept website, showcasing import services from China to India. It features:

- **Hero Section** - Interactive globe illustration with trade routes
- **Services Section** - 6 service cards highlighting key offerings
- **Journey Section** - Animated shipping visualization showing the import process
- **Industries Section** - 6 industry category cards with hub information
- **License Section** - Chinese business license showcase
- **China Trips Section** - Canton Fair and factory visit trip details
- **Projects Section** - Case study cards showing successful imports
- **Testimonials Section** - Client reviews and feedback
- **FAQ Section** - Accordion with common questions
- **Contact Section** - Contact form with WhatsApp integration
- **Footer** - Navigation and company information

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Sora (headings) + Inter (body)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page component
├── components/
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Footer.tsx       # Site footer
│   ├── CityMarquee.tsx  # Scrolling city names marquee
│   └── WhatsAppButton.tsx # Floating WhatsApp button
├── sections/
│   ├── Hero.tsx         # Hero with globe illustration
│   ├── Services.tsx     # Services grid
│   ├── Journey.tsx      # Animated shipping journey
│   ├── Industries.tsx   # Industry categories
│   ├── License.tsx      # Business license display
│   ├── Trips.tsx        # China trips info
│   ├── Projects.tsx     # Case studies
│   ├── Testimonials.tsx # Client reviews
│   ├── FAQ.tsx          # Accordion FAQ
│   └── Contact.tsx      # Contact form
├── lib/
│   └── constants.ts     # Data and content constants
└── types/
    └── index.ts         # TypeScript type definitions
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd importnow-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 🌐 Deployment on Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Import the repository in [Vercel Dashboard](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Environment Variables

No environment variables are required for basic deployment.

## ✨ Features

### Visual Accuracy
- Pixel-perfect recreation of the reference design
- Accurate color palette matching the original
- Proper typography with Sora and Inter fonts
- Smooth animations using Framer Motion

### Responsive Design
- Fully responsive across all devices
- Mobile navigation with hamburger menu
- Optimized layouts for tablet and desktop
- No horizontal scrolling issues

### Performance
- Static page generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- ARIA labels where needed

## 🔧 Customization

### Updating Content
All text content is stored in `src/lib/constants.ts`. Edit this file to update:
- Navigation links
- Service descriptions
- Industry categories
- FAQ questions and answers
- Testimonials
- Contact information

### Styling
Global styles and theme variables are in `src/app/globals.css`. Key customization points:
- Color palette (CSS custom properties)
- Font families
- Spacing and sizing
- Animation keyframes

## 📝 Notes

- The WhatsApp button opens a pre-filled message to the ImportNow contact number
- Form submission redirects to WhatsApp with the user's details
- All navigation uses smooth scrolling

## 🛡️ License

This project was created as a demonstration/portfolio piece. The design is based on the ImportNow concept website.

## 🙏 Credits

- Original Design: ImportNow concept team
- Development: Built with Cursor AI assistance
- Icons: Lucide React
- Fonts: Google Fonts (Sora, Inter)
