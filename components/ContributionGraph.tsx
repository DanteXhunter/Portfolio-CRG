"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { profile } from "@/data/profile";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

// Paleta de GitHub, la misma que usa la referencia.
const scale = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const BLOCK = 13;
const GAP = 4;

/** Agrupa los días en semanas (columnas de 7), rellenando el hueco inicial. */
function toWeeks(days: Day[]): (Day | null)[][] {
  if (days.length === 0) return [];

  const weeks: (Day | null)[][] = [];
  let current: (Day | null)[] = Array(new Date(days[0].date).getUTCDay()).fill(null);

  for (const day of days) {
    current.push(day);
    if (current.length === 7) {
      weeks.push(current);
      current = [];
    }
  }

  if (current.length > 0) {
    weeks.push([...current, ...Array(7 - current.length).fill(null)]);
  }

  return weeks;
}

export default function ContributionGraph() {
  const currentYear = new Date().getFullYear();

  // null = últimos doce meses, que es lo que se muestra al entrar.
  const [year, setYear] = useState<number | null>(null);
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let active = true;
    setStatus("loading");

    fetch(
      `https://github-contributions-api.jogruber.de/v4/${profile.githubUsername}?y=${year ?? "last"}`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: { contributions: Day[]; total: Record<string, number> }) => {
        if (!active) return;
        const contributions = data.contributions ?? [];
        setDays(contributions);
        setTotal(
          year !== null
            ? (data.total?.[String(year)] ?? null)
            : contributions.reduce((sum, day) => sum + day.count, 0)
        );
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));

    return () => {
      active = false;
    };
  }, [year]);

  const weeks = useMemo(() => toWeeks(days), [days]);
  const colors = scale[mounted && resolvedTheme === "light" ? "light" : "dark"];
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  // Etiqueta de mes en la primera semana donde arranca cada mes.
  const monthLabels = weeks.map((week, index) => {
    const first = week.find(Boolean);
    if (!first) return null;

    const month = new Date(first.date).getUTCMonth();
    const previous = weeks[index - 1]?.find(Boolean);
    const previousMonth = previous ? new Date(previous.date).getUTCMonth() : -1;

    return month !== previousMonth ? months[month] : null;
  });

  return (
    <section className="mb-16">
      <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Gráfica de contribuciones
      </h2>

      <div className="flex flex-col gap-4 xl:flex-row">
        <div className="max-h-fit max-w-full overflow-x-auto rounded-lg border border-border bg-surface p-8">
          {status === "error" ? (
            <p className="text-sm text-muted">
              No se pudo cargar la actividad de GitHub. Revisa tu conexión e inténtalo de nuevo.
            </p>
          ) : status === "loading" ? (
            <div className="h-[150px] w-[740px] max-w-full animate-pulse rounded bg-border" />
          ) : (
            <figure className="w-max">
              <figcaption className="mb-3 text-sm text-muted">
                {total} contribuciones {year === null ? "en el último año" : `en ${year}`}
              </figcaption>

              <div className="mb-1 flex" style={{ gap: GAP }}>
                {monthLabels.map((label, index) => (
                  <div key={index} className="text-xs text-muted" style={{ width: BLOCK }}>
                    {label && <span className="relative -left-px">{label}</span>}
                  </div>
                ))}
              </div>

              <div className="flex" style={{ gap: GAP }}>
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col" style={{ gap: GAP }}>
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        title={day ? `${day.count} contribuciones el ${day.date}` : undefined}
                        style={{
                          width: BLOCK,
                          height: BLOCK,
                          borderRadius: 2,
                          backgroundColor: day ? colors[day.level] : "transparent",
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-end gap-1 text-xs text-muted">
                <span className="mr-1">Menos</span>
                {colors.map((color) => (
                  <span
                    key={color}
                    style={{
                      width: BLOCK,
                      height: BLOCK,
                      borderRadius: 2,
                      backgroundColor: color,
                    }}
                  />
                ))}
                <span className="ml-1">Más</span>
              </div>
            </figure>
          )}
        </div>

        <div className="flex flex-row flex-wrap justify-start gap-2 xl:flex-col">
          {years.map((value) => {
            const isActive = value === (year ?? currentYear);

            return (
              <button
                key={value}
                type="button"
                onClick={() => setYear(value === year ? null : value)}
                title={`Ver la gráfica del año ${value}`}
                className={`rounded-lg border border-transparent px-4 py-2 text-center text-sm font-medium duration-100 ${
                  isActive
                    ? "bg-[#0CCE6B] text-zinc-800"
                    : "bg-surface text-text hover:border-border-hover"
                }`}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
