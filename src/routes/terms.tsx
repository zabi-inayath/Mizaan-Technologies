import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileCode2, Scale, ShieldCheck } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHeader } from "../components/layout/PageHeader";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service | Mizaan Technologies" },
      {
        name: "description",
        content:
          "Read the Terms of Service for digital engineering, custom software development, web platforms, and mobile apps provided by Mizaan Technologies.",
      },
      { property: "og:title", content: "Terms of Service — Mizaan Technologies" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/terms" }],
  }),
});

function TermsPage() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          kicker="Legal Terms & Conditions"
          title="Terms of"
          highlightedWord="Service."
          description="Guidelines and terms governing client engineering engagements, software deliverables, intellectual property, and service agreements."
          breadcrumbCurrent="Terms of Service"
        />

        <section className="py-20 bg-[#0a0c11]">
          <div className="shell max-w-4xl mx-auto space-y-12">
            {/* Meta summary card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div>
                <span className="text-zinc-200 font-semibold">Last Updated:</span> September 2026
              </div>
              <div>
                <span className="text-zinc-200 font-semibold">Jurisdiction:</span> Tamil Nadu, India
              </div>
              <div className="text-emerald-400 flex items-center gap-1.5">
                <Scale size={14} />
                <span>Legally Binding Agreement</span>
              </div>
            </div>

            {/* Terms Articles */}
            <div className="space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">1. Agreement Overview</h2>
                <p>
                  These Terms of Service ("Terms") govern your relationship with Mizaan Technologies ("Studio", "we", "us", or "our") when accessing our website (<a href="https://mizaantech.co.in" className="text-[#e65c58] hover:underline">https://mizaantech.co.in</a>) or contracting our engineering, design, AI automation, and cloud services. By engaging with our studio or signing a Statement of Work (SOW), you agree to be bound by these terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">2. Scope of Engineering Engagements</h2>
                <p>
                  All custom software development, mobile application builds, web platforms, and AI architectures are executed in accordance with a mutually agreed Statement of Work (SOW) or written technical blueprint specifying:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                  <li>Detailed feature sets, technical architecture, and system integrations.</li>
                  <li>Sprint milestones, staging demo timelines, and production release criteria.</li>
                  <li>Third-party requirements (e.g. AWS, Cloudflare, payment gateway credentials).</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">3. Intellectual Property Rights & Ownership</h2>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <FileCode2 size={18} className="text-[#e65c58]" />
                    <span>Complete Client Ownership upon Settlement</span>
                  </div>
                  <p className="text-sm text-zinc-300">
                    Upon full settlement of agreed milestone invoices, all custom source code, repository rights, schema definitions, custom UI/UX design components, and assets created specifically for your project become your 100% exclusive intellectual property.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">4. Milestone Billing & Invoicing</h2>
                <p>
                  We prioritize transparency over arbitrary agency fees. Projects are billed according to clear milestones:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                  <li><strong className="text-zinc-200">Sprint Kickoff:</strong> Initial mobilization deposit (typically 30%) to secure senior architect allocation.</li>
                  <li><strong className="text-zinc-200">Staging Verification:</strong> Progress installment (typically 40%) upon delivery and interactive review on our live staging cluster.</li>
                  <li><strong className="text-zinc-200">Production Sign-off:</strong> Final release installment (typically 30%) upon automated production deployment and code transfer.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">5. 30-Day Post-Launch Warranty</h2>
                <p>
                  Every software build delivered by Mizaan Technologies includes a complimentary 30-calendar-day post-launch warranty covering bug fixes, defect resolution, and performance optimizations within the agreed SOW scope. Dedicated ongoing maintenance SLAs are available for continuous scaling.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Mizaan Technologies shall not be liable for indirect, incidental, special, or consequential damages resulting from downtime of third-party cloud infrastructure (e.g. AWS, Cloudflare, telecom disruptions) beyond our direct engineering control.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-display text-white">7. Governing Law & Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Tamil Nadu, India.
                </p>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="pt-8 border-t border-white/10 flex justify-between items-center text-sm">
              <Link to="/privacy" className="text-[#e65c58] hover:underline flex items-center gap-1.5 font-medium">
                <span>View Privacy Policy</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="text-zinc-400 hover:text-white transition-colors">
                Contact Legal Office
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
