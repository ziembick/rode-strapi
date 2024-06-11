"use client";

import React from "react";
import BtnAgende from "../btnAgende";
import styles from "./ajudar.module.sass";

export default function Ajudar() {
  return (
    <div className={styles.ajudar}>
      <h1 className={styles.ajudarTitle}>Atenção!</h1>
      <p className={`${styles.descriptionTitle} container`}>
        Esse site não oferece atendimento imediato a pessoas em crise suicida.
        Em caso de crise, ligue para o CVV - 188. Em caso de emergência, procure
        o hospital mais próximo. Havendo risco de morte, ligue imediatamente
        para o SAMU - telefone 192
      </p>
    </div>
  );
}
