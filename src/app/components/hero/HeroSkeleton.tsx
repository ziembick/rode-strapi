import styles from "./hero.module.sass";

export default function HeroSkeleton() {
  return (
    <div className={styles.heroBackground}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={`${styles.skeleton} ${styles.skeletonNome}`} />
          <div className={`${styles.skeleton} ${styles.skeletonTitulo}`} />
          <div className={`${styles.skeleton} ${styles.skeletonComentarioLine1}`} />
          <div className={`${styles.skeleton} ${styles.skeletonComentarioLine2}`} />
          <div className={`${styles.skeleton} ${styles.skeletonTextinho}`} />
          <div className={`${styles.skeleton} ${styles.skeletonBtn}`} />
          <div className={styles.laptop}>
            <div className={`${styles.skeleton} ${styles.skeletonPtag}`} />
            <div className={`${styles.skeleton} ${styles.skeletonPtag}`} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
        </div>
      </div>
    </div>
  );
}