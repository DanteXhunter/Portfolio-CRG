import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects"];
  const projectRoutes = projects.map(({ slug }) => `/projects/${slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.8,
  }));
}
