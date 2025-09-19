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

  const refToHashMap = {
    heroRef: "home",
    atuacaoRef: "area-de-atuacao",
    sobreRef: "sobre-mim",
    psicanaliseRef: "psicanalise",
    depoimentosRef: "depoimentos",
    atencaoRef: "atencao",
    contatoRef: "contato"
  };

  // Mapeamento reverso: hash para ref
  const hashToRefMap = Object.fromEntries(
    Object.entries(refToHashMap).map(([key, value]) => [value, key])
  );

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>, updateUrl = true) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      
      // Atualiza a URL com o hash correspondente
      if (updateUrl) {
        const refKey = Object.keys(refToHashMap).find(
          key => refToHashMap[key as keyof typeof refToHashMap] === sectionRef.current?.id
        );
        
        if (refKey) {
          const hash = refToHashMap[refKey as keyof typeof refToHashMap];
          window.history.pushState(null, "", `#${hash}`);
        }
      }
    }
  };

  // Função para fazer scroll baseado no hash da URL
  const scrollToSectionByHash = (hash: string) => {
    const refKey = hashToRefMap[hash] as keyof typeof refToHashMap;
    if (refKey) {
      const refs = {
        heroRef,
        atuacaoRef,
        psicanaliseRef,
        ajudarRef,
        sobreRef,
        depoimentosRef,
        atencaoRef,
        contatoRef,
      };
      
      const targetRef = refs[refKey];
      if (targetRef) {
        scrollToSection(targetRef, false); // false para não atualizar a URL novamente
      }
    }
  };

  // Listener para mudanças na URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove o #
      if (hash) {
        scrollToSectionByHash(hash);
      }
    };

    // Verifica se há hash na URL inicial
    const initialHash = window.location.hash.slice(1);
    if (initialHash) {
      // Pequeno delay para garantir que os componentes estejam renderizados
      setTimeout(() => {
        scrollToSectionByHash(initialHash);
      }, 100);
    }

    // Listener para mudanças no hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "./novoBgFullHelp.svg";
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
      <div ref={heroRef} id="home">
        <Hero />
      </div>
      <div ref={atuacaoRef} id="area-de-atuacao">
        <Atuacao />
      </div>
      <div ref={sobreRef} id="sobre-mim">
        <Sobre />
      </div>
      <div
        className="backgroundContainer"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        }}
      >
        <div ref={psicanaliseRef} id="psicanalise">
          <Psicanalise />
        </div>
        <div ref={depoimentosRef} id="depoimentos">
          <Depoimentos />
        </div>
      </div>

      {/* <div ref={ajudarRef}>
        <Ajudar />
      </div> */}
      <div ref={atencaoRef} id="atencao">
        <Atencao />
      </div>
      <div ref={contatoRef} id="contato">
        {/* <Contato />  */}
      <SemiFooter />
      </div>
    </>
  );
};

export default Home;
