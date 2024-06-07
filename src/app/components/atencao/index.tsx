import Image from "next/image";
import React from "react";
import styles from "./atencao.module.sass";

export default function Atencao() {
  return (
    <div className={styles.imagemDeTopo}>
      <div className={`${styles.atencao} container mt-10`}>
        <div className={`${styles.imageContainer} mt-10`}>
          <Image src="/atencao.webp" alt="Atencao" width={90} height={90} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Atenção</h1>
          <p className={styles.description}>
            Esse site não oferece atendimento imediato a paessoas em crise
            suicida. Em caso de crise ligue para o <strong>CVV - 188</strong>.
            Em caso de emergência, procure o hospital mais próximo. Havendo
            risco de morte, ligue imediatamente para o{" "}
            <strong>SAMU - telefone 192</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
