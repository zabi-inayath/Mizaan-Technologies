import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Check,
  CircleDollarSign,
  Clock3,
  Code2,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";

const projectTypes = [
  {
    id: "web",
    name: "Web Platform & SaaS",
    baseTimeWeeks: 4,
    baseCostINR: 150000,
    description: "Modern responsive web application with Next.js, authentication, database & payment integration.",
    Icon: Globe2,
  },
  {
    id: "mobile",
    name: "Cross-Platform Mobile App",
    baseTimeWeeks: 6,
    baseCostINR: 220000,
    description: "iOS & Android app built with Flutter / React Native, offline caching, and push notifications.",
    Icon: Smartphone,
  },
  {
    id: "ai",
    name: "AI & Intelligent Automation",
    baseTimeWeeks: 5,
    baseCostINR: 180000,
    description: "Custom LLM integration, autonomous workflow agents, document vector search & automation pipeline.",
    Icon: Bot,
  },
  {
    id: "enterprise",
    name: "Custom ERP / Business Software",
    baseTimeWeeks: 8,
    baseCostINR: 350000,
    description: "Tailored enterprise operations engine, role-based workflows, auditing & legacy database migration.",
    Icon: Code2,
  },
];

const featureAddons = [
  { id: "auth", name: "Enterprise RBAC & Auth", weeks: 1, cost: 25000 },
  { id: "payments", name: "Global Payment Gateways (Stripe/Razorpay)", weeks: 1, cost: 30000 },
  { id: "ai_bot", name: "Embedded AI Co-pilot / Chat", weeks: 2, cost: 45000 },
  { id: "analytics", name: "Custom Analytics & Real-Time Dashboards", weeks: 1, cost: 35000 },
  { id: "devops", name: "Cloudflare/AWS CI/CD High-Availability Setup", weeks: 1, cost: 30000 },
];

const includedItems = [
  "100% Full IP & Source Code Ownership",
  "Automated CI/CD Pipeline & Production Setup",
  "30 Days Post-Launch Dedicated Warranty",
];

export function InteractiveEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedAddons, setSelectedAddons] = useState(["auth", "payments"]);

  const toggleAddon = (id) => {
    setSelectedAddons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const selectedFeatures = featureAddons.filter((addon) => selectedAddons.includes(addon.id));
  const totalWeeks =
    selectedType.baseTimeWeeks + selectedFeatures.reduce((total, addon) => total + addon.weeks, 0);
  const totalCostINR =
    selectedType.baseCostINR + selectedFeatures.reduce((total, addon) => total + addon.cost, 0);
  const upperCostINR = totalCostINR * 1.25;

  return (
    <section className="planner-section">
      <div className="planner-glow planner-glow-one" />
      <div className="planner-glow planner-glow-two" />
      <div className="shell planner-shell">
        <div className="planner-heading">
          <div className="planner-eyebrow">
            <span className="planner-eyebrow-icon"><Layers3 size={15} /></span>
            <span>Interactive Planner</span>
            <span className="planner-live"><span /> Live estimate</span>
          </div>
          <h2>Make the next move <span>with clarity.</span></h2>
          <p>
            Shape your project in a few clicks. Choose a foundation, add the capabilities you need,
            and get a starting timeline and investment range.
          </p>
        </div>

        <div className="planner-layout">
          <div className="planner-workspace glass-panel">
            <div className="planner-step-heading">
              <span className="planner-step-number">01</span>
              <div>
                <h3>Choose a foundation</h3>
                <p>What are we building together?</p>
              </div>
            </div>

            <div className="planner-type-grid">
              {projectTypes.map(({ Icon, ...type }) => {
                const isSelected = selectedType.id === type.id;
                return (
                  <button
                    type="button"
                    key={type.id}
                    onClick={() => setSelectedType({ ...type, Icon })}
                    aria-pressed={isSelected}
                    className={`planner-type-card${isSelected ? " is-selected" : ""}`}
                  >
                    <span className="planner-type-icon"><Icon size={19} strokeWidth={1.7} /></span>
                    <span className="planner-type-copy">
                      <span className="planner-type-name">{type.name}</span>
                      <span className="planner-type-description">{type.description}</span>
                    </span>
                    <span className="planner-radio" aria-hidden="true" />
                  </button>
                );
              })}
            </div>

            <div className="planner-addons">
              <div className="planner-step-heading planner-addon-heading">
                <span className="planner-step-number">02</span>
                <div>
                  <h3>Make it yours</h3>
                  <p>Add the capabilities your project needs.</p>
                </div>
              </div>
              <div className="planner-addon-list">
                {featureAddons.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      type="button"
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      aria-pressed={isSelected}
                      className={`planner-addon${isSelected ? " is-selected" : ""}`}
                    >
                      <span className="planner-check">{isSelected && <Check size={13} strokeWidth={2.5} />}</span>
                      <span className="planner-addon-name">{addon.name}</span>
                      <span className="planner-addon-time">+{addon.weeks} wk</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="planner-forecast glass-panel">
            <div className="planner-forecast-top">
              <span className="planner-forecast-icon"><Sparkles size={17} /></span>
              <div>
                <span className="planner-overline">Your project snapshot</span>
                <span className="planner-model-status"><span /> Estimate updates live</span>
              </div>
            </div>

            <div className="planner-selected">
              <span>SELECTED FOUNDATION</span>
              <strong>{selectedType.name}</strong>
              <span>{selectedFeatures.length} optional {selectedFeatures.length === 1 ? "capability" : "capabilities"} added</span>
            </div>

            <div className="planner-metrics">
              <div className="planner-metric">
                <span className="planner-metric-icon"><Clock3 size={16} /></span>
                <span className="planner-metric-label">Estimated delivery</span>
                <strong>{totalWeeks}–{totalWeeks + 2}<small> weeks</small></strong>
                <span className="planner-metric-note">Agile, two-week milestones</span>
              </div>
              <div className="planner-metric planner-investment">
                <span className="planner-metric-icon"><CircleDollarSign size={17} /></span>
                <span className="planner-metric-label">Starting investment range</span>
                <strong>₹{(totalCostINR / 100000).toFixed(1)}L–₹{(upperCostINR / 100000).toFixed(1)}L</strong>
                <span className="planner-metric-note">
                  Approx. ${(totalCostINR / 85).toFixed(0)}–${(upperCostINR / 85).toFixed(0)} USD
                </span>
              </div>
            </div>

            <div className="planner-included">
              <div className="planner-included-heading">
                <ShieldCheck size={16} />
                <strong>Built into every engagement</strong>
              </div>
              {includedItems.map((item) => (
                <div className="planner-included-item" key={item}>
                  <Check size={13} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="planner-cta">
              <span>Lock In This Scope & Schedule Call</span>
              <ArrowRight size={17} />
            </Link>
            <p className="planner-disclaimer">A thoughtful starting point. Final scope is confirmed together.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
