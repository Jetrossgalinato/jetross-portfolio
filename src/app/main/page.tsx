"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Preloader from "../../components/Preloader";
import StarryBackground from "../../components/StarfieldBackground";
import Header from "../../components/Header";
import Projects from "../../components/Projects";

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      {/* Home anchor at absolute top */}
      <div id="home" />
      <div
        className={`min-h-screen relative overflow-hidden transition duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Starry Background Component */}
        <StarryBackground />

        {/* Content Layer */}
        <div className="relative z-10 pt-16 md:pt-0">
          <Navbar />
          <div
            className={`transition-all duration-700 ease-out ${
              isLoading
                ? "opacity-0 translate-y-8"
                : "opacity-100 translate-y-0"
            }`}
          >
            <Header />
            <Projects />
          </div>
        </div>
      </div>
      {/* Contact anchor at absolute bottom */}
      <div id="contact" />
    </>
  );
}
