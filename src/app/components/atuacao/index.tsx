"use client";

import Image from "next/image";
import React from "react";
import styles from "./atuacao.module.sass";
import BtnAgende from "../btnAgende";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import 'swiper'
import { Pagination } from "swiper/modules";

const AREAS_ATUACAO = [
  {
    image: "/iconeDepre.svg",
    title: "Ansiedade",
    description: "Sentimento de apreensão e preocupação excessiva em relação ao futuro, não saber lidar com incertezas, por muitas vezes acompanhada por sintomas físicos, como sudorese, coração acelerado, tremores, náusea, falta de ar, dor no peito, insônia, e etc. É normal sentir ansiedade em situações estressantes ou desafiadoras, mas quando ela é constante ou excessiva, pode se tornar uma ansiedade problemática e interferir na vida diária, afetando o bem-estar pessoal.",
  },
  {
    image: "/iconeDepre.svg",
    title: "Estresse",
    description: "É uma reação natural do corpo e da mente a situações percebidas como ameaçadoras ou desafiadoras. Quando se torna crônico e intenso, pode ter um impacto significativo na saúde física e mental. Pode levar a uma série de problemas como depressão, ansiedade, transtorno de estresse pós-traumático e transtornos do sono. Pode afetar a capacidade de concentração, memória e tomada de decisão.",
  },
  {
    image: "/iconeDepre.svg",
    title: "Depressão",
    description: "A depressão é um transtorno mental que afeta o humor, o pensamento e o comportamento, comprometendo a qualidade de vida da pessoa, causado por sentimentos persistentes de tristeza, desesperança e falta de interesse em atividades que antes eram prazerosas e dentre outros fatores. Além disso, a depressão pode causar alterações no apetite, no sono, na concentração e no nível de energia e etc. Entretanto diferente do que muitos imaginam a depressão pode se apresentar de diferentes formas para cada pessoa.",
  },
  {
    image: "/iconeDepre.svg",
    title: "Medo e Insegurança",
    description: "Falta de confiança em si mesmo ou nas suas capacidades, pode ser causada por diversos fatores, como experiências traumáticas, baixa autoestima, falta de habilidades sociais, tomada de decisão, entre outros. A insegurança pode afetar diversas áreas da vida, como relacionamentos pessoais, carreira profissional e vida social.",
  },
  {
    image: "/iconeDepre.svg",
    title: "Burnout",
    description: "É um estado de exaustão física, emocional e mental que pode ocorrer em pessoas que enfrentam um estresse crônico em seu trabalho, falta de um equilíbrio saudável entre vida profissional e pessoal. É caracterizado por exaustão emocional, sensação de se desconectar dos outros e do trabalho, baixa realização pessoal, irritabilidade, fadiga entre outros fatores.",
  },
  {
    image: "/iconeDepre.svg",
    title: "Outros acolhimentos",
    description: "É um estado de exaustão física, emocional e mental que pode ocorrer em pessoas que enfrentam um estresse crônico em seu trabalho, falta de um equilíbrio saudável entre vida profissional e pessoal. É caracterizado por exaustão emocional, sensação de se desconectar dos outros e do trabalho, baixa realização pessoal, irritabilidade, fadiga entre outros fatores.",
  },
];

export default function Atuacao() {
  return (
    <div className={`${styles.cont} container`}>
      <h1 className={styles.aga1}>Áreas de Atuação</h1>
      <p className={styles.pe}>Tratamentos e demandas mais frequentes que atendo atualmente</p>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {AREAS_ATUACAO.map((atuacao, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <Image
                src={atuacao.image}
                alt={atuacao.title}
                width={60}
                height={60}
                className={styles.card_image}
              />
              <h4 className={styles.card_title}>{atuacao.title}</h4>
              <p className={styles.card_text}>{atuacao.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <BtnAgende />
    </div>
  );
}
