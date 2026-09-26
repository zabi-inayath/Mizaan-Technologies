import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  kicker: string;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumbCurrent: string;
}

export function PageHeader({
  kicker,
  title,
  highlightedWord,
  description,
  breadcrumbCurrent,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#0a0c10] text-white overflow-hidden border-b border-white/10">
      {/* Background ambient mesh and glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#c73834]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="shell relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6 uppercase tracking-wider">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={12} className="text-zinc-600" />
          <span className="text-[#e65c58] font-semibold">{breadcrumbCurrent}</span>
        </nav>

        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30 mb-6">
          <span>{kicker}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white max-w-4xl leading-tight">
          {title}{" "}
          {highlightedWord && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e65c58] to-[#c73834]">
              {highlightedWord}
            </span>
          )}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
