import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Travel Maniac",
    description:
      "An itinerary website built with React.js that helps users discover and plan travel destinations tailored to their preferences.",
    image: "/projects/travel-maniac.png", // Replace with your actual image path
    tags: ["React", "TailwindCSS", "Vite"],
    demoUrl: "https://travel-maniac.vercel.app/",
    githubUrl: "https://github.com/Narendra-2025/Travel-Maniac",
  },
  {
    id: 2,
    title: "Shareapp - Social Media Platform",
    description:
      "Feature-rich social media app for image sharing with Google Auth, CRUD operations, likes, comments, and advanced search functionality.",
    image: "/projects/shareapp.png", // Replace with your actual image path
    tags: ["React", "TailwindCSS", "Sanity.io"],
    demoUrl: "https://shareapp006.netlify.app/", // Update if you have a live demo
    githubUrl: "https://github.com/Narendra-2025/Shareapp",
  },
  {
    id: 3,
    title: "Interior Design Project",
    description:
      "Interactive platform allowing users to explore interior design layouts and styles with real-time previews and responsive design.",
    image: "/projects/interior-design.png", // Replace with your actual image path
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://interior-design-zeta-three.vercel.app/",
    githubUrl: "https://github.com/Narendra-2025/Interior-Design",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects reflect my hands-on experience building responsive and user-centric web applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      aria-label={`View GitHub repo of ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Narendra-2025"
          >
            View My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
