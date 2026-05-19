import Image from "next/image";
import { Target, Layers, Cpu, MapPin, Briefcase, TrendingUp, CheckCircle } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: Layers,
    title: "Enterprise Architecture",
    desc: "Designing scalable, maintainable systems following clean architecture and domain-driven design principles.",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Flows",
    desc: "Integrating LLMs and AI APIs into real-world products — from intelligent search to automated content pipelines.",
  },
  {
    icon: Target,
    title: "Third-party & SaaS Integrations",
    desc: "Connecting products to Stripe, Contentful, Resend, Firebase, OpenAI, and more to ship faster.",
  },
];

const QUICK_FACTS = [
  { icon: MapPin, label: "Location", value: "Vietnam" },
  { icon: Briefcase, label: "Focus", value: "Full-Stack + AI" },
  { icon: TrendingUp, label: "Goal", value: "Enterprise Architect" },
  { icon: CheckCircle, label: "Status", value: "Open to work" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase mb-2">
            01. about
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#2563eb]" />
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Left: Avatar + quick facts */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* Avatar */}
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#06b6d4] via-[#2563eb] to-[#0f2460] opacity-60 blur-sm group-hover:opacity-90 transition-opacity duration-500" />
              {/* Inner border */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#1e3a5f] w-[220px] h-[290px]">
                <Image
                  src="/avatar.jpg"
                  alt="Tan Hoang — Full-Stack Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="220px"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[#0f172a] border border-[#1e3a5f] rounded-full px-3 py-1 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium whitespace-nowrap">Open to work</span>
              </div>
            </div>

            {/* Name block */}
            <div className="mt-4 text-center lg:text-left">
              <h3 className="text-lg font-bold text-foreground">Tan Hoang</h3>
              <p className="text-sm text-[#06b6d4] font-mono">Full-Stack Engineer</p>
            </div>

            {/* Quick facts */}
            <div className="w-full space-y-2">
              {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-surface border border-border"
                >
                  <Icon size={14} className="text-[#06b6d4] shrink-0" />
                  <span className="text-xs text-gray-400 w-20 shrink-0">{label}</span>
                  <span className="text-xs text-gray-200 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio + focus areas */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="text-foreground font-semibold">Tan Hoang</span> — a
                motivated Junior Full-Stack Engineer based in Vietnam. I build
                full-stack web applications with a focus on clean code,
                performance, and real-world impact.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My foundation spans the entire stack — from React frontends and
                NestJS APIs to PostgreSQL databases and Docker deployments. I love
                the intersection of product thinking and engineering craft.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My long-term goal is to grow into a{" "}
                <span className="text-[#06b6d4] font-medium">
                  Senior Enterprise Infrastructure Architect
                </span>
                , designing the systems and platforms that power large-scale
                products.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-border" />

            {/* Focus areas */}
            <div>
              <p className="text-xs text-gray-500 font-mono tracking-widest uppercase mb-4">
                Current Focus Areas
              </p>
              <div className="space-y-3">
                {FOCUS_AREAS.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="p-4 rounded-xl border border-border bg-surface hover:border-[#06b6d4]/40 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                        <Icon size={16} className="text-[#06b6d4]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                          {title}
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
