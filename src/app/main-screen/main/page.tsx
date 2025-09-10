"use client";
import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Preloader from "../../../components/Preloader";

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
        className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />

        {/* Main content area */}
        <main className="pt-20 md:pt-24">
          <div className="container mx-auto px-4 py-8">
            <div
              className={`transition-all duration-700 ease-out ${
                isLoading
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            ></div>
          </div>
        </main>
      </div>
    </>
  );
}
