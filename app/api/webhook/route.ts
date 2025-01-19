import { NextRequest, NextResponse } from "next/server";

// Configure body parsing
export const config = {
  api: {
    bodyParser: false, // Disable automatic body parsing to get raw body
  },
};

// Helper to get raw body as string
async function getRawBody(req: NextRequest): Promise<string> {
  const arrayBuffer = await req.arrayBuffer();
  const decoder = new TextDecoder();
  return decoder.decode(arrayBuffer);
}

export async function POST(req: NextRequest) {
  console.log("Webhook received:", req);

  try {
    // Get the signature from headers
    const signature = req.headers.get("x-signature");
    console.log("signature", signature);

    if (!signature) {
      return NextResponse.json(
        { error: "Missing x-signature header" },
        { status: 400 }
      );
    }

    // Get the raw request body
    const rawBody = await getRawBody(req);
    console.log("rawBody", rawBody);

    const payload = JSON.parse(rawBody);
    console.log("Webhook payload:", payload);

    // Return success response
    return NextResponse.json(
      { message: "Webhook received and verified" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
