import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function PremiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
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
              href="/"
              className="flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Tilbake til Hjem
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Premium Funksjoner
          </h2>
          <p className="text-xl text-gray-600">
            Få tilgang til avanserte AI-funksjoner og ubegrenset lagring
          </p>
        </div>
        <Card className="border-amber-200 shadow-lg">
          <CardContent className="p-8 space-y-8 text-lg text-gray-600">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                🎭 Stemmekloning
              </h3>
              <p>
                ElevenLabs AI kan lære din stemme og hjelpe med å fullføre
                historier eller lage nye opptak i din stemme.
              </p>
              <Link
                href="/premium/voice-cloning"
                className="text-amber-600 hover:text-amber-700 underline"
              >
                Prøv stemmekloning
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                📝 Automatisk Transkripsjon
              </h3>
              <p>
                Få tekstversjoner av alle opptakene dine automatisk, med
                mulighet for redigering og søk.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                👥 Utvidet Familie-deling
              </h3>
              <p>
                Inviter ubegrenset antall familiemedlemmer og lag private
                familiesamlinger av historier.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                🧠 AI Historieassistent
              </h3>
              <p>
                Få personlige historieforslag basert på din alder, bakgrunn og
                interesser.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
