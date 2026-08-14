import styles from "./posts.module.sass";

export default function PostsSkeleton() {
  return (
    <>
      <div className={styles.filtersDiv}>
        {[80, 90, 100, 90].map((width, i) => (
          <div
            key={i}
            className={`${styles.skeleton} ${styles.skeletonPill}`}
            style={{ width }}
          />
        ))}
      </div>

      <div className={styles.featuredCard}>
        <div className={`${styles.skeleton} ${styles.skeletonFeaturedImage}`} />
        <div className={styles.featuredContent}>
          <div className={`${styles.skeleton} ${styles.skeletonCategoryPill}`} />
          <div className={`${styles.skeleton} ${styles.skeletonFeaturedTitle}`} />
          <div className={`${styles.skeleton} ${styles.skeletonLine}`} />
          <div className={`${styles.skeleton} ${styles.skeletonLineShort}`} />
        </div>
      </div>

      <div className={styles.cardGrid}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.articleCard}>
            <div className={`${styles.skeleton} ${styles.skeletonCardImage}`} />
            <div className={styles.cardBody}>
              <div className={`${styles.skeleton} ${styles.skeletonCategoryPill}`} />
              <div className={`${styles.skeleton} ${styles.skeletonCardTitle}`} />
              <div className={`${styles.skeleton} ${styles.skeletonLine}`} />
              <div className={`${styles.skeleton} ${styles.skeletonLineShort}`} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}