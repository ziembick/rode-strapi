"use client";

import React, { useEffect, useRef, useState } from "react";
import BtnAgende from "../btnAgende";
import Image from "next/image";
import styles from "./sobre.module.sass";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Sobre() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("sobre");
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
    <div id="sobre" className={styles.relativeContainer}>
      <div className={styles.imagemDeTopo}>
        <Image
          src="./bordinha.svg"
          alt="Image topo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.bgContainer}>
        <div className={`${styles.sobre} container`}>
          <div className={styles.textContainer}>
            <motion.h1
              className={styles.mainTitle}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.2,
              }}
            >
              Sobre mim
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.6,
              }}
            >
              <p className={styles.description}>
              Como psicanalista em constante formação e sustentada pelo tripé analítico – análise pessoal, supervisão e estudo teórico – é uma satisfação recebê-la(o) aqui.
Minha trajetória voltada à elaboração subjetiva encontra na psicanálise um espaço privilegiado para a escuta do inconsciente, onde emergem desejos, fantasias e significantes que estruturam nossa forma de estar no mundo.
              <br />
              <br />

              O percurso analítico pode ajudar em momentos de crise, de sofrimento ou simplesmente no desejo de compreender melhor a si mesmo e suas relações. Freud nos mostrou a importância de dar voz ao inconsciente, e Lacan nos lembrou que é na fala que cada sujeito pode se aproximar de sua própria verdade.
              <br />
              <br />
              Convido você a percorrer esse caminho em seu próprio tempo: uma travessia em direção ao desconhecido de si, onde cada palavra pode revelar novas possibilidades de existência. Estarei ao seu lado nesse processo de escuta e investigação do inconsciente
            <FaHeart size={13} className={styles.heart} />{" "}
                <FaHeart size={13} className={styles.heart} />
              </p>
            </motion.div>

            <motion.div
              className={styles.btnAgende}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={isVisible ? { opacity: 1, y: 1 } : {}}
              exit={{ opacity: 0, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.8,
              }}
            >
              <BtnAgende />
            </motion.div>
          </div>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.6,
            }}
          >
            <Image
              src="./sobreMim2.svg"
              alt="Sobre mim"
              width={999}
              height={510}
              className={styles.imagem}
              // layout="reponsive"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
