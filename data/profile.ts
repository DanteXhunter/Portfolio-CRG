import type { IconType } from "react-icons";
import {
  SiGithub,
  SiGmail,
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
  SiCloudflare,
  SiRailway,
  SiSupabase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
// El set de Simple Icons ya no incluye LinkedIn.
import { FaAws, FaLinkedinIn, FaPalette } from "react-icons/fa6";

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
    "Soy Cristopher Rojas, desarrollador enfocado en construir aplicaciones web y sistemas de información que resuelvan problemas reales, con especial interés en el backend, cloud y los datos.",

  // Titular de la página "Sobre mí".
  aboutHeadline: "Soy Cristopher. Vivo en México, donde construyo software.",

  // Presentación larga en "Sobre mí". Cada elemento es un párrafo.
  aboutParagraphs: [
    "Soy estudiante de último semestre de Ingeniería de Software y Sistemas Computacionales. Combino mi formación técnica con cuatro años de experiencia en la operación de una empresa de distribución de carne, donde pasé por distintas áreas hasta llegar a la dirección operativa y al desarrollo de sistemas internos.",
    "Esa experiencia me enseñó a entender cómo funciona una empresa antes de proponer una solución: escuchar al cliente, reconocer sus necesidades y coordinar al equipo para construir algo que realmente le sea útil. Fuera del trabajo disfruto los videojuegos, el manga, la lectura, jugar voleibol y salir de fiesta.",
  ],

  // Cita destacada al final de la biografía.
  quote:
    "Las mejores conversaciones empiezan con una película, una situación hipotética o una pregunta ética que no tiene una respuesta sencilla.",

  // Sección "En qué estoy trabajando".
  currently:
    "Actualmente trabajo principalmente en Monarch, una plataforma privada de inteligencia de negocios para Carnes del Bajío que ya se encuentra desplegada. Estoy integrando progresivamente los datos operativos de MyBusiness y convirtiéndolos en tableros, alertas y señales comerciales que ayuden a tomar mejores decisiones. Además, ya obtuve la certificación AWS Certified AI Practitioner (AIF-C01), reforzando mis fundamentos de inteligencia artificial, aprendizaje automático y servicios de IA de AWS.",

  resumeUrl: "/cv.pdf",
  email: "rojascr9091@gmail.com",

  socials: [
    { name: "GitHub", url: "https://github.com/DanteXhunter", icon: SiGithub },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cristopher-rojas-garcia-72b9a5343",
      icon: FaLinkedinIn,
    },
    { name: "Correo", url: "mailto:rojascr9091@gmail.com", icon: SiGmail },
  ] satisfies SocialLink[],

  skills: [
    {
      title: "Liderazgo y coordinación",
      description:
        "Tengo experiencia coordinando la operación, distribuyendo responsabilidades y ayudando a que el equipo avance con objetivos claros.",
    },
    {
      title: "Visión de producto y empatía con el cliente",
      description:
        "Procuro entender primero el negocio y a las personas que usarán una solución para traducir sus necesidades en decisiones prácticas para el equipo.",
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
    { name: "Canva", description: "Diseño rápido de material visual", url: "https://www.canva.com", icon: FaPalette },
    { name: "Docker", description: "Entornos reproducibles", url: "https://www.docker.com", icon: SiDocker },
  ] satisfies StackItem[],

  platforms: [
    { name: "GitHub", description: "Donde vive mi código", url: "https://github.com/DanteXhunter", icon: SiGithub },
    { name: "AWS", description: "Cloud e inteligencia artificial", url: "https://aws.amazon.com", icon: FaAws },
    { name: "Cloudflare", description: "DNS, CDN y despliegue web", url: "https://www.cloudflare.com", icon: SiCloudflare },
    { name: "Railway", description: "Despliegue de servicios", url: "https://railway.com", icon: SiRailway },
    { name: "Supabase", description: "PostgreSQL y servicios backend", url: "https://supabase.com", icon: SiSupabase },
    { name: "Vercel", description: "Despliegue de proyectos web", url: "https://vercel.com", icon: SiVercel },
  ] satisfies StackItem[],
};
