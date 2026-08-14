import { getAllArticles } from "@/../lib/api";
import styles from "./posts.module.sass";
import { Header2 } from "../components/header copy";
import PostsList from "./PostList";

export const revalidate = 60;

export default async function Postagem() {
  const articles = await getAllArticles();

  return (
    <>
      <Header2 />
      <div className={styles.bgContainer}>
        <main className={`${styles.contentMain} container`}>
          <div className={styles.mainDiv}>
            <div className={styles.headerDiv}>
              <h1 className={styles.textH1}>Últimas postagens</h1>
              <PostsList articles={articles || []} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}