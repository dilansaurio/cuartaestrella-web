import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarCursor from "@/components/ui/StarCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Observatorio Cuarta Estrella",
    template: "%s | Observatorio Cuarta Estrella",
  },
  description:
    "Observatorio astronómico abierto al público. Ven a mirar las estrellas con telescopios profesionales bajo cielos despejados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased bg-background text-foreground">
        <StarCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
