import Image from "next/image";
import React from "react";
import styles from "./semifooter.module.sass";

export default function SemiFooter() {
  return (
    <div className={`${styles.semifooter} container mt-10 mb-30`}>
      <div className={styles.imageContainer}>
        <Image src="/logo3.png" alt="Logo" width={300} height={100} />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>Formas de contato</h4>
        <p className={styles.formas}>
          <Image
            src="/whatsapp.svg"
            alt="Whatsapp"
            width={20}
            height={20}
            className={`${styles.btnWp}`}
          />
          (11) 98765-4321
        </p>
        <p className={styles.formas}>
          <Image
            src="/email2.png"
            alt="Email"
            width={20}
            height={20}
            className={`${styles.btnWp}`}
          />
          rodeziembick@gmail.com
        </p>
        <p className={styles.formas}>
          <Image
            src="/ig2.svg"
            alt="Instagram"
            width={20}
            height={20}
            className={`${styles.btnWp}`}
          />
          @rodeziembick
        </p>
      </div>
    </div>
  );
}
