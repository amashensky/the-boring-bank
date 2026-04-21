import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import NavWrapper from "@/components/NavWrapper";
import Footer from "@/components/Footer";
import "./globals.css";

// OG typography: EB Garamond for display/serif, Inter for body/UI.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: "The Boring Bank. The Investment Bank for LP-Led Secondaries.",
  description:
    "Faster liquidity. Better pricing. The sub-$100M LP-led secondary specialist.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "The Boring Bank",
    description: "The Investment Bank for LP-Led Secondaries.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <NavWrapper />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
