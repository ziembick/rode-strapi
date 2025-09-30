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
      "A ansiedade é um dos grandes sintomas do nosso tempo. Ela surge como um aperto no peito, uma inquietação constante, uma sensação de que algo vai acontecer — mas sem sabermos exatamente o quê. Diferente do medo, que tem um objeto claro, a ansiedade aponta para um vazio: algo que escapa à nossa compreensão, mas insiste em se fazer sentir no corpo e na mente. Para Freud, a ansiedade está ligada ao encontro com o desconhecido e à perda de referências seguras. Lacan nos lembra que ela aparece quando o sujeito se vê diante do desejo do Outro, quando não sabe o que é esperado dele ou quando o próprio desejo parece enigmático. Nesse ponto, a ansiedade não é apenas um sintoma a ser eliminado, mas um sinal de algo importante em jogo na vida psíquica. A psicanálise online ou presencial oferece um espaço de escuta onde a ansiedade pode ganhar palavras, em vez de se repetir apenas como crises no corpo e em pensamentos recorrentes. Ao falar, o sujeito começa a localizar o que o angustia, compreende seus impasses e pode abrir caminhos para lidar com o que até então parecia sem saída. Se a ansiedade tem tomado conta do seu dia a dia, a análise pode ajudá-lo a transformar esse sofrimento em possibilidade de descoberta, permitindo que você sustente sua singularidade mesmo diante das incertezas da vida.Agende sua sessão de psicanálise para ansiedade online ou presencial e dê o primeiro passo no cuidado da sua saúde emocional",
  },

  {
    image: "./depresso3.svg",
    title: "Depressão",
    description: "A depressão não é apenas tristeza ou falta de ânimo. É como se algo em nós tivesse perdido o brilho, como se a vida deixasse de fazer sentido e o desejo ficasse suspenso. Muitas vezes, quem sofre de depressão sente-se culpado por não conseguir “reagir” ou “sair dessa”, como se fosse uma questão de força de vontade. Mas a psicanálise contra depressão e ansiedade nos mostra que não se trata de fraqueza, e sim de um sofrimento profundo que merece escuta e elaboração. A psicanálise online ou presencial para depressão não oferece receitas prontas nem conselhos superficiais. Ela propõe um espaço singular de fala, onde sua dor pode ser dita, escutada e compreendida. Ao colocar em palavras o indizível, abre-se a possibilidade de ressignificar a experiência, reencontrar o desejo e construir novas formas de estar na vida. Se você se reconhece nesse sofrimento e busca tratamento psicanalítico para depressão, seja leve, profunda, severa ou associada à ansiedade e insônia, a psicanálise pode ser o caminho para sustentar sua travessia e reencontrar, no seu próprio ritmo, a possibilidade de viver com mais leveza e sentido. Agende sua consulta de psicoterapia e dê o primeiro passo para o cuidado com sua saúde emocional. "
  },
  {
    image: "./estresse3.svg",
    title: "Brasileiros no exterior",
    description: "Viver em outro país pode trazer conquistas, mas também desafios inimagináveis. O entusiasmo do novo muitas vezes vem acompanhado de sentimentos difíceis, como o medo, a insegurança e as incertezas que são apenas algumas das emoções que diariamente invadem os corações e mentes de quem vive fora.  Ser estrangeiro é lidar com a saudade, solidão, ansiedade, barreiras linguísticas e culturais, além das tensões nas relações familiares e profissionais. Ser estrangeiro é ser confrontado com a própria falta, com as angústias que emergem diante do desconhecido, com o estranhamento de si mesmo diante do olhar do outro em uma nova cultura.  A psicanálise em português online é um processo de escuta e descoberta de si, que acolhe as dores da distância, da adaptação e do pertencimento.  O atendimento ajuda brasileiros no exterior a lidar com o choque cultural, crise de identidade, depressão, estresse e dificuldades emocionais, oferecendo um espaço seguro para cuidar da saúde mental e a sustentar sua singularidade mesmo longe do seu país de origem."
  },
  {
    image: "./outrosAcolhi.svg",
    title: "Carreira e Trabalho",
    description: "O ambiente de trabalho pode ser fonte de grandes realizações, mas também de intenso sofrimento. Muitos profissionais enfrentam esgotamento, cobranças excessivas, conflitos de carreira e dificuldades de adaptação. É comum seguir no automático, guardando em silêncio a ansiedade no trabalho, insegurança profissional, medo de mudar de profissão ou até mesmo esconder o cansaço para não correr o risco de uma demissão. Esses sintomas podem evoluir para burnout, estresse profissional e até bloqueios na vida profissional. O excesso de cobranças, os conflitos com colegas e liderança, a disputa por reconhecimento e a dificuldade de sustentar limites tornam o dia a dia ainda mais pesado. Não basta ter competência técnica: é preciso também estar psiquicamente fortalecido para lidar com os impasses e pressões do mundo do trabalho. A psicanálise para dificuldades no trabalho e burnout oferece um espaço de escuta e elaboração dessas experiências, ajudando você a compreender o que está em jogo, a reconhecer seus limites e a encontrar novas formas de se relacionar consigo mesmo e com o trabalho. Assim, é possível transformar o sofrimento em possibilidade de transformação e sustentar sua singularidade também na vida profissional. Agende sua sessão de psicanálise e dê início a esse processo de transformação. "
  },
  {
    image: "./medoInsegu.svg", //falta essa imagem de burnout
    title: "Relacionamento amoroso",
    description: "Os relacionamentos amorosos podem ser fonte de grande alegria, mas também de intensa dor. Conflitos, inseguranças, ciúmes, dependência emocional, traições ou a dificuldade em lidar com términos podem fragilizar a vida a dois e gerar sofrimento. Muitas vezes, o parceiro amoroso funciona como um espelho: é no encontro com o outro que surgem nossas próprias inseguranças e desejos não ditos. A psicanálise para problemas conjugais não busca apenas resolver conflitos imediatos, mas oferecer um espaço de escuta e reflexão sobre os vínculos afetivos. Para Lacan, é no laço amoroso que o sujeito encontra tanto sua falta quanto a possibilidade de se reinventar. A análise ajuda a compreender os impasses inconscientes que se repetem, permitindo ressignificar o relacionamento e construir formas mais saudáveis de viver o amor. Se você atravessa uma crise no relacionamento, enfrenta insegurança amorosa, ciúmes, sente dificuldade em confiar ou está vivendo uma separação, a psicanálise pode ser um caminho de apoio e transformação.  A análise é um processo singular, que permite ressignificar o amor, elaborar perdas e fortalecer a confiança nos relacionamentos. Não se trata de conselhos prontos, mas de um espaço onde sua experiência afetiva pode ser compreendida em profundidade. Se você procura psicanálise para problemas no relacionamento, apoio emocional após um término ou terapia para superar um relacionamento tóxico, saiba que não precisa enfrentar isso sozinho. Agende sua consulta de psicoterapia online ou presencial e inicie o processo de psicanálise para ressignificar seu relacionamento e encontrar novas possibilidades de viver o amor."
  },
  {
    image: "./medoInsegu.svg", //falta essa imagem de burnout
    title: "Luto",
    description: "O luto é uma das experiências mais intensas da vida. A perda de alguém querido abre um vazio que pode se manifestar em tristeza profunda, ansiedade, cansaço, falta de sentido e dificuldade de retomar a rotina. Freud nos mostra que o luto é um trabalho psíquico necessário: pouco a pouco, o sujeito vai se despedindo do objeto perdido, elaborando a dor para que a vida possa seguir. Em alguns casos, no entanto, esse processo pode se tornar excessivamente doloroso, gerando sintomas de depressão, bloqueios emocionais e paralisar a existência.  O tratamento psicanalítico para luto oferece um espaço de escuta e elaboração, onde cada sujeito pode dar sentido singular à sua perda. É nesse encontro que se torna possível atravessar a dor, sustentar a memória e, ao mesmo tempo, reencontrar possibilidades de viver. Se você busca ajuda profissional para o luto, a análise pode ser o caminho para transformar esse sofrimento em palavra, sem apagá-lo, mas permitindo que a vida siga com novos significados. Saiba que não é necessário atravessar esse momento sozinho. A psicanálise pode ser um apoio fundamental para ressignificar a perda e encontrar novos caminhos para seguir vivendo. Agende sua consulta de terapia online e dê início ao processo de cuidado e acolhimento."
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
