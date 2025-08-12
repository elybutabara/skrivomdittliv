import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audio = formData.get("audio") as Blob | null;
    const voiceName = formData.get("voiceName") as string | null;

    if (!audio || !voiceName) {
      return NextResponse.json(
        { error: "Missing audio file or voice name" },
        { status: 400 },
      );
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ELEVENLABS_API_KEY not configured" },
        { status: 500 },
      );
    }

    const elevenForm = new FormData();
    elevenForm.append("name", voiceName);
    elevenForm.append("files", audio, "sample.wav");

    const response = await fetch("https://api.elevenlabs.io/v1/voices/add", {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
      },
      body: elevenForm,
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to clone voice" },
      { status: 500 },
    );
  }
}
