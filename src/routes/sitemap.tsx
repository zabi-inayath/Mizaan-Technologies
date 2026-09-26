import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, FileCode, Globe, Layers, MapPin, Shield } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHeader } from "../components/layout/PageHeader";

export const Route = createFileRoute("/sitemap")({
  component: SitemapPage,
  head: () => ({
    meta: [
      { title: "HTML Sitemap | Mizaan Technologies" },
      {
        name: "description",
        content:
          "Index of all pages, services, case studies, and legal documents on Mizaan Technologies' digital platform.",
      },
      { property: "og:title", content: "Sitemap — Mizaan Technologies" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/sitemap" }],
  }),
});

const sitemapGroups = [
  {
    title: "Primary Navigation",
    icon: Globe,
    links: [
      { title: "Homepage", path: "/", desc: "Overview of Mizaan Technologies, engineering capabilities, and featured work." },
      { title: "About Us", path: "/about", desc: "Studio story, engineering philosophy, 4 core pillars, and timeline." },
      { title: "Services & Capabilities", path: "/services", desc: "Full catalog of web, mobile, AI, and cloud engineering disciplines." },
      { title: "Projects & Portfolio", path: "/projects", desc: "Curated case studies with measurable business results and tech stacks." },
      { title: "Contact & Consultation", path: "/contact", desc: "Direct consultation inquiry brief, phone, WhatsApp, and studio office." },
    ],
  },
  {
    title: "Capabilities & Disciplines",
    icon: Layers,
    links: [
      { title: "Web Platforms & SaaS", path: "/services#web-dev", desc: "Next.js 15, React 19, TypeScript, and edge-rendered architectures." },
      { title: "Cross-Platform Mobile Apps", path: "/services#mobile-dev", desc: "Flutter and React Native for iOS and Android with offline-first sync." },
      { title: "Custom Software & ERP", path: "/services#custom-software", desc: "Enterprise operations engines, supply chain systems, and custom portals." },
      { title: "UI/UX & Product Design", path: "/services#ui-ux", desc: "Figma design systems, token architecture, and user research." },
      { title: "AI & Workflow Automation", path: "/services#ai-automation", desc: "Autonomous multi-step agents, document parsing, and custom RAG search." },
      { title: "Cloud & DevOps Infrastructure", path: "/services#cloud-devops", desc: "AWS, Cloudflare Workers, Docker, CI/CD, and zero-trust security." },
    ],
  },
  {
    title: "Legal & Compliance",
    icon: Shield,
    links: [
      { title: "Privacy Policy", path: "/privacy", desc: "Data protection standards, client IP ownership, and confidentiality." },
      { title: "Terms of Service", path: "/terms", desc: "Engineering engagement terms, milestone billing, and warranty terms." },
    ],
  },
];

function SitemapPage() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          kicker="Architecture Index"
          title="Platform"
          highlightedWord="Sitemap."
          description="Complete navigational index of all sections, service disciplines, case studies, and legal documents across Mizaan Technologies."
          breadcrumbCurrent="Sitemap"
        />

        <section className="py-20 bg-[#0a0c11]">
          <div className="shell max-w-5xl mx-auto space-y-16">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>XML Sitemap Available:</span>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noreferrer"
                className="text-[#e65c58] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>https://mizaantech.co.in/sitemap.xml</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center">
                          <Icon size={18} />
                        </div>
                        <h2 className="text-lg font-bold font-display text-white">
                          {group.title}
                        </h2>
                      </div>

                      <ul className="space-y-4">
                        {group.links.map((link) => (
                          <li key={link.path}>
                            <Link
                              to={link.path}
                              className="group block space-y-1"
                            >
                              <div className="text-sm font-semibold text-white group-hover:text-[#e65c58] flex items-center justify-between transition-colors">
                                <span>{link.title}</span>
                                <ArrowRight size={13} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#e65c58]" />
                              </div>
                              <p className="text-xs text-zinc-400 leading-relaxed">
                                {link.desc}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
