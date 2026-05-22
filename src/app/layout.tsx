import type { Metadata } from "next";
import "../styles/main.scss";
import Navbar from "@/components/Navbar/Navbar";
import { JetBrains_Mono } from "next/font/google";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Portfolio – Mihai",
  description: "Portfolio professionnel développé avec Next.js et Sass.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={jetbrains.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
