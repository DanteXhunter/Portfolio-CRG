export type Job = {
  id: string;
  company: string;
  role: string;
  logo: string;
  url?: string;
  startDate: string;
  endDate?: string;
  description: string;
};

// TODO: reemplazar por tu experiencia real. Deja el arreglo vacío si prefieres
// no mostrar esta sección todavía.
export const jobs: Job[] = [
  {
    id: "practicas",
    company: "Nombre de la empresa",
    role: "Desarrollador de software",
    logo: "/projects/sistema-academico.svg",
    url: "https://example.com",
    startDate: "2025-01",
    endDate: undefined,
    description:
      "Descripción breve de tus responsabilidades y de lo que construiste ahí. Dos o tres líneas bastan.",
  },
  {
    id: "freelance",
    company: "Proyectos independientes",
    role: "Desarrollador freelance",
    logo: "/projects/unidad-residencial.svg",
    startDate: "2024-06",
    endDate: "2024-12",
    description:
      "Desarrollo de sitios y sistemas a medida para clientes pequeños, desde el análisis de requerimientos hasta el despliegue.",
  },
];
