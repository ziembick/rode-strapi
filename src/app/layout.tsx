import type { Metadata } from "next";
import { Baloo_2, Inter, Lato, Open_Sans } from "next/font/google";
import "../styles/styles.sass";
import Footer from "./components/footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createClient } from "@supabase/supabase-js";
import {
  SessionContextProvider,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import AppProviders from "./AppProviders";

// import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo2",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Rode Ziembick - Psicanalista",
  description: "Rode Ziembick - Psicanalista",
};

const supabase = createClient(
  "https://xlaljpesbddiizjsowua.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWxqcGVzYmRkaWl6anNvd3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NzEwMTksImV4cCI6MjAzMjQ0NzAxOX0.gqr4bdSI6nFqt3j-2UrW263w8gKsfdR0y6eap2VM6rU"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProviders>
      <html lang="pt-BR">
        <body
          className={` ${openSans.className} ${openSans.variable} ${lato.variable} ${baloo.variable} ${baloo.className}`}
        > 
          {children}
          <Footer />
        </body>
      </html>
    </AppProviders>
  );
}
