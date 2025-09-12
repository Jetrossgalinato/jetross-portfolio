"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Preloader from "../../components/Preloader";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds minimum loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Preloader />}
      <div
        className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Dynamic Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-500" />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
        </div>

        {/* Floating Orbs for Visual Interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-300/20 to-cyan-300/20 dark:from-indigo-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-300/15 to-orange-300/15 dark:from-pink-500/8 dark:to-orange-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>
    </>
  );
}
