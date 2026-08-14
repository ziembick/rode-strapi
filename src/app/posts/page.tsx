import { Suspense } from "react";
import styles from "./posts.module.sass";
import { Header2 } from "../components/header copy";
import PostsSkeleton from "./PostsSkeleton";
import PostsData from "./PostData";

export const revalidate = 60;

export default function Postagem() {
  return (
    <>
      <Header2 />
      <div className={styles.bgContainer}>
        <main className={`${styles.contentMain} container`}>
          <div className={styles.mainDiv}>
            <div className={styles.headerDiv}>
              <h1 className={styles.textH1}>Últimas postagens</h1>
              <Suspense fallback={<PostsSkeleton />}>
                <PostsData />
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}