import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Indigen Technologies | Industrial Software & Engineering Solutions",
  description:
    "Indigen Technologies delivers industrial software, automation, simulation and engineering solutions for manufacturing, medical technology and power industries.",
  openGraph: {
    title: "Indigen Technologies",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}