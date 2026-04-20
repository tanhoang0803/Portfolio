import { NAV_LINKS } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-[#374151] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="relative w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}
            >
              <span className="absolute top-1 left-1 w-2 h-0.5 rounded-full bg-[#06b6d4]" />
              <span className="absolute right-1 top-2 w-0.5 h-2 rounded-full bg-orange-400" />
              <span className="text-white font-extrabold text-[9px] tracking-tight">TH</span>
            </span>
            <span className="text-sm font-medium text-white">Tan Hoang</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-[#06b6d4] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © 2026 Tan Hoang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
