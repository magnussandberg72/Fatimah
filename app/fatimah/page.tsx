// Path: app/fatimah/page.tsx

"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function FatimahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-yellow-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">🙏 Support Fatimah</h1>
          <p className="text-gray-700 opacity-90">
            Fatimah lives in Ghana and struggles with poverty and hunger. 
            Support goes via her mother <b>Mavis Boakye</b> through MTN Mobile Money (WorldRemit).
          </p>
        </header>

        {/* Support card */}
        <Card className="shadow-md bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle>🤝 How to Support</CardTitle>
            <CardDescription>Safe transfer details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-800">
            <p>
              <strong>Receiver:</strong> Mavis Boakye (Fatimah’s mother)<br />
              <span className="text-sm opacity-80">Funds go directly to Fatimah through Mavis.</span>
            </p>
            <p><strong>Platform:</strong> WorldRemit → MTN Mobile Money (Ghana)</p>
            <p><strong>MTN Number:</strong> +233 594375428</p>

            <Button asChild className="w-full mt-4">
              <a
                href="https://www.worldremit.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send via WorldRemit
              </a>
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
