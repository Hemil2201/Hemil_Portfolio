import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
  return (
    <section className="py-20 px-4 min-h-[calc(100vh-8rem)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Experience
        </h1>
        <div className="space-y-6">
          {/* Southlake Insurance */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-700">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-white text-2xl">
                    Software Developer
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    Southlake Insurance
                  </CardDescription>
                </div>
                <div className="text-zinc-500">April 2024 – Present</div>
              </div>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Developed 20+ commercial insurance rate engines in Django for
                  lines including General Liability, Business Auto, Trucking,
                  and Property Liability
                </li>
                <li>
                  Built and scaled RESTful APIs for premium computation to
                  handle traffic loads exceeding 1,000 requests per second
                </li>
                <li>
                  Redesigned an internal reconciliation platform by integrating
                  a third-party bank API, saving the accounting team 20+ hours
                </li>
                <li>
                  Built a performance dashboard for underwriters that reduced
                  manual data analysis tasks by 50%
                </li>
                <li>
                  Automated CI/CD pipelines on AWS with Jenkins and GitHub
                  Actions to accelerate software release cycles
                </li>
                <li>
                  Led a team of 5 developers, managing the full development
                  cycle from requirements gathering to code review and testing
                </li>
                <li>
                  Created dynamic UIs with Angular, improving front-end
                  application performance by 25%
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CSUF */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-700">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-white text-2xl">
                    Web Developer
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    California State University Fullerton
                  </CardDescription>
                </div>
                <div className="text-zinc-500">Jan 2022 – Dec 2023</div>
              </div>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Engineered a full-stack housing portal in React & Node.js,
                  serving over 6,000 students and staff
                </li>
                <li>
                  Integrated a secure SQL database for housing applications,
                  enabling real-time vacancy tracking
                </li>
                <li>
                  Developed interactive UI components in React & Bootstrap,
                  increasing student portal engagement by 20%
                </li>
                <li>
                  Optimized site performance via backend caching, achieving 99%
                  uptime
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Shri Ganpati Enterprise */}
          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 hover:scale-[1.01] hover:border-zinc-700">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-white text-2xl">
                    Software Engineer
                  </CardTitle>
                  <CardDescription className="text-zinc-400 text-lg">
                    Shri Ganpati Enterprise, India
                  </CardDescription>
                </div>
                <div className="text-zinc-500">April 2019 – Nov 2021</div>
              </div>
            </CardHeader>
            <CardContent className="text-zinc-300">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Developed a full-stack dairy management web app using Python
                  and ReactJS, improving operational efficiency by 30%
                </li>
                <li>
                  Designed the PostgreSQL database schema for real-time tracking
                  of inventory, orders, and supplier data
                </li>
                <li>
                  Built and documented RESTful APIs in Python to ensure
                  seamless, secure data exchange
                </li>
                <li>
                  Deployed on AWS (EC2, S3), using IAM policies to reduce
                  unauthorized access risks by 40%
                </li>
                <li>
                  Achieved a 20% improvement in test coverage and software
                  quality through RESTful testing utilizing TestNG
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
