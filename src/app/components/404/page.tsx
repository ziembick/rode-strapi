import React from 'react';
import styles from "./404.module.sass"

export default function NotFoundPage () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Página não encontrada</h1>
      <p className={styles.pe}>A página que você está procurando não foi encontrada.</p>
    </div>
  );
};

