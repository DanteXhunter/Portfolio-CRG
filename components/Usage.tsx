import { profile } from "@/data/profile";
import type { StackItem } from "@/data/profile";

const sections: { id: string; title: string; items: StackItem[] }[] = [
  { id: "tecnologias", title: "Tecnologías", items: profile.technologies },
  { id: "herramientas", title: "Herramientas", items: profile.tools },
  { id: "plataformas", title: "Plataformas", items: profile.platforms },
];

export default function Usage() {
  return (
    <section className="mt-8 mb-16 max-w-3xl">
      <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Herramientas
      </h2>
      <p className="mb-10 leading-relaxed text-muted">
        Las tecnologías, herramientas y plataformas con las que trabajo a diario.
      </p>

      <div className="space-y-10">
        {sections.map(({ id, title, items }) => (
          <div key={id}>
            <h3
              id={id}
              className="mb-5 font-display text-xl font-semibold tracking-tight"
            >
              {title}
            </h3>

            <ul className="grid gap-5 sm:grid-cols-2">
              {items.map(({ name, description, url, icon: Icon }) => (
                <li key={name} className="flex items-start gap-x-3">
                  <Icon className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-border duration-300 hover:text-accent"
                    >
                      {name}
                    </a>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
