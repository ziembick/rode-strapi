import { getAllArticles } from "@/../lib/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./posts.module.sass";
import Header from "../components/header";
import { Header2 } from "../components/header copy";

export default function Posts() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getAllArticles();
      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <>
      <Header2 />

      <div className={styles.bgContainer}>
        <main className={`${styles.contentMain} container`}>
          <section className={styles.elementSection}>
            <div className={styles.mainDiv}>
              <div className={styles.headerDiv}>
                <div className={styles.textDiv}>
                  <h1 className={styles.textH1}>Últimas postagens</h1>
                </div>
              </div>
              <div className={styles.cardContainer}>
                {articles.map((article) => (
                  <div className={styles.card} key={article.sys.id}>
                    <Link href={`/articles/${article.slug}`}>
                      <a className={styles.titleArtigo}>
                        <h3 className={styles.articleTitle}>{article.title}</h3>
                      </a>
                    </Link>
                    <div className={styles.linksDiv}>
                      <div className={styles.topSection}>
                        <div className={styles.tituloCategory}>
                          <div className={styles.category}>{article.categoryName}</div>
                        </div>
                      </div>
                      <p className={styles.articleSummary}>{article.summary}</p>
                    </div>
                    {/* <p className={styles.articleAuthor}>
                      Written by: {article.authorName}
                    </p> */}
                    <div className={styles.bottomSection}>
                      <div className={styles.readMore}>
                        <p className={styles.data}>
                          {new Date(article.date).toLocaleDateString()}
                        </p>
                        <Link href={`/articles/${article.slug}`}>
                          <a className={styles.linkReadMore}>Leia mais →</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}