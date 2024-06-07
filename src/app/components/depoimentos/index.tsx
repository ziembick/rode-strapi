"use client";

import Image from "next/image";
import React from "react";
import styles from "./depoimentos.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";

const DEPOIMENTOS = [
  {
    comentario:
      "A psiquiatra transformou minha vida. Aprendi a lidar melhor com a ansiedade e encontrei um equilíbrio emocional que nunca pensei ser possível. A Dra. Rode Zembrick tem sido um pilar de apoio e crescimento em minha jornada. Sou muito grata pelo apoio e atenção contínua que recebo aqui.",
    nome: "A.S",
    image: "/anon.webp",
  },
  {
    comentario:
      "Enfrentar a depressão foi um dos maiores desafios da minha vida, mas com a psiquiatra, consegui entender minhas emoções e encontrar caminhos para a recuperação. A Dra. Rode Zembrick me ajudou a reencontrar minha força e resiliência. Agradeço imensamente por todo o suporte e orientação.",
    nome: "C.M",
    image: "/anon.webp",
  },
  {
    comentario:
      "Depois de anos sofrendo com estresse crônico no trabalho, finalmente encontrei alívio na psiquiatra. A Dra. Rode Zembrick me guiou com empatia e profissionalismo, e agora me sinto mais segura e confiante para enfrentar os desafios do dia a dia. Recomendo a todos que buscam uma vida melhor.",
    nome: "M.O",
    image: "/anon.webp",
  },
];

export default function Depoimentos() {
  return (
    <div className={`${styles.depoimentosContainer} container`}>
      <div className={styles.textContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Depoimentos
        </motion.h1>
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
            <motion.div
              className={styles.commentContainer}
              initial={{ opacity: 0, x: -100, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
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
              <p className={styles.comentarios}>{depoimento.comentario}</p>
              <div className={styles.userInfo}>
                <Image
                  src={depoimento.image}
                  alt={depoimento.nome}
                  width={40}
                  height={40}
                />
                <div className={styles.nomeEstar}>
                  <h6 className={styles.nome}>{depoimento.nome}</h6>
                  <div className={styles.starContainer}>
                    <IoIosStar size={20} className={styles.star} />
                    <IoIosStar size={20} className={styles.star} />
                    <IoIosStar size={20} className={styles.star} />
                    <IoIosStar size={20} className={styles.star} />
                    <IoIosStar size={20} className={styles.star} />
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
