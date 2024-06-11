import Image from "next/image";
import React from "react";
import styles from "./atencao.module.sass";

export default function Atencao() {
  return (
    <div className={styles.imagemDeTopo}>
      <div className={`${styles.atencao} container mt-10`}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Atenção!</h1>
          <p className={styles.description}>
            <div className={`${styles.imageContainer} mt-10`}>
              <Image src="/atencaoNovo.svg" alt="Atencao" width={90} height={90} />
            </div>
            Esse site não oferece atendimento imediato a paessoas em crise
            suicida. Em caso de crise ligue para o CVV - 188.
            Em caso de emergência, procure o hospital mais próximo. Havendo
            risco de morte, ligue imediatamente para o
            SAMU - telefone 192
          </p>
        </div>
      </div>
    </div>
  );
}
