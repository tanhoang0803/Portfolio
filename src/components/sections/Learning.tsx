"use client";

import { useState, useEffect } from "react";
import { BookOpen, ExternalLink, CheckCircle2, Circle } from "lucide-react";

const INITIAL_FOCUS = [
  { topic: "System Design & Enterprise Architecture patterns", done: false },
  { topic: "Advanced TypeScript — generics, decorators, utility types", done: true },
  { topic: "NestJS microservices & event-driven architecture", done: false },
  { topic: "Docker + Kubernetes fundamentals", done: false },
  { topic: "CI/CD pipelines with GitHub Actions", done: true },
  { topic: "OpenAI API — function calling, embeddings, RAG", done: false },
];

type SubLink = { label: string; href: string };
type Resource = { label: string; href?: string; note: string; subLinks?: SubLink[] };

const LEARNING_RESOURCES: Resource[] = [
  {
    label: "My Flash Cards",
    note: "Personal spaced-repetition system — cards, cheat sheets & quiz practice",
    subLinks: [
      { label: "Flash Cards", href: "https://tanhoang0803.github.io/Fash-Cards-for-my-Life/" },
      { label: "Cheat Sheet", href: "https://tanhoang0803.github.io/Fash-Cards-for-my-Life/cheatsheet.html" },
      { label: "Quiz Space", href: "https://interview-quiz-space.vercel.app/" },
    ],
  },
  {
    label: "Codecademy",
    href: "https://www.codecademy.com/learn?page=learning",
    note: "Interactive coding courses & career paths",
  },
  {
    label: "Udemy",
    href: "https://www.udemy.com/home/my-courses/learning/",
    note: "Video courses — system design, cloud & backend",
  },
];

export default function Learning() {
  const [focus, setFocus] = useState(INITIAL_FOCUS);

  useEffect(() => {
    const saved = localStorage.getItem("learning-focus");
    if (saved) setFocus(JSON.parse(saved));
  }, []);

  function toggle(index: number) {
    const updated = focus.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setFocus(updated);
    localStorage.setItem("learning-focus", JSON.stringify(updated));
  }

  return (
    <section id="learning" className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase mb-2">
            02. learning
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
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
              {focus.map(({ topic, done }, i) => (
                <li key={topic}>
                  <button
                    onClick={() => toggle(i)}
                    className="flex items-start gap-3 w-full text-left group cursor-pointer"
                    aria-label={done ? `Mark "${topic}" as not done` : `Mark "${topic}" as done`}
                  >
                    {done ? (
                      <CheckCircle2 size={16} className="text-[#06b6d4] shrink-0 mt-0.5 transition-transform group-hover:scale-110" />
                    ) : (
                      <Circle size={16} className="text-gray-600 shrink-0 mt-0.5 group-hover:text-[#06b6d4] transition-colors" />
                    )}
                    <span className={`text-sm leading-relaxed transition-all ${
                      done ? "text-gray-400 line-through" : "text-gray-300 group-hover:text-white"
                    }`}>
                      {topic}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + quote */}
          <div className="space-y-6">
            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                Resources
              </h3>
              <div className="space-y-3">
                {LEARNING_RESOURCES.map(({ label, href, note, subLinks }) =>
                  subLinks ? (
                    <div
                      key={label}
                      className="p-4 rounded-xl border border-border bg-background"
                    >
                      <p className="text-sm font-medium text-foreground mb-0.5">{label}</p>
                      <p className="text-xs text-gray-400 mb-3">{note}</p>
                      <div className="flex flex-wrap gap-2">
                        {subLinks.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border border-[#06b6d4]/30 text-[#06b6d4] hover:bg-[#06b6d4]/10 transition-colors"
                          >
                            {s.label}
                            <ExternalLink size={10} />
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start justify-between p-4 rounded-xl border border-border bg-background hover:border-[#06b6d4]/40 hover:bg-[#06b6d4]/5 transition-all group"
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-[#06b6d4] transition-colors">
                          {label}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{note}</p>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-gray-600 group-hover:text-[#06b6d4] transition-colors shrink-0 mt-0.5"
                      />
                    </a>
                  )
                )}
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
