// app/api/x402-resource/route.ts

// Define the handler for GET requests to this route
export async function GET() {
  
  // Define the JSON data required by the x402scan schema
  const X402Data = {
    X402Version: 1, 
    error: "Payment required. This endpoint is configured to trigger 402.",
    // A production resource must include the full 'paymentRequirements' object here.
  };

  // Return the Response object with status 402
  return new Response(JSON.stringify(X402Data), {
    status: 402, // <-- This is the required status code
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
