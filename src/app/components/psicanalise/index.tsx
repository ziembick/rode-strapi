import React from "react";
import styles from "./psicanalise.module.sass";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Psicanalise() {
  return (
    <div className={`${styles.psicanalise} container`}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          delay: 0.2,
        }}
      >
        O que é Psicanalise
      </motion.h1>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          delay: 0.6,
        }}
      >
        <p className={styles.texto}>
          A psicanálise, criada por Sigmund Freud no final do século XIX, é uma
          teoria e prática terapêutica que revolucionou a compreensão da mente
          humana. Fundamentada na ideia do inconsciente, Freud propôs que grande
          parte do comportamento humano é influenciada por pensamentos,
          sentimentos e memórias reprimidas, acessíveis através de técnicas como
          associação livre e análise de sonhos.
        </p>
        <p className={styles.texto}>
          Essa abordagem enfatiza os conflitos psíquicos entre o id, ego e
          superego, além do desenvolvimento psicossexual em estágios infantis.
          Os mecanismos de defesa, como a repressão e a projeção, são centrais
          na compreensão dos sintomas psicológicos. Ao longo dos anos, a
          psicanálise evoluiu, dando origem a diversas escolas de pensamento,
          como a psicologia analítica de Carl Jung e a psicologia individual de
          Alfred Adler. A psicanálise lacaniana, proposta por Jacques Lacan,
          reformulou conceitos freudianos, introduzindo novas ideias sobre
          simbolismo e linguagem.
        </p>
        <p className={styles.texto}>
          Embora seja aplicada no tratamento de uma ampla gama de distúrbios
          psicológicos, a psicanálise enfrenta críticas quanto à sua
          cientificidade e efetividade comparada a outras formas de
          psicoterapia, como a terapia cognitivo-comportamental. Apesar das
          controvérsias, a psicanálise continua a exercer uma influência
          profunda na compreensão da mente humana, proporcionando uma abordagem
          complexa e multifacetada para a compreensão do comportamento humano e
          o tratamento de distúrbios psicológicos.
        </p>
      </motion.div>
      {/* <div className={styles.imageContainer}>
        <Image src="/mulher.png" alt="Psicanálise" width={330} height={635} className={styles.imageMulher}/>
      </div> */}
    </div>
  );
}
