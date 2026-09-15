import type { Metadata } from "next";
import Image from "next/image";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import Usage from "@/components/Usage";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Conoce más sobre mis habilidades, experiencia y formación técnica.",
};

export default function AboutPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 pt-20 md:px-16 lg:max-w-7xl">
      <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="order-2 lg:order-none">
          <h1 className="mb-8 font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:leading-tight">
            {profile.aboutHeadline}
          </h1>

          <div className="space-y-4 leading-relaxed text-muted">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="relative mt-10 overflow-hidden rounded-lg border border-border p-6">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-2 right-4 select-none font-display text-8xl leading-none text-border"
            >
              &rdquo;
            </span>
            <p className="relative leading-relaxed text-muted">{profile.quote}</p>
          </blockquote>

          <h2
            id="ahora"
            className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight"
          >
            ¿En qué estoy trabajando?
          </h2>
          <p className="leading-relaxed text-muted">{profile.currently}</p>

          <h2
            id="habilidades"
            className="mt-12 mb-4 font-display text-2xl font-semibold tracking-tight"
          >
            Habilidades
          </h2>
          <ul className="space-y-6">
            {profile.skills.map(({ title, description }) => (
              <li key={title}>
                <h3 className="font-display text-base font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="mt-1 leading-relaxed text-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <aside className="order-none mb-12 flex flex-col gap-y-8 justify-self-start lg:order-1 lg:justify-self-center">
          <div className="sticky top-10">
            <Image
              className="mb-4 max-h-96 min-h-96 rounded-2xl bg-top object-cover"
              src={profile.avatar}
              width={400}
              height={400}
              alt={`Fotografía de ${profile.name}`}
              unoptimized
              priority
            />

            <div className="flex flex-col gap-y-4 text-center">
              <div className="flex items-center gap-x-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex basis-[90%] items-center justify-center gap-x-2 rounded-md border border-transparent bg-surface py-2 text-center font-display text-lg font-semibold duration-300 hover:border-border-hover"
                >
                  Ver currículum <BiLinkExternal className="text-base" />
                </a>
                <a
                  href={profile.resumeUrl}
                  download="Cristopher-Rojas-Garcia-CV.pdf"
                  className="flex basis-[10%] items-center justify-center rounded-md border border-transparent bg-surface py-3 text-center text-lg text-accent duration-300 hover:border-border-hover hover:underline"
                  title="Descargar currículum"
                >
                  <BiSolidDownload aria-label="Descargar currículum" />
                </a>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-x-2 duration-300 hover:text-accent"
              >
                <BiEnvelope className="text-lg" />
                {profile.email}
              </a>
            </div>
          </div>
        </aside>
      </section>

      <Usage />
    </main>
  );
}
