import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Sparkles, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/mizaan-trans.png";

interface NavItem {
  label: string;
  to: "/" | "/about" | "/services" | "/projects" | "/contact";
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0d12]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="shell flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Mizaan Technologies Home">
          <img
            src={logo}
            alt="Mizaan Technologies"
            className="h-9 md:h-14 w-auto transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm" aria-label="Main Navigation">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  active
                    ? "text-white bg-[#c73834] shadow-sm shadow-[#c73834]/40"
                    : "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#c73834] to-[#a82522] hover:from-[#d9433f] hover:to-[#b82e2b] shadow-md shadow-[#c73834]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#c73834]/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start a Project</span>
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0c0e14]/98 border-b border-white/10 backdrop-blur-xl p-6 shadow-2xl transition-all animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? "text-white bg-[#c73834]/90 font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#c73834] shadow-md shadow-[#c73834]/30"
              >
                <Sparkles size={16} />
                <span>Start a Project</span>
                <ArrowRight size={16} />
              </Link>

              <div className="flex items-center justify-between text-xs text-zinc-400 px-2 pt-2">
                <a href="tel:+917448552778" className="flex items-center gap-1.5 hover:text-zinc-200">
                  <Phone size={13} />
                  <span>+91 744 855 2778</span>
                </a>
                <a href="mailto:project@mizaantech.co.in" className="flex items-center gap-1.5 hover:text-zinc-200">
                  <Mail size={13} />
                  <span>project@mizaantech.co.in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
