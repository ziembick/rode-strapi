import React from "react";
import styles from "./psicanalise.module.sass";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Psicanalise() {
  return (
    <div className={styles.relativeContainer}>
      <div className={styles.imagemDeTopo}>
        <Image
          src="/bordinha.svg"
          alt="Image topo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${styles.psicanalise} container`}>
        <div className={styles.boiadero}>
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
              A Psicanálise é o campo do conhecimento onde a premissa é o
              inconsciente, que é uma dimensão do psiquismo que determina nosso
              modo de reagir e sentir no mundo. A psicanálise é uma técnica que
              faz aflorar, em um ambiente controlado, essa dimensão
              desconhecida, que é o inconsciente, para que a partir deste
              processo se torne mais consciente de suas decisões, comportamentos
              e emoções.
            </p>
            <p className={styles.texto}>
              O Psicanalista se utiliza da linguagem do paciente em associação
              livre para acessar o inconsciente. Principalmente da linguagem,
              mas não apenas dela. Tudo que acontece no setting psicanalítico e
              material de análise. Isso porque nosso inconsciente se comunica de
              várias outras formas para além da linguagem.
            </p>
            <p className={styles.texto}>
              O Psicanalista enfrenta junto com o paciente uma série de
              resistências ao longo da jornada analítica. Revelar, descobrir
              traumas, dores, medos que foram muito bem encobertos ao longo da
              vida, não é tarefa simples. Nosso psiquismo se utiliza de
              mecanismos de defesa muito refinados para proteger a sanidade
              mental. Quando passamos por alguma situação que nossa mente não é
              capaz de tolerar, tendemos ao recalque desses eventos para que não
              soframos toda a dor implicada a eles. Entretanto, esses conteúdos
              que foram recalcados, continuam existindo na nossa dimensão
              psíquica por toda a nossa vida, impactando nossas decisões, nosso
              modo de ser no mundo.
            </p>
            <p className={styles.texto}>
              &quot;O Eu não é senhor em sua própria casa&quot;. Essa é uma das
              frases mais emblemáticas de Freud. Viver sem acessar a nossa
              dimensão inconsciente é viver no domínio do desconhecido. Faça
              Psicanálise e seja o senhor da sua própria casa!
            </p>
          </motion.div>
          {/* <div className={styles.imageContainer}>
        <Image src="/mulher.png" alt="Psicanálise" width={330} height={635} className={styles.imageMulher}/>
      </div> */}
        </div>
      </div>
    </div>
  );
}
