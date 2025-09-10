"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 150);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-500">
      {/* Main preloader container */}
      <div className="text-center">
        {/* GIF Animation */}
        <div className="mb-8">
          <Image
            src="/loading.gif"
            alt="Loading Animation"
            width={32}
            height={32}
            className="md:w-48 md:h-48 mx-auto object-contain"
          />
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {Math.floor(Math.min(progress, 100))}%
          </p>
        </div>
      </div>

      {/* Subtle background elements (optional) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 dark:bg-green-900/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 dark:bg-green-800/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
