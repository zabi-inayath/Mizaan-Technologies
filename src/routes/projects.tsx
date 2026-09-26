import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHeader } from "../components/layout/PageHeader";

import webImage from "../assets/service-web.jpg";
import mobileImage from "../assets/service-mobile.jpg";
import softwareImage from "../assets/service-software.jpg";
import designImage from "../assets/service-design.jpg";
import aiImage from "../assets/service-ai.jpg";
import cloudImage from "../assets/service-cloud.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Portfolio & Case Studies | Mizaan Technologies" },
      {
        name: "description",
        content:
          "Browse live demos and deployed products built by Mizaan Technologies: financial SaaS, logistics mobile apps, AI automation, and enterprise systems.",
      },
      { property: "og:title", content: "Portfolio & Case Studies | Mizaan Technologies" },
      {
        property: "og:description",
        content:
          "Browse live demos and deployed products built by Mizaan Technologies: financial SaaS, logistics mobile apps, AI automation, and enterprise systems.",
      },
      { property: "og:url", content: "https://mizaantech.co.in/projects" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mizaantech.co.in/assets/service-web.jpg" },
      { name: "twitter:title", content: "Portfolio & Case Studies | Mizaan Technologies" },
      {
        name: "twitter:description",
        content:
          "Browse live demos and deployed products built by Mizaan Technologies: financial SaaS, logistics mobile apps, AI automation, and enterprise systems.",
      },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/projects" }],
  }),
});

interface CaseStudy {
  id: string;
  category: "all" | "web" | "mobile" | "ai" | "enterprise";
  categoryLabel: string;
  title: string;
  client: string;
  image: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "auraflow",
    category: "web",
    categoryLabel: "SaaS & Web Engineering",
    title: "AuraFlow: Multi-Tenant Financial Billing Platform",
    client: "Global Fintech Syndicate",
    image: webImage,
    challenge:
      "Legacy accounting software caused frequent timeouts during month-end invoicing, creating friction for over 40,000 businesses.",
    solution:
      "Engineered an edge-rendered Next.js platform backed by a distributed PostgreSQL cluster and automated Stripe webhook reconciliation.",
    metrics: [
      { label: "MRR Growth", value: "+310%" },
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Active Invoices", value: "1.2M+" },
    ],
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Stripe API", "TailwindCSS"],
  },
  {
    id: "swiftq",
    category: "mobile",
    categoryLabel: "Mobile App Development",
    title: "SwiftQ: Real-Time Fleet & Logistics Dispatch",
    client: "National Logistics Operator",
    image: mobileImage,
    challenge:
      "Drivers experienced connection drops in rural transit corridors, leading to lost package telemetry and driver miscoordination.",
    solution:
      "Built an offline-first Flutter application with automated SQLite background sync and real-time geofenced routing over WebSockets.",
    metrics: [
      { label: "Route Latency", value: "-42%" },
      { label: "App Store Rating", value: "4.9 / 5" },
      { label: "Daily Shipments", value: "25,000+" },
    ],
    tags: ["Flutter", "WebSockets", "Mapbox", "SQLite", "Firebase Cloud Messaging"],
  },
  {
    id: "veritas-ai",
    category: "ai",
    categoryLabel: "AI & Workflow Automation",
    title: "Veritas AI: Autonomous Legal Document Intelligence",
    client: "Corporate Law Group",
    image: aiImage,
    challenge:
      "Attorneys were spending an average of 4.5 hours manually reviewing 80+ page commercial leases and vendor contracts.",
    solution:
      "Implemented a custom RAG extraction pipeline utilizing LangChain, pgvector, and Claude 3.5 Sonnet to highlight risk clauses in seconds.",
    metrics: [
      { label: "Review Speed", value: "10x Faster" },
      { label: "Clause Accuracy", value: "99.2%" },
      { label: "Hours Saved / Mo", value: "650+ hrs" },
    ],
    tags: ["Python", "FastAPI", "Claude 3.5 Sonnet", "pgvector", "Docker"],
  },
  {
    id: "nexuserp",
    category: "enterprise",
    categoryLabel: "Enterprise ERP",
    title: "NexusERP: Integrated Manufacturing Operations Hub",
    client: "Industrial Components Manufacturer",
    image: softwareImage,
    challenge:
      "Disjointed spreadsheets and legacy paper slips led to inventory mismatch and delayed customer dispatch schedules.",
    solution:
      "Architected a centralized web ERP with barcode scanner support, real-time BOM tracking, and automated procurement purchase orders.",
    metrics: [
      { label: "Inventory Error", value: "-88%" },
      { label: "Lead Time Saved", value: "3.5 Days" },
      { label: "Weekly Admin Hours", value: "-28 hrs" },
    ],
    tags: ["React 19", "Node.js", "Redis", "PostgreSQL", "Docker Compose"],
  },
  {
    id: "veloce",
    category: "web",
    categoryLabel: "E-Commerce Architecture",
    title: "Veloce: High-Performance DTC Luxury Marketplace",
    client: "International Lifestyle Retailer",
    image: designImage,
    challenge:
      "High bounce rates during seasonal product drops due to slow image rendering and sluggish checkout transitions.",
    solution:
      "Re-engineered the store with a headless e-commerce stack, Cloudflare edge caching, and a streamlined 1-click checkout flow.",
    metrics: [
      { label: "Average TTFB", value: "38ms" },
      { label: "Conversion Lift", value: "+240%" },
      { label: "Lighthouse Score", value: "100 / 100" },
    ],
    tags: ["Next.js", "GraphQL", "Cloudflare Workers", "Stripe Checkout", "Figma"],
  },
  {
    id: "healthsync",
    category: "mobile",
    categoryLabel: "Mobile & Telehealth",
    title: "HealthSync: Patient Care & Video Consultation Portal",
    client: "Specialty Healthcare Network",
    image: cloudImage,
    challenge:
      "Patients required an accessible, HIPAA-compliant interface for remote consultations with instant medical record synchronization.",
    solution:
      "Engineered an encrypted React Native application with end-to-end encrypted WebRTC video streaming and automated prescription dispatch.",
    metrics: [
      { label: "Consults Completed", value: "80,000+" },
      { label: "Stream Latency", value: "<150ms" },
      { label: "Patient Satisfaction", value: "98.7%" },
    ],
    tags: ["React Native", "WebRTC", "HIPAA Ready", "AWS Media Services", "TypeScript"],
  },
];

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "ai" | "enterprise">("all");

  const filteredProjects =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          kicker="Portfolio & Case Studies"
          title="Digital Products Engineered for"
          highlightedWord="Measurable Impact."
          description="Explore our track record of transforming challenging technical problems into scalable web applications, mobile platforms, and automated intelligence."
          breadcrumbCurrent="Projects"
        />

        {/* Filter Bar */}
        <section className="py-8 bg-[#0a0c11] border-b border-white/10 sticky top-[60px] md:top-[70px] z-30 backdrop-blur-md bg-[#0a0c11]/90">
          <div className="shell flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Projects" },
                { id: "web", label: "Web & SaaS" },
                { id: "mobile", label: "Mobile Apps" },
                { id: "ai", label: "AI & Automation" },
                { id: "enterprise", label: "Enterprise Systems" },
              ].map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    type="button"
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#c73834] text-white shadow-md shadow-[#c73834]/30 font-semibold"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-mono text-zinc-400">
              Showing <span className="text-white font-bold">{filteredProjects.length}</span> curated case studies
            </div>
          </div>
        </section>

        {/* Project Case Studies Grid */}
        <section className="py-20 bg-[#08090d] border-b border-white/10">
          <div className="shell space-y-16">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#c73834]/40 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Media Column */}
                  <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[280px] sm:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0c0e14]/90 border border-white/15 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                        Client: {project.client}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">Case Study 0{idx + 1}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                      {project.title}
                    </h2>

                    <div className="space-y-3 text-sm text-zinc-300">
                      <div>
                        <strong className="text-zinc-100">The Problem: </strong>
                        <span className="text-zinc-400">{project.challenge}</span>
                      </div>
                      <div>
                        <strong className="text-zinc-100">Engineered Solution: </strong>
                        <span className="text-zinc-400">{project.solution}</span>
                      </div>
                    </div>

                    {/* Impact Metric Chips */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-lg sm:text-2xl font-bold font-display text-white">
                            {m.value}
                          </div>
                          <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e65c58] hover:text-white transition-colors group"
                      >
                        <span>Discuss Building Similar System</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-[#0a0c11]">
          <div className="shell text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
              Your Next Digital Breakthrough
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
              Ready to create your own success story?
            </h2>
            <p className="text-zinc-300 text-base leading-relaxed">
              We collaborate with you from raw architectural vision to production launch and continuous scaling.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#c73834] to-[#a82522] hover:from-[#d9433f] hover:to-[#b82e2b] shadow-xl shadow-[#c73834]/30 transition-all hover:scale-105"
              >
                <span>Initiate Your Project</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
