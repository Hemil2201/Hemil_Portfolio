import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Navigation } from "@/components/navigation";
import AnimatedFloatingTech from "@/components/animated-background";

export const metadata: Metadata = {
  title: "Hemil Prajapati - Software Developer",
  description:
    "Passionate about creating robust, scalable solutions that bridge frontend and backend development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <ClientBody>
          <div className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
            <AnimatedFloatingTech /> {/* ✅ Floating tech background */}
            <div className="relative z-10">
              <Navigation />
              <main className="pt-16">{children}</main>
              <footer className="py-8 px-4 border-t border-zinc-800">
                <div className="max-w-6xl mx-auto text-center text-zinc-500">
                  <p>&copy; 2025 Hemil Prajapati. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </div>
        </ClientBody>
      </body>
    </html>
  );
}
