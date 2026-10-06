# Prashanth V — Fullstack Engineer Portfolio

A high-performance, modern portfolio website for Prashanth V, built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

## Features

- ⚡ **Fast & Optimized** — Built with Vite for instant HMR and optimized production builds
- 🎨 **Modern Design** — Responsive, animated hero section with parallax effects
- 🔍 **SEO-Ready** — Pre-rendered with structured data (JSON-LD) and meta tags
- 📱 **Mobile-First** — Fully responsive across all devices
- ✨ **Interactive Effects** — Smooth animations, glitch effects, and scroll-triggered transitions
- 🎯 **Accessibility** — Semantic HTML and ARIA labels throughout

## Quick Start

### Prerequisites
- **Node.js** 16+ and **npm** (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd profile-prashanth

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Runs the dev server at **http://localhost:3001** with hot-module reloading.

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder with pre-rendered pages.

### Preview

```bash
npm run preview
```

Serves the production build locally at **http://localhost:4173**.

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Navigation
│   ├── sections/      # Hero, About, Experience, Projects, Education, Contact
│   └── ui/            # Reusable UI components
├── data/
│   ├── site.js        # Profile, experience, projects, education data
│   └── seo.js         # Meta tags and SEO metadata
├── hooks/             # Custom React hooks (parallax, hover effects, etc.)
├── lib/               # Utilities (GSAP, clsx, etc.)
├── assets/            # Glitch sounds and images
├── App.jsx            # Main app component
├── main.jsx           # Entry point
└── theme.css          # Global styles and animations

public/
├── assets/
│   ├── images/        # Profile photos
│   ├── audio/         # Background music
│   └── resume/        # PDF resume
├── robots.txt         # SEO
└── sitemap.xml        # SEO

```

## Tech Stack

**Frontend:**
- React 18.3
- TypeScript
- Vite 5.3
- Tailwind CSS 3.4
- GSAP (animations)

**Build & Deployment:**
- Vite (bundler)
- PostCSS + Autoprefixer
- Node.js pre-rendering

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Auto-deploys on every push
4. Add custom domain

### Netlify
1. Connect repo to [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add custom domain

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## Content Updates

### Update Profile Data
Edit `src/data/site.js`:
- Profile info (name, email, links)
- Experience entries
- Projects
- Education
- Skills

### Update SEO
Edit `src/data/seo.js` to update meta descriptions and page titles.

### Update Hero Section
Edit `src/components/sections/Hero.jsx` to customize the hero heading and intro text.

## License

MIT — Feel free to fork and customize for your own portfolio.

---

**Built by Prashanth V** | [LinkedIn](https://linkedin.com/in/prashanth6777/) | [GitHub](https://github.com/prashanthCannyfore)
