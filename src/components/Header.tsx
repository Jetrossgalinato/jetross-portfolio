"use client";
import dynamic from "next/dynamic";
import TechStackComponent from "./TechStack";
import Experience from "./Experience";
import { FileText, Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";

// Dynamically import the MapComponent with no SSR
const MapComponent = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="mb-8">
      <div className="relative h-48 w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <div className="animate-pulse text-gray-500 dark:text-gray-400">
          Loading map...
        </div>
      </div>
    </div>
  ),
});

interface HeaderProps {
  subtitle?: string;
}

export default function Header({}: HeaderProps) {
  return (
    <section
      id="home"
      className="flex flex-col justify-center min-h-[80vh] px-4 md:px-6 lg:px-20 mt-40"
    >
      <div className="max-w-lg mx-auto w-full ">
        {/* Map Section */}
        <MapComponent
          latitude={8.93}
          longitude={125.53}
          location="Ampayon, Butuan City, Philippines"
          timezone="Philippine Time"
          height="h-48"
        />

        {/* Header Section with Avatar and Name */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
              <Image
                src="/profile.jpeg"
                alt="Jetross Avatar"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Name and Status */}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-800 dark:text-white flex items-center space-x-2">
              <span>Hey, {"I'm"} Jetross</span>
              <span className="text-2xl md:text-2xl">👋</span>
            </h1>

            {/* Availability Status */}
            <div className="flex items-center space-x-2 mt-1">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">
                Available for work
              </span>
            </div>
            <section id="contact">
              {/* Action Buttons: Resume, LinkedIn, GitHub, Email */}
              <div className="flex flex-wrap gap-2 mt-4">
                {/* Resume button: icon + text, gray by default, green on hover, shadow on hover */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium transition hover:bg-green-600 hover:text-white hover:shadow-lg"
                  title="View Resume"
                >
                  <FileText size={16} /> Resume
                </a>
                {/* LinkedIn icon button: gray by default, blue on hover */}
                <a
                  href="https://www.linkedin.com/in/jetross-galinato-141ba5361/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow transition hover:bg-blue-600 hover:text-white hover:shadow-lg"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                {/* GitHub icon button: gray by default, dark on hover */}
                <a
                  href="https://github.com/Jetrossgalinato"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow transition hover:bg-gray-900 hover:text-white hover:shadow-lg"
                  title="GitHub"
                >
                  <Github size={20} />
                </a>
                {/* Email icon button: gray by default, red on hover */}
                <a
                  href="mailto:jetrossgalinato@gmail.com"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-300 border border-gray-200 dark:border-gray-700 shadow transition hover:bg-red-600 hover:text-white hover:shadow-lg"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Description */}
        <div id="about" className="mb-8">
          <p className="text-md md:text-md text-gray-700 dark:text-gray-200 font-light leading-relaxed max-w-3xl">
            {"I'm"} a creative software developer with three years of
            experience. I specialize in creating minimalist and clean UI
            designed softwares with smooth performance.
          </p>
        </div>

        {/* Tech Stack Section */}
        <TechStackComponent />

        <Experience />
      </div>
    </section>
  );
}
