import type { Metadata } from "next";
import "./globals.css";
import "../public/fonts/fonts.css";

export const metadata: Metadata = {
  title: "LearnPath - Personalized Learning Roadmaps",
  description: "Master any skill with customized learning paths that adapt to your schedule and learning style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>
      <body
        style={{ lineHeight: "1.1", letterSpacing: "-0.02em", fontFamily: "'Onest', sans-serif" }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
