'use client'
import Image from 'next/image'
import styles from './contato.module.sass'
import HeaderContato from '../components/header_contato'
import BtnAgende from '../components/btnAgende'

export default function Contato() {
  return (
    <>
      <HeaderContato />
      <main className={styles.page}>

        {/* ── Contato principal ── */}
        <section className={styles.section}>
          <h1 className={styles.sectionTitle}>Contato</h1>
          <hr className={styles.divider} />

          <div className={styles.grid}>

            {/* Foto */}
            <div className={styles.fotoCol}>
              <Image
                src="/sobreMim.JPG"
                alt="Rode Ziembick - Psicanalista"
                width={420}
                height={520}
                className={styles.foto}
              />
              <h2 className={styles.nome}>Rode Ziembick</h2>
              <p className={styles.cargo}>Psicanalista</p>
              <hr className={styles.smallDivider} />
            </div>

            {/* Texto */}
            <div className={styles.textoCol}>
              <h2 className={styles.heading}>Marque uma sessão.</h2>
              <p className={styles.subheading}>
                Psicanálise online e presencial. Vamos conversar?
              </p>
              <p className={styles.texto}>
                Atendimento online (Brasil e exterior) e presencial na Vila Olímpia e Brooklin.
              </p>
              <p className={styles.texto}>
                Cuide de si, procure os caminhos possíveis.
              </p>
               <BtnAgende />
            </div>

          </div>
        </section>

        {/* ── Mapa + Contato ── */}
        <div className={styles.mapSection}>

          {/* Painel de contato */}
          <div className={styles.contactPanel}>
            <h2 className={styles.contactPanelTitle}>Entre em contato</h2>
            <hr className={styles.contactPanelDivider} />

            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg width="20" height="20" fill="#809B92" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className={styles.contactItemText}>
                <p className={styles.contactItemLabel}>Vila Olímpia</p>
                <p className={styles.contactItemValue}>
                  Rua Gomes de Carvalho, 1356<br />
                  Vila Olímpia — São Paulo, SP
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg width="20" height="20" fill="#809B92" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className={styles.contactItemText}>
                <p className={styles.contactItemLabel}>Market Place — Brooklin</p>
                <p className={styles.contactItemValue}>
                  Av. Dr. Chucri Zaidan, 940 — Torre II, 3º andar<br />
                  Cidade Monções — São Paulo, SP
                </p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg width="20" height="20" fill="none" stroke="#809B92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className={styles.contactItemText}>
                <p className={styles.contactItemLabel}>WhatsApp</p>
                <p className={styles.contactItemValue}>+55 11 97099-7779</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <svg width="20" height="20" fill="none" stroke="#809B92" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className={styles.contactItemText}>
                <p className={styles.contactItemLabel}>E-mail</p>
                <p className={styles.contactItemValue}>rodeziem@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Mapas */}
          <div className={styles.mapsCol}>
            <iframe
              className={styles.map}
              src="https://maps.google.com/maps?q=Rua+Gomes+de+Carvalho+1356+Vila+Olimpia+Sao+Paulo&output=embed&hl=pt"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <iframe
              className={styles.map}
              src="https://maps.google.com/maps?q=04583-110&output=embed&hl=pt"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </main>
    </>
  )
}
