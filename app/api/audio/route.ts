import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { text } = await request.json();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_TTS_API_KEY,
    },
    body: JSON.stringify({
      text: text,
      speaker: "7f954f14-55fa-11ef-a7a0-00163e0e200f",
      emotion: "calm gentle",
    }),
  };

  try {
    const response = await fetch(
      "https://api.topmediai.com/v1/text2speech",
      options
    );
    const data = await response.json();
    console.log("data", data);

    if (data.status === 200 && data.data.oss_url) {
      return NextResponse.json({ audioUrl: data.data.oss_url, text: text });
    } else {
      return NextResponse.json(
        { error: "Failed to generate speech" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in text-to-speech:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
export const dynamic = "force-dynamic";
