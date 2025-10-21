import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section className="py-20 px-4 min-h-[calc(100vh-8rem)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Education
        </h1>
        <div className="space-y-6 mb-16">
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-700">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-white text-2xl">
                    Master of Science in Computer Science
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    California State University Fullerton
                  </CardDescription>
                </div>
                <div className="text-zinc-500">Jan 2022 – Dec 2023</div>
              </div>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <p className="text-lg">GPA: 3.7/4.0</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-700">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-white text-2xl">
                    Bachelor of Engineering in Computer Engineering
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    Gujarat Technological University
                  </CardDescription>
                </div>
                <div className="text-zinc-500">June 2017 – May 2021</div>
              </div>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <p className="text-lg">GPA: 3.6/4.0</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">
                AWS Certified Developer Associate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-orange-600 hover:bg-orange-700">AWS</Badge>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">
                AWS Certified Cloud Practitioner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-orange-600 hover:bg-orange-700">AWS</Badge>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Python For Everybody</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-blue-600 hover:bg-blue-700">
                Michigan University
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
