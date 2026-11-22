import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lets-importnow.vercel.app"),
  title: "Let's ImportNow — Import Directly from China to India",
  description: "Sourcing, factory inspection, shipping and customs, handled end to end by a team with its own company in Shanghai. You choose the product. We bring it to your door.",
  keywords: ["import", "china", "india", "sourcing", "shipping", "customs", "factory inspection"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Let's ImportNow — Import Directly from China to India",
    description: "Sourcing, factory inspection, shipping and customs, handled end to end by a team with its own company in Shanghai.",
    url: "https://lets-importnow.vercel.app",
    siteName: "Let's ImportNow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
