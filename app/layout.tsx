import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monster Pet Game — Collect. Battle. Evolve.",
  description: "Hatch eggs, collect legendary pets, conquer dungeons in this mobile RPG adventure.",
  openGraph: {
    title: "Monster Pet Game",
    description: "Hatch eggs, collect legendary pets, conquer dungeons.",
    images: ["/assets/backgrounds/bg_main_menu.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
