'use client'

import React from "react";
import BtnAgende from "../btnAgende";
import styles from "./ajudar.module.sass"

export default function Ajudar() {
  return (
    <div className={styles.ajudar}>
      <h1 className={styles.ajudarTitle}>Posso ajudar você</h1>
      <p className={`${styles.descriptionTitle} container`}>
        Caso você se identifique com algum desses sintomas ou alguma dessas
        situações, saiba que a <strong>Psicoterapia Jungiana</strong> pode ser
        de grande ajuda para transformar a sua vidade de maneira signficativa!
      </p>
      <BtnAgende />
    </div>
  );
}
