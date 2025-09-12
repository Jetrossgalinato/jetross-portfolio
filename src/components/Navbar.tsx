import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Round Navbar */}
      <nav className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50 hidden md:block transition-colors duration-300">
        <div className="backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-green-200/50 dark:border-green-600/50">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20"
              >
                {item.label}
              </a>
            ))}
            <div className="border-l border-green-200 dark:border-green-800 pl-4">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-green-200 dark:border-green-800 md:hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-green-800 dark:text-green-400">
              Jetross
            </div>

            <div className="flex items-center space-x-2">
              <ThemeToggler />
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 focus:outline-none transition-all duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="border-t border-green-200 dark:border-green-800">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-gray-900/95">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 block px-4 py-3 rounded-full text-base font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
