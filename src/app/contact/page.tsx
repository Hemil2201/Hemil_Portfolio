import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-4 min-h-[calc(100vh-8rem)]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Get In Touch
        </h1>
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300">
          <CardContent className="p-8">
            <p className="text-zinc-300 text-lg mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-zinc-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:er.hemilprajapati@gmail.com"
                  className="text-lg"
                >
                  er.hemilprajapati@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-zinc-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+19515572422" className="text-lg">
                  +1 (951) 557-2422
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 text-zinc-300">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">Dallas, TX</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
