"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ArrowLeft } from "lucide-react";

export default function VoiceCloningPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("Laster...");
    const response = await fetch("/api/voice-clone", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      setStatus(
        "Stemmen er klonet! ID: " + (data.voice_id || data.voice?.voice_id),
      );
    } else {
      setStatus("Feil: " + (data.error?.message || JSON.stringify(data)));
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <header className="bg-white shadow-sm border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-amber-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                Livets Stemme
              </h1>
            </div>
            <Link
              href="/premium"
              className="flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Tilbake til Premium
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Stemmekloning</h2>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="voiceName" className="font-medium">
              Navn på stemme
            </label>
            <input
              id="voiceName"
              name="voiceName"
              type="text"
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="audio" className="font-medium">
              Lydfil
            </label>
            <input
              id="audio"
              name="audio"
              type="file"
              accept="audio/*"
              required
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-amber-600 text-white px-4 py-2 rounded"
          >
            Last opp og klon
          </button>
        </form>
        {status && <p className="mt-4 text-gray-700">{status}</p>}
      </main>
    </div>
  );
}
