import type { Metadata } from "next";
import { Inter, Lato, Open_Sans } from "next/font/google";
import "../styles/styles.sass";
import Header from "./components/header";
import Footer from "./components/footer";
// import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

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
        className={` ${openSans.className} ${openSans.variable} ${lato.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
