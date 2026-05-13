import type { Metadata } from "next";
import { Baloo_2, Inter, Lato, Open_Sans } from "next/font/google";
import "../styles/styles.sass";
import Footer from "./components/footer/footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createClient } from "@supabase/supabase-js";
import {
  SessionContextProvider,
  useSession,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import AppProviders from "./AppProviders";
// import Header from "./components/header";
import WhatsAppBtn from "./components/whatsappBtn";
import { GoogleTagManager } from "@next/third-parties/google";
// import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next";

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
  description:
    "Rode Ziembick - Psicanalista em São Paulo. Atendimento online e presencial no Brooklin e Vila Olimpia. Sessão de psicanálise, terapia online, consultório de psicanálise.",
};

const supabase = createClient(
  "https://xlaljpesbddiizjsowua.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWxqcGVzYmRkaWl6anNvd3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NzEwMTksImV4cCI6MjAzMjQ0NzAxOX0.gqr4bdSI6nFqt3j-2UrW263w8gKsfdR0y6eap2VM6rU",
);

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.rodepsi.com/#rode-ziembick",
      name: "Rode Ziembick",
      jobTitle: "Psicanalista",
      description:
        "Rode Ziembick é psicanalista com consultórios em São Paulo (Vila Olímpia, Brooklin e Moema), palestrante e mentora de carreira. Atende adultos com foco em ansiedade, trauma, procrastinação, sexualidade e desenvolvimento pessoal. Abordagem baseada em Freud, Klein e Lacan.",
      url: "https://www.rodepsi.com",
      image: "https://www.rodepsi.com/logoRVerde.svg",
      sameAs: [
        "https://www.tiktok.com/@rodeziembick",
        "https://twitter.com/rodeziem",
        "https://www.facebook.com/rode.ziembick",
        "https://www.linkedin.com/in/rode-ziembick",
        "https://www.doctoralia.com.br/psicanalista/rode-ziembick",
      ],
      knowsAbout: [
        "Psicanálise",
        "Psicanálise Freudiana",
        "Psicanálise Kleiniana",
        "Psicanálise Lacaniana",
        "Transtorno de ansiedade",
        "Trauma emocional",
        "Procrastinação",
        "Sexualidade",
        "Orientação profissional",
        "Mentoria de carreira",
        "Terapia de casal",
        "Psicanálise para mulheres",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Psicanalista",
        occupationLocation: {
          "@type": "City",
          name: "São Paulo",
        },
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.rodepsi.com/#negocio",
      name: "Rode Ziembick – Psicanalista",
      alternateName: "RodePsi",
      url: "https://www.rodepsi.com",
      logo: "https://www.rodepsi.com/logoRVerde.svg",
      description:
        "Consultório de psicanálise em São Paulo com atendimento presencial em Vila Olímpia, Brooklin (Market Place) e Moema, além de teleconsulta. Especializada em ansiedade, trauma, procrastinação, sexualidade e mentoria de carreira.",
      telephone: "+55-11-XXXXX-XXXX",
      priceRange: "R$ 300",
      paymentAccepted:
        "Dinheiro, Pix, Cartão de crédito, Transferência bancária",
      currenciesAccepted: "BRL",
      medicalSpecialty: "Psychiatry",
      availableService: [
        { "@type": "MedicalTherapy", name: "Psicanálise individual" },
        { "@type": "MedicalTherapy", name: "Terapia de casal" },
        { "@type": "MedicalTherapy", name: "Teleconsulta de psicanálise" },
        { "@type": "Service", name: "Mentoria de carreira" },
        { "@type": "Service", name: "Palestra sobre saúde mental" },
      ],
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "Rua Gomes de Carvalho, 1356",
          addressLocality: "Vila Olímpia",
          addressRegion: "SP",
          addressCountry: "BR",
          postalCode: "04547-005",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Av. Dr. Chucri Zaidan, 940 – Torre II, 3° andar",
          addressLocality: "Brooklin",
          addressRegion: "SP",
          addressCountry: "BR",
          postalCode: "04583-110",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Av. dos Carinás, 185",
          addressLocality: "Moema",
          addressRegion: "SP",
          addressCountry: "BR",
          postalCode: "04049-000",
        },
      ],
      areaServed: { "@type": "City", name: "São Paulo" },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-23.5975",
        longitude: "-46.6871",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      founder: { "@id": "https://www.rodepsi.com/#rode-ziembick" },
      sameAs: [
        "https://www.doctoralia.com.br/psicanalista/rode-ziembick",
        "https://www.tiktok.com/@rodeziembick",
        "https://www.facebook.com/rode.ziembick",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rodepsi.com/#website",
      url: "https://www.rodepsi.com",
      name: "Rode Ziembick – Psicanalista",
      description:
        "Site oficial da psicanalista Rode Ziembick. Artigos sobre psicanálise, saúde mental e mentoria de carreira.",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://www.rodepsi.com/#rode-ziembick" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.rodepsi.com/posts?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é psicanálise e como funciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A psicanálise é uma abordagem terapêutica criada por Sigmund Freud que investiga os conteúdos inconscientes que influenciam o comportamento, os sintomas e o sofrimento psíquico. Por meio da associação livre e da escuta analítica, o processo busca que o paciente elabore conflitos internos, traumas e padrões repetitivos, promovendo transformação subjetiva e bem-estar duradouro.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre psicanálise e psicoterapia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A psicanálise tem como foco a investigação profunda do inconsciente, dos padrões relacionais e da história de vida do sujeito, geralmente com maior frequência de sessões e processo de longa duração. A psicoterapia é um termo mais amplo que abrange diversas abordagens — como TCC e terapia breve — com foco muitas vezes mais sintomático. A psicanálise não se limita a 'funcionar melhor', mas a viver melhor com aquilo que a história do sujeito trouxe.",
      },
    },
    {
      "@type": "Question",
      name: "Quantas sessões de psicanálise são necessárias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A psicanálise não tem um número fixo de sessões. O processo é singular para cada pessoa: depende da demanda, dos objetivos e do ritmo de elaboração de cada sujeito. Algumas pessoas sentem transformações significativas em meses; outras se beneficiam de um processo mais longo. O que define o término é a diminuição do sofrimento e a ampliação da autonomia do paciente.",
      },
    },
    {
      "@type": "Question",
      name: "A psicanálise atende online (teleconsulta)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Rode Ziembick realiza atendimentos de psicanálise por teleconsulta, além dos consultórios presenciais em Vila Olímpia, Brooklin (Market Place) e Moema, em São Paulo.",
      },
    },
    {
      "@type": "Question",
      name: "A psicanálise trata ansiedade e transtornos de ansiedade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A psicanálise é indicada para o tratamento de ansiedade, pânico, fobias e outros transtornos de ansiedade. A abordagem não busca apenas suprimir os sintomas, mas compreender o conflito inconsciente que os sustenta, promovendo uma transformação mais profunda e duradoura.",
      },
    },
    {
      "@type": "Question",
      name: "O que é mentoria de carreira com base na psicanálise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A mentoria de carreira com base psicanalítica une orientação profissional e escuta clínica para compreender os bloqueios inconscientes que impactam a vida profissional — como procrastinação, autossabotagem, medo do sucesso e dificuldades de liderança. Rode Ziembick combina sua experiência como psicanalista e palestrante para oferecer esse serviço diferenciado.",
      },
    },
  ],
};

const articlePage = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "[URL_COMPLETA_DO_ARTIGO]#article",
  headline: "[TÍTULO DO ARTIGO]",
  description: "[META-DESCRIPTION DO ARTIGO — até 160 caracteres]",
  image: {
    "@type": "ImageObject",
    url: "[URL_DA_IMAGEM_DO_ARTIGO]",
    width: 1200,
    height: 630,
  },
  datePublished: "[YYYY-MM-DD]",
  dateModified: "[YYYY-MM-DD]",
  inLanguage: "pt-BR",
  url: "[URL_COMPLETA_DO_ARTIGO]",
  author: {
    "@type": "Person",
    "@id": "https://www.rodepsi.com/#rode-ziembick",
    name: "Rode Ziembick",
    jobTitle: "Psicanalista",
    url: "https://www.rodepsi.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Rode Ziembick – Psicanalista",
    url: "https://www.rodepsi.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.rodepsi.com/logoRVerde.svg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "[URL_COMPLETA_DO_ARTIGO]",
  },
  articleSection: "[CATEGORIA — ex: Sintomas, Carreira, Relacionamentos]",
  keywords:
    "[PALAVRA-CHAVE-1], [PALAVRA-CHAVE-2], [PALAVRA-CHAVE-3], psicanálise, Rode Ziembick",
  about: {
    "@type": "Thing",
    name: "[TEMA PRINCIPAL DO ARTIGO]",
  },
  isPartOf: {
    "@id": "https://www.rodepsi.com/#website",
  },
};


const separedArticle = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.rodepsi.com/articles/os-motivos-da-procrastinacao-uma-analise-psicanalitica#article",
  "headline": "Os Motivos da Procrastinação: Uma Análise Psicanalítica",
  "description": "Entenda os mecanismos inconscientes por trás da procrastinação segundo Freud, Klein, Lacan e Winnicott. Por Rode Ziembick, psicanalista em São Paulo.",
  "image": {
    "@type": "ImageObject",
    "url": "https://images.ctfassets.net/vcctu5c8vsjz/4dUEOQqTTH4aI8JqKBERSG/b5ff60c08cc4ec05733953d5f99e1cc3/Proscrastinar.jpg",
    "width": 1200,
    "height": 630
  },
  "datePublished": "2024-06-23",
  "dateModified": "2024-06-23",
  "inLanguage": "pt-BR",
  "url": "https://www.rodepsi.com/articles/os-motivos-da-procrastinacao-uma-analise-psicanalitica",
  "author": {
    "@type": "Person",
    "@id": "https://www.rodepsi.com/#rode-ziembick",
    "name": "Rode Ziembick",
    "jobTitle": "Psicanalista",
    "url": "https://www.rodepsi.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Rode Ziembick – Psicanalista",
    "url": "https://www.rodepsi.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rodepsi.com/logoRVerde.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.rodepsi.com/articles/os-motivos-da-procrastinacao-uma-analise-psicanalitica"
  },
  "articleSection": "Sintomas",
  "keywords": "procrastinação, psicanálise, autossabotagem, superego, medo do sucesso, Freud, Lacan, Klein, Winnicott, Rode Ziembick",
  "about": {
    "@type": "Thing",
    "name": "Procrastinação"
  },
  "isPartOf": {
    "@id": "https://www.rodepsi.com/#website"
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProviders>
      <html lang="pt-BR">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articlePage) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articlePage) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(separedArticle) }}
          />
        </head>
        <body
          className={`${openSans.className} ${openSans.variable} ${lato.variable} ${baloo.variable} ${baloo.className}`}
        >
          <GoogleTagManager gtmId="GTM-597W6MXB" />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-597W6MXB"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <WhatsAppBtn />
          {/* <BackToTop /> */}
          {children}
          <Analytics />
        </body>
      </html>
    </AppProviders>
  );
}
