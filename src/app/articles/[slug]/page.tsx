import { getAllArticles, getArticle } from "@/../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from './article.module.sass'

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
    <main className={`${styles.mainContainer} container`}>
      <section className={styles.secao}>
        <div className={styles.mainDiv}>
          <div className={styles.article}>
            <h1 className={styles.articleTitle}>
              {article.title}
            </h1>
            <p className={styles.articleSummary}>
              {article.summary}
            </p>
          </div>
          <div className={styles.imageDiv}>
            <Image
              alt="Article Image"
              className={styles.imageClass}
              height="365"
              src={article.articleImage.url}
              width="650"
            />
            <div className={styles.detailsDiv}>
              <div className={styles.details}>
                <div className={styles.detailsMain}>
                  {documentToReactComponents(article.details.json)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}