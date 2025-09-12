"use client";
import Image from "next/image";

interface HeaderProps {
  subtitle?: string;
}

export default function Header({}: HeaderProps) {
  return (
    <div className="flex flex-col justify-center min-h-[80vh] px-4 md:px-6 lg:px-20">
      <div className="max-w-lg mx-auto w-full">
        {/* Header Section with Avatar and Name */}
        <div className="flex items-center space-x-4 mb-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
              <Image
                src="/avatar.jpg"
                alt="Jetross Avatar"
                width={48}
                height={48}
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
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-md md:text-md text-gray-700 dark:text-gray-200 font-light leading-relaxed max-w-3xl">
            {"I'm"} a creative software developer with five years of experience.
            I specialize in UI design and crafting engaging user experiences
            with great attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
}
