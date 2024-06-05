"use client";

import React from "react";
import BtnAgende from "../btnAgende";
import Image from "next/image";
import styles from "./sobre.module.sass";

export default function Sobre() {
  return (
    <div className={styles.bgContainer}>
      <div className={`${styles.sobre} container`}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainTitle}>Sobre mim</h1>
          <p className={styles.description}>
            Olá muito prazer, tudo bem? Meu nome é Marianne sou Psicóloga
            Clínica e o meu trabalho é pautado na abordagem Junguiana, graduada
            em Psicologia pelas Faculdades Metropolitanas Unidas (FMU). Realizei
            o Curso de Introdução a Clínica Junguiana pelo Instituto Sedes
            Sapientiae, fiz Aprimoramento Profissional pelo Instituto Práxis
            Analítica, atualmente faço Supervisão Clínica, Aprimoramento
            Profissional sobre A Prática Junguiana na Contemporaneidade pelo
            Instituto Freedom , e Psicoterapia Pessoal há 6 anos.
          </p>
          <p className={styles.description}>
            Meu objetivo como Psicóloga é tratar os transtornos mentais, aliviar
            o sofrimento mental, promover o autoconhecimento, para que o
            paciente torne se “a si mesmo”, buscando a consciência necessária,
            para transitar pela vida criando novos caminhos. Estou trilhando um
            caminho pessoal motivada pelo que me brilha os olhos que é ser
            Psicóloga Clínica, estar neste lugar me inspira a ser uma
            profissional mais competente, ética e humana proporcionando a
            experiência de encontro com você mesmo. E também acredito numa
            clínica psicológica que lute contra todo tipo de preconceito e
            transforme o mundo através da promoção de saúde mental de forma
            universal.
          </p>
          <BtnAgende />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/sobreMim1.svg"
            alt="Sobre mim"
            width={999}
            height={527}
            className={styles.imagem}
          />
        </div>
      </div>
    </div>
  );
}
