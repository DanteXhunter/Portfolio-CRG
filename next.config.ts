import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hay otros lockfiles por encima de esta carpeta; sin esto Next deduce mal
  // la raíz del proyecto al rastrear archivos.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
