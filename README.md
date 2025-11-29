# Diego Aguirre - Portfolio

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS featuring smooth animations, internationalization (English/Spanish), and dynamic content.

## 🚀 Features

- **Modern Design**: Clean, professional design with purple/green gradient accents and smooth animations
- **Internationalization**: Full support for English and Spanish languages
- **Responsive**: Fully responsive design that works on all devices with mobile-first approach
- **Smooth Animations**: Framer Motion powered animations with scroll-based effects
- **Dynamic Components**: React-powered interactive components (rotating text, animations)
- **Performance**: Built with Astro for optimal performance and SEO
- **Markdown Support**: Rich text formatting with Marked library
- **Accessibility**: Designed with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.11.0
- **UI Library**: [React](https://react.dev/) 19.2.0
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.1.11
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (motion 12.23.24)
- **Markdown**: [Marked](https://marked.js.org/) 17.0.0
- **Fonts**: [Inter Variable](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Icons**: [Lucide React](https://lucide.dev/) 0.553.0

## 📂 Project Structure

```
/
├── public/
│   └── images/          # Project and profile images
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.astro       # Hero section with rotating text
│   │   │   ├── About.astro      # About section with skills
│   │   │   ├── Experience.astro # Professional experience timeline
│   │   │   ├── Projects.astro   # Featured projects showcase
│   │   │   └── Contact.astro    # Contact form and social links
│   │   ├── Footer.astro         # Footer component
│   │   ├── Icons.astro          # Icon components
│   │   ├── Navigation.astro     # Navigation with language selector
│   │   └── RotatingText.tsx     # Animated rotating text component
│   ├── data/
│   │   ├── experience.ts        # Professional experience data (bilingual)
│   │   ├── projects.ts          # Projects data
│   │   └── skills.ts            # Skills data
│   ├── i18n/
│   │   └── index.ts             # Internationalization config
│   ├── layouts/
│   │   └── Layout.astro         # Main layout wrapper
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── pages/
│   │   ├── index.astro          # Root page (redirects to language)
│   │   ├── en.astro             # English version
│   │   └── es.astro             # Spanish version
│   └── styles/
│       └── global.css           # Global styles and custom properties
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── components.json              # Component configuration
```

## 🎨 Sections

1. **Hero**: Introduction with animated rotating text badge, profile image, and call-to-action buttons
2. **About**: Personal description, categorized skills (Frontend, Backend, Tools), and responsive profile image
3. **Experience**: Professional experience timeline with alternating layout, scroll animations, technology badges, and markdown-formatted descriptions
4. **Projects**: Featured projects with technologies, descriptions, and links
5. **Contact**: Contact information and social media links

## 🌐 Internationalization

The portfolio supports two languages with complete translations:
- **English** (`/en`)
- **Spanish** (`/es`)

Language strings are managed in `src/i18n/index.ts`. All content including navigation, sections, and data files are fully bilingual.

## ✨ Key Components

### RotatingText Component (React + Framer Motion)
- Dynamic width calculation for smooth transitions
- Spring animations with synchronized timing
- Auto-rotation through multiple text options
- Gradient background with bold text styling

### Experience Timeline
- Alternating left-right layout on desktop
- Scroll-based fade-in animations
- Markdown support for rich text descriptions
- Technology badges with hover effects
- Work type indicators (Remote/Hybrid/On-site)
- Gradient timeline with animated nodes

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/idiegoo/portfolio-astro.git
   cd portfolio-astro
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Customization

### Adding New Languages

1. Add language to `src/i18n/index.ts`
2. Update `src/data/experience.ts` with new language key
3. Create new page in `src/pages/[lang].astro`
4. Update navigation links

### Adding New Experience

1. Update `src/data/experience.ts` with new entry in both `en` and `es` arrays
2. Supports markdown formatting in descriptions (e.g., `**bold text**`)
3. Include technologies, work type (remote/hybrid/onsite), and period

### Adding New Projects

1. Update `src/data/projects.ts`
2. Add project images to `public/images/`
3. Projects will automatically appear in the Projects section

### Modifying Skills

Update the skills data in `src/data/skills.ts` organized by category (frontend, backend, tools).

## 🔧 Available Scripts

- `pnpm dev` - Start development server at `http://localhost:4321`
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm astro ...` - Run Astro CLI commands

## 📱 Responsive Design

The portfolio is designed mobile-first with breakpoints:
- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg, xl)

Special considerations:
- Profile image positioning (top on mobile, left on desktop)
- Timeline layout (vertical on mobile, alternating on desktop)
- Navigation (hamburger menu on mobile, full nav on desktop)
- Centered content with proper alignment across all breakpoints

## ⚡ Performance

- **Astro Islands**: Zero JavaScript by default, partial hydration for interactive components
- **Optimized Bundle**: Only essential JavaScript for interactive features
- **SVG Graphics**: Crisp scaling at any resolution
- **Fast Loading**: Optimized for Core Web Vitals
- **Static Generation**: Pre-rendered pages for instant loading

## 🎨 Design System

- **Color Palette**: Dark backgrounds with purple (#a855f7) and green (#22c55e) accents
- **Typography**: Inter Variable for body, JetBrains Mono for code
- **Spacing**: Consistent spacing scale using Tailwind's utility classes
- **Animations**: Smooth transitions with Framer Motion spring physics
- **Components**: Reusable, composable component architecture

## 👨‍💻 Author

**Diego Aguirre**
- GitHub: [@idiegoo](https://github.com/idiegoo)
- LinkedIn: [Diego Aguirre](https://linkedin.com/in/idiegoo)
- Email: idiegocs9@gmail.com

## 📄 License

This project is open source and available for personal and commercial use.

---

⭐ Star this repository if you found it helpful!
