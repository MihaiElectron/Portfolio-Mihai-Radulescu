import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Portfolio – Mia",
  description: "Portfolio professionnel développé avec Next.js, Sass et Tailwind.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
