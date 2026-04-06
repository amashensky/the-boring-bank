import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import NavWrapper from "@/components/NavWrapper";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Boring Bank. The Investment Bank for Secondaries.",
  description:
    "Faster liquidity. Better pricing. The sub-$100M secondary specialist for LPs and GPs.",
  openGraph: {
    title: "The Boring Bank",
    description: "The Investment Bank for Secondaries.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <NavWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
