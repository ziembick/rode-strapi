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

const Home = () => {
  const heroRef = useRef(null);
  const atuacaoRef = useRef(null);
  const psicanaliseRef = useRef(null);
  const ajudarRef = useRef(null);
  const sobreRef = useRef(null);
  const depoimentosRef = useRef(null);
  const atencaoRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollToSection = (sectionRef: any) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image()
    img.src = '/bgfull.png'
    img.onload = () => setBackgroundImage(img.src)
  }, [])

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
      <div
        className="backgroundContainer"
        style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
      >
        <div ref={depoimentosRef}>
          <Depoimentos />
        </div>
        <div ref={psicanaliseRef}>
          <Psicanalise />
        </div>
      </div>
      <div ref={ajudarRef}>
        <Ajudar />
      </div>
      <div ref={sobreRef}>
        <Sobre />
      </div>
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
