import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-20 px-4 min-h-[calc(100vh-8rem)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About Me
        </h1>
        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-[1.02]">
          <CardContent className="p-8 text-zinc-300 leading-relaxed">
            <p className="mb-4 text-lg">
              Hi! I’m Hemil Prajapati, a Software Developer based in Dallas, TX.
              My love for technology started back in my schooling in India,
              where I got hooked on computers and problem-solving. I later
              earned a Master of Science in Computer Science from California
              State University, Fullerton, which really helped me sharpen my
              skills and bring my ideas to life through code.
            </p>
            <p className="mb-4 text-lg">
              I enjoy building web applications that are fast, reliable, and
              easy to use, working with tools like Django, React, Node.js,
              Angular, and AWS. From designing databases and creating APIs to
              optimizing performance and automating deployment pipelines, I love
              turning complex problems into smooth, practical solutions.
            </p>
            <p className="mb-2 text-lg">
              When I’m off the keyboard, you’ll likely find me:
            </p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>
                Chasing cricket balls on the field or cheering for my favorite
                teams
              </li>
              <li>
                Exploring new cuisines (though cooking is my true passion)
              </li>
              <li>Traveling the world and soaking in different cultures</li>
              <li>Meeting new people and learning something new every day</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
