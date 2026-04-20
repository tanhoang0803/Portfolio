import { BookOpen, ExternalLink, CheckCircle2, Circle } from "lucide-react";

const CURRENT_FOCUS = [
  { topic: "System Design & Enterprise Architecture patterns", done: false },
  { topic: "Advanced TypeScript — generics, decorators, utility types", done: true },
  { topic: "NestJS microservices & event-driven architecture", done: false },
  { topic: "Docker + Kubernetes fundamentals", done: false },
  { topic: "CI/CD pipelines with GitHub Actions", done: true },
  { topic: "OpenAI API — function calling, embeddings, RAG", done: false },
];

const LEARNING_RESOURCES = [
  { label: "My Flash Cards", href: "https://tanhoang0803.github.io/Fash-Cards-for-my-Life/", note: "Personal spaced-repetition system" },
];

export default function Learning() {
  return (
    <section id="learning" className="py-24 px-4 bg-[#111827]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase mb-2">
            02. learning
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            My Learning Space
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#2563eb]" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Current focus */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <BookOpen size={14} className="text-[#06b6d4]" />
              Currently studying
            </h3>
            <ul className="space-y-3">
              {CURRENT_FOCUS.map(({ topic, done }) => (
                <li key={topic} className="flex items-start gap-3">
                  {done ? (
                    <CheckCircle2
                      size={16}
                      className="text-[#06b6d4] shrink-0 mt-0.5"
                    />
                  ) : (
                    <Circle
                      size={16}
                      className="text-gray-600 shrink-0 mt-0.5"
                    />
                  )}
                  <span
                    className={`text-sm leading-relaxed ${
                      done ? "text-gray-400 line-through" : "text-gray-300"
                    }`}
                  >
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + quote */}
          <div className="space-y-6">
            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                <ExternalLink size={14} className="text-[#06b6d4]" />
                Resources
              </h3>
              <div className="space-y-3">
                {LEARNING_RESOURCES.map(({ label, href, note }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between p-4 rounded-xl border border-[#374151] bg-[#0a0a0a] hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 transition-all group"
                  >
                    <div>
                      <p className="text-sm font-medium text-white group-hover:text-[#06b6d4] transition-colors">
                        {label}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{note}</p>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-gray-600 group-hover:text-[#06b6d4] transition-colors shrink-0 mt-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <blockquote className="border-l-2 border-[#06b6d4] pl-4">
              <p className="text-gray-400 text-sm italic leading-relaxed">
                &ldquo;Every senior engineer was once a junior who kept
                learning, shipping, and asking the hard questions.&rdquo;
              </p>
              <footer className="text-xs text-gray-400 mt-2">
                — Personal mantra
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
