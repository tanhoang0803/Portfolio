import { Code, Monitor, Server, Database, Container, Cloud, Zap } from "lucide-react";
import { SKILL_CATEGORIES } from "@/constants/skills";

const ICON_MAP: Record<string, React.ElementType> = {
  code: Code,
  monitor: Monitor,
  server: Server,
  database: Database,
  container: Container,
  cloud: Cloud,
  zap: Zap,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase mb-2">
            04. skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Skills & Stacks
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#2563eb]" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map(({ category, icon, skills }) => {
            const Icon = ICON_MAP[icon] ?? Code;
            return (
              <div
                key={category}
                className="p-5 rounded-2xl border border-border bg-background hover:border-[#06b6d4]/30 transition-colors"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center">
                    <Icon size={15} className="text-[#06b6d4]" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-gray-400 bg-surface hover:border-[#06b6d4]/40 hover:text-[#06b6d4] transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
