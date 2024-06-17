"use client";

import React, { useState, useEffect } from "react";
import styles from "./hero.module.sass";
import Image from "next/image";
import { FaLaptop } from "react-icons/fa";
import BtnAgende from "../btnAgende";
import { motion } from "framer-motion";

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
          <motion.h2
            className={styles.nome}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.2,
            }}
          >
            Rode Ziembick
          </motion.h2>
          <motion.h3
            className={styles.titulo}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.6,
            }}
          >
            Psicanalista
          </motion.h3>
          <motion.h4
            className={`${styles.comentario}`}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.8,
            }}
          >
            Cada pessoa é única e, portanto, merece uma abordagem terapêutica
            personalizada.
          </motion.h4>
          <motion.p
            className={styles.textinho2}
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.8,
            }}
          >
            Através da Psicanálise, você será capaz de enfrentar desafios
            futuros com confiança e independência.
          </motion.p>
          <motion.div
            className={styles.btnAgende}
            initial={{ opacity: 0, y: 100 }}
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
          <motion.div
            className={styles.laptop}
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 1 } : {}}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.9,
            }}
          >
            <p className={`${styles.ptag} pt-0`}>
              <FaLaptop size={25} className={styles.btnLap} />
              Atendimento
              <strong className={styles.boldText}>
                online individual
              </strong>
              para
              <strong className={styles.boldText}> adultos e idosos </strong>
            </p>
          </motion.div>
        </div>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            delay: 0.2,
          }}
        >
          <Image
            className={styles.rodeImage}
            src="./heroRode2.svg"
            alt="Rode Ziembick"
            layout="responsive"
            width={700}
            height={600}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
