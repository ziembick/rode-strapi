import React from 'react'
import styles from './page.module.sass'
import Link from 'next/link'

export default function notFound() {
  return (

    <div className={`${styles.notFound} container`}>
      <h1 className={styles.title2}>404 - Página não encontrada</h1>
      <p className={styles.ptag2}>A página que você está procurando não foi encontrada.</p>
      <Link href="/" className={styles.voltar}>Voltar para página principal</Link>
      {/* Aqui você pode adicionar mais elementos HTML, estilização, etc. */}
    </div>

  )
}
