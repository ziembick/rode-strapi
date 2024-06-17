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
                Como Psicanalista, estudiosa das Neurociências, especialista em
                Comunicação Não Violenta e uma extensa trajetória como executiva
                de Recursos Humanos no mundo corporativo, é uma alegria
                recebê-la (o) aqui.{" "}
                <FaHeart size={13} className={styles.heart} />{" "}
                <FaHeart size={13} className={styles.heart} />
              </p>
              <p className={styles.description}>
                Ao longo de mais de três décadas, dediquei-me ao desenvolvimento
                humano, ajudando indivíduos a expandirem sua capacidade de
                reflexão sob diferentes perspectivas, a superarem limitações e a
                aprimorarem seus relacionamentos, tanto consigo mesmos quanto
                com os outros.
              </p>
              <p className={styles.description}>
                A Psicanálise destina-se àqueles que buscam desvendar seus
                desejos mais ocultos e àqueles que anseiam pela liberdade de
                serem autênticos. É também recomendada para momentos de crise,
                dificuldades emocionais e os diversos desafios que possam estar
                enfrentando atualmente.
              </p>
              <p className={styles.description}>
                Sinta-se à vontade para explorar esse caminho de descobertas e
                transformações ao seu próprio ritmo. Estou aqui para
                acompanhá-la (o) na sua jornada ao desconhecido.
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
