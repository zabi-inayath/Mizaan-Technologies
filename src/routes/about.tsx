import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  Globe2,
  HeartHandshake,
  MapPin,
  Shield,
  Sparkles,
  Users2,
  Zap,
} from "lucide-react";
import officeImage from "../assets/mizaan-office.jpg";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHeader } from "../components/layout/PageHeader";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Mizaan Technologies | AI & Engineering Studio Vaniyambadi" },
      {
        name: "description",
        content:
          "Who Mizaan Technologies is: the founder story, our team, and why we build purposeful digital products, custom software, and scalable AI platforms.",
      },
      { property: "og:title", content: "About Mizaan Technologies | AI & Engineering Studio Vaniyambadi" },
      {
        property: "og:description",
        content:
          "Who Mizaan Technologies is: the founder story, our team, and why we build purposeful digital products, custom software, and scalable AI platforms.",
      },
      { property: "og:url", content: "https://mizaantech.co.in/about" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mizaantech.co.in/assets/mizaan-office.jpg" },
      { name: "twitter:title", content: "About Mizaan Technologies | AI & Engineering Studio Vaniyambadi" },
      {
        name: "twitter:description",
        content:
          "Who Mizaan Technologies is: the founder story, our team, and why we build purposeful digital products, custom software, and scalable AI platforms.",
      },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/about" }],
  }),
});

const coreValues = [
  {
    icon: Zap,
    title: "Engineering Over Decoration",
    description:
      "Aesthetic interfaces are table stakes. We obsess over sub-second latency, maintainable code architectures, database optimization, and zero technical debt.",
  },
  {
    icon: HeartHandshake,
    title: "Radical Transparency",
    description:
      "No agency fluff or junior middlemen. You collaborate directly with senior product engineers. Live staging environments, weekly sprint demos, and open repositories.",
  },
  {
    icon: Shield,
    title: "100% Client IP Ownership",
    description:
      "You retain complete, unencumbered ownership of your code, schemas, cloud infrastructure, and design tokens from the very first commit.",
  },
  {
    icon: Compass,
    title: "Built for Real-World Scale",
    description:
      "We design systems capable of supporting your first 1,000 customers to millions of requests without fragile rewrites or architectural collapse.",
  },
];

const timelineMilestones = [
  {
    year: "2023",
    title: "Studio Foundation",
    description:
      "Founded in Vaniyambadi by passionate software architects with a clear mission: deliver world-class web and mobile engineering without big-agency bureaucracy.",
  },
  {
    year: "2024",
    title: "SaaS & Mobile Expansion",
    description:
      "Expanded engineering capabilities to Flutter cross-platform mobile apps, complex SaaS subscription platforms, and high-load database systems.",
  },
  {
    year: "2025",
    title: "AI Workflows & Global Reach",
    description:
      "Integrated autonomous LLM workflows, document parsing pipelines, and delivered solutions for clients across India, the Middle East, and North America.",
  },
  {
    year: "2026",
    title: "100+ Projects & Beyond",
    description:
      "Surpassing 100+ production deployments while maintaining a 99.8% client satisfaction rating and establishing a premier tech hub in Tamil Nadu.",
  },
];

function AboutPage() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <PageHeader
          kicker="Our Identity & Ethos"
          title="A Serious Standard for"
          highlightedWord="Digital Craft."
          description="We are an independent technology studio based in Vaniyambadi, Tamil Nadu. We partner with ambitious founders and forward-thinking enterprises to engineer digital legacies."
          breadcrumbCurrent="About Us"
        />

        {/* Studio Story Section */}
        <section className="py-24 bg-[#0a0c11] border-b border-white/10">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                  The Story Behind Mizaan
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                  Born from a desire to eliminate software fluff.
                </h2>
                <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
                  <p>
                    The digital world is crowded with generic templates, bloated codebases, and agency promises that crumble under real user traffic. Mizaan Technologies was established to be the antithesis of that approach.
                  </p>
                  <p>
                    Rooted in Vaniyambadi, Tamil Nadu, we operate with a boutique mindset: small, elite teams of full-stack engineers and product designers who take extreme ownership of every line of code and user interaction.
                  </p>
                  <p>
                    Whether we are architecting an enterprise CRM, building a high-conversion e-commerce platform, or deploying proprietary AI agents, our work is defined by precision, speed, and genuine business impact.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-3 gap-6 border-t border-white/10">
                  <div>
                    <div className="text-3xl font-bold font-display text-white">100+</div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Shipped Systems</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-display text-[#e65c58]">50+</div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold font-display text-emerald-400">99.8%</div>
                    <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Retention Rate</div>
                  </div>
                </div>
              </div>

              {/* Office Image with Floating Location Badge */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img
                    src={officeImage}
                    alt="Mizaan Technologies studio office in Vaniyambadi"
                    className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#090b0f]/85 border border-white/15 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-[#e65c58] font-bold uppercase tracking-wider">
                        Engineering Headquarters
                      </div>
                      <div className="text-white font-semibold text-base mt-0.5">
                        Vaniyambadi, Tirupattur Dt.
                      </div>
                      <div className="text-xs text-zinc-400">Tamil Nadu, India</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#c73834]/20 text-[#e65c58] border border-[#c73834]/30">
                      <MapPin size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-24 bg-[#08090d] border-b border-white/10">
          <div className="shell">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                Our Engineering Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mt-2">
                Four Pillars of How We Build
              </h2>
              <p className="text-zinc-400 mt-4 text-base">
                These principles guide every architectural decision, line of code, and deployment pipeline we touch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#c73834]/40 transition-all duration-300 hover:-translate-y-1 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono text-zinc-600 font-bold">0{idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">{value.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-[#0a0c11] border-b border-white/10">
          <div className="shell">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                Journey & Growth
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mt-2">
                Milestones of Craftsmanship
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineMilestones.map((item) => (
                <div
                  key={item.year}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <span className="text-2xl font-bold font-display text-[#e65c58]">{item.year}</span>
                    <h3 className="text-base font-bold text-white mt-2 mb-2">{item.title}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#c73834] to-[#e65c58] w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community & Vaniyambadi Hub */}
        <section className="py-24 bg-[#08090d]">
          <div className="shell">
            <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                  Regional Impact · Global Reach
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                  Empowering Talent from Tamil Nadu to the World.
                </h2>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  We are proud to build high-end software from Vaniyambadi. By cultivating local tech talent and pairing it with global engineering standards, we deliver world-class digital experiences while strengthening our regional ecosystem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#c73834] hover:bg-[#d9433f] shadow-lg shadow-[#c73834]/30 transition-all hover:scale-105"
                >
                  <span>Work With Us</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
