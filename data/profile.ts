import type { IconType } from "react-icons";
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiPostman,
  SiDocker,
  SiVercel,
  SiGitlab,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
// El set de Simple Icons ya no incluye LinkedIn.
import { FaLinkedinIn } from "react-icons/fa6";

export type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
};

export type StackItem = {
  name: string;
  description: string;
  url: string;
  icon: IconType;
};

export type Skill = {
  title: string;
  description: string;
};

// TODO: reemplazar los textos de ejemplo por los tuyos.
export const profile = {
  name: "Cristopher Rojas",
  initials: "crg",
  location: "México",
  githubUsername: "DanteXhunter",
  avatar: "/avatar.jpeg",

  // Titular de la portada.
  headline: "Desarrollador de software, estudiante y creador",

  // Párrafo bajo el titular en la portada (2 líneas aprox.).
  intro:
    "Soy Cristopher Rojas, desarrollador enfocado en construir aplicaciones web y sistemas de información que resuelvan problemas reales, con especial interés en el backend y los datos.",

  // Titular de la página "Sobre mí".
  aboutHeadline: "Soy Cristopher. Vivo en México, donde construyo software.",

  // Presentación larga en "Sobre mí". Cada elemento es un párrafo.
  aboutParagraphs: [
    "Soy desarrollador de software con interés en el desarrollo web full-stack, las bases de datos y el análisis de datos. Aprendí programando proyectos propios y llevándolos de la idea al despliegue, que es donde de verdad se entiende cómo encajan las piezas.",
    "Me interesa el trabajo que se sostiene con el tiempo: código legible, decisiones documentadas y sistemas que otra persona pueda retomar sin sufrir. Cuando no estoy programando, suelo estar aprendiendo algo nuevo o desarmando alguna herramienta para ver cómo funciona por dentro.",
  ],

  // Cita destacada al final de la biografía.
  quote:
    "Si me ves por ahí, no dudes en saludar. Siempre estoy dispuesto a hablar de proyectos, bases de datos o de por qué tu lenguaje favorito es mejor que el mío. ⚡",

  // Sección "En qué estoy trabajando".
  currently:
    "Actualmente desarrollo un sistema académico full-stack y estudio análisis de datos con Python. En paralelo mantengo este portafolio como espacio para documentar lo que voy construyendo.",

  resumeUrl: "/cv.pdf",
  email: "rojascr9091@gmail.com",

  socials: [
    { name: "GitHub", url: "https://github.com/DanteXhunter", icon: SiGithub },
    // TODO: reemplazar por tus perfiles reales.
    { name: "LinkedIn", url: "https://www.linkedin.com/", icon: FaLinkedinIn },
    { name: "GitLab", url: "https://gitlab.com/", icon: SiGitlab },
    { name: "Instagram", url: "https://www.instagram.com/", icon: SiInstagram },
    { name: "Correo", url: "mailto:rojascr9091@gmail.com", icon: SiGmail },
  ] satisfies SocialLink[],

  skills: [
    {
      title: "Atención al detalle",
      description:
        "Cuido la coherencia de una interfaz y la claridad de un esquema de datos con el mismo criterio: si algo se ve improvisado, normalmente lo está.",
    },
    {
      title: "Trabajo en equipo",
      description:
        "Me acomodo bien a los proyectos donde hay que ponerse de acuerdo: reviso código ajeno con calma y explico mis decisiones sin dar por sentado el contexto.",
    },
    {
      title: "Autonomía",
      description:
        "Puedo tomar un requerimiento vago, investigarlo y llegar a una propuesta concreta sin necesitar supervisión constante.",
    },
  ] satisfies Skill[],

  technologies: [
    { name: "TypeScript", description: "Lenguaje principal en el front", url: "https://www.typescriptlang.org", icon: SiTypescript },
    { name: "JavaScript", description: "La base de todo lo anterior", url: "https://developer.mozilla.org/es/docs/Web/JavaScript", icon: SiJavascript },
    { name: "React", description: "Librería para interfaces", url: "https://react.dev", icon: SiReact },
    { name: "Next.js", description: "Framework de este sitio", url: "https://nextjs.org", icon: SiNextdotjs },
    { name: "Python", description: "Análisis de datos y scripting", url: "https://www.python.org", icon: SiPython },
    { name: "Spring Boot", description: "APIs REST en Java", url: "https://spring.io/projects/spring-boot", icon: SiSpring },
    { name: "MySQL", description: "Base de datos relacional", url: "https://www.mysql.com", icon: SiMysql },
    { name: "PostgreSQL", description: "Relacional para proyectos serios", url: "https://www.postgresql.org", icon: SiPostgresql },
    { name: "MongoDB", description: "Almacenamiento orientado a documentos", url: "https://www.mongodb.com", icon: SiMongodb },
  ] satisfies StackItem[],

  tools: [
    { name: "VS Code", description: "Editor del día a día", url: "https://code.visualstudio.com", icon: VscVscode },
    { name: "Git", description: "Control de versiones", url: "https://git-scm.com", icon: SiGit },
    { name: "Postman", description: "Pruebas de APIs", url: "https://www.postman.com", icon: SiPostman },
    { name: "Figma", description: "Diseño de interfaces", url: "https://www.figma.com", icon: SiFigma },
    { name: "Docker", description: "Entornos reproducibles", url: "https://www.docker.com", icon: SiDocker },
  ] satisfies StackItem[],

  platforms: [
    { name: "GitHub", description: "Donde vive mi código", url: "https://github.com/DanteXhunter", icon: SiGithub },
    { name: "GitLab", description: "Repositorios de la escuela", url: "https://gitlab.com", icon: SiGitlab },
    { name: "Vercel", description: "Despliegue de proyectos web", url: "https://vercel.com", icon: SiVercel },
  ] satisfies StackItem[],
};
