"use client";

import Image from "next/image";
import React from "react";
import styles from "./depoimentos.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

const DEPOIMENTOS = [
  {
    comentario:
      "A psiquiatra transformou minha vida. Aprendi a lidar melhor com a ansiedade e encontrei um equilíbrio emocional que nunca pensei ser possível. A Dra. Rode Zembrick tem sido um pilar de apoio e crescimento em minha jornada. Sou muito grata pelo apoio e atenção contínua que recebo aqui.",
    nome: "Ana Silva",
    image: "/anon.webp",
  },
  {
    comentario:
      "Enfrentar a depressão foi um dos maiores desafios da minha vida, mas com a psiquiatra, consegui entender minhas emoções e encontrar caminhos para a recuperação. A Dra. Rode Zembrick me ajudou a reencontrar minha força e resiliência. Agradeço imensamente por todo o suporte e orientação.",
    nome: "Carlos Mendes",
    image: "/anon.webp",
  },
  {
    comentario:
      "Depois de anos sofrendo com estresse crônico no trabalho, finalmente encontrei alívio na psiquiatra. A Dra. Rode Zembrick me guiou com empatia e profissionalismo, e agora me sinto mais segura e confiante para enfrentar os desafios do dia a dia. Recomendo a todos que buscam uma vida melhor.",
    nome: "Mariana Oliveira",
    image: "/anon.webp",
  },

];

export default function Depoimentos() {
  return (
    <div className={`${styles.depoimentosContainer} container`}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Depoimentos</h1>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {DEPOIMENTOS.map((depoimento, index) => (
          <SwiperSlide key={index}>
            <div className={styles.commentContainer}>
              <p className={styles.comentarios}>{depoimento.comentario}</p>
              <div className={styles.userInfo}>
                <Image
                  src={depoimento.image}
                  alt={depoimento.nome}
                  width={40}
                  height={40}
                />
                <h6 className={styles.nome}>{depoimento.nome}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
