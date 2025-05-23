import { NextResponse } from 'next/server';

export async function GET() {
  // Check if the API key exists and its length
  const brevoApiKey = process.env.BREVO_API_KEY || 'not-set';
  const apiKeyStatus = brevoApiKey !== 'not-set' 
    ? `Found (length: ${brevoApiKey.length})` 
    : 'Not found';

  return NextResponse.json({
    brevo_api_key_status: apiKeyStatus,
    node_env: process.env.NODE_ENV,
    next_runtime: process.env.NEXT_RUNTIME,
  });
} 