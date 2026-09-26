import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHeader } from "../components/layout/PageHeader";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mizaan Technologies" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of Mizaan Technologies. Learn how we safeguard your data, protect client intellectual property, and maintain enterprise confidentiality.",
      },
      { property: "og:title", content: "Privacy Policy — Mizaan Technologies" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          kicker="Legal & Transparency"
          title="Privacy"
          highlightedWord="Policy."
          description="How Mizaan Technologies collects, utilizes, and protects your information, software assets, and confidential project data."
          breadcrumbCurrent="Privacy Policy"
        />

        <section className="py-20 bg-[#0a0c11]">
          <div className="shell max-w-4xl mx-auto space-y-12">
            {/* Meta summary card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-zinc-200 font-semibold">Effective Date:</span> September 2026
              </div>
              <div>
                <span className="text-zinc-200 font-semibold">Entity:</span> Mizaan Technologies (Vaniyambadi, TN)
              </div>
              <div className="text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck size={14} />
                <span>Enterprise Grade Privacy</span>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">1. Introduction</h2>
                <p>
                  At Mizaan Technologies ("we", "our", or "the Studio"), respecting your privacy and safeguarding your confidential business information is foundational to our engineering ethos. This Privacy Policy details how we handle information collected through our website (<a href="https://mizaantech.co.in" className="text-[#e65c58] hover:underline">https://mizaantech.co.in</a>), direct project inquiries, technical consultations, and client service engagements.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">2. Information We Collect</h2>
                <p>We only collect information necessary to evaluate project briefs, deliver software engineering services, and communicate with you:</p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                  <li><strong className="text-zinc-200">Consultation Data:</strong> Name, work email address, telephone/WhatsApp number, organization name, and project scope details provided through our contact forms.</li>
                  <li><strong className="text-zinc-200">Technical Telemetry:</strong> Anonymized browser metadata, IP address, device type, and visit duration used strictly to optimize page load speeds and prevent malicious traffic.</li>
                  <li><strong className="text-zinc-200">Project Credentials:</strong> In active development engagements, access tokens, API keys, and repository permissions granted under strict, signed Non-Disclosure Agreements (NDAs).</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">3. Client Intellectual Property & Confidentiality</h2>
                <p>
                  We treat all client code, database architectures, system specifications, and commercial plans as strictly confidential. Unlike conventional agencies:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <Lock size={15} className="text-[#e65c58]" />
                      <span>Zero Proprietary Model Training</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      We never use your proprietary code or private company data to train public artificial intelligence models.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#e65c58]" />
                      <span>100% Full IP Ownership</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      All deliverables, codebases, and assets engineered for your project belong exclusively to your organization upon milestone settlement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">4. Data Storage & Security Measures</h2>
                <p>
                  We implement robust industry-standard safeguards including end-to-end encrypted transport protocols (HTTPS/TLS 1.3), role-based identity authentication, and secure edge infrastructure powered by Cloudflare and AWS. We do not sell, rent, or monetize your contact or project data to third-party data brokers under any circumstances.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">5. Your Legal Rights</h2>
                <p>
                  Depending on your jurisdiction, you have the right to request access to the personal data we hold about you, request corrections, or ask for complete deletion of your inquiry records from our communication databases.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">6. Inquiries & Data Officer Contact</h2>
                <p>
                  If you have any questions or require an executed Non-Disclosure Agreement (NDA) prior to discussing a confidential project, please contact our lead engineering office:
                </p>
                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-xs font-mono text-zinc-300">
                  <div><strong>Mizaan Technologies</strong> · Data Protection</div>
                  <div><strong>Email:</strong> project@mizaantech.co.in</div>
                  <div><strong>Phone:</strong> +91 744 855 2778</div>
                  <div><strong>Headquarters:</strong> Vaniyambadi, Tirupattur District, Tamil Nadu - 635751, India</div>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="pt-8 border-t border-white/10 flex justify-between items-center text-sm">
              <Link to="/terms" className="text-[#e65c58] hover:underline flex items-center gap-1.5 font-medium">
                <span>View Terms of Service</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
                Return to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
