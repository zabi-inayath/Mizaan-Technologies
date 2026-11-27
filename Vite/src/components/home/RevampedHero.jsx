import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroSpaceBg from "../../assets/MizaanHero.png";

export function RevampedHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-14 md:pt-36 md:pb-16 bg-[#08090d] text-white overflow-hidden">
      {/* Full-Bleed Space Horizon Background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={heroSpaceBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-[1.03] opacity-90"
        />
        {/* Centered Radial Contrast Scrim */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_42%,rgba(8,9,13,0.72)_0%,rgba(8,9,13,0.45)_60%,rgba(8,9,13,0.85)_100%)]" />
        {/* Top & Bottom Seamless Section Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/75 via-transparent to-[#08090d]" />
        {/* Subtle Crimson Orbital Rim Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-[#c73834]/12 rounded-full blur-[140px]" />
      </div>

      {/* Hero Editorial Content */}
      <div className="shell relative z-10 my-auto py-8 md:py-14">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center space-y-6">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold font-display tracking-[-0.03em] text-white leading-[1.06]">
            We Solve Business Problems{" "}
            <br className="hidden sm:block" />
            Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#e65c58]">
              Technology.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base mt-10 sm:text-lg md:text-xl text-zinc-200/85 max-w-2xl mx-auto leading-relaxed font-normal tracking-[-0.01em]">
            We help businesses overcome operational challenges and unlock new
            opportunities through website development, custom software, mobile
            applications, ERP systems and super intelligent automation.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="glass-btn-primary group relative inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm sm:text-base font-semibold tracking-tight text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Discuss Your Project</span>
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/projects"
              className="glass-btn group inline-flex items-center gap-2.5 px-6 py-4 rounded-full text-sm sm:text-base font-medium tracking-tight text-zinc-100 hover:text-white transition-all duration-200"
            >
              <span>Explore Our Work</span>
              <ArrowRight
                size={17}
                className="text-zinc-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry / Metrics Strip */}
      <div className="shell relative z-10 mt-10 pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass p-4 sm:p-5 rounded-2xl space-y-1 text-center">
            <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              50+
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300/80 font-medium">
              Projects Delivered
            </div>
          </div>
          <div className="glass p-4 sm:p-5 rounded-2xl space-y-1 text-center">
            <div className="text-3xl md:text-4xl font-bold font-display text-[#e65c58] tracking-tight">
              5+
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300/80 font-medium">
              Global Clients
            </div>
          </div>
          <div className="glass p-4 sm:p-5 rounded-2xl space-y-1 text-center">
            <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              3+
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300/80 font-medium">
              Years Engineering Excellence
            </div>
          </div>
          <div className="glass p-4 sm:p-5 rounded-2xl space-y-1 text-center">
            <div className="text-3xl md:text-4xl font-bold font-display text-emerald-400 tracking-tight">
              99.8%
            </div>
            <div className="text-xs uppercase tracking-wider text-zinc-300/80 font-medium">
              On-Time & On-Budget Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
