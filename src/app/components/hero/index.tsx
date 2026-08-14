"use client";

import React, { useState, useEffect } from "react";
import styles from "./hero.module.sass";
import Image from "next/image";
import { FaLaptop } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import BtnAgende from "../btnAgende";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("hero");
      if (element) {
        const topPos = element.getBoundingClientRect().top;
        const bottomPos = element.getBoundingClientRect().bottom;
        const visible = topPos < window.innerHeight && bottomPos >= 0;
        setIsVisible(visible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar visibilidade no carregamento inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="hero" className={styles.heroBackground}>
       <Image
        src="./linhaHeroVerde2.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2
            className={styles.nome}

          >
            Rode Ziembick
          </h2>
          <h3
            className={styles.titulo}

          >
            Psicanalista
          </h3>
          <h4
            className={`${styles.comentario}`}
          >
            Psicanálise de orientação lacaniana e freudiana. Mais de 10 anos de clínica em São Paulo
          </h4>
          <p
            className={styles.textinho2}

          >
            A psicanálise possibilita elaborar sofrimentos e descobrir novas formas de se posicionar diante da vida.
          </p>
          <div
            className={styles.btnAgende}

          >
            <BtnAgende />
          </div>
          <div
            className={styles.laptop}

          >
            <p className={`${styles.ptag} pt-0`}>
              <FaLaptop size={25} className={styles.btnLap} />
              Atendimento
              <strong className={styles.boldText}>
                online
              </strong>
            </p>

            <p className={`${styles.ptag} pt-0`}>
              <LuSofa size={25} className={styles.btnLap} />
              Presencial em São Paulo na Vila Olímpia e Brooklin.
              
            </p>

          </div>
        </div>
        <div
          className={styles.imageContainer}

        >
          <Image
            className={styles.rodeImage}
            src="./heroRode2.svg"
            alt="Rode Ziembick"
            layout="responsive"
            width={700}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
