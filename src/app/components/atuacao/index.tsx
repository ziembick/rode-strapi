"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./atuacao.module.sass";
import BtnAgende from "../btnAgende";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

const AREAS_ATUACAO = [
  {
    image: "./ansiedade3.svg",
    title: "Ansiedade",
    description:
      "Sentimento de apreensão e preocupação excessiva em relação ao futuro, não saber lidar com incertezas, por muitas vezes acompanhada por sintomas físicos, como sudorese, coração acelerado, tremores, náusea, falta de ar, dor no peito, insônia, e etc. É normal sentir ansiedade em situações estressantes ou desafiadoras, mas quando ela é constante ou excessiva, pode se tornar uma ansiedade problemática e interferir na vida diária, afetando o bem-estar pessoal.",
  },
  {
    image: "./estresse3.svg",
    title: "Estresse",
    description:
      "É uma reação natural do corpo e da mente a situações percebidas como ameaçadoras ou desafiadoras. Quando se torna crônico e intenso, pode ter um impacto significativo na saúde física e mental. Pode levar a uma série de problemas como depressão, ansiedade, transtorno de estresse pós-traumático e transtornos do sono. Pode afetar a capacidade de concentração, memória e tomada de decisão.",
  },
  {
    image: "./depresso3.svg",
    title: "Depressão",
    description:
      "A depressão é um transtorno mental que afeta o humor, o pensamento e o comportamento, comprometendo a qualidade de vida da pessoa, causado por sentimentos persistentes de tristeza, desesperança e falta de interesse em atividades que antes eram prazerosas e dentre outros fatores. Além disso, a depressão pode causar alterações no apetite, no sono, na concentração e no nível de energia e etc. Entretanto diferente do que muitos imaginam a depressão pode se apresentar de diferentes formas para cada pessoa.",
  },
  {
    image: "./outrosAcolhi.svg",
    title: "Medo e Insegurança",
    description:
      "Falta de confiança em si mesmo ou nas suas capacidades, pode ser causada por diversos fatores, como experiências traumáticas, baixa autoestima, falta de habilidades sociais, tomada de decisão, entre outros. A insegurança pode afetar diversas áreas da vida, como relacionamentos pessoais, carreira profissional e vida social.",
  },
  {
    image: "./medoInsegu.svg", //falta essa imagem de burnout
    title: "Burnout",
    description:
      "É um estado de exaustão física, emocional e mental que pode ocorrer em pessoas que enfrentam um estresse crônico em seu trabalho, falta de um equilíbrio saudável entre vida profissional e pessoal. É caracterizado por exaustão emocional, sensação de se desconectar dos outros e do trabalho, baixa realização pessoal, irritabilidade, fadiga entre outros fatores.",
  },
];

export default function Atuacao() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("atuac");
      if (element) {
        const topPos = element.getBoundingClientRect().top;
        const bottomPos = element.getBoundingClientRect().bottom;
        const visible = topPos < window.innerHeight && bottomPos >= 0;
        setIsVisible(visible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar visibilidade no carregamento inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="atuac" className={styles.relativeContainer}>
      <div className={styles.imagemDeTopo}>
        <Image
          src="./bordinha.svg"
          alt="Image topo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.atuacaoBackground}>
        <div className={`${styles.cont} container`}>
          <motion.h1
            className={styles.aga1}
            initial={{ opacity: 0, x: -200 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.2,
            }}
          >
            Áreas de Atuação
          </motion.h1>
          <motion.p
            className={styles.pe}
            initial={{ opacity: 0, x: -200 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -200 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.6,
            }}
          >
            Tratamentos e demandas mais frequentes que atendo atualmente
          </motion.p>
          <div className={styles.cardSwiper}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1.2 },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.3 },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
            >
              {AREAS_ATUACAO.map((atuacao, index) => (
                <SwiperSlide key={index}>
                  {atuacao && (
                    <motion.div
                      className={styles.card}
                      initial={{ opacity: 0, x: -100, filter: "blur(8px)" }}
                      animate={
                        isVisible ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}
                      }
                      exit={{ opacity: 0, x: -100, filter: "blur(8px)" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        ease: "easeIn",
                        filter: { duration: 1, delay: index * 0.2 },
                      }}
                    >
                      <Image
                        src={atuacao.image}
                        alt={atuacao.title}
                        width={100}
                        height={80}
                        className={styles.card_image}
                      />
                      <h4 className={styles.card_title}>{atuacao.title}</h4>
                      <p className={styles.card_text}>{atuacao.description}</p>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <motion.div
            className={styles.btnAgende}
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 1 } : {}}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.8,
            }}
          >
            <BtnAgende />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
