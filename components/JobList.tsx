import Image from "next/image";
import { jobs } from "@/data/jobs";

const formatter = new Intl.DateTimeFormat("es-MX", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatPeriod(startDate: string, endDate?: string) {
  const start = formatter.format(new Date(`${startDate}-01T00:00:00Z`));
  const end = endDate
    ? formatter.format(new Date(`${endDate}-01T00:00:00Z`))
    : "Actualidad";

  return `${start} — ${end}`;
}

export default function JobList() {
  if (jobs.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="mb-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Experiencia
      </h2>

      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2">
        {jobs.map(({ id, company, role, logo, url, startDate, endDate, description }) => (
          <div key={id} className="flex items-start gap-x-4">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-md border border-border bg-surface p-2 duration-300 hover:border-border-hover"
              >
                <Image
                  src={logo}
                  width={44}
                  height={44}
                  alt={company}
                  className="size-11 rounded object-contain"
                />
              </a>
            ) : (
              <div className="shrink-0 rounded-md border border-border bg-surface p-2">
                <Image
                  src={logo}
                  width={44}
                  height={44}
                  alt={company}
                  className="size-11 rounded object-contain"
                />
              </div>
            )}

            <div className="space-y-1">
              <h3 className="font-display text-lg font-semibold tracking-tight">{company}</h3>
              <p className="text-sm text-muted">{role}</p>
              <p className="text-xs uppercase tracking-wide text-icon">
                {formatPeriod(startDate, endDate)}
              </p>
              <p className="whitespace-pre-line pt-1 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
