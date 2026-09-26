import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layers,
  Server,
  Smartphone,
  Sparkles,
  Zap,
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

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services & Capabilities | Mizaan Technologies" },
      {
        name: "description",
        content:
          "AI-driven SaaS platforms, bespoke enterprise software, mobile apps, UI/UX design systems, and cloud infrastructure for ambitious businesses.",
      },
      { property: "og:title", content: "Services & Capabilities | Mizaan Technologies" },
      {
        property: "og:description",
        content:
          "AI-driven SaaS platforms, bespoke enterprise software, mobile apps, UI/UX design systems, and cloud infrastructure for ambitious businesses.",
      },
      { property: "og:url", content: "https://mizaantech.co.in/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mizaantech.co.in/assets/service-web.jpg" },
      { name: "twitter:title", content: "Services & Capabilities | Mizaan Technologies" },
      {
        name: "twitter:description",
        content:
          "AI-driven SaaS platforms, bespoke enterprise software, mobile apps, UI/UX design systems, and cloud infrastructure for ambitious businesses.",
      },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/services" }],
  }),
});

interface ServiceDetail {
  id: string;
  number: string;
  icon: typeof Globe;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
  techStack: string[];
}

const detailedServices: ServiceDetail[] = [
  {
    id: "web-dev",
    number: "01",
    icon: Globe,
    title: "Web Development & SaaS Platforms",
    subtitle: "High-performance web apps shaped around your business objectives.",
    description:
      "We build blistering-fast, accessible, and responsive web platforms. From custom SaaS applications with multi-tenant architectures to high-conversion corporate web presences, our code adheres to modern web standards, SEO best practices, and sub-100ms response targets.",
    image: webImage,
    deliverables: [
      "Custom SaaS & Subscription Applications",
      "Headless E-Commerce & Merchant Gateways",
      "SSR, SSG & Edge-Rendered Platforms",
      "Interactive Dashboards & Analytics Portals",
      "Strict Core Web Vitals (100/100 Lighthouse)",
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"],
  },
  {
    id: "mobile-dev",
    number: "02",
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    subtitle: "Thoughtful iOS and Android experiences that feel fluid from the first tap.",
    description:
      "We design and build mobile apps that merge native feel with cross-platform velocity. Whether launching a consumer marketplace, logistics delivery app, or enterprise mobile companion, we ensure flawless offline storage, instant push alerts, and 60 FPS animations.",
    image: mobileImage,
    deliverables: [
      "iOS & Android Simultaneous Release",
      "Offline-First Caching & Background Sync",
      "Biometric Authentication & In-App Purchases",
      "Hardware Integrations (Camera, GPS, Bluetooth)",
      "App Store & Google Play Launch Management",
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "REST APIs"],
  },
  {
    id: "custom-software",
    number: "03",
    icon: Layers,
    title: "Custom Software & Enterprise ERP",
    subtitle: "Purpose-built operational platforms that eliminate manual bottlenecks.",
    description:
      "Off-the-shelf software often forces you to compromise your processes. We architect bespoke business systems, custom ERPs, internal tools, and CRM solutions tailored to your unique operational flows, giving your organization massive operational leverage.",
    image: softwareImage,
    deliverables: [
      "Bespoke Enterprise Resource Planning (ERP)",
      "Automated Inventory & Supply Chain Systems",
      "Custom Workflow & Role-Based Portals",
      "Legacy Database Migration & Integration",
      "Audit Trails & Regulatory Compliance",
    ],
    techStack: ["Node.js", "Python", "Go", "Docker", "PostgreSQL", "Redis"],
  },
  {
    id: "ui-ux",
    number: "04",
    icon: Sparkles,
    title: "UI/UX & Product Design Systems",
    subtitle: "Distinctive, human-centered interfaces grounded in real user utility.",
    description:
      "Great design isn't just decoration; it's how your software thinks, communicates, and converts. We build scalable design systems, conduct in-depth user journey mapping, and craft micro-animations that turn complex interactions into intuitive joy.",
    image: designImage,
    deliverables: [
      "User Journey Mapping & User Research",
      "Figma Design Systems & Token Architecture",
      "High-Fidelity Clickable Prototypes",
      "Responsive Multi-Device Layouts",
      "Design-to-Code Engineering Hand-off",
    ],
    techStack: ["Figma", "Design Tokens", "Prototyping", "Design Systems", "Accessibility (WCAG)"],
  },
  {
    id: "ai-automation",
    number: "05",
    icon: Cpu,
    title: "AI & Workflow Automation",
    subtitle: "Practical intelligence that cuts repetitive toil and accelerates decisions.",
    description:
      "Move beyond AI hype into tangible productivity. We build intelligent agent workflows, document parsing pipelines, custom vector search systems, and smart conversational agents that integrate directly into your existing databases and communication tools.",
    image: aiImage,
    deliverables: [
      "Autonomous Multi-Step AI Agents",
      "Intelligent Document Parsing & OCR",
      "Custom RAG & Vector Database Search",
      "Conversational AI for Customer Care",
      "Internal Knowledge Base Assistants",
    ],
    techStack: ["Python", "FastAPI", "OpenAI / Claude APIs", "LangChain", "Pinecone", "pgvector"],
  },
  {
    id: "cloud-devops",
    number: "06",
    icon: Server,
    title: "Cloud Infrastructure & DevOps",
    subtitle: "Zero-downtime releases, automated CI/CD, and rock-solid cloud security.",
    description:
      "Software is only as good as the infrastructure powering it. We architect cloud environments that auto-scale under sudden spikes, withstand regional outages, and protect your data with strict zero-trust security policies and automated pipelines.",
    image: cloudImage,
    deliverables: [
      "Multi-Region AWS & Cloudflare Deployments",
      "Automated CI/CD Deployment Pipelines",
      "Containerization & Kubernetes Orchestration",
      "Database High Availability & Auto-Failover",
      "24/7 Monitoring, Logging & Sentry Alerting",
    ],
    techStack: ["AWS", "Cloudflare Workers", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
];

const developmentPhases = [
  {
    step: "01",
    title: "Discovery & Blueprinting",
    description:
      "We interrogate requirements, dissect user journeys, and specify architecture schemas before a single line of code is written.",
  },
  {
    step: "02",
    title: "Interactive Prototyping",
    description:
      "Interactive Figma wireframes and visual design systems let you experience the user journey and give feedback early.",
  },
  {
    step: "03",
    title: "Agile Engineering Sprints",
    description:
      "2-week sprints with verifiable milestones. You get access to live staging environments to test features continuously.",
  },
  {
    step: "04",
    title: "Hardened Testing & Launch",
    description:
      "Rigorous unit testing, security vulnerability scans, load testing, and zero-downtime cloud deployment.",
  },
];

function ServicesPage() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          kicker="Capabilities & Solutions"
          title="Digital Engineering Built with"
          highlightedWord="Architectural Precision."
          description="We take full ownership of your product lifecycle — from technical discovery and high-fidelity UI/UX design to robust backend engineering and resilient cloud infrastructure."
          breadcrumbCurrent="Services"
        />

        {/* Detailed Service Cards */}
        <section className="py-24 bg-[#0a0c11] border-b border-white/10">
          <div className="shell space-y-24">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Media Column */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:col-start-7" : ""}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[380px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090b0f] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-[#0c0e14]/90 border border-white/15 text-xs font-mono text-zinc-300 backdrop-blur-md">
                        {service.number} / {service.title.split(" ")[0].toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Copy Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:col-start-1" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e65c58]">
                        Service {service.number}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold">
                        Key Deliverables:
                      </div>
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                          <CheckCircle2 size={16} className="text-[#e65c58] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    <div className="pt-2">
                      <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 font-semibold mb-2">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#c73834] hover:bg-[#d9433f] shadow-md shadow-[#c73834]/30 transition-all hover:scale-105"
                      >
                        <span>Inquire About {service.title.split("&")[0].trim()}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process Roadmap */}
        <section className="py-24 bg-[#08090d] border-b border-white/10">
          <div className="shell">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                How We Deliver
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mt-2">
                Our 4-Phase Delivery Framework
              </h2>
              <p className="text-zinc-400 mt-3 text-base">
                A predictable, battle-tested methodology designed to bring products to market quickly without sacrificing stability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentPhases.map((phase) => (
                <div
                  key={phase.step}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#c73834]/30 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-3xl font-bold font-display text-[#e65c58]">{phase.step}</span>
                    <h3 className="text-lg font-bold font-display text-white mt-3 mb-2">{phase.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{phase.description}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                    Phase {phase.step} · Quality Assured
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-[#0a0c11]">
          <div className="shell">
            <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                  Custom Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                  Need a tailored engineering team for your project?
                </h2>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  We adapt to your technical requirements, existing infrastructure, and delivery timelines. Book a 30-minute discovery session with our lead architects.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#c73834] to-[#a82522] hover:from-[#d9433f] hover:to-[#b82e2b] shadow-xl shadow-[#c73834]/30 transition-all hover:scale-105 shrink-0"
              >
                <span>Book Technical Discovery</span>
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
