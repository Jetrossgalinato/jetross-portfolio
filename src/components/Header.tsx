"use client";
import dynamic from "next/dynamic";
import TechStackComponent from "./TechStack";

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
    <div className="flex flex-col justify-center min-h-[80vh] px-4 md:px-6 lg:px-20 mt-30">
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
              <img
                src="/profile.jpeg"
                alt="Jetross Avatar"
                width={48}
                height={48}
                className="w-full h-full object-cover"
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
            {"I'm"} a creative software developer with three years of
            experience. I specialize in creating minimalist and clean UI
            designed softwares with smooth performance.
          </p>
        </div>

        {/* Tech Stack Section */}
        <TechStackComponent />
      </div>
    </div>
  );
}
