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
  title: "Auth Secret Generator - Secure Keys for NextAuth, Supabase & Clerk",
  description:
    "Generate secure, high-entropy random secrets for Next.js, Supabase, Clerk, and JWT. 100% client-side generation for maximum security.",

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
    title: "Auth Secret Generator - Secure Keys for NextAuth, Supabase & Clerk",
    description:
      "Generate secure, high-entropy random secrets for Next.js, Supabase, Clerk, and JWT. 100% client-side generation for maximum security.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auth Secret Generator - Secure Keys for NextAuth, Supabase & Clerk",
    description:
      "Generate secure, high-entropy random secrets for Next.js, Supabase, Clerk, and JWT. 100% client-side generation for maximum security.",
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
