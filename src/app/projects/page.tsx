import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20 px-4 min-h-[calc(100vh-8rem)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h1>
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-[1.02] hover:border-zinc-700">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-white text-2xl mb-2">
                  MedShopp
                </CardTitle>
                <CardDescription className="text-zinc-400 text-lg">
                  A one-stop web application for pharmacy and hospital services
                </CardDescription>
              </div>
              <ExternalLink className="w-5 h-5 text-zinc-500" />
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside text-zinc-300 mb-4">
              <li>
                Built the full-stack app (TypeScript, React, Node.js) to
                reliably handle 1,000+ monthly user transactions
              </li>
              <li>
                Automated 80% of manual bookings by integrating medication
                sales, Zoom appointments, & ambulance requests
              </li>
              <li>
                Cut response time by 40% using Stripe for payments, Firebase for
                notifications, & WebSockets for live tracking
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                TypeScript
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                React
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                Node.js
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                Stripe
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                Firebase
              </Badge>
              <Badge className="bg-zinc-800 text-zinc-200 hover:bg-zinc-700">
                WebSockets
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
