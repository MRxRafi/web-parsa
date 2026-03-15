import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parsa Fathi - Asesores y Abogados | Despacho en Alicante",
  description: "Asesoramiento legal personalizado con ética y profesionalidad. Dirección del letrado Parsa Fathi Mollamirzaei.",
  icons: {
    icon: "/favicon.ico",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-legal-gold selection:text-legal-black`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
