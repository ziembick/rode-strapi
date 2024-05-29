import Image from "next/image";
import React from "react";
import styles from "./depoimentos.module.sass";

export default function Depoimentos() {
  return (
    <div className={`${styles.depoimentos} container`}>
      <div className={styles.textContainer}>
        <h6 className={styles.dizem}>O que dizem os pacientes</h6>
        <h1 className={styles.title}>Depoimentos</h1>
        <p className={styles.description}>
          Comentários retirados do Google Meu Negócio
        </p>
      </div>
      <div className={styles.commentContainer}>
        <p className={styles.comentários}>
          Profissional de ótima qualidade. Dr. Rode com sua calmaria, paciência
          e competência em seus diagnósticos precisos consegue nos ajudar a
          termos um melhor conhecimento de nossas condições psicológicas e
          emocionais pra conseguirmos melhorar nossas idas em meio a grande
          atribulações em que estamos vivendo atualmente em nossa vida
          profissional e pessoal. Gratidão por tudo.
        </p>
        <div className={styles.userInfo}>
        <Image src="/anon.webp" alt="User" width={40} height={40} />
        <h6 className={styles.nome}>Nome</h6>
        </div>
      </div>
    </div>
  );
}
