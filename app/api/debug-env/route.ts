import { NextResponse } from 'next/server';

export async function GET() {
  // Get all environment variables without exposing sensitive values
  const envVars = {
    // Show if the API key exists but not the actual key
    BREVO_API_KEY: process.env.BREVO_API_KEY ? 
      `${process.env.BREVO_API_KEY.substring(0, 4)}...${process.env.BREVO_API_KEY.substring(process.env.BREVO_API_KEY.length - 4)}` : 
      'not set',
    
    // Include Node environment
    NODE_ENV: process.env.NODE_ENV,
    
    // Check Next.js specific variables
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
  };
  
  return NextResponse.json({
    environment: envVars,
    loadedFrom: {
      config: 'next.config.ts',
      envFile: '.env.local'
    }
  });
} 