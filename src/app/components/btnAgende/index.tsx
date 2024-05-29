'use client'

import Image from "next/image";
import React from "react";
import styles from "./btn.module.sass"

export default function BtnAgende() {
  return (
    <>
      <button
        className={styles.btn}
        onClick={() => {
          const whatsappUrl = `https://wa.me/5511970997779?text=Olá, gostaria de agendar uma consulta!`;
          window.open(whatsappUrl, "_blank");
        }}
      >
        Agende sua consulta
        <Image
          src="/whatsapp.svg"
          alt="Whatsapp"
          width={20}
          height={20}
          className={`${styles.btnWp}`}
        />
      </button>
    </>
  );
}
