import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  ExternalLink,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PageHeader } from "../components/layout/PageHeader";
import { ContactForm } from "../components/contact/ContactForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us & Get a Quote | Mizaan Technologies" },
      {
        name: "description",
        content:
          "Tell us about your project and get a personalized architecture proposal and quote from our lead engineers in Vaniyambadi, Tamil Nadu.",
      },
      { property: "og:title", content: "Contact Us & Get a Quote | Mizaan Technologies" },
      {
        property: "og:description",
        content:
          "Tell us about your project and get a personalized architecture proposal and quote from our lead engineers in Vaniyambadi, Tamil Nadu.",
      },
      { property: "og:url", content: "https://mizaantech.co.in/contact" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://mizaantech.co.in/assets/mizaan-office.jpg" },
      { name: "twitter:title", content: "Contact Us & Get a Quote | Mizaan Technologies" },
      {
        name: "twitter:description",
        content:
          "Tell us about your project and get a personalized architecture proposal and quote from our lead engineers in Vaniyambadi, Tamil Nadu.",
      },
    ],
    links: [{ rel: "canonical", href: "https://mizaantech.co.in/contact" }],
  }),
});

const faqs = [
  {
    question: "What is your typical project timeline from kickoff to launch?",
    answer:
      "Most web platforms and MVP mobile applications take between 4 to 10 weeks depending on scope complexity. Enterprise ERP platforms or specialized AI agent architectures typically range from 8 to 16 weeks with continuous two-week staging releases.",
  },
  {
    question: "How do milestones and payments work?",
    answer:
      "We operate on transparent milestone-based billing (typically 30% kickoff, 40% midway upon staging verification, and 30% upon production deployment and final sign-off). No hidden agency retainers or surprise fees.",
  },
  {
    question: "Who retains ownership of the code and intellectual property?",
    answer:
      "You retain 100% full legal ownership of all source code, databases, design files, and cloud credentials. We sign mutual Non-Disclosure Agreements (NDA) prior to technical discovery.",
  },
  {
    question: "Do you partner with clients and startups outside of India?",
    answer:
      "Yes. Over 40% of our client base spans North America, the UAE, the UK, and Southeast Asia. We accommodate international time zones and conduct regular video demos over Google Meet and Slack.",
  },
  {
    question: "What ongoing warranty or maintenance support do you provide?",
    answer:
      "Every project delivered by Mizaan Technologies includes a complimentary 30-day post-launch warranty for bug fixes and performance tuning. We also offer dedicated monthly SLA maintenance packages for growing companies.",
  },
];

function ContactPage() {
  return (
    <div className="bg-[#08090d] text-zinc-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <PageHeader
          kicker="Direct Studio Consultation"
          title="Let's Architect Something"
          highlightedWord="Extraordinary."
          description="Have a question or a new digital product you want to engineer? Reach out directly to our engineering team in Vaniyambadi, Tamil Nadu."
          breadcrumbCurrent="Contact"
        />

        {/* Main Contact Grid */}
        <section className="py-20 bg-[#0a0c11] border-b border-white/10">
          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Interactive Form */}
              <div className="lg:col-span-7">
                <div className="mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                    Project Blueprint Brief
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1">
                    Fill out the parameters below and an engineering lead will review your submission.
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* Right Column: Studio Coordinates & Trust */}
              <div className="lg:col-span-5 space-y-6">
                {/* Direct Contact Card */}
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 space-y-6 shadow-xl">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#e65c58] font-bold">
                      Direct Coordinates
                    </span>
                    <h3 className="text-xl font-bold font-display text-white mt-1">
                      Mizaan Technologies HQ
                    </h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    {/* Phone */}
                    <a
                      href="tel:+917448552778"
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c73834]/40 hover:bg-white/[0.05] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-zinc-400">Direct Phone</div>
                        <div className="text-base font-semibold text-white group-hover:text-[#e65c58] transition-colors">
                          +91 744 855 2778
                        </div>
                        <div className="text-xs text-zinc-500">Available Mon – Sat, 9am - 7:30pm IST</div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:project@mizaantech.co.in"
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c73834]/40 hover:bg-white/[0.05] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-zinc-400">Official Inquiries</div>
                        <div className="text-base font-semibold text-white group-hover:text-[#e65c58] transition-colors">
                          project@mizaantech.co.in
                        </div>
                        <div className="text-xs text-zinc-500">Guaranteed response within 24 hours</div>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-[#c73834]/15 border border-[#c73834]/30 text-[#e65c58] flex items-center justify-center shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-zinc-400">Studio Location</div>
                        <div className="text-base font-semibold text-white">
                          Vaniyambadi, Tirupattur Dt.
                        </div>
                        <div className="text-xs text-zinc-400">Tamil Nadu, India</div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp quick contact */}
                  <a
                    href="https://wa.me/917448552778?text=Hello%20Mizaan%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp Directly</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Trust Guarantees */}
                <div className="p-6 rounded-3xl bg-black/40 border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                    <ShieldCheck size={16} className="text-[#e65c58]" />
                    <span>Our Engagement Guarantee</span>
                  </div>
                  <ul className="text-xs text-zinc-400 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-[#e65c58]">●</span>
                      <span>Mutual Non-Disclosure Agreement (NDA) on request</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#e65c58]">●</span>
                      <span>Direct line to Senior Engineers, no sales pressure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#e65c58]">●</span>
                      <span>Detailed technical proposal with milestone deliverables</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-[#08090d]">
          <div className="shell max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#e65c58] bg-[#c73834]/15 border border-[#c73834]/30 mb-3">
                <HelpCircle size={13} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white">
                Everything You Need to Know
              </h2>
              <p className="text-zinc-400 mt-3 text-sm">
                Have questions before starting? Here are answers to common questions about partnering with us.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-2"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
