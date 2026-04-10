import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name — Personal Website",
  description: "Personal website, blog, and portfolio.",
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
        <Navbar />
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
