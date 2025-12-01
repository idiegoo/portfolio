export const projects = {
  en: [
    {
      id: "coverit",
      title: "Coverit",
      description:
        "An album cover generator that uses the Spotify SDK to create custom artwork from artist name, album title, and tracklist. Allows users to download their generated covers as PDF.",
      image: "/images/coverit.webp",
      technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"],
      liveUrl: "https://coverit.vercel.app",
      githubUrl: "https://github.com/idiegoo/albumcovergenerator",
    },
    {
      id: "web-catalog",
      title: "Badfairy Web Catalog",
      description:
        "Made for a family business. Built with Strapi as BAAS for the API, Next.js for the frontend and AWS for image hosting.",
      image: "/images/badfairy.webp",
      technologies: [
        "Strapi",
        "Next.js",
        "TailwindCSS",
        "Supabase",
        "PostgreSQL",
        "AWS",
      ],
      liveUrl: "https://badfairy.vercel.app",
      githubUrl: null,
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "This portfolio website was created with support for internationalization i18n, modern animations and a responsive design.",
      image: "/images/portfolio.webp",
      technologies: [
        "Astro",
        "React",
        "TypeScript",
        "Redis",
        "Tailwind CSS",
        "Framer Motion",
      ],
      liveUrl: "https://idiegoo.vercel.app",
      githubUrl: "https://github.com/idiegoo/portfolio-astro",
    },
  ],
  es: [
    {
      id: "coverit",
      title: "Coverit",
      description:
        "Un generador de album cover art que utiliza el SDK de Spotify para crear portadas personalizadas basadas en el nombre del artista, título del álbum y el tracklist. Permite descargar el archivo en PDF.",
      image: "/images/coverit.webp",
      technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"],
      liveUrl: "https://coverit.vercel.app",
      githubUrl: "https://github.com/idiegoo/albumcovergenerator",
    },
    {
      id: "web-catalog",
      title: "Catalogo web Badfairy",
      description:
        "Hecho para un emprendimiento familiar. Construido con Strapi como BAAS para la API, Next.js para el frontend y AWS para el alojamiento de imágenes.",
      image: "/images/badfairy.webp",
      technologies: [
        "Strapi",
        "Next.js",
        "TailwindCSS",
        "Supabase",
        "PostgreSQL",
        "AWS",
      ],
      liveUrl: "https://badfairy.vercel.app",
      githubUrl: null,
    },
    {
      id: "portfolio-website",
      title: "Sitio Web Portfolio",
      description:
        "Este portafolio web fue creado con soporte para internacionalización i18n, animaciones modernas y un diseño responsive.",
      image: "/images/portfolio.webp",
      technologies: [
        "Astro",
        "React",
        "TypeScript",
        "Redis",
        "Tailwind CSS",
        "Framer Motion",
      ],
      liveUrl: "https://idiegoo.vercel.app",
      githubUrl: "https://github.com/idiegoo/portfolio-astro",
    },
  ],
} as const;
