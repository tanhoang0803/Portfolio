import { NAV_LINKS } from "@/constants/navigation";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#1e3a5f] bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src="/TH.png" alt="TH" width={28} height={28} className="rounded-xl" />
            <span className="text-sm font-medium text-foreground">Tan Hoang</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-[#06b6d4] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © 2026 Tan Hoang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
