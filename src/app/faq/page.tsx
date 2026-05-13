'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './faq.module.sass'
import HeaderContato from '../components/header_contato'

const faqs = [
  {
    q: 'O que é psicanálise?',
    a: 'A psicanálise é um método terapêutico criado por Sigmund Freud que busca compreender o inconsciente, os conflitos emocionais e os padrões que influenciam pensamentos, sentimentos e relacionamentos. Através da fala e da escuta analítica, a pessoa pode entender melhor sua história, seus sintomas, afetos e suas emoções.',
  },
  {
    q: 'Para que serve a psicanálise?',
    a: 'A psicanálise ajuda pessoas que enfrentam ansiedade, angústia, conflitos emocionais, dificuldades nos relacionamentos, baixa autoestima, crises pessoais, insegurança, sofrimento emocional e repetição de padrões. Também é indicada para quem busca autoconhecimento e desenvolvimento emocional.',
  },
  {
    q: 'Como funciona uma sessão de psicanálise?',
    a: 'Durante a sessão, o paciente fala livremente sobre sentimentos, pensamentos, sonhos, medos, conflitos e experiências de vida. O processo acontece em um ambiente acolhedor, ético e sigiloso, permitindo uma compreensão mais profunda das questões emocionais.',
  },
  {
    q: 'Quanto tempo dura uma sessão?',
    a: 'As sessões de psicanálise têm duração média de 50 minutos.',
  },
  {
    q: 'A psicanálise online funciona?',
    a: 'Sim. O atendimento online oferece acolhimento, escuta e profundidade clínica, permitindo que pessoas em qualquer cidade ou país tenham acesso ao processo analítico.',
  },
  {
    q: 'Você atende online e presencialmente?',
    a: 'Os atendimentos são realizados online, com flexibilidade e praticidade para pacientes no Brasil e no exterior. Atendimento presencial no Brooklin e na Vila Olímpia.',
  },
  {
    q: 'Com que frequência devo fazer análise?',
    a: 'A frequência é definida individualmente, mas normalmente recomenda-se uma sessão semanal para melhor continuidade do processo.',
  },
  {
    q: 'Quanto tempo dura uma análise?',
    a: 'Não existe um tempo exato. Cada pessoa possui sua própria história, ritmo emocional e objetivos terapêuticos.',
  },
  {
    q: 'A psicanálise ajuda na ansiedade?',
    a: 'Sim. Muitas pessoas procuram análise para compreender sintomas de ansiedade, medo, angústia, sensação de vazio, pensamentos repetitivos e insegurança emocional.',
  },
  {
    q: 'A psicanálise ajuda na depressão?',
    a: 'A psicanálise pode auxiliar na compreensão do sofrimento emocional relacionado à depressão, ajudando a pessoa a elaborar conflitos internos, perdas, sentimentos e padrões emocionais.',
  },
  {
    q: 'A psicanálise ajuda em relacionamentos?',
    a: 'Sim. Questões afetivas, dependência emocional, dificuldade de comunicação, ciúmes, separações, conflitos conjugais e padrões repetitivos nos relacionamentos podem ser trabalhados no processo analítico.',
  },
  {
    q: 'A análise pode ajudar em problemas profissionais e carreira?',
    a: 'Sim. Muitas questões ligadas ao trabalho estão relacionadas à autoestima, reconhecimento, insegurança, liderança, esgotamento emocional, ansiedade e relações interpessoais.',
  },
  {
    q: 'Preciso estar em crise para procurar análise?',
    a: 'Não. A psicanálise também é indicada para quem deseja autoconhecimento, amadurecimento emocional e maior compreensão de si mesmo.',
  },
  {
    q: 'A psicanálise substitui o psiquiatra?',
    a: 'Não. Em alguns casos, o acompanhamento psicanalítico pode acontecer junto ao tratamento psiquiátrico e outros cuidados de saúde.',
  },
  {
    q: 'Tudo o que eu disser ficará em sigilo?',
    a: 'Sim. O sigilo profissional é um dos princípios fundamentais da clínica psicanalítica.',
  },
  {
    q: 'Quem é Rode Ziembick?',
    a: 'Rode Ziembick é psicanalista com mais de 10 anos de experiência clínica, formada pela Escola Paulista de Psicanálise, mestranda em Psicologia Social na USP e sustentada pelo tripé analítico: análise pessoal, supervisão e estudo teórico.\n\nA orientação psicanalítica da clínica é freudiana-lacaniana; no entanto, a profissional possui formação dupla, tanto na escola francesa quanto na escola inglesa de psicanálise.\n\nSua trajetória é voltada à elaboração subjetiva, encontrando na psicanálise um espaço privilegiado para a escuta do inconsciente, onde emergem desejos, fantasias e significantes que estruturam nossa forma de estar no mundo.\n\nO percurso analítico pode ajudar em momentos de crise, de sofrimento ou simplesmente no desejo de compreender melhor a si mesmo e suas relações. Freud nos mostrou a importância de dar voz ao inconsciente, e Lacan nos lembrou que é na fala que cada sujeito pode se aproximar de sua própria verdade.\n\nConvido você a percorrer esse caminho em seu próprio tempo: uma travessia em direção ao desconhecido de si, onde cada palavra pode revelar novas possibilidades de existência. Estarei ao seu lado nesse processo de escuta e investigação do inconsciente.',
  },
  {
    q: 'Qual a diferença entre psicólogo, psiquiatra e psicanalista?',
    a: 'O psicólogo trabalha o comportamento e os processos emocionais através de diferentes abordagens terapêuticas. O psiquiatra é médico e pode prescrever medicação. Já o psicanalista trabalha a escuta do inconsciente, buscando compreender os conflitos emocionais e subjetivos do indivíduo.',
  },
  {
    q: 'A psicanálise ajuda no autoconhecimento?',
    a: 'Sim. O autoconhecimento é uma das principais transformações proporcionadas pela análise, permitindo maior consciência emocional e compreensão dos próprios padrões.',
  },
  {
    q: 'A análise pode ajudar na menopausa e nas mudanças da vida?',
    a: 'Sim. Questões relacionadas à menopausa, envelhecimento, identidade, perdas, mudanças emocionais, filhos, casamento, separações e transições da vida podem ser trabalhadas no processo analítico.',
  },
  {
    q: 'Como agendar uma sessão de psicanálise?',
    a: 'Você pode entrar em contato pelo WhatsApp, formulário do site ou redes sociais para agendar uma conversa inicial.',
  },
  {
    q: 'Quanto custa uma sessão de psicanálise?',
    a: 'Os valores são informados diretamente no contato inicial, considerando frequência e formato de atendimento.',
  },
  {
    q: 'A primeira sessão é uma avaliação?',
    a: 'A primeira conversa é um espaço de acolhimento e escuta para compreender a demanda e esclarecer dúvidas sobre o processo analítico.',
  },
  {
    q: 'Você atende brasileiros que moram no exterior?',
    a: 'Sim. O atendimento online permite acompanhar brasileiros que vivem fora do país.',
  },
  {
    q: 'Qual abordagem você utiliza?',
    a: 'O trabalho clínico é fundamentado na psicanálise freudiana e lacaniana, respeitando a singularidade e a subjetividade de cada pessoa.',
  },
  {
    q: 'Como saber se a psicanálise é para mim?',
    a: 'Se você sente sofrimento emocional, conflitos internos, ansiedade, depressão, problemas com os relacionamentos, repetição de padrões ou deseja compreender melhor sua história e emoções, a psicanálise é para você.\n\nSe você está buscando um espaço de escuta, acolhimento e compreensão emocional, a psicanálise pode ajudar você a compreender padrões, emoções e conflitos de forma mais profunda.\n\nEntre em contato para agendar uma conversa inicial.',
    cta: true,
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <>
      <HeaderContato />
      <main className={styles.page}>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>Perguntas Frequentes</h1>
            <p className={styles.heroSubtitle}>
              Psicanálise em São Paulo e Online — Rode Ziembick
            </p>
          </div>
        </section>

        {/* Accordion */}
        <section className={styles.section}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={styles.item}>
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>
                    <span className={styles.questionNum}>{String(i + 1).padStart(2, '0')}.</span>
                    {faq.q}
                  </span>
                  <svg
                    className={isOpen ? styles.chevronOpen : styles.chevron}
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className={styles.answerInner}>
                        {faq.a.split('\n\n').map((p, j) => (
                          <p key={j} style={{ marginBottom: j < faq.a.split('\n\n').length - 1 ? '0.75rem' : 0 }}>
                            {p}
                          </p>
                        ))}
                        {faq.cta && (
                          <a
                            href="https://wa.me/5511970997779?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.waBtn}
                          >
                            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Agendar pelo WhatsApp
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </section>

      </main>
    </>
  )
}
