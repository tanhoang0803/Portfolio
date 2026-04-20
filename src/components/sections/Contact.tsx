"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

function GitHubIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
  );
}

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/tanhoang0803", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/tanqhoang080396/", Icon: LinkedInIcon },
  { label: "LeetCode", href: "https://leetcode.com/u/tanhoang0803/", Icon: LeetCodeIcon },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-[#06b6d4] text-xs font-mono tracking-widest uppercase mb-2">
            05. contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Let&apos;s Connect
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#2563eb]" />
          <p className="text-gray-400 text-sm mt-4 max-w-md">
            I&apos;m open to opportunities and collaborations. Drop me a message
            and I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:hoangquoctan.1996@gmail.com"
                className="text-gray-300 hover:text-[#06b6d4] transition-colors text-sm"
              >
                hoangquoctan.1996@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                Find me on
              </p>
              <div className="flex gap-4">
                {SOCIAL.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl border border-border bg-surface flex items-center justify-center text-gray-500 hover:text-[#06b6d4] hover:border-[#06b6d4]/40 transition-all"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#06b6d4]/20 bg-[#06b6d4]/5">
              <p className="text-xs text-[#06b6d4] font-mono">
                &gt; Currently open to full-time & freelance roles
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 py-12 text-center">
                <CheckCircle2 size={40} className="text-[#06b6d4]" />
                <p className="text-foreground font-medium">Message sent!</p>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-2 text-xs text-[#06b6d4] hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-gray-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder-gray-600 focus:outline-none focus:border-[#06b6d4]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-gray-400 mb-1.5">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder-gray-600 focus:outline-none focus:border-[#06b6d4]/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs text-gray-400 mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Job opportunity / Collaboration / ..."
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder-gray-600 focus:outline-none focus:border-[#06b6d4]/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-gray-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    className="w-full px-3 py-2.5 rounded-lg border border-border bg-surface text-sm text-foreground placeholder-gray-600 focus:outline-none focus:border-[#06b6d4]/60 transition-colors resize-none"
                  />
                </div>

                {state === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs">
                    <AlertCircle size={14} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#06b6d4] text-[#0a0a0a] font-semibold text-sm hover:bg-[#06b6d4]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {state === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
