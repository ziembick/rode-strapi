"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./depoimentos.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";

const DEPOIMENTOS = [
  {
    comentario:
      "Desde que comecei a terapia com a Rode, minha vida mudou drasticamente para melhor. Ela tem uma percepção aguçada e oferece insights que sempre me surpreendem. Sua paciência e dedicação são evidentes em cada sessão. Com a ajuda dela, aprendi a lidar com meus problemas emocionais de uma maneira que nunca pensei ser possível. Ela é, sem dúvida, uma psicanalista excepcional que realmente se importa com seus pacientes.",
    nome: "Advogada, 35 anos, São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "A Rode não só me ajudou a lidar com questões pessoais profundas, mas sua experiência no mundo corporativo foi fundamental para o meu desenvolvimento profissional. Com sua orientação, consegui melhorar minha comunicação e minhas habilidades de liderança. Ela me ajudou a encontrar um equilíbrio entre vida pessoal e profissional, o que resultou em um desempenho muito melhor no trabalho.",
    nome: "Executivo, 44 anos, São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "A Rode tem uma habilidade incrível de ouvir e realmente entender o que estou passando. Suas sessões são um espaço seguro onde posso me abrir sem medo de julgamento. Com sua orientação, eu consegui enfrentar meus medos e ansiedades de maneira mais eficaz. A abordagem dela é ao mesmo tempo profissional e profundamente humana, o que faz toda a diferença. Sou eternamente grato pelo apoio e pelas ferramentas que ela me forneceu para melhorar minha vida.",
    nome: "Médica, 40 anos, Manaus",
    image: "./anon.webp",
  },
  {
    comentario:
      "Buscar ajuda da Rode foi uma das melhores decisões da minha vida. Sua expertise em psicanálise, combinada com uma sólida compreensão do ambiente corporativo, me proporcionou insights valiosos sobre minhas relações no trabalho e minha trajetória de carreira. Aprendi a gerenciar melhor o estresse e a ansiedade relacionados ao trabalho, o que me permitiu assumir novas responsabilidades com mais confiança.",
    nome: "Diretora de Marketing, 38 anos, São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "A Rode possui um coração amável e uma abordagem acolhedora que fazem dela uma psicanalista excepcional. Sua compreensão profunda e sua maneira gentil de lidar com meus problemas me proporcionaram o suporte necessário para superar várias dificuldades. Ela é verdadeiramente uma profissional dedicada e atenciosa, e sou muito grata por todo o seu apoio.",
    nome: "Psicóloga, 55 anos, Recife",
    image: "./anon.webp",
  },
  {
    comentario:
      "Desde que comecei a terapia com a Rode, minha vida mudou drasticamente para melhor. Ela tem uma percepção aguçada e oferece insights que sempre me surpreendem. Sua paciência e dedicação são evidentes em cada sessão. Com a ajuda dela, aprendi a lidar com meus problemas emocionais de uma maneira que nunca pensei ser possível. Ela é, sem dúvida, uma psicanalista excepcional que realmente se importa com seus pacientes.",
    nome: "Designer, 30 anos, São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "Não foi fácil dar o primeiro passo. Sou engenheiro, fui criado na lógica do que se resolve ou se descarta, e o que estava me afligindo não cabia em nenhuma das duas categorias. O trabalho com a Rode me mostrou que alguns problemas não se resolvem: se elaboram. Essa diferença mudou minha forma de lidar com tudo.",
    nome: "Engenheiro, 60 anos · Belo Horizonte",
    image: "./anon.webp",
  },
  {
    comentario:
      "Com quase oitenta anos, não imaginava que ainda haveria tanto para descobrir sobre mim mesmo. Cheguei à Rode depois de perder minha esposa, sem saber como continuar. Ela me orientou como seguir em frente,  me ajudou a entender o que era aquela dor, a dar nome ao que eu sentia. Continuo em análise. É a coisa mais séria que faço pela minha saúde.",
    nome: "Aposentado, 79 anos · São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "O que me surpreendeu na Rode foi a precisão. Ela não interpreta demais, deixa o silêncio trabalhar, faz a pergunta certa na hora certa. Para alguém que vive de percepção como eu, isso foi imediatamente reconhecível como qualidade. Estou em análise há três anos e não consigo imaginar minha vida sem esse espaço.",
    nome: "Artista plástica, 56 anos · São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "Tomei a decisão de entrar em análise depois de perceber que estava repetindo os mesmos erros nas minhas relações, no trabalho e em casa. Precisava entender por quê. A Rode criou um espaço onde isso foi possível, sem julgamento e com uma seriedade que eu não esperava encontrar. Foi um dos melhores investimentos da minha vida.",
    nome: "Empresário, 48 anos · São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "Cheguei à Rode no limite do esgotamento, burnout total, depois de anos achando que descanso era fraqueza. O processo analítico me mostrou de onde vinha essa lógica. Não foi confortável, mas foi necessário e foi real. Dois anos depois, estou bem, e entendo o que significa estar bem de um jeito que nunca entendi antes.",
    nome: "Executiva, 51 anos · São Paulo",
    image: "./anon.webp",
  },
  {
    comentario:
      "Comecei a análise com a Rode aos vinte e cinco anos, num momento em que minha carreira estava crescendo e eu estava entrando em colapso por dentro. Aprendi que sucesso externo e vida interna não andam juntos sozinhos,  precisam de trabalho. A Rode me ajudou a fazer esse trabalho. Não terminou, e eu não quero que termine tão cedo.",
    nome: "Atriz, 28 anos · Rio de Janeiro",
    image: "./anon.webp",
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
            navigation={true}
            modules={[Pagination, Navigation]}
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
