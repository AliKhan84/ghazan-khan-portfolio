import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Research", id: "research" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span
              className="text-xl font-bold text-primary font-serif cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              GK.
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                  data-testid={`nav-link-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              data-testid="button-toggle-theme"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background/50 hover:bg-muted transition-colors text-foreground/70 hover:text-primary"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Button asChild variant="default" className="rounded-full shadow-sm hover-elevate">
              <a href="/Ghazan_Khan_CV.pdf" target="_blank" rel="noopener noreferrer" data-testid="nav-download-cv">
                Download CV
              </a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              data-testid="button-toggle-theme-mobile"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border bg-background/50 hover:bg-muted transition-colors text-foreground/70 hover:text-primary"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary p-2"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-md"
                data-testid={`mobile-nav-link-${link.id}`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 px-3">
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                data-testid="button-toggle-theme-menu"
                className="flex items-center gap-3 w-full px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
            <div className="pt-2 px-3">
              <Button asChild variant="default" className="w-full">
                <a href="/Ghazan_Khan_CV.pdf" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
