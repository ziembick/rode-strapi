import { getAllArticles, getArticle } from "@/../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./article.module.sass";
import { Header2 } from "@/app/components/header copy";

interface KnowledgeArticleProps {
  params: {
    slug: any;
  };
}

export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  return allArticles.map((article: any) => ({
    slug: article.slug,
  }));
}

export default async function KnowledgeArticle({
  params,
}: KnowledgeArticleProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <>
      <Header2 />
      <div className={styles.bgContainer}>
        <main className={`${styles.mainContainer} container`}>
          <section className={styles.secao}>
            <div className={styles.mainDiv}>
              <div className={styles.article}>
                <div className={styles.categoryName}>
                  {article.categoryName}
                </div>
                <div className={styles.tituloEsummary}>
                  <h1 className={styles.articleTitle}>{article.title}</h1>
                  <p className={styles.articleSummary}>{article.summary}</p>
                </div>
                <p>{new Date(article.date).toLocaleDateString()}</p>
              </div>
              <div className={styles.imageDiv}>
                <Image
                  alt="Article Image"
                  className={styles.imageClass}
                  height={600}
                  src={article.articleImage.url}
                  width={100}
                />
                <div className={styles.detailsDiv}>
                  <div className={styles.details}>
                    <div className={styles.detailsMain}>
                      {documentToReactComponents(article.details.json)}
                      <p>Escrito por: {article.authorName}</p>
                      <p>{article.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
