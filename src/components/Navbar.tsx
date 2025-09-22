import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  // Mobile state removed; desktop navbar used on all sizes
  //add more spacing

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ];

  // Smooth scroll for anchor links
  if (typeof window !== "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
  }
  return (
    <>
      {/* Desktop Round Navbar (visible on all breakpoints) */}
      <nav className="fixed top-12 inset-x-0 z-50 transition-colors duration-300">
        {/* Match Header width: center container with max-w-lg and side padding */}
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-0">
          <div className="w-full backdrop-blur-sm rounded-full px-6 md:px-12 py-3 md:py-4 shadow-lg border border-green-200/50 dark:border-green-600/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 sm:gap-10 md:gap-14">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="border-l border-green-200 dark:border-green-800 pl-4 ml-2">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar removed; using desktop navbar for all sizes */}
    </>
  );
};

export default Navbar;
