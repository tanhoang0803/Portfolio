import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-r from-[#0f2460] via-[#1d4ed8] to-[#06b6d4]"
    >
      {/* Decorative glow circle — bottom left */}
      <div
        className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-white/5 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Decorative glow circle — top right */}
      <div
        className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full bg-[#06b6d4]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-white/90 text-xs font-mono tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up animation-delay-100 text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Junior{" "}
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Full-Stack
          </span>
          <br />
          Engineer
        </h1>

        {/* Subheadlines */}
        <p className="animate-fade-up animation-delay-200 text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-3 leading-relaxed">
          Building scalable enterprise systems with AI
        </p>
        <p className="text-white/60 text-sm max-w-md mx-auto mb-10">
          Aiming to become a Senior Enterprise Infrastructure Architect
        </p>

        {/* CTAs */}
        <div className="animate-fade-up animation-delay-300 flex gap-4 justify-center flex-wrap mb-16">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white text-[#1d4ed8] font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-100 shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/60 text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 active:scale-100"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll hint */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
          aria-label="Scroll to About"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
