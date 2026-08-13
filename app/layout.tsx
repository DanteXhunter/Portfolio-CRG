import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
  title: {
    default: `${profile.name} — Portafolio`,
    template: `%s — ${profile.name}`,
  },
  description: profile.intro,
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
      className={`${inter.variable} ${incognito.variable}`}
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
