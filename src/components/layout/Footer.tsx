import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Sparkles, Terminal, X as TwitterX } from "lucide-react";
import logo from "../../assets/mizaan-trans.png";

export function Footer() {
  return (
    <footer className="relative bg-[#090b0f] text-zinc-300 pt-20 pb-12 overflow-hidden border-t border-white/10">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-b from-[#c73834]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="shell relative z-10">
        {/* Top Callout Box */}
        <div className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30 mb-3">
              <Sparkles size={13} />
              <span>Ready for Growth?</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-display tracking-tight">
              Have a digital vision in mind? Let's engineer it.
            </h2>
            <p className="text-zinc-400 mt-2 text-base max-w-2xl">
              From high-performance web and mobile apps to custom AI systems and enterprise platforms, we turn ambitious ideas into dependable realities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#c73834] hover:bg-[#d9433f] shadow-lg shadow-[#c73834]/30 transition-all hover:scale-105 active:scale-100"
            >
              <span>Schedule a Consultation</span>
              <ArrowUpRight size={18} />
            </Link>
            <a
              href="tel:+917448552778"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <Phone size={16} />
              <span>Call Our Studio</span>
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Mizaan Technologies" className="h-10 w-auto" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Mizaan Technologies is a premier independent engineering & digital product studio. We combine architectural precision with human-centered aesthetics to build software that scales.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                Studio Status: Operational · Accepting Q2/Q3 Projects
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-[#e65c58] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-400 hover:text-[#e65c58] transition-colors">
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-zinc-400 hover:text-[#e65c58] transition-colors">
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-[#e65c58] transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-[#e65c58] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-zinc-400 hover:text-[#e65c58] transition-colors">
                  Platform Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Web & SaaS Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Custom Enterprise Software
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  UI/UX & Product Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  AI & Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Cloud & DevOps Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Connect
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+917448552778"
                className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors"
              >
                <Phone size={15} className="text-[#e65c58]" />
                <span>+91 744 855 2778</span>
              </a>
              <a
                href="mailto:project@mizaantech.co.in"
                className="flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-[#e65c58]" />
                <span>project@mizaantech.co.in</span>
              </a>
              <div className="flex items-start gap-2.5 text-zinc-400">
                <MapPin size={16} className="text-[#e65c58] mt-0.5 shrink-0" />
                <span>Vaniyambadi, Tirupattur Dt., Tamil Nadu, India</span>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://instagram.com/mizaantech.co.in"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#c73834] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#c73834] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://x.com/mizaantechx"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#c73834] transition-all"
                aria-label="X / Twitter"
              >
                <TwitterX size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Mizaan Technologies. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <span>•</span>
            <span>Vaniyambadi · Tamil Nadu · India</span>
          </div>
        </div>

        {/* Studio Logo at Bottom */}
        <div className="flex justify-center items-center pt-10 pb-2">
          <img
            src={logo}
            alt="Mizaan Technologies"
            className="h-28 w-auto opacity-30 hover:opacity-80 transition-all duration-300 "
          />
        </div>
      </div>
    </footer>
  );
}
