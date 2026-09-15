const fallbackUrl = "http://localhost:3000";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = configuredUrl
  ? configuredUrl.replace(/\/$/, "")
  : vercelUrl
    ? `https://${vercelUrl}`
    : fallbackUrl;
