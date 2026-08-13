import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, logo, url } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-x-4 rounded-lg border border-transparent bg-surface p-4 duration-300 hover:border-border-hover"
    >
      <Image
        src={logo}
        width={60}
        height={60}
        alt={name}
        unoptimized
        className="rounded-md bg-border p-2"
      />
      <div>
        <h2 className="mb-1 text-lg tracking-wide">{name}</h2>
        <div className="text-sm text-muted">{tagline}</div>
      </div>
    </a>
  );
}
