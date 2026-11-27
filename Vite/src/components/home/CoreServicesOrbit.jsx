import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Globe,
  ShoppingBag,
  Smartphone,
  Store,
} from "lucide-react";
import logo from "../../assets/mizaan-trans.png";

const orbitalServices = [
  {
    id: "web",
    ring: "outer",
    angle: 0,
    icon: Globe,
    shortLabel: "Web & Apps",
    title: "Website & Web App Engineering",
    description:
      "High-speed marketing websites, customer portals, and custom web applications engineered for clarity, SEO, and reliability.",
    tags: ["Next.js & React", "Sub-Second Load"],
    link: "/services#web-dev",
  },
  {
    id: "erp",
    ring: "inner",
    angle: 60,
    icon: Cpu,
    shortLabel: "Custom ERP",
    title: "Custom Software & ERP Systems",
    description:
      "Tailored internal software, inventory engines, and ERP workflows built around the exact way your organization operates.",
    tags: ["Bespoke ERP", "Role-Based Access"],
    link: "/services#custom-software",
  },
  {
    id: "mobile",
    ring: "outer",
    angle: 120,
    icon: Smartphone,
    shortLabel: "Mobile Apps",
    title: "Mobile App Development",
    description:
      "Smooth iOS and Android applications with offline-first sync, real-time notifications, and intuitive mobile UX.",
    tags: ["iOS & Android", "60 FPS Native Feel"],
    link: "/services#mobile-dev",
  },
  {
    id: "ecommerce",
    ring: "inner",
    angle: 180,
    icon: ShoppingBag,
    shortLabel: "E-Commerce",
    title: "E-Commerce Platforms",
    description:
      "Conversion-focused digital storefronts with seamless checkout, catalog control, payment gateways, and order tracking.",
    tags: ["Payment Gateways", "Order Management"],
    link: "/services#ecommerce",
  },
  {
    id: "pos",
    ring: "outer",
    angle: 240,
    icon: Store,
    shortLabel: "CRM & POS",
    title: "CRM & Retail POS Solutions",
    description:
      "Integrated point-of-sale billing, multi-branch inventory, and lead management systems that streamline daily operations.",
    tags: ["Billing & Stock", "Lead Pipelines"],
    link: "/services#pos",
  },
  {
    id: "ai",
    ring: "inner",
    angle: 300,
    icon: Bot,
    shortLabel: "AI Automation",
    title: "Super Intelligent Automation",
    description:
      "Practical AI workflows, smart document processing, and connected APIs that eliminate repetitive manual tasks.",
    tags: ["AI Agents", "API Workflows"],
    link: "/services#ai-automation",
  },
];

function OrbitNode({ service, isActive, onSelect, radiusPercent, counterClass }) {
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
          className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-full"
        >
          <span
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors duration-300 ${isActive
                ? "bg-[#e65c58] border-[#e65c58] text-white"
                : "bg-[#0a0c11] border-white/20 text-zinc-300 group-hover:border-white/50"
              }`}
          >
            <Icon size={20} />
          </span>
          <span
            className={`text-[11px] whitespace-nowrap transition-colors ${isActive ? "text-white font-medium" : "text-zinc-400"
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
  const activeService = orbitalServices[activeIndex];
  const ActiveIcon = activeService.icon;

  const outerNodes = orbitalServices.filter((s) => s.ring === "outer");
  const innerNodes = orbitalServices.filter((s) => s.ring === "inner");

  const selectById = (id) =>
    setActiveIndex(orbitalServices.findIndex((s) => s.id === id));

  return (
    <section
      className="py-16 md:py-24 bg-[#0a0c11] border-b border-white/10"
      id="core-services"
    >
      <div className="shell">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-[-0.03em] leading-[1.08]">
            Our Core Services
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Select any service to see how we build it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Orbit */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Outer ring */}
              <div className="orbit-ring-cw absolute inset-[6%] rounded-full border border-white/10">
                {outerNodes.map((service) => (
                  <OrbitNode
                    key={service.id}
                    service={service}
                    radiusPercent={50}
                    isActive={activeService.id === service.id}
                    onSelect={() => selectById(service.id)}
                    counterClass="orbit-counter-cw"
                  />
                ))}
              </div>

              {/* Inner ring */}
              <div className="orbit-ring-ccw absolute inset-[24%] rounded-full border border-white/10">
                {innerNodes.map((service) => (
                  <OrbitNode
                    key={service.id}
                    service={service}
                    radiusPercent={50}
                    isActive={activeService.id === service.id}
                    onSelect={() => selectById(service.id)}
                    counterClass="orbit-counter-ccw"
                  />
                ))}
              </div>

              {/* Center emblem */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 bg-[#0a0c11] flex items-center justify-center p-3">
                <img
                  src={logo}
                  alt="Mizaan Technologies"
                  className="w-16 sm:w-20 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Detail + selector */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#e65c58] text-white flex items-center justify-center shrink-0">
                  <ActiveIcon size={22} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-base text-zinc-400 leading-relaxed max-w-xl">
                {activeService.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {activeService.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/15 text-xs text-zinc-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to={activeService.link}
                  className="py-3 px-6 rounded-full bg-white hover:bg-zinc-200 text-[#08090d] text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="py-3 px-6 rounded-full border border-white/20 hover:border-white/50 text-sm font-semibold text-white inline-flex items-center gap-2 transition-colors"
                >
                  <span>Discuss Project</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {orbitalServices.map((srv, idx) => {
                const Icon = srv.icon;
                const selected = idx === activeIndex;
                return (
                  <button
                    type="button"
                    key={srv.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-pressed={selected}
                    className={`px-3 py-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-colors cursor-pointer ${selected
                        ? "border-[#e65c58] text-white"
                        : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                      }`}
                  >
                    <Icon
                      size={16}
                      className={`shrink-0 ${selected ? "text-[#e65c58]" : ""}`}
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