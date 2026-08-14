import { Suspense } from "react";
import { getAllArticlesSlugs, getArticle } from "@/../lib/api";
import type { Metadata } from "next";
import styles from "./article.module.sass";
import { Header2 } from "@/app/components/header copy";
import ArticleData from "./ArticleData";
import ArticleSkeleton from "./ArticleSkeleton";

interface KnowledgeArticleProps {
  params: {
    slug: any;
  };
}

export async function generateStaticParams() {
  const allArticles = await getAllArticlesSlugs();
  if (!allArticles) return [];
  return allArticles.map((article: any) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: KnowledgeArticleProps): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {
      title: "Artigo não encontrado | Rode Ziembick",
    };
  }

  return {
    title: `${article.title} | Rode Ziembick — Psicanalista`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.date,
      authors: [article.authorName],
      images: article.articleImage?.url ? [article.articleImage.url] : [],
    },
  };
}

export default function KnowledgeArticle({ params }: KnowledgeArticleProps) {
  return (
    <>
      <Header2 />
      <div className={styles.bgContainer}>
        <main className={`${styles.mainContainer} container`}>
          <section className={styles.secao}>
            <Suspense fallback={<ArticleSkeleton />}>
              <ArticleData slug={params.slug} />
            </Suspense>
          </section>
        </main>
      </div>
    </>
  );
}