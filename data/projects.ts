export type Project = {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  url: string;
};

// TODO: reemplazar por tus proyectos reales. El "tagline" es una sola línea:
// así se muestra en la tarjeta, igual que en la referencia.
export const projects: Project[] = [
  {
    slug: "paralelo",
    name: "Paralelo",
    tagline: "Guía interactiva para armar circuitos con IA",
    logo: "/projects/paralelo.png",
    url: "https://github.com/DanteXhunter/Shared_Reasoning",
  },
  {
    slug: "sistema-academico",
    name: "Sistema Académico",
    tagline: "Gestión escolar con API REST",
    logo: "/projects/sistema-academico.svg",
    url: "https://github.com/DanteXhunter",
  },
  {
    slug: "unidad-residencial",
    name: "Unidad Residencial",
    tagline: "Administración de residentes y pagos",
    logo: "/projects/unidad-residencial.svg",
    url: "https://github.com/DanteXhunter",
  },
  {
    slug: "anime-tracking",
    name: "Anime Tracking",
    tagline: "Registro de series y episodios vistos",
    logo: "/projects/anime-tracking.svg",
    url: "https://github.com/DanteXhunter/AnimeTracking",
  },
  {
    slug: "data-mining",
    name: "Data Mining",
    tagline: "Análisis y modelos sobre datos públicos",
    logo: "/projects/data-mining.svg",
    url: "https://github.com/DanteXhunter",
  },
];
