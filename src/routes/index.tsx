import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Globe,
  Layers,
  MapPin,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
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
import { InteractiveEstimator } from "../components/home/InteractiveEstimator";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mizaan Technologies | AI & Custom Software Company in Vaniyambadi" },
      {
        name: "description",
        content:
          "Mizaan Technologies is a premium technology solutions provider specializing in AI-driven SaaS platforms, custom software development, and scalable web applications.",
      },
      { property: "og:title", content: "Mizaan Technologies | AI & Custom Software Company in Vaniyambadi" },
      {
        property: "og:description",
        content:
          "Mizaan Technologies is a premium technology solutions provider specializing in AI-driven SaaS platforms, custom software development, and scalable web applications.",
      },
      { property: "og:url", content: "https://mizaantech.co.in/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mizaantech.co.in/assets/mizaan-hero.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mizaan Technologies | AI & Custom Software Company in Vaniyambadi" },
      {
        name: "twitter:description",
        content:
          "Mizaan Technologies is a premium technology solutions provider specializing in AI-driven SaaS platforms, custom software development, and scalable web applications.",
      },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/" }],
  }),
});

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

function Index() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Revamped Hero Section */}
        <RevampedHero />

        {/* Tech Stack Marquee Strip */}
        <section className="py-8 bg-[#0a0c11] border-b border-white/10 overflow-hidden">
          <div className="shell">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold shrink-0">
                Core Engineering Stack:
              </div>
              <div className="flex flex-wrap items-center gap-2.5 justify-center md:justify-end">
                {techStackBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-zinc-300 hover:border-[#c73834]/50 hover:text-white transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase Section */}
        <section className="py-24 bg-[#08090d] border-b border-white/10" id="services">
          <div className="shell">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30 mb-3">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 overflow-hidden hover:border-[#c73834]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090b0f] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0c0e14]/90 border border-white/15 text-xs font-mono text-zinc-300 backdrop-blur-md">
                        {service.number} / {service.label}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-[#e65c58] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                        {service.body}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/5 text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      to="/services"
                      className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-[#c73834] text-zinc-300 hover:text-white border border-white/10 hover:border-[#c73834] text-xs font-semibold transition-all group-hover:bg-[#c73834] group-hover:text-white"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all hover:scale-105"
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30 mb-3">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {flagshipProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-[#c73834]/40 transition-all duration-300 p-6 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold backdrop-blur-md">
                        {project.metric}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[#e65c58] uppercase font-bold">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold font-display text-white mt-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] border border-white/5 text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Scope & Cost Estimator */}
        <InteractiveEstimator />

        {/* What We Solve (Solutions Section) */}
        <section className="py-24 bg-[#08090d] border-b border-white/10" id="solutions">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 sticky top-28 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30">
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#c73834] hover:bg-[#d9433f] transition-all"
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
                    className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#c73834]/40 transition-all flex items-start gap-6"
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
              <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src={officeImage}
                  alt="Mizaan Technologies office in Vaniyambadi"
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30">
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
            <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-md text-center max-w-4xl mx-auto space-y-8">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#c73834] via-[#bd2e2a] to-[#991e1a] hover:from-[#d9433f] hover:to-[#b32623] shadow-xl shadow-[#c73834]/30 hover:shadow-2xl hover:shadow-[#c73834]/40 transition-all hover:scale-105"
                >
                  <span>Launch Project Planner</span>
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="mailto:project@mizaantech.co.in"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all"
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
