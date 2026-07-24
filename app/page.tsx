"use client";

import { useState, useEffect, useCallback } from "react";

type Template = "nextauth" | "supabase" | "generic";

function generateSecret(length: number = 48): string {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes));
}

export default function Home() {
  const [secret, setSecret] = useState<string>("");
  const [template, setTemplate] = useState<Template>("nextauth");
  const [copied, setCopied] = useState(false);
  const [templateCopied, setTemplateCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setSecret(generateSecret());
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);
    setSecret(generateSecret());
    setTimeout(() => setIsGenerating(false), 500);
  };

  const handleCopySecret = async () => {
    await navigator.clipboard.writeText(secret);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const templateContent = useCallback(() => {
    switch (template) {
      case "nextauth":
      case "supabase":
      case "generic":
        return `AUTH_SECRET=${secret}`;
    }
  }, [secret, template]);

  const handleCopyTemplate = async () => {
    await navigator.clipboard.writeText(templateContent());
    setTemplateCopied(true);
    setTimeout(() => setTemplateCopied(false), 1500);
  };

  const options: { value: Template; label: string; color: string }[] = [
    { value: "nextauth", label: "NextAuth.js", color: "#FFD43B" },
    { value: "supabase", label: "Supabase", color: "#7C3AED" },
    { value: "generic", label: "General", color: "#1a1a1a" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f0eb] px-4 py-12">
      <div className="flex w-full max-w-2xl flex-col items-center gap-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-black tracking-tighter text-[#1a1a1a] sm:text-6xl whitespace-nowrap">
            Auth Secret Generator
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Generate secure random secrets for your .env
          </p>
        </div>

        {/* Secret Display */}
        <div className="w-full">
          <div
            className="relative rounded-[8px] bg-white p-4 pr-28 border-[4px] border-[#1a1a1a]"
            style={{ boxShadow: "8px 8px 0px #1a1a1a" }}
          >
            <div className="font-mono text-lg text-[#1a1a1a] break-all pr-4">
              {secret}
            </div>
            <button
              onClick={handleCopySecret}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 rounded-[8px] bg-[#1a1a1a] px-4 py-2 text-sm font-bold text-white border-[4px] border-[#1a1a1a]"
              style={{ boxShadow: "4px 4px 0px #1a1a1a", transition: "all 0.05s" }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = "1px 1px 0px #1a1a1a";
                e.currentTarget.style.transform = "translate(3px, 3px)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px #1a1a1a";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px #1a1a1a";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              {copied ? (
                <>
                  <span className="text-green-400">✓</span>
                  Copied!
                </>
              ) : (
                <>
                  <span>📋</span>
                  Copy
                </>
              )}
            </button>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className={`w-full rounded-[8px] bg-[#FFD43B] px-6 py-4 text-base font-bold text-[#1a1a1a] border-[4px] border-[#1a1a1a] sm:w-auto ${
            isGenerating ? "animate-pulse" : ""
          }`}
          style={{
            boxShadow: "8px 8px 0px #1a1a1a",
            transform: "translate(0, 0)",
            transition: "all 0.05s",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.boxShadow = "2px 2px 0px #1a1a1a";
            e.currentTarget.style.transform = "translate(6px, 6px)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.boxShadow = "8px 8px 0px #1a1a1a";
            e.currentTarget.style.transform = "translate(0, 0)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "8px 8px 0px #1a1a1a";
            e.currentTarget.style.transform = "translate(0, 0)";
          }}
        >
          ⚡ Generate New Secret
        </button>

        {/* Template Selector */}
        <div className="flex flex-wrap justify-center gap-3">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setTemplate(opt.value)}
              className="rounded-[8px] px-5 py-3 text-sm font-bold border-[4px] border-[#1a1a1a]"
              style={{
                boxShadow:
                  template === opt.value
                    ? "6px 6px 0px #1a1a1a"
                    : "4px 4px 0px #1a1a1a",
                transform:
                  template === opt.value ? "translate(-2px, -2px)" : "translate(0, 0)",
                backgroundColor: opt.color,
                color: opt.color === "#1a1a1a" ? "white" : "#1a1a1a",
                transition: "all 0.05s",
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = "2px 2px 0px #1a1a1a";
                e.currentTarget.style.transform = "translate(4px, 4px)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow =
                  template === opt.value
                    ? "6px 6px 0px #1a1a1a"
                    : "4px 4px 0px #1a1a1a";
                e.currentTarget.style.transform =
                  template === opt.value ? "translate(-2px, -2px)" : "translate(0, 0)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  template === opt.value
                    ? "6px 6px 0px #1a1a1a"
                    : "4px 4px 0px #1a1a1a";
                e.currentTarget.style.transform =
                  template === opt.value ? "translate(-2px, -2px)" : "translate(0, 0)";
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Env Template */}
        <div className="w-full">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-[8px] bg-[#1a1a1a] px-3 py-1.5 text-sm font-bold text-white border-[4px] border-[#1a1a1a]">
              .env Template
            </span>
            <button
              onClick={handleCopyTemplate}
              className="flex items-center gap-2 rounded-[8px] bg-[#7C3AED] px-4 py-2 text-sm font-bold text-white border-[4px] border-[#1a1a1a]"
              style={{ boxShadow: "4px 4px 0px #1a1a1a", transition: "all 0.05s" }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = "1px 1px 0px #1a1a1a";
                e.currentTarget.style.transform = "translate(3px, 3px)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px #1a1a1a";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px #1a1a1a";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              {templateCopied ? (
                <>
                  <span className="text-green-400">✓</span>
                  Copied!
                </>
              ) : (
                <>
                  <span>📋</span>
                  Copy
                </>
              )}
            </button>
          </div>
          <pre
            className="w-full rounded-[8px] bg-[#1a1a1a] p-5 font-mono text-sm text-white whitespace-pre-wrap border-[4px] border-[#1a1a1a]"
            style={{ boxShadow: "8px 8px 0px #1a1a1a" }}
          >
            {templateContent()}
          </pre>
        </div>

        {/* Trust Badge */}
        <div
          className="mt-4 flex items-center gap-2 rounded-[8px] bg-green-400 px-4 py-2 text-sm font-bold text-[#1a1a1a] border-[4px] border-[#1a1a1a]"
          style={{ boxShadow: "4px 4px 0px #1a1a1a" }}
        >
          🔒 Local Only · Never leaves your browser
        </div>

        {/* Footer SEO Text */}
        <div className="mt-8 max-w-xl text-center text-sm leading-relaxed text-gray-400">
          <p className="mb-3 font-semibold text-gray-500">
            Why use this Auth Secret Generator?
          </p>
          <p className="mb-3">
            When setting up modern web applications, a secure, high-entropy
            secret key is essential for protecting user sessions and data. This
            tool provides a fast and reliable way to generate cryptographically
            strong random strings for your .env files.
          </p>
          <p className="mb-3">
            Whether you need a NEXTAUTH_SECRET for Next.js, a
            SUPABASE_AUTH_JWT_SECRET, or a secure key for Clerk, Lucia Auth, or
            Prisma, our generator ensures your application meets industry
            security standards.
          </p>
          <p>
            <strong className="text-gray-500">Security First:</strong> All
            secrets are generated locally in your browser using the Web Crypto
            API. No data is ever sent to a server, ensuring your keys remain
            private and secure.
          </p>
        </div>
      </div>
    </div>
  );
}
