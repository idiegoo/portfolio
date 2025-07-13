# Diego Ramirez - Portfolio

A modern, responsive portfolio website built with Astro, TypeScript, and Tailwind CSS featuring dark/light mode, internationalization (English/Spanish), and modern animations.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Internationalization**: Support for English and Spanish languages
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Astro for optimal performance and SEO
- **Accessibility**: Designed with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: [Inter Variable](https://fonts.google.com/specimen/Inter)
- **Icons**: Custom SVG icons with Lucide inspiration

## 📂 Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── profile.svg
│   │   ├── project-1.svg
│   │   ├── project-2.svg
│   │   └── project-3.svg
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Projects.astro
│   │   │   └── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Icons.astro
│   │   └── Navigation.astro
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── i18n/
│   │   └── index.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── en.astro
│   │   └── es.astro
│   └── styles/
│       └── global.css
```

## 🎨 Sections

1. **Hero**: Introduction with name, title, and call-to-action buttons
2. **About**: Personal description, skills, and profile image
3. **Projects**: Featured projects with technologies and links
4. **Contact**: Contact form and social media links

## 🌐 Internationalization

The portfolio supports two languages:
- **English** (`/en`)
- **Spanish** (`/es`)

Language strings are managed in `src/i18n/index.ts` for easy maintenance and expansion.

## 🎭 Theming

The portfolio includes a sophisticated theming system:
- **Dark Mode**: Default theme with dark backgrounds and light text
- **Light Mode**: Clean light theme for better readability
- **CSS Variables**: Easy theme customization through CSS custom properties
- **Smooth Transitions**: Animated theme switching

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
2. Create new page in `src/pages/[lang].astro`
3. Update navigation links

### Adding New Projects

1. Update `src/data/projects.ts`
2. Add project images to `public/images/`
3. Projects will automatically appear in the Projects section

### Modifying Skills

Update the skills data in `src/data/skills.ts` to reflect your expertise.

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm astro ...` - Run Astro CLI commands

## 📱 Responsive Design

The portfolio is designed mobile-first with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- **Astro**: Zero JavaScript by default, partial hydration
- **Optimized Images**: SVG graphics for crisp scaling
- **Minimal Bundle**: Only essential JavaScript for interactivity
- **Fast Loading**: Optimized for Core Web Vitals

## 👨‍💻 Author

**Diego Ramirez**
- GitHub: [@idiegoo](https://github.com/idiegoo)
- LinkedIn: [Diego Ramirez](https://linkedin.com/in/idiegoo)
- Email: idiegocs9@gmail.com

---

⭐ Star this repository if you found it helpful!
