export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': 'Diego Aguirre',
    'hero.subtitle': 'Full Stack Developer',
    'hero.description': 'Crafting digital experiences with modern technologies and creative solutions. Passionate about clean code, beautiful interfaces, and innovative problem-solving.',
    'hero.viewWork': 'View My Work',
    'hero.downloadCV': 'Download CV',
    'hero.loader.building': 'Building',
    'hero.loader.web': 'web apps',
    'hero.loader.mobile': 'mobile apps',
    'hero.loader.apis': 'APIs',
    'hero.loader.automation': 'automations',
    'hero.loader.solutions': 'solutions',
    'hero.cvLink': '/cv-english.pdf',
    'about.title': 'About Me',
    'about.description': 'I have been interested in computers and programming since I was a child, experimenting with <i>redstone</i> in Minecraft. At 15 y/o, I began learning the basics of web development, marking the start of my journey into this world. <br>Over the years, I have expanded my skills and knowledge, specializing in modern technologies to create adaptable, functional, and user-friendly solutions.',
    'about.skills': 'Skills & Technologies',
    'projects.title': 'Featured Projects',
    'projects.viewProject': 'View Project',
    'projects.viewCode': 'View Code',
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new opportunities and interesting projects.',
    'contact.getInTouch': 'Let\'s get in touch!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'footer.madeWith': 'Made with',
    'footer.tagline': 'Building the future, one line of code at a time.',
    'footer.using': 'using Astro.js & TypeScript',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.experience': 'Experiencia',
    'nav.education': 'Educación',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.title': 'Diego Aguirre',
    'hero.subtitle': 'Desarrollador Full Stack',
    'hero.description': 'Creando experiencias digitales con tecnologías modernas y soluciones creativas. Apasionado por el código limpio, interfaces hermosas y la resolución innovadora de problemas.',
    'hero.viewWork': 'Ver Mi Trabajo',
    'hero.downloadCV': 'Descargar CV',
    'hero.loader.building': 'Construyendo',
    'hero.loader.web': 'sitios web',
    'hero.loader.mobile': 'apps móviles',
    'hero.loader.apis': 'APIs',
    'hero.loader.automation': 'automatizaciones',
    'hero.loader.solutions': 'soluciones',
    'hero.cvLink': '/cv-español.pdf',
    'about.title': 'Acerca de Mí',
    'about.description': 'He estado interesado en la tecnología y computadores desde que era un niño, cuando experimentaba con la <i>redstone</i> en Minecraft. A los 15 años, comencé a aprender lo básico de desarrollo web, marcando el inicio de mi viaje en este mundo. <br>A lo largo de los años, he ampliado mis habilidades y conocimientos, especializándome en tecnologías modernas para crear soluciones adaptables, funcionales y fáciles de usar.',
    'about.skills': 'Habilidades y Tecnologías',
    'projects.title': 'Proyectos Destacados',
    'projects.viewProject': 'Ver Proyecto',
    'projects.viewCode': 'Ver Código',
    'contact.title': 'Pongámonos en Contacto',
    'contact.description': 'Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes.',
    'contact.getInTouch': 'Pongámonos en contacto!',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'footer.madeWith': 'Hecho con',
    'footer.tagline': 'Construyendo el futuro, una línea de código a la vez.',
    'footer.using': 'usando Astro.js y TypeScript',
    'footer.rights': 'Todos los derechos reservados.'
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
