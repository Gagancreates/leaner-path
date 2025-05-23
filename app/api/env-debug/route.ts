import { NextResponse } from 'next/server';

export async function GET() {
  // Get all environment variables (safely)
  const envVars = {
    BREVO_API_KEY_EXISTS: process.env.BREVO_API_KEY ? 'YES' : 'NO',
    BREVO_API_KEY_LENGTH: process.env.BREVO_API_KEY ? process.env.BREVO_API_KEY.length : 0,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    BUILD_ENV_LOADED: process.env.NEXT_BUILD_ENV_LOADED,
  };
  
  // Log to server console for debugging
  console.log('Environment Debug:', envVars);
  
  return NextResponse.json({
    environment: envVars,
    message: 'Check server logs for more details'
  });
} 