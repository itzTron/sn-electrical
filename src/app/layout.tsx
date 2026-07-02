import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { siteUrl } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SN Electrical Services",
    template: "%s | SN Electrical Services",
  },
  description:
    "Premium residential, commercial, and industrial electrical services with safety-first execution and trust-led support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
