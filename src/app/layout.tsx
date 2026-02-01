import type { Metadata } from "next";
import { Outfit, Playfair_Display, Dancing_Script, Great_Vibes, Sacramento } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sacramento",
});

export const metadata: Metadata = {
  title: "Kushagra | Developer & AI Enthusiast",
  description: "Portfolio of Kushagra, a Developer and AI Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${playfair.variable} ${dancingScript.variable} ${greatVibes.variable} ${sacramento.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
