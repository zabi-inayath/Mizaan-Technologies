import { useState } from "react";
import { ArrowRight, CheckCircle2, Send, Sparkles, AlertCircle } from "lucide-react";

const availableServices = [
  "Web Development",
  "Mobile App Development",
  "Custom Software & ERP",
  "UI/UX & Product Design",
  "AI & Workflow Automation",
  "Cloud & DevOps",
];

const budgetRanges = [
  "₹1L – ₹3L ($1.5k–$3.5k)",
  "₹3L – ₹7L ($3.5k–$8.5k)",
  "₹7L – ₹15L ($8.5k–$18k)",
  "₹15L+ ($18k+ Enterprise)",
];

const timelines = [
  "Immediately (< 1 month)",
  "1 – 2 Months",
  "3 – 6 Months",
  "Flexible / Planning phase",
];

export function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development"]);
  const [selectedBudget, setSelectedBudget] = useState<string>(budgetRanges[1]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(timelines[1]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in your name, email, and project details.");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-emerald-500/30 text-center space-y-5 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
          Inquiry Successfully Dispatched!
        </h3>
        <p className="text-zinc-300 max-w-md mx-auto text-sm leading-relaxed">
          Thank you, <span className="font-semibold text-white">{fullName}</span>. Our lead engineering team at Mizaan Technologies has received your project briefing. We will review your requirements and respond within 24 hours.
        </p>
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-left text-zinc-400 max-w-sm mx-auto space-y-1 font-mono">
          <div><strong className="text-zinc-300">Services:</strong> {selectedServices.join(", ")}</div>
          <div><strong className="text-zinc-300">Budget:</strong> {selectedBudget}</div>
          <div><strong className="text-zinc-300">Timeline:</strong> {selectedTimeline}</div>
        </div>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setMessage("");
            }}
            className="px-6 py-2.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
          >
            Submit Another Project Brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 md:p-10 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 shadow-2xl backdrop-blur-md space-y-8"
    >
      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-sm text-red-400">
          <AlertCircle size={18} className="shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* 1. Services required */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
          1. What services do you require? (Select all that apply)
        </label>
        <div className="flex flex-wrap gap-2.5">
          {availableServices.map((svc) => {
            const isSelected = selectedServices.includes(svc);
            return (
              <button
                type="button"
                key={svc}
                onClick={() => toggleService(svc)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#c73834] text-white shadow-md shadow-[#c73834]/30 border border-[#c73834]"
                    : "bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {isSelected ? `✓ ${svc}` : `+ ${svc}`}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Budget Range */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
          2. Estimated Project Investment / Budget
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {budgetRanges.map((range) => {
            const isSelected = selectedBudget === range;
            return (
              <button
                type="button"
                key={range}
                onClick={() => setSelectedBudget(range)}
                className={`p-3 rounded-xl text-left text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#c73834]/20 border border-[#c73834] text-white"
                    : "bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{range}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#c73834]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Timeline */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
          3. Expected Timeline
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {timelines.map((timeline) => {
            const isSelected = selectedTimeline === timeline;
            return (
              <button
                type="button"
                key={timeline}
                onClick={() => setSelectedTimeline(timeline)}
                className={`p-2.5 rounded-xl text-center text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-white/15 text-white border border-white/30"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {timeline}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Contact Details */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
          4. Your Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              required
              placeholder="Your Full Name *"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c73834] focus:ring-1 focus:ring-[#c73834] transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Work / Direct Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c73834] focus:ring-1 focus:ring-[#c73834] transition-colors"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone / WhatsApp Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c73834] focus:ring-1 focus:ring-[#c73834] transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Company or Brand Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c73834] focus:ring-1 focus:ring-[#c73834] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* 5. Project Description */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
          5. Tell us about your project or goal *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Describe what you want to build, existing challenges, target audience, or reference links..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#c73834] focus:ring-1 focus:ring-[#c73834] transition-colors resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#c73834] via-[#bd2e2a] to-[#991e1a] hover:from-[#d9433f] hover:to-[#b32623] shadow-lg shadow-[#c73834]/30 hover:shadow-[#c73834]/50 transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Transmitting Brief...</span>
            </div>
          ) : (
            <>
              <Send size={18} />
              <span>Send Project Brief & Request Discovery Call</span>
              <ArrowRight size={18} />
            </>
          )}
        </button>
        <p className="text-center text-xs text-zinc-500 mt-3 font-mono">
          🔒 Strict NDA guaranteed. We protect your intellectual property. Response within 24 hours.
        </p>
      </div>
    </form>
  );
}
