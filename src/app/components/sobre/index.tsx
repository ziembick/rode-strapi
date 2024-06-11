"use client";

import React from "react";
import BtnAgende from "../btnAgende";
import Image from "next/image";
import styles from "./sobre.module.sass";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div className={styles.relativeContainer}>
      <div className={styles.imagemDeTopo}>
        <Image
          src="/bordinha.svg"
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
              exit={{ opacity: 0, x: -100 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: 0.6,
              }}
            >
              <p className={styles.description}>
                Olá muito prazer, tudo bem? Meu nome é Marianne sou Psicóloga
                Clínica e o meu trabalho é pautado na abordagem Junguiana,
                graduada em Psicologia pelas Faculdades Metropolitanas Unidas
                (FMU). Realizei o Curso de Introdução a Clínica Junguiana pelo
                Instituto Sedes Sapientiae, fiz Aprimoramento Profissional pelo
                Instituto Práxis Analítica, atualmente faço Supervisão Clínica,
                Aprimoramento Profissional sobre A Prática Junguiana na
                Contemporaneidade pelo Instituto Freedom , e Psicoterapia
                Pessoal há 6 anos.
              </p>
              <p className={styles.description}>
                Meu objetivo como Psicóloga é tratar os transtornos mentais,
                aliviar o sofrimento mental, promover o autoconhecimento, para
                que o paciente torne se “a si mesmo”, buscando a consciência
                necessária, para transitar pela vida criando novos caminhos.
                Estou trilhando um caminho pessoal motivada pelo que me brilha
                os olhos que é ser Psicóloga Clínica, estar neste lugar me
                inspira a ser uma profissional mais competente, ética e humana
                proporcionando a experiência de encontro com você mesmo. E
                também acredito numa clínica psicológica que lute contra todo
                tipo de preconceito e transforme o mundo através da promoção de
                saúde mental de forma universal.
              </p>
            </motion.div>
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
          </div>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
              src="/sobreMim1.svg"
              alt="Sobre mim"
              width={999}
              height={527}
              className={styles.imagem}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
