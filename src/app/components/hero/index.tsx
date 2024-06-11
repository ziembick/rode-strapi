"use client";

import React from "react";
import styles from "./hero.module.sass";
import Image from "next/image";
import { FaLaptop } from "react-icons/fa";
import BtnAgende from "../btnAgende";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className={styles.heroBackground}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <motion.h2
            className={styles.nome}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            whileInView={{ opacity: 1, x: 0 }}
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
            whileInView={{ opacity: 1, x: 0 }}
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
          {/* <motion.p
            className={styles.textinho}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.8,
            }}
          >
            Minha prática envolve entender profundamente a história de vida,
            emoções e comportamentos dos pacientes, para criar estratégias que
            promovam seu crescimento pessoal e bem-estar emocional.
          </motion.p> */}
          <motion.p
            className={styles.textinho2}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            whileInView={{ opacity: 1, y: 1 }}
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
            whileInView={{ opacity: 1, y: 1 }}
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
              <span className={styles.boldText}>online individual</span> para
              <span className={styles.boldText}> adultos e idosos </span>
            </p>
          </motion.div>
        </div>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
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
            src="/heroRode2.svg"
            alt="Rode Ziembick"
            layout="responsive"
            width={700}
            height={600}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
