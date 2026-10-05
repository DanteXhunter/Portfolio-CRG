import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, name, tagline, logo } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="flex items-center gap-x-4 rounded-lg border border-transparent bg-surface p-4 duration-300 hover:border-border-hover"
    >
      <Image
        src={logo}
        width={60}
        height={60}
        alt={name}
        className="size-[60px] rounded-md bg-border object-contain p-2"
      />
      <div>
        <h2 className="mb-1 text-lg tracking-wide">{name}</h2>
        <div className="text-sm text-muted">{tagline}</div>
      </div>
    </Link>
  );
}
