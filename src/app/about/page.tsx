import { Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Om Oss</h2>
          <p className="text-xl text-gray-600">
            Vi ønsker å gjøre det enkelt for alle å bevare og dele sine
            livshistorier.
          </p>
        </div>
        <Card className="border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">
              Vår Historie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-gray-600">
            <p>
              Livets Stemme er utviklet for å gi et varmt og trygt rom for
              fortellinger. Prosjektet ledes av{" "}
              <span className="font-semibold">Sven Inge Henningsen</span>, som
              arbeider i <span className="font-semibold">Forfatterskolen</span>{" "}
              og <span className="font-semibold">Easywrite</span>.
            </p>
            <p>
              Gjennom arbeidet med skriveglade mennesker har vi sett behovet for
              et enkelt verktøy som hjelper deg å ta vare på minnene dine – med
              din egen stemme.
            </p>
            <p>
              Vi tror at alle historier fortjener å bli hørt. Ved å kombinere
              inspirasjon fra skrivefellesskapet og moderne teknologi håper vi
              at flere får mot til å dele sine minner.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
