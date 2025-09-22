import React from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mealmate",
    description:
      "A meal subscription and delivery platform that enables users to order food and subscribe to premium meal plans with exclusive benefits. Features include customizable meal plans, scheduled deliveries, and subscriber rewards.",
    image: "/mealmate.png",
    techStack: ["Vue.js", "JavaScript", "Laravel"],
    liveUrl: "https://meal-subscription-frontend.vercel.app/#/",
    repoUrl: "https://github.com/Jetrossgalinato/meal-subscription-frontend",
  },
  {
    id: 2,
    title: "Finteach",
    description:
      "A financial monitoring system with AI financial advisor that helps you manage your finances. Features smart budgeting recommendations, expense tracking, and personalized financial insights.",
    image: "/finteach.svg",
    techStack: ["React.js", "TypeScript", "Django"],
    liveUrl: "#",
    repoUrl: "https://github.com/Jetrossgalinato/Finteach",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 md:scroll-mt-32 py-12 md:py-16 rounded-lg transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-3 sm:px-0">
        {/* Section Title */}
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-300 mb-6 md:mb-8">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-4 md:gap-8 md:grid-cols-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 border border-md border-black dark:border-white p-4 md:p-6 rounded-lg shadow-md bg-white/80 dark:bg-gray-900/80"
            >
              {/* Project Image */}
              {project.image && (
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title + " logo"}
                    width={40}
                    height={40}
                    className="object-contain w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
              )}

              {/* Project Content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                  {project.title}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-green-600 dark:text-green-400 hover:underline text-xs font-normal"
                    >
                      Live
                    </a>
                  )}
                  {project.repoUrl && project.repoUrl !== "#" && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-gray-500 dark:text-gray-400 hover:underline text-xs font-normal"
                    >
                      Code
                    </a>
                  )}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-1.5 md:mb-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
