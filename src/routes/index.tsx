import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  Cpu,
  Layers,
  Lock,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Zap,
  Globe,
} from "lucide-react";
import officeImage from "../assets/mizaan-office.jpg";
import webImage from "../assets/service-web.jpg";
import mobileImage from "../assets/service-mobile.jpg";
import softwareImage from "../assets/service-software.jpg";
import designImage from "../assets/service-design.jpg";
import aiImage from "../assets/service-ai.jpg";
import cloudImage from "../assets/service-cloud.jpg";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { RevampedHero } from "../components/home/RevampedHero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mizaan Technologies | Custom Software, Web, Mobile, ERP & AI Automation" },
      {
        name: "description",
        content:
          "Mizaan Technologies builds custom software, high-performance websites, mobile apps, ERP & CRM systems, POS platforms, e-commerce stores, and intelligent AI automation.",
      },
      { property: "og:title", content: "Mizaan Technologies | Custom Software, Web, Mobile, ERP & AI Automation" },
      {
        property: "og:description",
        content:
          "We solve business problems through website development, custom software, mobile apps, ERP & POS systems, and super intelligent automation.",
      },
      { property: "og:url", content: "https://mizaantech.co.in/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mizaantech.co.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mizaan Technologies | Custom Software, Web, Mobile, ERP & AI Automation" },
      {
        name: "twitter:description",
        content:
          "We solve business problems through website development, custom software, mobile apps, ERP & POS systems, and super intelligent automation.",
      },
      { name: "twitter:image", content: "https://mizaantech.co.in/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/" }],
  }),
});

const serviceCardTints = [
  "from-[#090e17] via-[#0e1926]/85 to-transparent",
  "from-[#091110] via-[#10201c]/85 to-transparent",
  "from-[#13090b] via-[#241014]/85 to-transparent",
  "from-[#0e0916] via-[#1b122b]/85 to-transparent",
  "from-[#130c0a] via-[#241612]/85 to-transparent",
  "from-[#090e16] via-[#101c2d]/85 to-transparent",
];

const featuredServices = [
  {
    image: webImage,
    number: "01",
    label: "Web Engineering",
    title: "Web Platforms & SaaS",
    body: "Fast, accessible web applications shaped around your business, engineered to perform under heavy production loads.",
    link: "/services#web-dev",
    tags: ["Next.js", "React 19", "TypeScript", "TailwindCSS"],
  },
  {
    image: mobileImage,
    number: "02",
    label: "Mobile Apps",
    title: "Cross-Platform Mobile",
    body: "Fluid iOS and Android experiences with offline-first caching, real-time push alerts, and 60 FPS animations.",
    link: "/services#mobile-dev",
    tags: ["Flutter", "React Native", "Firebase", "WebSockets"],
  },
  {
    image: softwareImage,
    number: "03",
    label: "Enterprise",
    title: "Custom Software & ERP",
    body: "Purpose-built operational platforms and custom ERPs that streamline workflows and eliminate manual bottlenecks.",
    link: "/services#custom-software",
    tags: ["Node.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    image: aiImage,
    number: "04",
    label: "Intelligence",
    title: "AI & Workflow Automation",
    body: "Autonomous LLM agents, document parsing pipelines, and predictive algorithms that eliminate repetitive toil.",
    link: "/services#ai-automation",
    tags: ["LLM Agents", "FastAPI", "pgvector", "LangChain"],
  },
  {
    image: designImage,
    number: "05",
    label: "Experience",
    title: "UI/UX & Design Systems",
    body: "Clear, distinctive interfaces grounded in real user needs—not transient trends or generic templates.",
    link: "/services#ui-ux",
    tags: ["Design Systems", "Figma", "User Research", "Tokens"],
  },
  {
    image: cloudImage,
    number: "06",
    label: "Infrastructure",
    title: "Cloud & DevOps",
    body: "Zero-downtime automated releases, multi-region failover, and strict zero-trust enterprise security.",
    link: "/services#cloud-devops",
    tags: ["AWS", "Cloudflare", "Kubernetes", "CI/CD"],
  },
];

const solutions = [
  {
    number: "01",
    title: "SaaS Platforms",
    description: "Multi-tenant subscription architectures engineered for high retention and seamless scaling.",
  },
  {
    number: "02",
    title: "Business Automation",
    description: "Connected API workflows and AI agents that eliminate manual data entry and save hundreds of hours.",
  },
  {
    number: "03",
    title: "High-Volume E-Commerce",
    description: "Sub-50ms headless shopping experiences engineered to convert high-intent traffic.",
  },
  {
    number: "04",
    title: "Enterprise Core Systems",
    description: "Mission-critical internal portals and ERPs with role-based security and immutable audit trails.",
  },
];

const flagshipProjects = [
  {
    title: "AuraFlow Financial Billing SaaS",
    category: "Fintech Platform",
    metric: "+310% MRR Lift",
    description: "Architected a multi-tenant invoicing and payment engine handling over 1.2M invoices per quarter with 99.99% uptime.",
    image: webImage,
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Stripe API"],
  },
  {
    title: "SwiftQ Fleet Telemetry & Dispatch",
    category: "Mobile Logistics",
    metric: "-42% Dispatch Latency",
    description: "Engineered offline-first Flutter application with real-time geofenced routing over WebSockets for 25,000+ daily deliveries.",
    image: mobileImage,
    tags: ["Flutter", "WebSockets", "Mapbox", "SQLite"],
  },
  {
    title: "Veritas Autonomous Contract AI",
    category: "AI & Legaltech",
    metric: "10x Review Velocity",
    description: "Custom RAG extraction engine that analyzes 80+ page commercial leases in seconds, highlighting high-risk clauses automatically.",
    image: aiImage,
    tags: ["Python", "Claude 3.5 Sonnet", "pgvector", "FastAPI"],
  },
];

const techStackBadges = [
  "TypeScript",
  "React 19",
  "Next.js 15",
  "TailwindCSS",
  "Python",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Cloudflare",
  "Flutter",
  "Redis",
  "FastAPI",
  "GraphQL",
];

const mizaanPillars = [
  {
    icon: Cpu,
    badge: "Engineering Studio",
    title: "Built Around Business Outcomes",
    description:
      "We are an independent software and digital product studio focused on solving real operational bottlenecks—never generic templates.",
  },
  {
    icon: Layers,
    badge: "Full-Stack Delivery",
    title: "Web, Mobile, ERP & AI Under One Roof",
    description:
      "From your first high-converting website to custom ERPs and intelligent automation pipelines, one cohesive team handles strategy to deployment.",
  },
  {
    icon: Rocket,
    badge: "Long-Term Partner",
    title: "Designed to Scale With You",
    description:
      "Clean, maintainable architecture backed by direct senior engineers so your systems stay fast, secure, and adaptable as your business grows.",
  },
];

const coreServicesList = [
  {
    icon: Globe,
    title: "Website & Web App Engineering",
    description:
      "High-speed marketing websites, customer portals, and custom web applications engineered for clarity, SEO, and reliability.",
    tags: ["Next.js & React", "Sub-Second Load"],
  },
  {
    icon: Cpu,
    title: "Custom Software & ERP Systems",
    description:
      "Tailored internal software, inventory engines, and ERP workflows built around the exact way your organization operates.",
    tags: ["Bespoke ERP", "Role-Based Access"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Smooth iOS and Android applications with offline-first sync, real-time notifications, and intuitive mobile UX.",
    tags: ["iOS & Android", "60 FPS Native Feel"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Platforms",
    description:
      "Conversion-focused digital storefronts with seamless checkout, catalog control, payment gateways, and order tracking.",
    tags: ["Payment Gateways", "Order Management"],
  },
  {
    icon: Store,
    title: "CRM & Retail POS Solutions",
    description:
      "Integrated point-of-sale billing, multi-branch inventory, and lead management systems that streamline daily operations.",
    tags: ["Billing & Stock", "Lead Pipelines"],
  },
  {
    icon: Bot,
    title: "Super Intelligent Automation",
    description:
      "Practical AI workflows, smart document processing, and connected APIs that eliminate repetitive manual tasks.",
    tags: ["AI Agents", "API Workflows"],
  },
];

const provenProcess = [
  {
    step: "01",
    icon: Compass,
    title: "Discovery & Strategy",
    description:
      "We map your operational challenges, goals, and user workflows to define a clear technical roadmap before writing code.",
    deliverable: "Clear Scope & Blueprint",
  },
  {
    step: "02",
    icon: Layers,
    title: "Architecture & UI/UX",
    description:
      "We craft intuitive interfaces and resilient database structures so you can review and validate the experience early.",
    deliverable: "Interactive Prototype",
  },
  {
    step: "03",
    icon: Code2,
    title: "Agile Engineering",
    description:
      "Focused development sprints with live staging previews and transparent milestone updates every step of the way.",
    deliverable: "Verified Staging Builds",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Thorough testing, smooth production rollout, team onboarding, and dependable ongoing technical support.",
    deliverable: "Production & SLA Care",
  },
];

const whyChooseMizaan = [
  {
    icon: Briefcase,
    title: "Business-Focused Solutions",
    description:
      "Every feature is tied to measurable business efficiency, revenue growth, or customer experience—not unnecessary complexity.",
  },
  {
    icon: Clock,
    title: "Transparent Project Delivery",
    description:
      "Clear milestones, regular staging demos, and honest timelines with zero hidden surprises or agency runaround.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Technical Support",
    description:
      "Dedicated post-launch maintenance, monitoring, and fast engineering support whenever your team needs assistance.",
  },
  {
    icon: Users,
    title: "Direct Senior Engineers",
    description:
      "Work directly with the architects and developers building your product—no layers of non-technical middlemen.",
  },
  {
    icon: Lock,
    title: "100% Client IP Ownership",
    description:
      "You retain complete ownership of your source code, databases, cloud infrastructure, and digital assets.",
  },
  {
    icon: Zap,
    title: "Built for Real-World Speed",
    description:
      "Clean, modern codebases engineered for fast load times, security, and effortless future expansion.",
  },
];

const primaryUseCases = [
  {
    category: "Retail & Wholesale",
    title: "Multi-Branch POS & Inventory Control",
    description:
      "Unify billing, GST invoicing, barcode workflows, and live stock tracking across supermarkets, apparel, electronics, and wholesale outlets.",
    highlights: ["Fast Checkout", "Live Stock Sync"],
  },
  {
    category: "Enterprise Operations",
    title: "Custom ERP & Internal Portals",
    description:
      "Replace disconnected spreadsheets with centralized dashboards for procurement, approvals, payroll, and role-based reporting.",
    highlights: ["Zero Manual Toil", "Audit Ready"],
  },
  {
    category: "Commerce & Brands",
    title: "High-Conversion Online Stores",
    description:
      "Launch fast, mobile-first storefronts with integrated payments, automated order updates, and tailored catalog experiences.",
    highlights: ["Mobile Optimized", "Integrated Payments"],
  },
  {
    category: "Smart Automation",
    title: "AI & Connected Workflow Pipelines",
    description:
      "Automate document parsing, customer support routing, and cross-app data syncing to save hours of daily manual effort.",
    highlights: ["AI Assistants", "API Sync"],
  },
  {
    category: "Growth & Sales",
    title: "Custom CRM & Lead Management",
    description:
      "Track inquiries, follow-ups, quotations, and customer history in a clean workspace designed for your sales process.",
    highlights: ["Pipeline Clarity", "Automated Alerts"],
  },
  {
    category: "Digital Presence & Events",
    title: "Interactive Platforms & NFC Networking",
    description:
      "Stand out with bespoke web experiences, digital invitation platforms, and smart NFC + QR business identity systems.",
    highlights: ["Tap & Share", "Custom Crafted"],
  },
];

function Index() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Revamped Hero Section */}
        <RevampedHero />

        {/* Services Showcase Section */}
        <section className="py-24 bg-[#08090d] border-b border-white/10" id="services">
          <div className="shell">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <div className="glass-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border-[#c73834]/30 mb-3">
                  <Layers size={13} />
                  <span>Our Capabilities</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
                  Ideas, Engineered with Purpose.
                </h2>
              </div>
              <p className="text-zinc-400 max-w-md text-base">
                From the first architectural sketch to a battle-tested launch, we bring strategy, UI/UX design, and full-stack engineering into one disciplined process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
              {featuredServices.map((service, idx) => {
                const tint = serviceCardTints[idx % serviceCardTints.length];
                return (
                  <div
                    key={service.title}
                    className="group relative min-h-[450px] sm:min-h-[470px] rounded-[32px] overflow-hidden border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_32px_72px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.24)] flex flex-col justify-end"
                  >
                    {/* Full-bleed Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Progressive Frosted Blur Layer */}
                    <div className="service-card-blur absolute inset-0 pointer-events-none" />

                    {/* Tinted Atmospheric Scrim */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${tint} pointer-events-none`} />

                    {/* Card Content */}
                    <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-4">
                      {/* Subtle 3-dot Indicator */}
                      <div className="flex items-center justify-center gap-1.5 pb-1" aria-hidden="true">
                        {[0, 1, 2].map((dot) => (
                          <span
                            key={dot}
                            className={`h-1 rounded-full transition-all ${
                              dot === idx % 3 ? "w-4 bg-white" : "w-1 bg-white/40"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Title + Dark Glass Pill */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl sm:text-[1.35rem] font-bold font-display text-white tracking-tight leading-snug">
                          {service.title}
                        </h3>
                        <span className="shrink-0 px-2.5 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-[11px] font-mono font-medium text-zinc-200">
                          {service.label}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[13px] text-zinc-200/80 leading-relaxed line-clamp-3 font-normal">
                        {service.body}
                      </p>

                      {/* Frosted Pill Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/[0.11] border border-white/15 backdrop-blur-md text-[11px] font-medium text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Crisp White Pill CTA */}
                      <Link
                        to="/services"
                        className="mt-1 w-full py-3.5 px-5 rounded-full bg-white hover:bg-zinc-100 text-[#08090d] text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_10px_28px_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:scale-[1.01]"
                      >
                        <span>Explore Service</span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="glass-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              >
                <span>View Full Services & Deliverables Catalog</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Flagship Case Studies Showcase */}
        <section className="py-24 bg-[#0a0c11] border-b border-white/10" id="projects">
          <div className="shell">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <div className="glass-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border-[#c73834]/30 mb-3">
                  <Sparkles size={13} />
                  <span>Featured Case Studies</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
                  Engineered for High-Stakes Impact.
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#e65c58] hover:text-white transition-colors"
              >
                <span>Browse All Case Studies</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* 1 + 2 Bento Glass Products Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
              {/* Featured Lead Product Card (Full-Width Horizontal Glass) */}
              {flagshipProjects[0] && (
                <Link
                  to="/projects"
                  className="lg:col-span-12 group relative min-h-[380px] lg:min-h-[360px] rounded-[32px] overflow-hidden border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_32px_72px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.24)] flex items-end lg:items-center"
                >
                  <img
                    src={flagshipProjects[0].image}
                    alt={flagshipProjects[0].title}
                    className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="product-card-blur-x absolute inset-0 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#090d16] via-[#0d1624]/88 to-transparent pointer-events-none" />

                  <div className="relative z-10 w-full p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="max-w-xl space-y-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-[11px] font-mono font-medium text-zinc-200">
                          01 · {flagshipProjects[0].category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-300">
                          {flagshipProjects[0].metric}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                        {flagshipProjects[0].title}
                      </h3>

                      <p className="text-sm sm:text-base text-zinc-200/80 leading-relaxed">
                        {flagshipProjects[0].description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {flagshipProjects[0].tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/[0.1] border border-white/15 backdrop-blur-md text-[11px] font-medium text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-3 self-start lg:self-end">
                      <span className="glass-btn px-5 py-3 rounded-full text-xs font-semibold text-white">
                        Read Full Case Study
                      </span>
                      <span className="w-11 h-11 rounded-full bg-white text-[#08090d] flex items-center justify-center shadow-[0_10px_28px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Secondary Dual Glass Showcase Cards */}
              {flagshipProjects.slice(1).map((project, idx) => {
                const cardGradients = [
                  "from-[#0a1114] via-[#0e191e]/80 to-transparent",
                  "from-[#120a12] via-[#1c1022]/80 to-transparent",
                ];
                return (
                  <Link
                    to="/projects"
                    key={project.title}
                    className="lg:col-span-6 group relative rounded-[32px] overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_32px_72px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.24)] p-4 sm:p-5 flex flex-col justify-between gap-5"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${cardGradients[idx % cardGradients.length]} opacity-70 pointer-events-none`}
                    />

                    {/* Inset Glass Media Frame with Floating Telemetry Bar */}
                    <div className="relative z-10 h-56 sm:h-64 rounded-[24px] overflow-hidden border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35" />

                      {/* Top Floating Pills */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-black/50 border border-white/15 backdrop-blur-md text-[11px] font-mono font-medium text-zinc-200">
                          0{idx + 2} · {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/35 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-300">
                          {project.metric}
                        </span>
                      </div>

                      {/* Bottom Stack Pills Inside Media */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-white/[0.12] border border-white/15 backdrop-blur-md text-[10px] font-medium text-zinc-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Frosted Bottom Copy & Circular Action Dock */}
                    <div className="relative z-10 px-2 pb-1 flex items-end justify-between gap-4">
                      <div className="space-y-1.5">
                        <h3 className="text-xl sm:text-[1.35rem] font-bold font-display text-white tracking-tight group-hover:text-[#f17b75] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[13px] text-zinc-300/80 leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <span className="shrink-0 w-11 h-11 rounded-full bg-white text-[#08090d] flex items-center justify-center shadow-[0_8px_24px_rgba(255,255,255,0.16)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* What is Mizaan Technologies? */}
        <section className="py-24 bg-[#08090d] border-b border-white/10 relative overflow-hidden" id="what-is-mizaan">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-[#c73834]/12 rounded-full blur-[140px] pointer-events-none" />
          <div className="shell relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
              <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200">
                <span className="w-2 h-2 rounded-full bg-[#e65c58] shadow-[0_0_10px_rgba(230,92,88,0.85)]" />
                <span>About the Studio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-[-0.03em] leading-[1.08]">
                What is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#e65c58]">
                  Mizaan Technologies?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300/85 leading-relaxed">
                Mizaan Technologies is a modern software engineering and digital solutions studio. We partner with ambitious businesses to replace operational friction with reliable websites, custom software, mobile apps, ERP systems, and intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
              {mizaanPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="glass-card rounded-[32px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-500 hover:-translate-y-1.5"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center backdrop-blur-md">
                          <Icon size={22} />
                        </div>
                        <span className="glass-badge px-3 py-1 rounded-full text-[11px] font-mono text-zinc-300">
                          0{idx + 1} · {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-zinc-300/80 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/about"
                className="glass-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              >
                <span>Discover Our Story & Values</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Our Core Services */}
        <section className="py-24 bg-[#0a0c11] border-b border-white/10 relative overflow-hidden" id="core-services">
          <div className="absolute bottom-0 right-1/4 w-[480px] h-[260px] bg-indigo-950/25 rounded-full blur-[130px] pointer-events-none" />
          <div className="shell relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
              <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200">
                <Sparkles size={13} className="text-[#e65c58]" />
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-[-0.03em] leading-[1.08]">
                Our Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#e65c58]">
                  Services
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300/85 leading-relaxed">
                Practical, scalable engineering tailored to how your business operates today—and where you want it to grow tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
              {coreServicesList.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="glass-card rounded-[32px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-500 hover:-translate-y-1.5 group"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/15 text-[#e65c58] flex items-center justify-center backdrop-blur-md group-hover:bg-[#c73834]/20 group-hover:border-[#c73834]/40 transition-colors">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold font-display text-white tracking-tight group-hover:text-[#f17b75] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-300/80 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="glass-badge px-3 py-1 rounded-full text-[11px] font-medium text-zinc-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/services"
                      className="w-full py-3 px-5 rounded-full bg-white hover:bg-zinc-100 text-[#08090d] text-xs font-semibold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:scale-[1.01]"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Work: Our Proven Process */}
        <section className="py-24 bg-[#08090d] border-b border-white/10 relative overflow-hidden" id="process">
          <div className="absolute top-1/2 left-0 w-[420px] h-[260px] bg-[#c73834]/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="shell relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
              <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                <span>Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-[-0.03em] leading-[1.08]">
                How We Work:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#e65c58]">
                  Our Proven Process
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300/85 leading-relaxed">
                A disciplined four-stage delivery framework built for clarity, speed, and dependable production launches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
              {provenProcess.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.step}
                    className="glass-card rounded-[32px] p-7 flex flex-col justify-between gap-6 transition-all duration-500 hover:-translate-y-1.5"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="glass-badge px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-[#e65c58]">
                          STEP {phase.step}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 text-zinc-200 flex items-center justify-center">
                          <Icon size={18} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold font-display text-white tracking-tight">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-zinc-300/80 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>{phase.deliverable}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Mizaan for Your Next Project */}
        <section className="py-24 bg-[#0a0c11] border-b border-white/10 relative overflow-hidden" id="why-mizaan">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[280px] bg-[#c73834]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="shell relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
              <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200">
                <ShieldCheck size={13} className="text-[#e65c58]" />
                <span>The Mizaan Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-[-0.03em] leading-[1.08]">
                Why Choose Mizaan for Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#e65c58]">
                  Next Project
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300/85 leading-relaxed">
                We combine engineering rigor, transparent communication, and long-term accountability on every engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
              {whyChooseMizaan.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="glass-card rounded-[32px] p-7 sm:p-8 space-y-4 transition-all duration-500 hover:-translate-y-1.5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center backdrop-blur-md">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-zinc-300/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Primary Use Cases */}
        <section className="py-24 bg-[#08090d] border-b border-white/10 relative overflow-hidden" id="use-cases">
          <div className="shell relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
              <div className="glass-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-zinc-200">
                <Zap size={13} className="text-[#e65c58]" />
                <span>Built for Real Workflows</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-[-0.03em] leading-[1.08]">
                Primary{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#e65c58]">
                  Use Cases
                </span>
              </h2>
              <p className="text-base sm:text-lg text-zinc-300/85 leading-relaxed">
                From retail counters to enterprise operations and automated workflows—explore where our technology creates immediate leverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
              {primaryUseCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="glass-card rounded-[32px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-500 hover:-translate-y-1.5 group"
                >
                  <div className="space-y-4">
                    <span className="glass-badge inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider text-[#e65c58]">
                      {useCase.category}
                    </span>
                    <h3 className="text-xl font-bold font-display text-white tracking-tight group-hover:text-[#f17b75] transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-zinc-300/80 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {useCase.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="glass-badge px-3 py-1 rounded-full text-[11px] font-medium text-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="glass-btn w-full py-3 px-5 rounded-full text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Discuss This Use Case</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Solve (Solutions Section) */}
        <section className="py-24 bg-[#08090d] border-b border-white/10" id="solutions">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 sticky top-28 space-y-4">
                <div className="glass-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border-[#c73834]/30">
                  <span>Targeted Outcomes</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                  Technology That Moves Your Business Forward.
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed">
                  We don't build software for the sake of writing code. We solve fundamental operational, conversion, and architectural bottlenecks that unlock scalable commercial growth.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="glass-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white transition-all"
                  >
                    <span>Discuss Your Specific Challenge</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {solutions.map((sol) => (
                  <div
                    key={sol.title}
                    className="glass-card p-8 rounded-3xl hover:border-[#c73834]/40 transition-all flex items-start gap-6"
                  >
                    <span className="text-xl font-mono font-bold text-[#e65c58] shrink-0 mt-0.5">
                      {sol.number}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold font-display text-white">{sol.title}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{sol.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Studio Spotlight */}
        <section className="py-24 bg-[#0a0c11] border-b border-white/10" id="about">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="glass-card lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={officeImage}
                  alt="Mizaan Technologies office in Vaniyambadi"
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="glass absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/45 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">Vaniyambadi Engineering HQ</div>
                    <div className="text-zinc-400">Tamil Nadu, India</div>
                  </div>
                  <Link
                    to="/about"
                    className="text-[#e65c58] hover:underline flex items-center gap-1 font-mono"
                  >
                    <span>Our Story</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="glass-badge inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border-[#c73834]/30">
                  <span>About Mizaan</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                  A Compact Team with a Serious Standard.
                </h2>
                <p className="text-zinc-300 text-base leading-relaxed">
                  We help founders and established companies transform ambitious ideas into practical, scalable digital products. Every engagement is collaborative, transparent, and measured by the tangible value it generates.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold font-display text-white">100+</div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Delivered Systems</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-display text-[#e65c58]">50+</div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Global Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-display text-emerald-400">3+</div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Years Excellence</div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#e65c58] transition-colors"
                  >
                    <span>Read about our culture, principles, and team</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Contact CTA */}
        <section className="py-24 bg-[#08090d] relative overflow-hidden" id="contact">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c73834]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="shell relative z-10">
            <div className="glass-section p-8 md:p-16 rounded-3xl text-center max-w-4xl mx-auto space-y-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                Initiate Dialogue
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white tracking-tight leading-[1.05]">
                Have something in mind? Let’s make it{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e65c58] to-[#c73834]">
                  happen.
                </span>
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Share your technical challenge, product idea, or even rough notes. Our lead engineers will help you chart the clearest and most cost-effective path forward.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="glass-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105"
                >
                  <span>Launch Project Planner</span>
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="mailto:project@mizaantech.co.in"
                  className="glass-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-zinc-200 hover:text-white transition-all"
                >
                  <span>project@mizaantech.co.in</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
