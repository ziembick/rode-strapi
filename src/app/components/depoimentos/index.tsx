"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./depoimentos.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";

const DEPOIMENTOS = [
  {
    comentario:
      "Minha análise com a Rode Ziembick foi uma experiência transformadora. Ela me ajudou a explorar áreas da minha vida que eu nunca imaginei que precisassem de atenção. Sua abordagem cuidadosa e empática me fez sentir segura e compreendida desde o primeiro momento. Com sua ajuda, consegui superar traumas antigos e desenvolver uma melhor compreensão de mim mesma. Recomendo a Psicanalista Rode Ziembick a qualquer pessoa que esteja buscando um caminho para o autoconhecimento e desenvolvimento pessoal.",
    nome: "A.R",
    image: "/anon.webp",
  },
  {
    comentario:
      "A Rode não só me ajudou a lidar com questões pessoais profundas, mas sua experiência no mundo corporativo foi fundamental para o meu desenvolvimento profissional. Com sua orientação, consegui melhorar minha comunicação e minhas habilidades de liderança. Ela me ajudou a encontrar um equilíbrio entre vida pessoal e profissional, o que resultou em um desempenho muito melhor no trabalho.",
    nome: "D.F",
    image: "/anon.webp",
  },
  {
    comentario:
      "A Rode tem uma habilidade incrível de ouvir e realmente entender o que estou passando. Suas sessões são um espaço seguro onde posso me abrir sem medo de julgamento. Com sua orientação, eu consegui enfrentar meus medos e ansiedades de maneira mais eficaz. A abordagem dela é ao mesmo tempo profissional e profundamente humana, o que faz toda a diferença. Sou eternamente grato pelo apoio e pelas ferramentas que ela me forneceu para melhorar minha vida.",
    nome: "R.G",
    image: "/anon.webp",
  },
  {
    comentario:
      "Buscar ajuda da Rode foi uma das melhores decisões da minha vida. Sua expertise em psicanálise, combinada com uma sólida compreensão do ambiente corporativo, me proporcionou insights valiosos sobre minhas relações no trabalho e minha trajetória de carreira. Aprendi a gerenciar melhor o estresse e a ansiedade relacionados ao trabalho, o que me permitiu assumir novas responsabilidades com mais confiança.",
    nome: "R.D",
    image: "/anon.webp",
  },
  {
    comentario:
      "A Rode possui um coração amável e uma abordagem acolhedora que fazem dela uma psicanalista excepcional. Sua compreensão profunda e sua maneira gentil de lidar com meus problemas me proporcionaram o suporte necessário para superar várias dificuldades. Ela é verdadeiramente uma profissional dedicada e atenciosa, e sou muito grata por todo o seu apoio.",
    nome: "T.M",
    image: "/anon.webp",
  },
  {
    comentario:
      "A Rode possui um coração amável e uma abordagem acolhedora que fazem dela uma psicanalista excepcional. Sua compreensão profunda e sua maneira gentil de lidar com meus problemas me proporcionaram o suporte necessário para superar várias dificuldades. Ela é verdadeiramente uma profissional dedicada e atenciosa, e sou muito grata por todo o seu apoio.",
    nome: "R.D",
    image: "/anon.webp",
  },
];

export default function Depoimentos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("depo");
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
    <div id="depo" className={`${styles.depoimentosContainer} container`}>
      <div className={styles.divdiv}>
        <div className={styles.textContainer}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 100, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
            exit={{ opacity: 0, y: 100, scale: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Depoimentos
          </motion.h1>
        </div>
        <div className={styles.cards}>
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
            style={{ padding: "0 20px 0 0" }}
          >
            {DEPOIMENTOS.map((depoimento, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className={styles.commentContainer}
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
                  <p className={styles.comentarios}>{depoimento.comentario}</p>
                  <div className={styles.boraQuerer}>
                    <div className={styles.userInfo}>
                      <div className={styles.imageNameContainer}>
                        <Image
                          src={depoimento.image}
                          alt={depoimento.nome}
                          width={40}
                          height={40}
                        />
                        <h6 className={styles.nome}>{depoimento.nome}</h6>
                      </div>
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
      </div>
    </div>
  );
}
