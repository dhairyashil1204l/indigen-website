import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["500", "700", "800"] });
const plex = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Indigen Technologies | Industrial Software & Engineering Solutions",
  description:
    "Indigen Technologies delivers industrial software, automation, simulation and engineering solutions for manufacturing, medical technology and power industries.",
  openGraph: { title: "Indigen Technologies", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plex.variable}`}>
      <body>{children}</body>
    </html>
  );
}
