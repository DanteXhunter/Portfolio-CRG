export type TechStackGroup = {
  layer: string;
  items: string[];
};

export type Affiliation = {
  name: string;
  logo: string;
  url?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  url?: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  repoUrl?: string;
  demoUrl?: string;
  // Ej. "En desarrollo". Se muestra como badge en la página de detalle.
  status?: string;

  // Campos opcionales: solo se usan en la página de detalle
  // (/projects/[slug]). Si faltan, esa sección simplemente no se muestra.
  description?: string[];
  techStack?: TechStackGroup[];
  screenshot?: string;
  mascot?: string;
  affiliations?: Affiliation[];
  affiliationTitle?: string;
  team?: TeamMember[];
  overleafUrl?: string | null;
};

// TODO: reemplazar por tus proyectos reales. El "tagline" es una sola línea:
// así se muestra en la tarjeta, igual que en la referencia.
export const projects: Project[] = [
  {
    slug: "paralelo",
    name: "Paralelo",
    tagline: "Guía interactiva para armar circuitos con IA",
    logo: "/projects/paralelo/blop.png",
    repoUrl: "https://github.com/DanteXhunter/Shared_Reasoning/tree/main/CircuitBuilderAI",
    demoUrl: "https://paralelo.pages.dev",

    description: [
      "Paralelo convierte la foto de un esquemático eléctrico en instrucciones paso a paso para armarlo sobre una protoboard física. El sistema identifica los componentes y su topología, genera instrucciones interactivas sobre un canvas de la protoboard, y mantiene un chat donde se pueden proponer cambios de conexión o mover componentes, con el circuito actualizándose en tiempo real.",
      "Es el primer módulo funcional del proyecto de investigación Shared Reasoning, que estudia cómo humanos e inteligencia artificial co-ejecutan tareas físicas complejas: a diferencia de un tutorial estático, Paralelo adapta su guía al usuario y registra, mensaje a mensaje, qué tipo de interacción humano-IA está ocurriendo en cada turno.",
      "Paralelo fue desarrollado durante el verano de 2026 en el marco de una estancia de investigación en la Universidad EAFIT, Medellín, Colombia, bajo el Programa Delfín, iniciativa de movilidad académica orientada a la colaboración interuniversitaria en proyectos de investigación entre instituciones latinoamericanas."
    ],

    techStack: [
      {
        layer: "Modelos",
        items: ["OpenAI", "Google Gemini", "NVIDIA NIM", "Ollama (local)"],
      },
      { layer: "Framework de agentes", items: ["LangGraph"] },
      { layer: "Backend", items: ["FastAPI", "Uvicorn", "Python 3.13"] },
      {
        layer: "Base de datos",
        items: ["PostgreSQL (Supabase)", "SQLAlchemy", "Alembic"],
      },
      { layer: "Autenticación", items: ["JWT", "Argon2"] },
      { layer: "Frontend", items: ["React 19", "Vite", "TypeScript"] },
      { layer: "Canvas interactivo", items: ["Konva.js", "React-Konva"] },
      { layer: "Estilos", items: ["Tailwind CSS v4"] },
    ],

    screenshot: "/projects/paralelo/screenshot.png",
    mascot: "/projects/paralelo/blop.png",

    affiliations: [
      {
        name: "Universidad EAFIT",
        logo: "/logos/eafit.png",
        url: "https://www.eafit.edu.co",
      },
      {
        name: "Programa Delfín",
        logo: "/logos/programa-delfin.png",
        url: "https://www.programadelfin.com.mx",
      },
    ],

    team: [
      { name: "Cristopher Rojas", role: "Backend · agentes", url: "https://github.com/DanteXhunter" },
      { name: "Diego Rojas", role: "Frontend · canvas", url: "https://github.com/DiegoRojas8509" },
    ],

    // null = todavía no hay artículo publicado; la página muestra "Próximamente"
    // en vez de un enlace roto. Reemplázalo por la URL real cuando se publique.
    overleafUrl: null,
  },
  {
    slug: "monarch",
    name: "Monarch",
    tagline: "Inteligencia de negocios para Carnes del Bajío",
    logo: "/logos/monarch.png",
    repoUrl: "https://github.com/DanteXhunter/monarch-bi.git",
    demoUrl: "https://monarchbi.world/login",
    status: "Desplegado · en evolución",

    description: [
      "Monarch es una aplicación privada de inteligencia de negocios para Carnes del Bajío, una empresa familiar de distribución de alimentos al mayoreo en León, Guanajuato. Convierte los datos cotidianos de venta en información clara y accionable: un resumen ejecutivo y vistas de ventas, clientes, productos y alertas permiten comparar periodos, entender variaciones e identificar oportunidades de seguimiento comercial.",
      "El proyecto ya está desplegado con acceso privado y autenticación de usuarios. También incluye el primer puente con MyBusiness: un lector local de solo lectura obtiene ventas y partidas desde SQL Server, y Monarch las valida, recibe y almacena de forma transaccional en PostgreSQL, evitando duplicados. Mientras se concilia el histórico real, el tablero utiliza datos sintéticos solo para desarrollo y demostración.",
    ],

    techStack: [
      { layer: "Aplicación web", items: ["Next.js 16", "React 19", "TypeScript"] },
      { layer: "Datos", items: ["PostgreSQL", "node-postgres (pg)", "SQL Server / MyBusiness"] },
      { layer: "Integración", items: ["API REST", "PowerShell", "Zod"] },
      { layer: "Seguridad", items: ["Sesiones HTTP-only", "scrypt", "CSP", "HSTS"] },
      { layer: "Despliegue", items: ["Railway", "Dominio personalizado"] },
      { layer: "Calidad", items: ["Node.js Test Runner", "Pruebas de integración", "TypeScript"] },
    ],

    screenshot: "/projects/monarch-dashboard.png",

    affiliationTitle: "Hecho para",
    affiliations: [
      {
        name: "Carnes del Bajío",
        logo: "/logos/carnes_del_bajio.png",
      },
    ],
  },
  {
    slug: "hielon-whatsapp",
    name: "Hielon de León — Automatización de WhatsApp",
    tagline: "Bot de pedidos y recordatorios por WhatsApp",
    logo: "/logos/logo_hielon.png",
    repoUrl: "https://github.com/DanteXhunter/Automatizacion-WS-Hielon",
    status: "En pausa",

    description: [
      "Hielon de León es una fabricadora de hielo en León, Guanajuato. El servicio que le desarrollo tiene dos piezas: un bot de WhatsApp que recibe pedidos, manda recordatorios matutinos y deriva la conversación a una persona cuando hace falta, y un panel administrativo donde el dueño y su equipo consultan pedidos, chats y métricas.",
      "Este repositorio cubre solo la primera pieza: el backend de la automatización de WhatsApp. El panel administrativo es un proyecto aparte que va a consumir la misma base de datos — una decisión deliberada para no mezclar ambos desarrollos y no terminar ninguno a medias.",
    ],

    techStack: [
      { layer: "Backend", items: ["FastAPI", "Uvicorn", "Python"] },
      { layer: "Base de datos", items: ["PostgreSQL", "SQLModel", "Alembic"] },
      { layer: "Integraciones", items: ["WhatsApp Cloud API (Meta)", "httpx", "n8n"] },
      { layer: "Despliegue", items: ["Railway"] },
      { layer: "Desarrollo local", items: ["ngrok"] },
    ],
  },
  {
    slug: "sistema-academico",
    name: "Sistema Académico",
    tagline: "Gestión escolar con API REST",
    logo: "/projects/sistema-academico.svg",
    repoUrl: "https://github.com/DanteXhunter",
  },
  {
    slug: "unidad-residencial",
    name: "Unidad Residencial",
    tagline: "Administración de residentes y pagos",
    logo: "/projects/unidad-residencial.svg",
    repoUrl: "https://github.com/DanteXhunter",
  },
  {
    slug: "anime-tracking",
    name: "Anime Tracking",
    tagline: "Registro de series y episodios vistos",
    logo: "/projects/anime-tracking.svg",
    repoUrl: "https://github.com/DanteXhunter/AnimeTracking",
  },
];
