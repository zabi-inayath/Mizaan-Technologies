import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

export function RevampedHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-24 bg-[#08090d] text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#c73834]/20 via-[#c73834]/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -top-32 right-10 w-[450px] h-[450px] bg-indigo-950/20 blur-[130px] pointer-events-none" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="shell relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white leading-tight">
              We Solve Business Problems Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#e65c58]">
                Technology.
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl font-semibold text-zinc-200 max-w-2xl">
              Built to Work. Designed to Grow.
            </p>

            {/* Subheadline */}
            <p className="text-sm sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal">
              We help businesses overcome operational challenges and unlock new
              opportunities through website development, custom software, mobile
              applications, ERP systems and super intelligent automation.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              From your first digital presence to advanced business systems, we
              build solutions that make your business work smarter.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="glass-btn-primary group relative inline-flex items-center gap-3 px-7 py-4 rounded-full text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Discuss Your Project</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/projects"
                className="glass-btn inline-flex items-center gap-2.5 px-6 py-4 rounded-full text-base font-medium text-zinc-200 hover:text-white transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <ChevronRight size={17} className="text-zinc-400" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#e65c58]" />
                <span>Business-Focused Solutions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#e65c58]" />
                <span>Transparent Project Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#e65c58]" />
                <span>Reliable Technical Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Dashboard Card */}
          <div className="lg:col-span-5">
            <div className="glass-card relative rounded-2xl p-1 shadow-2xl">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 rounded-t-xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-zinc-400">
                    mizaan-solutions.sys
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400">
                    READY TO BUILD
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-5 min-h-[320px] flex flex-col justify-center bg-black/40 rounded-b-xl space-y-4">
                {/* Solution Row 1 */}
                <div className="glass p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Websites & Web Apps
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        Custom platforms that convert visitors
                      </div>
                    </div>
                  </div>
                  <span className="glass-badge text-[10px] font-mono px-2 py-0.5 rounded text-emerald-400">
                    Popular
                  </span>
                </div>

                {/* Solution Row 2 */}
                <div className="glass p-3 rounded-xl flex items-center justify-between border-[#c73834]/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#c73834]/20 text-[#e65c58]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Custom Software & ERP
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        Systems that streamline operations
                      </div>
                    </div>
                  </div>
                  <span className="glass-badge text-[10px] font-mono px-2 py-0.5 rounded text-[#e65c58]">
                    Enterprise
                  </span>
                </div>

                {/* Solution Row 3 */}
                <div className="glass p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        Mobile Applications
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        iOS & Android from a single codebase
                      </div>
                    </div>
                  </div>
                  <span className="glass-badge text-[10px] font-mono px-2 py-0.5 rounded text-blue-400">
                    Cross-Platform
                  </span>
                </div>

                {/* Solution Row 4 */}
                <div className="glass p-3 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        AI & Smart Automation
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        Intelligent workflows that save time
                      </div>
                    </div>
                  </div>
                  <span className="glass-badge text-[10px] font-mono px-2 py-0.5 rounded text-purple-400">
                    AI-Powered
                  </span>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="p-3 bg-black/50 border-t border-white/10 rounded-b-xl flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono">Mizaan Technologies</span>
                <Link
                  to="/services"
                  className="text-[#e65c58] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>See All Services</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Numbers / Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              100+
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
              Projects Delivered
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-[#e65c58] tracking-tight">
              50+
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
              Global Clients
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              3+
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
              Years Engineering Excellence
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-emerald-400 tracking-tight">
              99.8%
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
              On-Time & On-Budget Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
