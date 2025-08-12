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
              <ArrowLeft className="mr-2 h-5 w-5" />
              Tilbake til Hjem
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Få tilgang til avanserte AI-funksjoner og ubegrenset lagring
          </p>
        </div>
        <Card className="border-amber-200 shadow-lg">
          <CardContent className="p-8 space-y-8 text-lg text-gray-600">
            <div>
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
