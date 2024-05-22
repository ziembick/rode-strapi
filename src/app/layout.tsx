import type { Metadata } from "next";
import { Baloo_2, Inter, Lato, Open_Sans } from "next/font/google";
import "../styles/styles.sass";

import Footer from "./components/footer";
import Headless from "./components/headless";
import { Header } from "./components/header";
// import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

const baloo = Baloo_2({
  subsets: ['latin'],
  weight:['400', '500', '600', '700', '800'],
  variable: "--font-baloo2"
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Rode Ziembick - Psicanalista",
  description: "Rode Ziembick - Psicanalista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` ${openSans.className} ${openSans.variable} ${lato.variable} ${baloo.variable} ${baloo.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
