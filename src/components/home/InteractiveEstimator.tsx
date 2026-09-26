import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calculator, ArrowRight, Check, Sparkles } from "lucide-react";

interface ProjectType {
  id: string;
  name: string;
  baseTimeWeeks: number;
  baseCostINR: number;
  description: string;
}

const projectTypes: ProjectType[] = [
  {
    id: "web",
    name: "Web Platform & SaaS",
    baseTimeWeeks: 4,
    baseCostINR: 150000,
    description: "Modern responsive web application with Next.js, authentication, database & payment integration.",
  },
  {
    id: "mobile",
    name: "Cross-Platform Mobile App",
    baseTimeWeeks: 6,
    baseCostINR: 220000,
    description: "iOS & Android app built with Flutter / React Native, offline caching, and push notifications.",
  },
  {
    id: "ai",
    name: "AI & Intelligent Automation",
    baseTimeWeeks: 5,
    baseCostINR: 180000,
    description: "Custom LLM integration, autonomous workflow agents, document vector search & automation pipeline.",
  },
  {
    id: "enterprise",
    name: "Custom ERP / Business Software",
    baseTimeWeeks: 8,
    baseCostINR: 350000,
    description: "Tailored enterprise operations engine, role-based workflows, auditing & legacy database migration.",
  },
];

const featureAddons = [
  { id: "auth", name: "Enterprise RBAC & Auth", weeks: 1, cost: 25000 },
  { id: "payments", name: "Global Payment Gateways (Stripe/Razorpay)", weeks: 1, cost: 30000 },
  { id: "ai_bot", name: "Embedded AI Co-pilot / Chat", weeks: 2, cost: 45000 },
  { id: "analytics", name: "Custom Analytics & Real-Time Dashboards", weeks: 1, cost: 35000 },
  { id: "devops", name: "Cloudflare/AWS CI/CD High-Availability Setup", weeks: 1, cost: 30000 },
];

export function InteractiveEstimator() {
  const [selectedType, setSelectedType] = useState<ProjectType>(projectTypes[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["auth", "payments"]);

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const totalWeeks =
    selectedType.baseTimeWeeks +
    selectedAddons.reduce((sum, id) => {
      const addon = featureAddons.find((a) => a.id === id);
      return sum + (addon ? addon.weeks : 0);
    }, 0);

  const totalCostINR =
    selectedType.baseCostINR +
    selectedAddons.reduce((sum, id) => {
      const addon = featureAddons.find((a) => a.id === id);
      return sum + (addon ? addon.cost : 0);
    }, 0);

  return (
    <section className="py-24 bg-[#0a0c11] text-white relative overflow-hidden border-t border-b border-white/10">
      <div className="shell relative z-10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30 mb-3">
            <Calculator size={13} />
            <span>Interactive Planner</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white">
            Estimate Your Project Scope & Timeline
          </h2>
          <p className="text-zinc-400 mt-3 text-base">
            Select your digital platform and desired architecture modules to get an instant engineering forecast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-3 font-semibold">
                1. Select Core Platform Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  return (
                    <button
                      type="button"
                      key={type.id}
                      onClick={() => setSelectedType(type)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "bg-[#c73834]/20 border-[#c73834] text-white shadow-lg shadow-[#c73834]/20"
                          : "bg-white/[0.03] border-white/10 text-zinc-300 hover:border-white/20"
                      }`}
                    >
                      <div className="font-semibold text-sm mb-1">{type.name}</div>
                      <div className="text-xs text-zinc-400 line-clamp-2">{type.description}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-zinc-400 mb-3 font-semibold">
                2. Architectural Enhancements & Add-ons
              </label>
              <div className="space-y-2">
                {featureAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      type="button"
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-left transition-all ${
                        isChecked
                          ? "bg-white/[0.08] border-white/30 text-white"
                          : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                            isChecked
                              ? "bg-[#c73834] border-[#c73834] text-white"
                              : "border-white/20 text-transparent"
                          }`}
                        >
                          <Check size={12} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-400">+{addon.weeks} wk</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
                  Engineering Forecast
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <Sparkles size={12} /> Verified Model
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs text-zinc-400 uppercase font-mono">Estimated Delivery</div>
                  <div className="text-3xl font-bold font-display text-white mt-1">
                    {totalWeeks} – {totalWeeks + 2} Weeks
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">Agile 2-week sprint milestones</div>
                </div>

                <div>
                  <div className="text-xs text-zinc-400 uppercase font-mono">Starting Investment Range</div>
                  <div className="text-3xl font-bold font-display text-[#e65c58] mt-1">
                    ₹{(totalCostINR / 100000).toFixed(1)}L – ₹{((totalCostINR * 1.25) / 100000).toFixed(1)}L
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    Approx. ${(totalCostINR / 85).toFixed(0)} – ${((totalCostINR * 1.25) / 85).toFixed(0)} USD
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-zinc-400 space-y-2">
                <div className="font-semibold text-zinc-200">Included with every project:</div>
                <div className="flex items-center gap-2">
                  <span className="text-[#e65c58]">✓</span>
                  <span>100% Full IP & Source Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#e65c58]">✓</span>
                  <span>Automated CI/CD Pipeline & Production Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#e65c58]">✓</span>
                  <span>30 Days Post-Launch Dedicated Warranty</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#c73834] to-[#a82522] hover:from-[#d9433f] hover:to-[#b82e2b] shadow-lg shadow-[#c73834]/30 transition-all hover:scale-[1.02] active:scale-100"
              >
                <span>Lock In This Scope & Schedule Call</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
