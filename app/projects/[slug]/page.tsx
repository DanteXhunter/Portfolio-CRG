import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight, FiClock, FiGithub, FiTool } from "react-icons/fi";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const {
    name,
    tagline,
    logo,
    repoUrl,
    demoUrl,
    status,
    description,
    techStack,
    screenshot,
    mascot,
    affiliations,
    team,
    overleafUrl,
  } = project;

  return (
    <main className="mx-auto max-w-4xl px-6 pt-20 pb-24 md:px-16">
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted duration-300 hover:text-accent"
      >
        <FiArrowLeft className="size-4" aria-hidden />
        Proyectos
      </Link>

      <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
        {mascot ? (
          <div className="shrink-0 rounded-xl bg-white p-2 shadow-sm">
            <Image src={mascot} width={72} height={72} alt={`Mascota de ${name}`} unoptimized />
          </div>
        ) : (
          <Image
            src={logo}
            width={72}
            height={72}
            alt={name}
            unoptimized
            className="shrink-0 rounded-lg bg-border p-2"
          />
        )}

        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {name}
          </h1>
          <p className="mt-2 text-base text-muted">{tagline}</p>

          {status && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
              <FiTool className="size-3.5" aria-hidden />
              {status}
            </span>
          )}
        </div>
      </header>

      <div className="mt-8 flex flex-wrap gap-3">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm duration-300 hover:border-border-hover"
          >
            <FiGithub className="size-4" aria-hidden />
            Ver código
          </a>
        )}

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#18181b] duration-300 hover:opacity-90"
          >
            Ver demo
            <FiArrowUpRight className="size-4" aria-hidden />
          </a>
        )}

        {overleafUrl ? (
          <a
            href={overleafUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm duration-300 hover:border-border-hover"
          >
            Artículo en Overleaf
            <FiArrowUpRight className="size-4" aria-hidden />
          </a>
        ) : (
          overleafUrl === null && (
            <span
              title="El artículo aún no se ha publicado"
              className="flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted"
            >
              <FiClock className="size-4" aria-hidden />
              Artículo — próximamente
            </span>
          )
        )}
      </div>

      {screenshot && (
        <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface">
          <Image
            src={screenshot}
            width={1600}
            height={1000}
            alt={`Captura de ${name}`}
            unoptimized
            className="w-full"
          />
        </div>
      )}

      {description && (
        <section className="mt-12 space-y-4 leading-relaxed text-muted">
          {description.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </section>
      )}

      {techStack && (
        <section className="mt-12">
          <h2 className="mb-5 font-display text-xl font-semibold tracking-tight">
            Stack técnico
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {techStack.map(({ layer, items }) => (
              <div key={layer} className="rounded-lg border border-border bg-surface p-4">
                <dt className="mb-2 text-xs font-medium tracking-wide text-muted uppercase">
                  {layer}
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {team && (
        <section className="mt-12">
          <h2 className="mb-5 font-display text-xl font-semibold tracking-tight">Equipo</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {team.map(({ name: memberName, role, url }) => (
              <li key={memberName} className="rounded-lg border border-border bg-surface p-4">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium duration-300 hover:text-accent"
                  >
                    {memberName}
                  </a>
                ) : (
                  <span className="font-medium">{memberName}</span>
                )}
                <p className="mt-0.5 text-sm text-muted">{role}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {affiliations && (
        <section className="mt-12">
          <h2 className="mb-5 font-display text-xl font-semibold tracking-tight">
            Con el respaldo de
          </h2>
          <div className="flex flex-wrap gap-4">
            {affiliations.map(({ name: affName, logo: affLogo, url }) => {
              const content = (
                <>
                  <Image
                    src={affLogo}
                    width={40}
                    height={40}
                    alt={affName}
                    unoptimized
                    className="size-10 shrink-0 rounded-md object-contain"
                  />
                  <span className="text-sm">{affName}</span>
                </>
              );

              return url ? (
                <a
                  key={affName}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 duration-300 hover:border-border-hover"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={affName}
                  className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
