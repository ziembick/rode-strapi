'use client'

import Image from "next/image";
import React from "react";
import styles from "./btn.module.sass"
import { FaWhatsapp } from "react-icons/fa";

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
        <FaWhatsapp size={20} className={styles.btnWp}/>
      </button>
    </>
  );
}
