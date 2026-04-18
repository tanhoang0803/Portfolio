export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="text-center px-4">
          <p className="text-[#06b6d4] text-sm font-mono mb-3 tracking-widest uppercase">
            Available for opportunities
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Junior Full-Stack{" "}
            <span className="text-[#06b6d4]">Engineer</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-8">
            Building scalable enterprise systems with AI
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-[#06b6d4] text-[#0a0a0a] font-semibold hover:bg-[#06b6d4]/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-[#374151] text-gray-300 hover:border-[#06b6d4] hover:text-[#06b6d4] transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="w-12 h-0.5 bg-[#06b6d4] mb-8" />
          <p className="text-gray-400 max-w-2xl">— section coming in Phase 3</p>
        </div>
      </section>

      {/* Learning Space */}
      <section id="learning" className="py-24 px-4 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            My Learning Space
          </h2>
          <div className="w-12 h-0.5 bg-[#06b6d4] mb-8" />
          <p className="text-gray-400">— section coming in Phase 3</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
          <div className="w-12 h-0.5 bg-[#06b6d4] mb-8" />
          <p className="text-gray-400">— section coming in Phase 3</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-4 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">
            Skills & Stacks
          </h2>
          <div className="w-12 h-0.5 bg-[#06b6d4] mb-8" />
          <p className="text-gray-400">— section coming in Phase 3</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-[#06b6d4] mb-8" />
          <p className="text-gray-400">— section coming in Phase 3</p>
        </div>
      </section>
    </>
  );
}
