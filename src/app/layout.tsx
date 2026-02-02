import type { Metadata } from "next";
import { Outfit, Playfair_Display, Dancing_Script, Great_Vibes, Sacramento } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeBulb from "@/components/ThemeBulb";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Restore font configurations
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${playfair.variable} ${dancingScript.variable} ${greatVibes.variable} ${sacramento.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          {children}
          {/* Global Theme Switcher available on all pages */}
          <ThemeBulb />
        </ThemeProvider>
      </body>
    </html>
  );
}
