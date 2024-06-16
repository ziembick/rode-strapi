"use client";

import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/hero";
import Contato from "./contato/page";
import Atuacao from "./components/atuacao";
import Ajudar from "./components/ajudar";
import Depoimentos from "./components/depoimentos";
import Sobre from "./components/sobre";
import Psicanalise from "./components/psicanalise";
import Atencao from "./components/atencao";
import SemiFooter from "./components/semifooter";
import Header from "./components/header";
import styles from "./page.module.sass";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const atuacaoRef = useRef<HTMLDivElement>(null);
  const psicanaliseRef = useRef<HTMLDivElement>(null);
  const ajudarRef = useRef<HTMLDivElement>(null);
  const sobreRef = useRef<HTMLDivElement>(null);
  const depoimentosRef = useRef<HTMLDivElement>(null);
  const atencaoRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/novoBgFullHelp.svg";
    img.onload = () => setBackgroundImage(img.src);
  }, []);

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        refs={{
          heroRef,
          atuacaoRef,
          psicanaliseRef,
          ajudarRef,
          sobreRef,
          depoimentosRef,
          atencaoRef,
          contatoRef,
        }}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={atuacaoRef}>
        <Atuacao />
      </div>
      <div ref={sobreRef}>
        <Sobre />
      </div>
      <div
        className="backgroundContainer"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        }}
      >
        <div ref={psicanaliseRef}>
          <Psicanalise />
        </div>
        <div ref={depoimentosRef}>
          <Depoimentos />
        </div>
      </div>

      {/* <div ref={ajudarRef}>
        <Ajudar />
      </div> */}
      <div ref={atencaoRef}>
        <Atencao />
      </div>
      <div ref={contatoRef}>
        <Contato />
      </div>
      <SemiFooter />
    </>
  );
};

export default Home;
