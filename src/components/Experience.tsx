import React, { useState } from "react";
import Image from "next/image";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");

  const workExperience = [
    {
      id: 1,
      period: "Jun 2023 - Sep 2025",
      company: "Caraga State University",
      position: "Full Stack Web Developer",
      description:
        "Web Design; Web Development; Reactjs + TypeScript + Next.js + Supabase.",
      logo: "/Caraga_State_University.png",
    },
  ];

  const studiesExperience = [
    {
      id: 1,
      period: "2021 - Present",
      company: "Caraga State University",
      position: "Bachelor's in Information Technology",
      description:
        "Specialized in web development, mobile applications, and software engineering principles.",
      logo: "/Caraga_State_University.png",
    },
  ];

  const currentExperience =
    activeTab === "work" ? workExperience : studiesExperience;

  return (
    <section className="scroll-mt-24 md:scroll-mt-32 py-12 md:py-16 rounded-lg transition-colors duration-300">
      <div className="max-w-lg mx-auto px-3 sm:px-0 ">
        {/* Section Title */}
        <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-300 mb-6 md:mb-8">
          Experience
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2.5 md:gap-3 mb-6 md:mb-8 text-sm">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-26 py-3 cursor-pointer rounded-lg font-medium text-md transition duration-300 ${
              activeTab === "work"
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab("studies")}
            className={`px-26 py-3 cursor-pointer rounded-lg font-medium transition duration-300 ${
              activeTab === "studies"
                ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Studies
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="relative border border-md border-black dark:border-white p-4 md:p-6 rounded-lg">
          {/* Experience Items */}
          <div className="space-y-6 md:space-y-8">
            {currentExperience.map((experience) => (
              <div
                key={experience.id}
                className="relative flex items-start gap-4 md:gap-6"
              >
                {/* Company Logo/Avatar */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-200 dark:bg-white rounded-full flex-shrink-0 overflow-hidden">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={40}
                    height={40}
                    className="object-cover w-8 h-8 md:w-10 md:h-10"
                  />
                </div>

                {/* Experience Content */}
                <div className="flex-1 min-w-0">
                  {/* Period */}
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {experience.period}
                  </div>

                  {/* Company Name */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {experience.company}
                  </h3>

                  {/* Position */}
                  <div className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {experience.position}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
