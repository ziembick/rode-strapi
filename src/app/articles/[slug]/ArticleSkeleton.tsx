import styles from "./article.module.sass";

export default function ArticleSkeleton() {
  return (
    <div className={styles.layoutGrid}>
      <div className={styles.article}>
        <div className={`${styles.skeleton} ${styles.skeletonCategoryPill}`} />
        <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
        <div className={`${styles.skeleton} ${styles.skeletonDate}`} />
        <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
        <div className={`${styles.skeleton} ${styles.skeletonLine}`} />
        <div className={`${styles.skeleton} ${styles.skeletonLine}`} />
        <div className={`${styles.skeleton} ${styles.skeletonLineShort}`} />
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.sidebarCard}>
          <div className={`${styles.skeleton} ${styles.skeletonLabel}`} />
          <div className={`${styles.skeleton} ${styles.skeletonCategoryPill}`} />
        </div>

        <div className={styles.sidebarCard}>
          <div className={`${styles.skeleton} ${styles.skeletonLabel}`} />
          <div className={styles.authorRow}>
            <div className={`${styles.skeleton} ${styles.skeletonAvatar}`} />
            <div style={{ flex: 1 }}>
              <div className={`${styles.skeleton} ${styles.skeletonAuthorName}`} />
              <div className={`${styles.skeleton} ${styles.skeletonAuthorRole}`} />
            </div>
          </div>
        </div>

        <div className={styles.sidebarCard}>
          <div className={`${styles.skeleton} ${styles.skeletonLabel}`} />
          <div className={styles.relatedList}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.relatedItem}>
                <div className={`${styles.skeleton} ${styles.skeletonThumb}`} />
                <div className={`${styles.skeleton} ${styles.skeletonRelatedTitle}`} />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}