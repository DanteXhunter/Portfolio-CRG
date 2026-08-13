import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Explora los proyectos que he construido.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-20 md:px-16">
      <PageHeading
        title="Proyectos"
        description="He trabajado en muchos proyectos pequeños a lo largo de los años, pero estos son los que mejor representan lo que sé hacer. Varios son de código abierto, así que si alguno te llama la atención, revisa el código y contribuye si tienes ideas para mejorarlo."
      />

      <section className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
