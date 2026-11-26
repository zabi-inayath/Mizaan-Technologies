import { Link } from "react-router-dom";
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
  Globe,
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
} from "lucide-react";
import officeImage from "../assets/mizaan-office.jpg";
import webImage from "../assets/service-web.jpg";
import mobileImage from "../assets/service-mobile.jpg";
import softwareImage from "../assets/service-software.jpg";
import designImage from "../assets/service-design.jpg";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { RevampedHero } from "../components/home/RevampedHero";

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
    image: softwareImage,
    number: "02",
    label: "Software Solutions",
    title: "Custom Software Development",
    body: "Business-focused software built around your unique workflows, requirements, and operational needs.",
    link: "/services#custom-software",
  },
  {
    image: webImage,
    number: "03",
    label: "Online Commerce",
    title: "E-Commerce Development",
    body: "Complete e-commerce solutions to sell products online, manage orders, and grow your digital business.",
    link: "/services#ecommerce",
  },
  {
    image: webImage,
    number: "04",
    label: "Web Engineering",
    title: "Web Application Development",
    body: "Secure, scalable web applications built to solve real-world business challenges and streamline operations.",
    link: "/services#web-app",
  },
  {
    image: softwareImage,
    number: "05",
    label: "Business Management",
    title: "ERP Development",
    body: "Customized ERP solutions to manage business operations, streamline workflows, and improve efficiency.",
    link: "/services#erp",
  },
  {
    image: softwareImage,
    number: "06",
    label: "Customer Management",
    title: "CRM Development",
    body: "Customer relationship management solutions to organize leads, manage interactions, and strengthen customer relationships.",
    link: "/services#crm",
  },
  {
    image: softwareImage,
    number: "07",
    label: "Retail Management",
    title: "POS Development",
    body: "Point-of-sale solutions to manage billing, sales, inventory, and everyday retail operations.",
    link: "/services#pos",
  }
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
    title: "Mizaan POS",
    category: "Retail Management Platform",
    metric: "Multi-Industry POS",
    description:
      "A flexible point-of-sale solution for grocery, garments, textiles, footwear, electronics, mobile, hardware, stationery, jewellery, wholesale, and restaurant businesses. Industry-specific modules and configurations adapt to your business needs.",
    image: webImage,
    tags: [
      "Supermarket POS",
      "Inventory Management",
      "Sales & Billing",
      "Multi-Industry",
    ],
  },
  {
    title: "Zafaf Atelier",
    category: "Digital Invitation Platform",
    metric: "Beautiful Digital Invitations",
    description:
      "Create elegant and personalized digital invitations for weddings and special occasions. Explore beautifully designed web invitations, e-invites, and video invitations for meaningful celebrations.",
    image: designImage,
    tags: [
      "Web Invitations",
      "E-Invites",
      "Video Invitations",
      "Custom Designs",
    ],
  },
  {
    title: "Mizaan NFC + QR",
    category: "Smart Networking Solution",
    metric: "One Tap. Instant Connection.",
    description:
      "Modern NFC business cards that make sharing your contact details, Google reviews, business profile, website, and social links effortless. Connect with people instantly with a simple tap.",
    image: mobileImage,
    tags: [
      "NFC Business Cards",
      "Google Reviews",
      "Smart Contact Sharing",
      "Custom Branding",
    ],
  },
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
    link: "/services#web-dev",
  },
  {
    icon: Cpu,
    title: "Custom Software & ERP Systems",
    description:
      "Tailored internal software, inventory engines, and ERP workflows built around the exact way your organization operates.",
    tags: ["Bespoke ERP", "Role-Based Access"],
    link: "/services#custom-software",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Smooth iOS and Android applications with offline-first sync, real-time notifications, and intuitive mobile UX.",
    tags: ["iOS & Android", "60 FPS Native Feel"],
    link: "/services#mobile-dev",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Platforms",
    description:
      "Conversion-focused digital storefronts with seamless checkout, catalog control, payment gateways, and order tracking.",
    tags: ["Payment Gateways", "Order Management"],
    link: "/services#ecommerce",
  },
  {
    icon: Store,
    title: "CRM & Retail POS Solutions",
    description:
      "Integrated point-of-sale billing, multi-branch inventory, and lead management systems that streamline daily operations.",
    tags: ["Billing & Stock", "Lead Pipelines"],
    link: "/services#pos",
  },
  {
    icon: Bot,
    title: "Super Intelligent Automation",
    description:
      "Practical AI workflows, smart document processing, and connected APIs that eliminate repetitive manual tasks.",
    tags: ["AI Agents", "API Workflows"],
    link: "/services#ai-automation",
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
    title: "Architecture & Design",
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
  return (<div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
    <Navbar />

    <main className="flex-1">
      {/* Revamped Hero Section */}
      <RevampedHero />


      {/* Services Showcase Section */}
      <section className="py-14 bg-[#08090d] border-b " id="services">
        <div className="shell">
          <div className="flex flex-col lg:flex-row lg:items-end justify-center mb-16 gap-6">
            <div>
              <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
                Everything Your Business Needs to Grow Digitally.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {featuredServices.map((service, idx) => {
              const tint = serviceCardTints[idx % serviceCardTints.length];
              return (<div key={service.title} className="group relative min-h-[450px] sm:min-h-[470px] rounded-[32px] overflow-hidden border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_32px_72px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.24)] flex flex-col justify-end">
                {/* Full-bleed Background Image */}
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

                {/* Progressive Frosted Blur Layer */}
                <div className="service-card-blur absolute inset-0 pointer-events-none" />

                {/* Tinted Atmospheric Scrim */}
                <div className={`absolute inset-0 bg-gradient-to-t ${tint} pointer-events-none`} />

                {/* Card Content */}
                <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-4">

                  {/* Title + Dark Glass Pill */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl sm:text-[1.35rem] font-bold font-display text-white tracking-tight leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-zinc-200/80 leading-relaxed line-clamp-3 font-normal">
                    {service.body}
                  </p>

                  {/* Crisp White Pill CTA */}
                  <Link to={service.link} className="mt-1 w-full py-3.5 px-5 rounded-full bg-white hover:bg-zinc-100 text-[#e65c58] text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_10px_28px_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:scale-[1.01]">
                    <span className="text-[#e65c58]">Explore Service</span>
                    <ArrowRight size={15} className="text-[#e65c58] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>);
            })}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="glass-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:scale-105">
              <span>View Full Services Catalog</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Case Studies Showcase */}
      <section className="py-24 bg-[#0a0c11] border-b " id="projects">
        <div className="shell">
          <div className="flex flex-col lg:flex-row lg:items-end justify-center mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight">
                Our Products. Built for Real-World Needs.
              </h2>
            </div>
          </div>

          {/* 1 + 2 Bento Glass Products Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
            {/* Featured Lead Product Card (Full-Width Horizontal Glass) */}
            {flagshipProjects[0] && (<Link to="/projects" className="lg:col-span-12 group relative min-h-[380px] lg:min-h-[360px] rounded-[32px] overflow-hidden border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_32px_72px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.24)] flex items-end lg:items-center">
                <img src={flagshipProjects[0].image} alt={flagshipProjects[0].title} className="absolute inset-0 w-full h-full object-cover object-right transition-transform duration-700 ease-out group-hover:scale-105"/>
                <div className="product-card-blur-x absolute inset-0 pointer-events-none"/>
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#090d16] via-[#0d1624]/88 to-transparent pointer-events-none"/>

                <div className="relative z-10 w-full p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                  <div className="max-w-xl space-y-4">
                    

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                      {flagshipProjects[0].title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-200/80 leading-relaxed">
                      {flagshipProjects[0].description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {flagshipProjects[0].tags.slice(0, 3).map((tag) => (<span key={tag} className="px-3 py-1 rounded-full bg-white/[0.1] border border-white/15 backdrop-blur-md text-[11px] font-medium text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                          {tag}
                        </span>))}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3 self-start lg:self-end">
                    <span className="glass-btn px-5 py-3 rounded-full text-xs font-semibold text-white">
                      Read Full Case Study
                    </span>
                    <span className="w-11 h-11 rounded-full bg-white text-[#08090d] flex items-center justify-center shadow-[0_10px_28px_rgba(255,255,255,0.18)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <ArrowUpRight size={18}/>
                    </span>
                  </div>
                </div>
              </Link>)}

            {/* Secondary Dual Glass Showcase Cards */}
            {flagshipProjects.slice(1).map((project, idx) => {
              const cardGradients = [
                "from-[#0a1114] via-[#0e191e]/80 to-transparent",
                "from-[#120a12] via-[#1c1022]/80 to-transparent",
              ];
              return (<Link to="/projects" key={project.title} className="lg:col-span-6 group relative rounded-[32px] overflow-hidden border border-white/15 bg-white/[0.03] backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_32px_72px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.24)] p-4 sm:p-5 flex flex-col justify-between gap-5">
                  <div className={`absolute inset-0 bg-gradient-to-t ${cardGradients[idx % cardGradients.length]} opacity-70 pointer-events-none`}/>

                  {/* Inset Glass Media Frame with Floating Telemetry Bar */}
                  <div className="relative z-10 h-56 sm:h-64 rounded-[24px] overflow-hidden border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35"/>

                    {/* Bottom Stack Pills Inside Media */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (<span key={tag} className="px-2.5 py-1 rounded-full bg-white/[0.12] border border-white/15 backdrop-blur-md text-[10px] font-medium text-zinc-100">
                          {tag}
                        </span>))}
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
                      <ArrowUpRight size={18}/>
                    </span>
                  </div>
                </Link>);
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services#products" className="glass-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:scale-105">
              <span>Browse All Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* What is Mizaan Technologies? */}
      <section className="py-14 bg-[#08090d] border-b border-white/10 relative overflow-hidden" id="what-is-mizaan">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-[#c73834]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="shell relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
         
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
            <Link to="/about" className="glass-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all hover:scale-105">
              <span>Discover Our Story & Values</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Core Services */}
      <section className="py-14 bg-[#0a0c11] border-b border-white/10 relative overflow-hidden" id="core-services">
        <div className="absolute bottom-0 right-1/4 w-[480px] h-[260px] bg-indigo-950/25 rounded-full blur-[130px] pointer-events-none" />
        <div className="shell relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
           
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
                        <span key={tag} className="glass-badge px-3 py-1 rounded-full text-[11px] font-medium text-zinc-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={item.link}
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
      <section className="py-14 bg-[#08090d] border-b border-white/10 relative overflow-hidden" id="process">
        <div className="absolute top-1/2 left-0 w-[420px] h-[260px] bg-[#c73834]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="shell relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
           
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
      <section className="py-14 bg-[#0a0c11] border-b border-white/10 relative overflow-hidden" id="why-mizaan">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[280px] bg-[#c73834]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="shell relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
            
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
      <section className="py-14 bg-[#08090d] border-b border-white/10 relative overflow-hidden" id="use-cases">
        <div className="shell relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
           
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
                      <span key={tag} className="glass-badge px-3 py-1 rounded-full text-[11px] font-medium text-zinc-200">
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
      <section className="py-24 bg-[#08090d] border-b " id="solutions">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
             
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                Technology That Moves Your Business Forward.
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                We don't build software for the sake of writing code. We solve fundamental operational, conversion, and architectural bottlenecks that unlock scalable commercial growth.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="glass-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white transition-all">
                  <span>Discuss Your Specific Challenge</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {solutions.map((sol) => (<div key={sol.title} className="outcome-card">
                <span className="outcome-number">
                  {sol.number}
                </span>
                <div className="outcome-copy">
                  <h3>{sol.title}</h3>
                  <p>{sol.description}</p>
                </div>
                <ArrowUpRight className="outcome-arrow" size={19} />
              </div>))}
            </div>
          </div>
        </div>
      </section>

      {/* About Studio Spotlight */}
      <section className="py-24 bg-[#0a0c11] border-b " id="about">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="glass-card lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl group">
              <img src={officeImage} alt="Mizaan Technologies office in Vaniyambadi" className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
            </div>

            <div className="lg:col-span-6 space-y-6">
             
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                A Compact Team with a Serious Standard.
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                We help founders and established companies transform ambitious ideas into practical, scalable digital products. Every engagement is collaborative, transparent, and measured by the tangible value it generates.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t ">
                <div>
                  <div className="text-3xl font-bold font-display text-white">50+</div>
                  <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Delivered Systems</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-display text-[#e65c58]">5+</div>
                  <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Global Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold font-display text-emerald-400">3+</div>
                  <div className="text-xs text-zinc-400 mt-1 uppercase font-mono">Years Excellence</div>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#e65c58] transition-colors">
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
              <Link to="/contact" className="glass-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105">
                <span>Launch Project Planner</span>
                <ArrowRight size={18} />
              </Link>

              <a href="mailto:project@mizaantech.co.in" className="glass-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-zinc-200 hover:text-white transition-all">
                <span>project@mizaantech.co.in</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>);
}

export default Index;
