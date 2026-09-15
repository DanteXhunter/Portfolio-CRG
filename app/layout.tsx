import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const incognito = localFont({
  variable: "--font-incognito",
  display: "swap",
  src: [
    { path: "./fonts/incognito_regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/incognito_medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/incognito_bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Portafolio`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
  applicationName: `${profile.name} — Portafolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  icons: { icon: "/logo.svg" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: `${profile.name} — Portafolio`,
    title: `${profile.name} — Portafolio`,
    description: profile.intro,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portafolio`,
    description: profile.intro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Las variables de fuente van en <html> para que :root las vea: los tokens
    // de Tailwind se declaran ahí y no resolverían si estuvieran en <body>.
    <html
      lang="es"
      suppressHydrationWarning
      className={incognito.variable}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
