"use client";

import React from "react";
import styles from "./hero.module.sass";
import Image from "next/image";
import { FaLaptop } from "react-icons/fa";
import BtnAgende from "../btnAgende";

const Hero = () => {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.nome}>Rode Ziembick</h2>
          <h3 className={styles.titulo}>Psicanalista</h3>
          <h4 className={`${styles.comentario}`}>
            Meu propósito é <strong>Ajudar Você</strong> a ter mais qualidade de
            vida com saúde mental e emocional
          </h4>
          <p className={styles.textinho}>Alcance sua saúde mental e emocional para uma vida com mais qualidade através da psicanálise.</p>
          <div className={styles.btnAgende}>
            <BtnAgende />
          </div>
          <div className={styles.laptop}>
            <p className={`${styles.ptag} pt-0`}>
              <FaLaptop size={25} className={styles.btnLap} />
              Atendimento{" "}
              <span className={styles.boldText}>
                {" "}
                online individual{" "}
              </span> para{" "}
              <span className={styles.boldText}> adultos e idosos </span>
            </p>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.rodeImage}
            src="/heroRode2.svg"
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
