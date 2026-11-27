import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Globe,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";

const orbitalServices = [
  {
    id: "web",
    ring: "outer",
    angle: 0,
    icon: Globe,
    shortLabel: "Web & Apps",
    accent: "text-sky-400",
    glow: "rgba(56, 189, 248, 0.35)",
    title: "Website & Web App Engineering",
    description:
      "High-speed marketing websites, customer portals, and custom web applications engineered for clarity, SEO, and reliability.",
    tags: ["Next.js & React", "Sub-Second Load"],
  },
  {
    id: "erp",
    ring: "inner",
    angle: 60,
    icon: Cpu,
    shortLabel: "Custom ERP",
    accent: "text-[#e65c58]",
    glow: "rgba(230, 92, 88, 0.38)",
    title: "Custom Software & ERP Systems",
    description:
      "Tailored internal software, inventory engines, and ERP workflows built around the exact way your organization operates.",
    tags: ["Bespoke ERP", "Role-Based Access"],
  },
  {
    id: "mobile",
    ring: "outer",
    angle: 120,
    icon: Smartphone,
    shortLabel: "Mobile Apps",
    accent: "text-emerald-400",
    glow: "rgba(52, 211, 153, 0.35)",
    title: "Mobile App Development",
    description:
      "Smooth iOS and Android applications with offline-first sync, real-time notifications, and intuitive mobile UX.",
    tags: ["iOS & Android", "60 FPS Native Feel"],
  },
  {
    id: "ecommerce",
    ring: "inner",
    angle: 180,
    icon: ShoppingBag,
    shortLabel: "E-Commerce",
    accent: "text-amber-400",
    glow: "rgba(251, 191, 36, 0.35)",
    title: "E-Commerce Platforms",
    description:
      "Conversion-focused digital storefronts with seamless checkout, catalog control, payment gateways, and order tracking.",
    tags: ["Payment Gateways", "Order Management"],
  },
  {
    id: "pos",
    ring: "outer",
    angle: 240,
    icon: Store,
    shortLabel: "CRM & POS",
    accent: "text-rose-400",
    glow: "rgba(251, 113, 133, 0.35)",
    title: "CRM & Retail POS Solutions",
    description:
      "Integrated point-of-sale billing, multi-branch inventory, and lead management systems that streamline daily operations.",
    tags: ["Billing & Stock", "Lead Pipelines"],
  },
  {
    id: "ai",
    ring: "inner",
    angle: 300,
    icon: Bot,
    shortLabel: "AI Automation",
    accent: "text-violet-400",
    glow: "rgba(167, 139, 250, 0.38)",
    title: "Super Intelligent Automation",
    description:
      "Practical AI workflows, smart document processing, and connected APIs that eliminate repetitive manual tasks.",
    tags: ["AI Agents", "API Workflows"],
  },
] as const;

type OrbitalService = (typeof orbitalServices)[number];

function OrbitNode({
  service,
  isActive,
  onSelect,
  radiusPercent,
  counterClass,
}: {
  service: OrbitalService;
  isActive: boolean;
  onSelect: () => void;
  radiusPercent: number;
  counterClass: string;
}) {
  const Icon = service.icon;
  const rad = (service.angle * Math.PI) / 180;
  const x = 50 + radiusPercent * Math.cos(rad);
  const y = 50 + radiusPercent * Math.sin(rad);

  return (
    <div
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
    >
      <div className={counterClass}>
        <button
          type="button"
          onClick={onSelect}
          onMouseEnter={onSelect}
          aria-label={service.title}
          aria-pressed={isActive}
          className={`group relative flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer transition-transform duration-300 ${
            isActive ? "scale-110" : "hover:scale-105"
          }`}
        >
          <span
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isActive ? "orb-3d-active" : "orb-3d"
            }`}
            style={{
              boxShadow: isActive
                ? `inset 0 2px 6px rgba(255,255,255,0.42), inset 0 -6px 14px rgba(0,0,0,0.5), 0 0 28px ${service.glow}, 0 16px 34px rgba(0,0,0,0.55)`
                : undefined,
            }}
          >
            <Icon
              size={22}
              className={`transition-transform duration-300 ${
                isActive ? "text-white scale-105" : service.accent
              }`}
            />
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-mono whitespace-nowrap backdrop-blur-md border transition-all ${
              isActive
                ? "bg-white text-[#08090d] border-white font-semibold shadow-md"
                : "bg-black/65 text-zinc-200 border-white/15"
            }`}
          >
            {service.shortLabel}
          </span>
        </button>
      </div>
    </div>
  );
}

export function CoreServicesOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = orbitalServices[activeIndex] ?? orbitalServices[0];
  const ActiveIcon = activeService.icon;

  const outerNodes = orbitalServices.filter((s) => s.ring === "outer");
  const innerNodes = orbitalServices.filter((s) => s.ring === "inner");

  return (
    <section
      className="py-16 md:py-24 bg-[#0a0c11] border-b border-white/10 relative overflow-hidden"
      id="core-services"
    >
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-[#c73834]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[480px] h-[300px] bg-indigo-950/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="shell relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-14 md:mb-16">
          <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200">
            <Sparkles size={13} className="text-[#e65c58]" />
            <span>3D Connected Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-[-0.03em] leading-[1.08]">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#e65c58]">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300/85 leading-relaxed">
            Every capability revolves around your business goals—select any orbiting discipline to inspect how we engineer it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="orbit-stage card-3d-surface relative rounded-[36px] p-5 sm:p-8 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

              <div className="relative w-full max-w-[410px] aspect-square flex items-center justify-center my-2">
                <div className="absolute w-44 h-44 rounded-full bg-[#c73834]/20 blur-[55px] pointer-events-none" />

                <div className="orbit-ring-cw absolute inset-[6%] rounded-full border border-white/15 shadow-[inset_0_0_24px_rgba(255,255,255,0.03)]">
                  <div
                    className="absolute -inset-px rounded-full opacity-55 pointer-events-none"
                    style={{
                      background:
                        "conic-gradient(from 0deg, rgba(230,92,88,0.65), transparent 28%, transparent 72%, rgba(255,255,255,0.28) 100%)",
                      WebkitMask:
                        "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 0.5px))",
                      mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 0.5px))",
                    }}
                  />
                  {outerNodes.map((service) => (
                    <OrbitNode
                      key={service.id}
                      service={service}
                      radiusPercent={50}
                      isActive={activeService.id === service.id}
                      onSelect={() =>
                        setActiveIndex(orbitalServices.findIndex((s) => s.id === service.id))
                      }
                      counterClass="orbit-counter-cw"
                    />
                  ))}
                </div>

                <div className="orbit-ring-ccw absolute inset-[24%] rounded-full border border-white/15 shadow-[inset_0_0_20px_rgba(255,255,255,0.03)]">
                  <div
                    className="absolute -inset-px rounded-full opacity-50 pointer-events-none"
                    style={{
                      background:
                        "conic-gradient(from 140deg, rgba(255,255,255,0.35), transparent 32%, transparent 78%, rgba(230,92,88,0.5) 100%)",
                      WebkitMask:
                        "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 0.5px))",
                      mask: "radial-gradient(farthest-side, transparent calc(100% - 1.5px), #000 calc(100% - 0.5px))",
                    }}
                  />
                  {innerNodes.map((service) => (
                    <OrbitNode
                      key={service.id}
                      service={service}
                      radiusPercent={50}
                      isActive={activeService.id === service.id}
                      onSelect={() =>
                        setActiveIndex(orbitalServices.findIndex((s) => s.id === service.id))
                      }
                      counterClass="orbit-counter-ccw"
                    />
                  ))}
                </div>

                <div className="core-3d-hub relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex flex-col items-center justify-center text-center">
                  <svg
                    viewBox="0 0 64 64"
                    className="w-10 h-10 sm:w-12 sm:h-12 text-[#e65c58] drop-shadow-[0_0_12px_rgba(230,92,88,0.6)]"
                    fill="none"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line
                        key={i}
                        x1="32"
                        y1="32"
                        x2="32"
                        y2={i % 2 === 0 ? "8" : "13"}
                        stroke="currentColor"
                        strokeWidth={i % 2 === 0 ? "3.2" : "2.4"}
                        strokeLinecap="round"
                        transform={`rotate(${i * 30} 32 32)`}
                      />
                    ))}
                    <circle cx="32" cy="32" r="5" fill="#ffffff" />
                  </svg>
                  <span className="mt-0.5 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-200 font-semibold">
                    Mizaan
                  </span>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-4 pt-2">
                <div className="flex items-center justify-center gap-2">
                  {orbitalServices.map((srv, idx) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Select ${srv.title}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeIndex
                          ? "w-7 bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                          : "w-2 bg-white/30 hover:bg-white/55"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div className="card-3d-surface relative rounded-[32px] p-7 sm:p-9 space-y-6 transition-all duration-300">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className="orb-3d w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{
                      boxShadow: `inset 0 2px 6px rgba(255,255,255,0.32), 0 0 26px ${activeService.glow}`,
                    }}
                  >
                    <ActiveIcon size={24} className={activeService.accent} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#e65c58] font-semibold">
                      Service 0{activeIndex + 1} / 0{orbitalServices.length}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight mt-0.5">
                      {activeService.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-200/85 leading-relaxed">
                {activeService.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeService.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-badge px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/services"
                  className="py-3.5 px-6 rounded-full bg-white hover:bg-zinc-100 text-[#08090d] text-sm font-semibold inline-flex items-center gap-2 shadow-[0_10px_28px_rgba(255,255,255,0.16)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="glass-btn py-3.5 px-6 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2"
                >
                  <span>Discuss Project</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {orbitalServices.map((srv, idx) => {
                const Icon = srv.icon;
                const selected = idx === activeIndex;
                return (
                  <button
                    type="button"
                    key={srv.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`p-3 rounded-2xl text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      selected
                        ? "glass bg-white/[0.12] border-white/35 text-white shadow-[0_10px_24px_rgba(0,0,0,0.3)]"
                        : "glass text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={selected ? srv.accent : "text-zinc-400 shrink-0"}
                    />
                    <span className="text-xs font-medium truncate">{srv.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
