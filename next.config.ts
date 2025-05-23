import type { NextConfig } from "next";
import { loadEnvConfig } from '@next/env';

// Manually load environment variables from .env.local
const { combinedEnv } = loadEnvConfig(process.cwd());

const nextConfig: NextConfig = {
  // Explicitly set environment variables
  env: {
    BREVO_API_KEY: combinedEnv.BREVO_API_KEY || process.env.BREVO_API_KEY,
  },
};

export default nextConfig;
