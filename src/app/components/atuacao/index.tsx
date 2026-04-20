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
    subtitle: "Psicanálise para ansiedade em São Paulo e online",
    description: 
      "A ansiedade é um dos grandes sintomas do nosso tempo. Ela surge como um aperto no peito, uma inquietação constante, uma sensação de que algo vai acontecer, mas sem sabermos exatamente o quê. Diferente do medo, que tem um objeto claro, a ansiedade aponta para um vazio: algo que escapa à nossa compreensão, mas insiste em se fazer sentir no corpo e na mente. Para Freud, a ansiedade está ligada ao encontro com o desconhecido e à perda de referências seguras. Lacan nos lembra que ela aparece quando o sujeito se vê diante do desejo do Outro, quando não sabe o que é esperado dele, ou quando o próprio desejo parece enigmático. Nesse ponto, a ansiedade não é apenas um sintoma a ser eliminado, mas um sinal de algo importante em jogo na vida psíquica. O tratamento psicanalítico para ansiedade oferece um espaço de escuta onde esse sofrimento pode ganhar palavras, em vez de se repetir apenas como crises no corpo e pensamentos recorrentes. Ao falar, o sujeito começa a localizar o que o angustia, compreende seus impasses e abre caminhos para lidar com o que até então parecia sem saída. Rode Ziembick atende adultos e adolescentes com ansiedade de forma presencial em São Paulo, nos consultórios da Vila Olímpia e Brooklin e online para qualquer parte do Brasil e do exterior. O atendimento é particular e sigiloso, com orientação lacaniana e freudiana e mais de 10 anos de clínica",
  },

  {
    image: "./depresso3.svg",
    title: "Depressão",
    subtitle: "Tratamento psicanalítico para depressão — São Paulo e online",
    description: "A depressão não é apenas tristeza ou falta de ânimo. É como se algo em nós tivesse perdido o brilho, como se a vida deixasse de fazer sentido e o desejo ficasse suspenso. Muitas vezes, quem sofre de depressão sente-se culpado por não conseguir 'reagir' ou 'sair dessa', como se fosse uma questão de força de vontade. A psicanálise nos mostra que não se trata de fraqueza, e sim de um sofrimento profundo que merece escuta e elaboração. Diferente de abordagens que buscam eliminar o sintoma rapidamente, o tratamento psicanalítico para depressão propõe um espaço singular de fala onde a dor pode ser dita, escutada e compreendida em sua singularidade. Ao colocar em palavras o indizível, abre-se a possibilidade de ressignificar a experiência e reencontrar o desejo. Seja leve, profunda ou severa, e mesmo quando associada a ansiedade e insônia, a depressão pode ser tratada com psicanálise. O processo não oferece receitas prontas nem conselhos superficiais. Oferece tempo, escuta e método. Rode Ziembick realiza atendimento psicanalítico para depressão de forma presencial em São Paulo, com consultórios na Vila Olímpia, Moema e Brooklin, e online para todo o Brasil e para brasileiros no exterior. Consulta particular, com sigilo e orientação lacaniana e freudiana.",
  },
  {
    image: "./medoInsegu.svg",
    title: "Carreira e Trabalho",
    subtitle: "Psicanálise para ansiedade no trabalho e burnout — São Paulo e online",
    description: "O ambiente de trabalho pode ser fonte de grandes realizações, mas também de intenso sofrimento. Esgotamento, cobranças excessivas, conflitos de carreira, medo de demissão, muitos profissionais seguem no automático, guardando em silêncio uma ansiedade que vai crescendo. Esses sintomas podem evoluir para burnout, bloqueios criativos e dificuldades que vão além do desempenho técnico. A psicanálise para dificuldades no trabalho não oferece coaching nem técnicas de gestão. Oferece algo mais fundamental: um espaço para compreender o que está em jogo psiquicamente nessas experiências, por que certos padrões se repetem, o que está por trás da dificuldade de sustentar limites, de pedir reconhecimento ou de lidar com a autoridade. Executivos, profissionais liberais e lideranças que buscam compreender seus impasses no trabalho encontram na psicanálise de orientação lacaniana e freudiana um espaço de escuta rigoroso e sigiloso, distinto das abordagens comportamentais e do coaching corporativo. Rode Ziembick atende presencialmente em São Paulo, com consultórios na Vila Olímpia e Brooklin e online para todo o Brasil e exterior. Atendimento particular.",
  },
  {
    image: "./outrosAcolhi.svg", //falta essa imagem de burnout
    title: "Relacionamento amoroso",
    subtitle: "Psicanálise para problemas no relacionamento — São Paulo e online",
    description: "Os relacionamentos amorosos podem ser fonte de grande alegria, mas também de intensa dor. Conflitos que se repetem, ciúmes, dependência emocional, dificuldade em confiar, términos que paralisam, muitas vezes, a pessoa reconhece o padrão mas não consegue sair dele. É nesse ponto que a psicanálise se distingue. Para Lacan, é no laço amoroso que o sujeito encontra tanto sua falta quanto a possibilidade de se reinventar. O parceiro amoroso funciona como um espelho: é no encontro com o outro que emergem nossas próprias inseguranças e desejos não ditos. A análise não busca resolver conflitos imediatos com técnicas, busca compreender os impasses inconscientes que se repetem, permitindo que o sujeito se reposicione diante do amor. Se você atravessa uma crise no relacionamento, enfrenta insegurança amorosa ou está vivendo uma separação, a psicanálise pode oferecer um espaço de escuta e elaboração. Não se trata de conselhos prontos, mas de um processo onde a experiência afetiva pode ser compreendida em profundidade. Rode Ziembick atende adultos com questões relacionais de forma presencial em São Paulo  Vila Olímpia e Brooklin e online para qualquer parte do Brasil e do exterior. Consulta particular, sigilosa, com orientação lacaniana e freudiana.",
  },
  {
    image: "./medoInsegu.svg", //falta essa imagem de burnout
    title: "Luto",
    description: "O luto é uma das experiências mais intensas da vida. A perda de alguém querido abre um vazio que pode se manifestar em tristeza profunda, ansiedade, cansaço, falta de sentido e dificuldade de retomar a rotina. Freud nos mostra que o luto é um trabalho psíquico necessário: pouco a pouco, o sujeito vai se despedindo do objeto perdido, elaborando a dor para que a vida possa seguir. Em alguns casos, no entanto, esse processo pode se tornar excessivamente doloroso, gerando sintomas de depressão, bloqueios emocionais e paralisar a existência.  O tratamento psicanalítico para luto oferece um espaço de escuta e elaboração, onde cada sujeito pode dar sentido singular à sua perda. É nesse encontro que se torna possível atravessar a dor, sustentar a memória e, ao mesmo tempo, reencontrar possibilidades de viver. Se você busca ajuda profissional para o luto, a análise pode ser o caminho para transformar esse sofrimento em palavra, sem apagá-lo, mas permitindo que a vida siga com novos significados. Saiba que não é necessário atravessar esse momento sozinho. A psicanálise pode ser um apoio fundamental para ressignificar a perda e encontrar novos caminhos para seguir vivendo. Agende sua consulta de terapia online e dê início ao processo de cuidado e acolhimento."
  },
  {
    image: "./estresse3.svg",
    title: "Brasileiros no exterior",
    subtitle: "Psicanálise online em português para brasileiros no exterior",
    description: "Viver em outro país pode trazer conquistas, mas também desafios inimagináveis. O entusiasmo do novo muitas vezes vem acompanhado de sentimentos difíceis, medo, insegurança, solidão e saudade. Ser estrangeiro é lidar com barreiras linguísticas e culturais, tensões nas relações familiares e profissionais, e com um estranhamento de si mesmo diante do olhar do outro em uma nova cultura. Para Lacan, o exílio não é apenas geográfico. É também uma experiência de confronto com a própria falta, com as angústias que emergem quando os referenciais conhecidos deixam de funcionar. A análise pode oferecer um espaço de elaboração para essas experiências — um lugar onde a língua materna acolhe o que o idioma estrangeiro não consegue nomear. O atendimento de psicanálise online em português para brasileiros no exterior permite dar continuidade a um processo analítico ou iniciar um independentemente de onde você esteja. Europa, Estados Unidos, Ásia ou qualquer outro fuso: a escuta clínica acontece no idioma e no tempo do sujeito. Rode Ziembick atende brasileiros vivendo fora do Brasil com orientação lacaniana e freudiana e mais de 10 anos de clínica. Sessões online, particulares e sigilosas, com agendamento flexível para diferentes fusos horários.",
  }
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
                      <h6 className={styles.card_subtitle}>{atuacao.subtitle}</h6>
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
