import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          Hemil Prajapati
        </h1>
        <p className="text-2xl md:text-3xl text-zinc-400 mb-8">
          Software Developer
        </p>
        <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto">
          Passionate about creating robust, scalable solutions that bridge
          frontend and backend development
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-zinc-950 hover:bg-zinc-200"
            >
              Get In Touch
            </Button>
          </Link>
          {/* <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button> */}
        </div>
        <div className="flex gap-6 justify-center mt-8">
          <a
            href="mailto:er.hemilprajapati@gmail.com"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/hemilhp22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          {/* <a
            href="https://github.com/hemilprajapati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
