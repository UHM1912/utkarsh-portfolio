import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh Misra | Data Science & AI/ML Engineer",
  description:
    "Personal portfolio of Utkarsh Misra, a data science and AI/ML engineer working across AI agents, computer vision, generative AI, research, and intelligent systems.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
