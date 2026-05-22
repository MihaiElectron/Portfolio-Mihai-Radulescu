import type { Metadata } from "next";
import "../styles/main.scss";
import Navbar from "@/components/Navbar/Navbar";

import { JetBrains_Mono, IBM_Plex_Mono } from "next/font/google";

// JetBrains Mono
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrains",
});

// IBM Plex Mono (toutes les weights)
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-plexmono",
});

export const metadata: Metadata = {
  title: "Portfolio – Mihai",
  description: "Portfolio professionnel développé avec Next.js et Sass.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${jetbrains.variable} ${plexMono.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
