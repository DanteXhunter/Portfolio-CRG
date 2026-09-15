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
    company: "Carnes del Bajío",
    role: "Coordinador de operaciones y sistemas",
    logo: "/logos/carnes_del_bajio.png",
    startDate: "2023-02",
    endDate: undefined,
    description:
      "Participación en distintas áreas de la operación: reparto, almacén, producción, supervisión, diseño de marca y administración.\nActualmente en dirección operativa y desarrollo de sistemas internos.",
  },
  {
    id: "freelance",
    company: "Eafit",
    role: "Pasante",
    logo: "/logos/eafit.png",
    startDate: "2026-06",
    endDate: "2026-07",
    description:
      "Desarrollo de aplicación web conversacional que convierte imágenes de esquemáticos eléctricos en instrucciones paso a paso para armar circuitos en una protoboard física",
  },
];
