import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  return (
    <section className="py-20 px-4 min-h-[calc(100vh-8rem)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Technical Skills
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Angular</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Databases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">DynamoDB</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-105 hover:border-zinc-700">
            <CardHeader>
              <CardTitle className="text-white">Cloud & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Jenkins</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
