'use client'
import styles from './memorias.module.sass'
import HeaderContato from '../components/header_contato'

export default function MemoriasAncestrais() {
  return (
    <>
      <HeaderContato />
      <main className={styles.page}>

        {/* slide 1 – Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Projeto</p>
            <h1 className={styles.heroTitle}>Memórias<br />Ancestrais</h1>
            <p className={styles.heroSubtitle}>O legado mais precioso que podemos deixar</p>
            <hr className={styles.heroDivider} />
            <p className={styles.heroAuthor}>Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 2 – Apresentação */}
        <section className={styles.splitSection}>
          <div className={styles.splitLeft}>
            <p className={styles.splitEyebrow}>Apresentação</p>
            <h2 className={styles.splitTitle}>A Origem<br />do Projeto</h2>
            <hr className={styles.splitDivider} />
            <p className={styles.splitQuote}>A vida é a interpretação<br />que cada um faz<br />da sua própria história.</p>
          </div>
          <div className={styles.splitRight}>
            <p className={styles.splitP}>O Projeto Memórias Ancestrais nasceu do percurso da psicanalista Rode Ziembick no atendimento a pessoas idosas. As histórias narradas por seus pacientes eram tão ricas em vivências subjetivas que permitiram visualizar cada evento relatado.</p>
            <p className={styles.splitP}>Ao longo do tempo, esse processo foi se materializando em registros de vidas vividas com dores, amores, alegrias e lágrimas — dando origem à ideia de transformar em herança o maior legado que alguém pode deixar: suas memórias eternizadas em um livro.</p>
            <p className={styles.splitP}>O processo — nomeado sublimação pela escrita — reorganiza, desloca e reinterpreta vivências passadas, alcançando a transmissão histórica de uma vida elaborada pela subjetividade de quem narra.</p>
            <p className={styles.footerLine}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 3 – O que é Psicanálise */}
        <section className={styles.darkSection}>
          <div className={styles.darkInner}>
            <p className={styles.darkEyebrow}>O que é</p>
            <h2 className={styles.darkTitle}>Psicanálise</h2>
            <div className={styles.grid2x2}>
              {[
                { label: 'O Inconsciente', text: 'Campo onde reside uma dimensão do psiquismo que determina nosso modo de reagir e sentir no mundo, desconhecida pela consciência.' },
                { label: 'A Técnica', text: 'Faz aflorar, em ambiente controlado, a dimensão inconsciente, tornando o sujeito mais consciente de suas decisões, comportamentos e emoções.' },
                { label: 'A Escuta', text: 'A psicanalista utiliza a linguagem do paciente em associação livre. Tudo que acontece no setting analítico é material de análise.' },
                { label: 'A Elaboração', text: 'A análise permite elaborar traumas, reconstruir narrativas e reescrever textos de vida, atribuindo novos significantes a eventos e relações.' },
              ].map(c => (
                <div key={c.label} className={styles.card}>
                  <p className={styles.cardLabel}>{c.label}</p>
                  <p className={styles.cardText}>{c.text}</p>
                </div>
              ))}
            </div>
            <p className={styles.footerLineDark}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 4 – O Processo Analítico */}
        <section className={styles.lightBandSection}>
          <div className={styles.lightBand}>
            <p className={styles.lightBandEyebrow}>Como funciona uma sessão</p>
            <h2 className={styles.lightBandTitle}>O Processo Analítico</h2>
          </div>
          <div className={styles.lightBody}>
            <div className={styles.stepsGrid}>
              {[
                { num: '01', title: 'Frequência e Duração', text: 'Sessões semanais com duração média de 50 minutos, podendo se prolongar até uma hora.' },
                { num: '02', title: 'Espaço Seguro', text: 'As sessões acontecem em um espaço privado e seguro, no modelo online ou presencial.' },
                { num: '03', title: 'Associação Livre', text: 'O paciente fala o que lhe vier à cabeça, sem julgamento ou censura — a chamada regra fundamental.' },
                { num: '04', title: 'O Analista como Espelho', text: 'O analista funciona como uma página em branco onde o paciente se observa refletido e reescreve suas memórias.' },
              ].map(s => (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div>
                    <p className={styles.stepTitle}>{s.title}</p>
                    <p className={styles.stepText}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.footerLine}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 5 – Memórias */}
        <section className={styles.darkSection}>
          <div className={styles.darkInner}>
            <p className={styles.darkEyebrow}>O que são</p>
            <h2 className={styles.darkTitle}>Memórias</h2>
            <p className={styles.quoteItalic}>&ldquo;A psicanálise nos ensina que o sujeito não envelhece, o corpo sim,<br />mas o inconsciente é atemporal.&rdquo;</p>
            <div className={styles.memoriasList}>
              {[
                { label: 'Memória Atualizada', text: 'Lembrada com distanciamento temporal, o que distorce a realidade do fato. A lembrança equivale a uma atualização psíquica do ocorrido.' },
                { label: 'Memória Recalcada', text: 'Conteúdo reprimido que não é lembrado conscientemente, mas produz sofrimentos de causa não identificada com efeitos originais sobre o sujeito.' },
                { label: 'Memória Congelada', text: 'Lembrada sem atualização: seu efeito ainda é tão radical quanto no momento do ocorrido. Junto com a memória recalcada, é a que mais se beneficia do processo analítico.' },
              ].map(m => (
                <div key={m.label} className={styles.memoriaItem}>
                  <p className={styles.memoriaLabel}>{m.label}</p>
                  <p className={styles.memoriaText}>{m.text}</p>
                </div>
              ))}
            </div>
            <p className={styles.footerLineDark}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 6 – Ética e Cuidado */}
        <section className={styles.splitSection}>
          <div className={styles.splitLeft}>
            <p className={styles.splitEyebrow}>Ética e Cuidado</p>
            <h2 className={styles.splitTitle}>Sigilo e<br />Confidencialidade</h2>
            <hr className={styles.splitDivider} />
            <p className={styles.splitQuote}>Sua história é<br />tratada com<br />respeito absoluto.</p>
          </div>
          <div className={styles.splitRight}>
            {[
              { title: 'Escuta Sem Julgamento', text: 'Ao oferecer a escuta especializada, a psicanalista não faz juízo de valor de nenhuma ordem. O paciente fala livremente.' },
              { title: 'Sigilo Absoluto', text: 'Tudo que é dito pelo paciente é mantido em sigilo absoluto — o vínculo analítico é protegido por ética profissional.' },
              { title: 'Neutralidade', text: 'A escuta é feita de forma neutra e imparcial. O analista não tem posições políticas, religiosas ou ideológicas durante a análise.' },
            ].map(e => (
              <div key={e.title} className={styles.eticaItem}>
                <p className={styles.eticaItemTitle}>{e.title}</p>
                <hr className={styles.eticaItemBar} />
                <p className={styles.eticaItemText}>{e.text}</p>
              </div>
            ))}
            <p className={styles.footerLine}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 7 – Benefícios */}
        <section className={styles.darkSection}>
          <div className={styles.darkInner}>
            <p className={styles.darkEyebrow}>Benefícios</p>
            <h2 className={styles.darkTitle}>Reescrever a História com a Psicanálise</h2>
            <div className={styles.grid2x2}>
              {[
                { icon: '🗣', label: 'Dar voz ao não dito', text: 'Libera desconfortos, infortúnios e angústias armazenados que nunca foram simbolizados, aliviando sintomas físicos e psíquicos.' },
                { icon: '🔄', label: 'Ressignificar o passado', text: 'Revisitar histórias de um lugar inédito, reeditando e reelaborando afetos e sentidos ligados às memórias.' },
                { icon: '📖', label: 'Eternizar memórias', text: 'Registrar para a posteridade a vida de um ente querido e compartilhá-la com a família e quem mais de interesse.' },
                { icon: '✨', label: 'Bem-estar duradouro', text: 'Ao falar, se ouvir e ser ouvido, o paciente produz melhoria genuína em seu estado de ânimo e qualidade de vida.' },
              ].map(b => (
                <div key={b.label} className={styles.card}>
                  <p className={styles.cardLabel}>{b.icon} {b.label}</p>
                  <p className={styles.cardText}>{b.text}</p>
                </div>
              ))}
            </div>
            <p className={styles.footerLineDark}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 8 – O Livro */}
        <section className={styles.lightBandSection}>
          <div className={styles.lightBand}>
            <p className={styles.lightBandEyebrow}>O Livro</p>
            <h2 className={styles.lightBandTitle}>Uma Herança Impressa em Cada Página</h2>
          </div>
          <div className={styles.lightBody}>
            <p className={styles.livroText}><strong>Toda vida merece ser lida.</strong> A edição do manuscrito em livro físico pode ser produzida em tiragens mínimas — para guardar como relíquia familiar — ou em maior escala, para distribuição em livrarias.</p>
            <p className={styles.livroText}>Escrito em primeira pessoa e fiel à voz do narrador, o livro pode ser enriquecido com fotografias, recortes, desenhos, árvore genealógica, mapas e quaisquer imagens que evoquem ou ilustrem os trechos narrados — tornando-se um objeto único, ao mesmo tempo literário e afetivo.</p>
            <p className={styles.livroExLabel}>Exemplos de capas personalizadas</p>
            <div className={styles.livroGrid}>
              {[
                { title: 'Entre tropeços e gargalhadas:', sub: 'Memórias da tia Marina' },
                { title: 'Ri, chorei e aqui estou:', sub: 'História da vó Juju' },
                { title: 'O fio invisível da minha história:', sub: 'Memórias do vovô José' },
              ].map(b => (
                <div key={b.sub} className={styles.livroCover}>
                  <p className={styles.livroCoverTitle}>{b.title}<br /><strong>{b.sub}</strong></p>
                  <p className={styles.livroCoverSub}>Memórias Ancestrais</p>
                </div>
              ))}
            </div>
            <p className={styles.footerLine}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 9 – Investimento */}
        <section className={styles.lightBandSection}>
          <div className={styles.lightBand}>
            <p className={styles.lightBandEyebrow}>Investimento</p>
            <h2 className={styles.lightBandTitle}>As Quatro Etapas do Projeto</h2>
          </div>
          <div className={styles.lightBody}>
            <p className={styles.investNote}>O investimento se distribui em até quatro partes, podendo ser interrompido a qualquer momento por decisão de qualquer das partes.</p>
            <div className={styles.investGrid}>
              {[
                { num: '01', title: 'Sessões Individuais', text: 'Trabalho analítico propriamente dito com registro das memórias ao longo das sessões com o paciente.' },
                { num: '02', title: 'Organização do Material', text: 'Organização das notações das sessões e formatação do material para impressão e publicação.' },
                { num: '03', title: 'Pesquisa Editorial', text: 'Pesquisa e agenciamento de editoras para publicação do livro com a intermediação da psicanalista.' },
                { num: '04', title: 'Publicação', text: 'Publicação do material em forma de livro físico ou digital, escrito em primeira pessoa.' },
              ].map(s => (
                <div key={s.num} className={styles.investCard}>
                  <div className={styles.investCardHeader}>
                    <p className={styles.investCardNum}>{s.num}</p>
                  </div>
                  <div className={styles.investCardBody}>
                    <p className={styles.investCardTitle}>{s.title}</p>
                    <p className={styles.investCardText}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.footerLine}>Projeto Memórias Ancestrais · Psicanalista Rode Ziembick</p>
          </div>
        </section>

        {/* slide 10 – Quote final */}
        <section className={styles.quoteSection}>
          <div className={styles.quoteInner}>
            <p className={styles.finalQuote}>&ldquo;A vida é a interpretação<br />que cada um faz<br />da sua própria história.&rdquo;</p>
            <hr className={styles.finalDivider} />
            <p className={styles.finalName}>Rode Ziembick</p>
            <p className={styles.finalRole}>Psicanalista · Projeto Memórias Ancestrais</p>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Interessado no Projeto?</h2>
          <p className={styles.ctaText}>Entre em contato para saber mais sobre o Projeto Memórias Ancestrais.</p>
          <a href="https://wa.me/5511970997779?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Projeto%20Memórias%20Ancestrais" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Falar pelo WhatsApp
          </a>
        </section>

      </main>
    </>
  )
}
