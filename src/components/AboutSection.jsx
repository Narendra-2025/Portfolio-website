import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Curious Builder
            </h3>

            <p className="text-muted-foreground">
              I'm Narendra Kumar — an engineering student with a heart set on building beautiful, user-friendly web apps. My tools of choice? React.js, Tailwind CSS, and a bunch of late-night debug sessions.
            </p>

            <p className="text-muted-foreground">
              I’ve worked on travel planners, social media platforms, and design showcase sites — not just for grades, but to challenge myself. I’m driven by curiosity and the thrill of watching code come to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Let’s Connect
              </a>

              <a
                href="/resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">React Developer</h4>
                  <p className="text-muted-foreground">
                    Experienced in building responsive UIs with React.js, Tailwind, and component-based architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Creative Problem Solver</h4>
                  <p className="text-muted-foreground">
                    I enjoy turning ideas into interactive, clean interfaces that solve real problems and feel good to use.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Career Goal</h4>
                  <p className="text-muted-foreground">
                    Looking to join a tech team where I can keep growing and help bring great ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
