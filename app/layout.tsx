import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auth Secret Generator | Secure Keys for Next.js, Supabase & Clerk",
  description:
    "Generate high-entropy, secure random secrets for Next.js, Auth.js, Supabase, and more. 100% local generation, never leaves your browser. Optimized for indie hackers and developers.",
  keywords: [
    "auth secret",
    "nextauth secret",
    "supabase secret",
    "random string generator",
    "developer tools",
    "neo-brutalism ui",
    "auth.js",
    "clerk secret",
    "env secrets",
  ],
  openGraph: {
    title: "Auth Secret Generator",
    description:
      "Generate high-entropy, secure random secrets for your apps. 100% local, never leaves your browser.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auth Secret Generator",
    description:
      "Generate high-entropy, secure random secrets for your apps. 100% local, never leaves your browser.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
