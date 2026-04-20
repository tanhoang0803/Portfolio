import { NAV_LINKS } from "@/constants/navigation";
import THMonogram from "@/components/ui/THMonogram";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <THMonogram size={28} uid="footer" />
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
