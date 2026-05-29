# SEAFOAM INTERIORS — Premium Luxury Interior Design Website

A state-of-the-art React 19 + Vite + Tailwind CSS + Framer Motion website built for **Seafoam Interiors** based in Hyderabad. The application represents high-end modular luxury interiors using top web animations and layout techniques.

## 🛠️ Tech Stack & Dependencies

* **Core**: React 19, Vite, React Router DOM v6
* **Animation & Scrolling**: Framer Motion, GSAP, React Intersection Observer
* **Interactive Elements**: Swiper JS (Sliders), React CountUp, Lucide React (Icons)
* **API & Forms**: Axios, EmailJS
* **SEO**: React Helmet Async

## 📁 Folder Structure

```
/
├── public/                 # Static assets (logos, videos)
├── src/
│   ├── assets/             # Global media files
│   ├── components/         # Reusable UI widgets
│   ├── context/            # Global application state (Theme, etc.)
│   ├── data/               # Structured services, portfolio, reviews data
│   ├── hooks/              # Custom utilities (useScroll, useInView)
│   ├── layout/             # Header / Footer shell layouts
│   ├── pages/              # Routing entrypoints (Home, About, Services, etc.)
│   ├── routes/             # Client-side route declarations
│   ├── styles/             # Global tailwind directives & noise maps
│   ├── utils/              # Calculation helpers & SEO schemas
│   ├── App.jsx             # Root routing wrapper
│   └── main.jsx            # Entry point mounting root
├── tailwind.config.js      # Luxury theme tokens
├── vite.config.js          # Port settings & React plugins
└── package.json            # Version and dependency declarations
```

## 🚀 Setup & Execution

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run in development**:
   ```bash
   npm run dev
   ```

3. **Build production bundle**:
   ```bash
   npm run build
   ```
