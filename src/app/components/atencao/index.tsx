import Image from "next/image";
import React from "react";
import styles from "./atencao.module.sass";

export default function Atencao() {
  return (
    <div className={styles.imagemDeTopo}>
      <div className={`${styles.atencao} container`}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Atenção!</h1>
          <div className={`${styles.imageContainer} mt-10`}>
            <p className={styles.description}>
              <Image
                src="./atencaoNovo.svg"
                alt="Atencao"
                width={70}
                height={50}
                className={styles.imageAtencao}
              />
              Esse site não oferece atendimento imediato a pessoas em crise
              suicida. Em caso de crise ligue para o CVV - 188. Em caso de
              emergência, procure o hospital mais próximo. Havendo risco de
              morte, ligue imediatamente para o SAMU - telefone 192
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
