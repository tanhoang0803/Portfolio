import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#06b6d4]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#2563eb]/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
          <span className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animation-delay-100 text-5xl sm:text-7xl font-bold text-white leading-tight mb-4">
          Junior{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-[#2563eb]">
            Full-Stack
          </span>
          <br />
          Engineer
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up animation-delay-200 text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-4 leading-relaxed">
          Building scalable enterprise systems with AI
        </p>
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-10">
          Aiming to become a{" "}
          <span className="text-gray-400">
            Senior Enterprise Infrastructure Architect
          </span>
        </p>

        {/* CTAs */}
        <div className="animate-fade-up animation-delay-300 flex gap-4 justify-center flex-wrap mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-[#06b6d4] text-[#0a0a0a] font-semibold hover:bg-[#06b6d4]/90 transition-all hover:scale-105 active:scale-100"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-[#374151] text-gray-300 hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all hover:scale-105 active:scale-100"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll hint */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-gray-500 hover:text-[#06b6d4] transition-colors"
          aria-label="Scroll to About"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
