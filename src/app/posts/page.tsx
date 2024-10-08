import { getAllArticles } from "@/../lib/api";
import Image from "next/image";
import Link from "next/link";
import styles from "./posts.module.sass";
import Header from "../components/header";
import { Header2 } from "../components/header copy";


export const revalidate = 60;

export default async function Postagem() {
  const articles = await getAllArticles(); // @ts-ignore

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
                <div className={styles.card}>
                  {articles &&
                    articles.map((article: any) => (
                      <article
                        key={article.sys.id}
                        className={styles.articleCard}
                      >
                        <Image
                          alt="placeholder"
                          className={styles.image}
                          height={263}
                          src={article.articleImage.url}
                          width={350}
                          layout="responsive"
                        />
                        <div className={styles.linksDiv}>
                          <div className={styles.topSection}>
                          <div className={styles.tituloCategory}>
                            <Link href={`/articles/${article.slug}`} className={styles.titleArtigo}>
                              <h3 className={styles.articleTitle}>
                                {article.title}
                              </h3>
                            </Link>
                            <div className={styles.category}>
                              {article.categoryName}
                            </div>
                          </div>
                          <p className={styles.articleSummary}>
                            {article.summary}
                          </p>
                          </div>
                          {/* <p className={styles.articleAuthor}>
                            Written by: {article.authorName}
                          </p> */}
                          <div className={styles.bottomSection}>
                          <div className={styles.readMore}>
                            <p className={styles.data}>
                              {new Date(article.date).toLocaleDateString('pt-BR')}
                            </p>
                            <Link
                              className={styles.linkReadMore}
                              href={`/articles/${article.slug}`}
                            >
                              Leia mais →
                            </Link>
                          </div>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// import React from "react";
// import { client } from "../../../lib/contentful/client";
// import PostCard from "./PostCard";

// interface Post {
//   fields: {
//     slug: string;
//     title: string;
//     description: string;
//     // Adicione outros campos relevantes aqui
//   };
// }

// interface PostsProps {
//   posts: Post[];
// }

// const Posts = ({ posts }: PostsProps) => {
//   if (!posts || posts.length === 0) {
//     return <p>No posts available</p>;
//   }

//   return (
//     <section className="section">
//       <div className="container">
//         <ul>
//           {posts.map((post) => (
//             <PostCard key={post.fields.slug} post={post} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export const getData = async () => {
//   const response = await client.getEntries({ content_type: "posts" });

//   return {
//     props: {
//       posts: response.items,
//     },
//     revalidate: 60, // Revalida a cada 60 segundos
//   };
// };

// export default Posts;
