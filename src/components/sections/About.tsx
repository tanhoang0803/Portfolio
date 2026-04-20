import { Target, Layers, Cpu } from "lucide-react";

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

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase mb-2">
            01. about
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#2563eb]" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="text-white font-medium">Tan Hoang</span> — a
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
              <span className="text-[#06b6d4]">
                Senior Enterprise Infrastructure Architect
              </span>
              , designing the systems and platforms that power large-scale
              products.
            </p>

            {/* Quick facts */}
            <div className="pt-4 grid grid-cols-2 gap-4">
              {[
                ["Location", "Vietnam"],
                ["Focus", "Full-Stack + AI"],
                ["Goal", "Enterprise Architect"],
                ["Status", "Open to work"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-gray-300">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Focus areas */}
          <div className="space-y-4">
            {FOCUS_AREAS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-4 rounded-xl border border-[#374151] bg-[#111827] hover:border-[#06b6d4]/40 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center shrink-0 group-hover:bg-[#06b6d4]/20 transition-colors">
                    <Icon size={16} className="text-[#06b6d4]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
