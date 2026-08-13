import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          Construido con{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="border-b border-border text-text duration-300 hover:text-accent"
          >
            Next.js
          </a>{" "}
          y{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
            className="border-b border-border text-text duration-300 hover:text-accent"
          >
            Tailwind CSS
          </a>
          .
        </p>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
