import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

export function RevampedHero() {
  const [activeTab, setActiveTab] = useState<"architecture" | "metrics" | "code">("architecture");

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
              Architecting Digital Products That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#e65c58]">
                Scale & Endure.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-xl text-zinc-300 max-w-2xl leading-relaxed font-normal">
              We partner with ambitious startups and enterprises to design, build, and deploy high-performance web platforms, mobile applications, bespoke AI systems, and resilient cloud architecture.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#c73834] via-[#bd2e2a] to-[#991e1a] hover:from-[#d9433f] hover:to-[#b32623] hover:shadow-2xl hover:shadow-[#c73834]/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full text-base font-medium text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                <span>Explore Work</span>
                <ChevronRight size={17} className="text-zinc-400" />
              </Link>
            </div>

            {/* Quick Guarantees & Trust Signals */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#e65c58]" />
                <span>Zero Technical Debt</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#e65c58]" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#e65c58]" />
                <span>Transparent Delivery Milestones</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Studio System Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-1 shadow-2xl backdrop-blur-xl">
              {/* Top Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-zinc-400">mizaan-stack.sys</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400">STATUS: PROD OPTIMIZED</span>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-1 p-2 bg-black/20 border-b border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab("architecture")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === "architecture"
                      ? "bg-[#c73834] text-white shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Architecture Flow
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("metrics")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === "metrics"
                      ? "bg-[#c73834] text-white shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Live Performance
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeTab === "code"
                      ? "bg-[#c73834] text-white shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  Engineering Stack
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="p-5 min-h-[300px] flex flex-col justify-center bg-black/40 rounded-b-xl">
                {activeTab === "architecture" && (
                  <div className="space-y-3.5">
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                          <Layers size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Client Frontend Layer</div>
                          <div className="text-[11px] text-zinc-400">Next.js 15 / React 19 / Vite / Tailwind v4</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Sub-100ms FCP
                      </span>
                    </div>

                    <div className="flex justify-center -my-1 text-zinc-500">
                      <span className="text-xs font-mono">↓ Edge Gateway routing</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.04] border border-[#c73834]/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#c73834]/20 text-[#e65c58]">
                          <Cpu size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Application & AI Core</div>
                          <div className="text-[11px] text-zinc-400">Node / Python / LLM Agents / REST & GraphQL</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c73834]/20 text-[#e65c58] border border-[#c73834]/30">
                        Auto-Scale
                      </span>
                    </div>

                    <div className="flex justify-center -my-1 text-zinc-500">
                      <span className="text-xs font-mono">↓ High-speed Replication</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <Zap size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Resilient Infrastructure</div>
                          <div className="text-[11px] text-zinc-400">PostgreSQL / Redis / Docker / Cloudflare Workers</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        99.98% Uptime
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "metrics" && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                      <span className="text-xs text-zinc-400">Core Web Vitals</span>
                      <div className="mt-2 text-3xl font-bold font-display text-emerald-400">100/100</div>
                      <div className="text-[11px] text-zinc-500 mt-1">Lighthouse Performance</div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                      <span className="text-xs text-zinc-400">Average TTFB</span>
                      <div className="mt-2 text-3xl font-bold font-display text-[#e65c58]">&lt; 42ms</div>
                      <div className="text-[11px] text-zinc-500 mt-1">Edge Distributed CDN</div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                      <span className="text-xs text-zinc-400">Uptime SLA</span>
                      <div className="mt-2 text-3xl font-bold font-display text-white">99.98%</div>
                      <div className="text-[11px] text-zinc-500 mt-1">Production Reliability</div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                      <span className="text-xs text-zinc-400">Client Retention</span>
                      <div className="mt-2 text-3xl font-bold font-display text-indigo-400">98.5%</div>
                      <div className="text-[11px] text-zinc-500 mt-1">Multi-year partnerships</div>
                    </div>
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="font-mono text-xs text-zinc-300 space-y-2 p-2 bg-black/60 rounded-lg overflow-x-auto border border-white/5">
                    <div className="text-zinc-500">// Mizaan Modern Tech Standard</div>
                    <div>
                      <span className="text-[#e65c58]">import</span> &#123; createEngine &#125;{" "}
                      <span className="text-[#e65c58]">from</span>{" "}
                      <span className="text-emerald-400">"@mizaan/core"</span>;
                    </div>
                    <div className="pt-1">
                      <span className="text-indigo-400">export const</span> digitalProduct ={" "}
                      <span className="text-yellow-400">createEngine</span>(&#123;
                    </div>
                    <div className="pl-4">
                      architecture: <span className="text-emerald-400">"serverless-edge"</span>,
                    </div>
                    <div className="pl-4">
                      performance: <span className="text-emerald-400">"ultra-optimized"</span>,
                    </div>
                    <div className="pl-4">
                      security: <span className="text-emerald-400">"zero-trust-audited"</span>,
                    </div>
                    <div className="pl-4">
                      intelligence: <span className="text-emerald-400">"custom-ai-models"</span>,
                    </div>
                    <div>&#125;);</div>
                    <div className="text-emerald-400 pt-1">// Ready to deploy at scale.</div>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="p-3 bg-black/50 border-t border-white/10 rounded-b-xl flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono">Mizaan Technologies · Vaniyambadi HQ</span>
                <Link to="/services" className="text-[#e65c58] hover:underline flex items-center gap-1 font-medium">
                  <span>Explore Capabilities</span>
                  <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Numbers / Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">100+</div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Projects Delivered</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-[#e65c58] tracking-tight">50+</div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Global Clients</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">3+</div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Years Engineering Excellence</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl md:text-4xl font-bold font-display text-emerald-400 tracking-tight">99.8%</div>
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">On-Time & On-Budget Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
