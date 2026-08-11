import { getAllArticlesSlugs, getArticle } from "@/../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "./article.module.sass";
import { Header2 } from "@/app/components/header copy";

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

export default async function KnowledgeArticle({
  params,
}: KnowledgeArticleProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    return notFound();
  }

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.rodepsi.com/articles/${params.slug}#article`,
    "headline": article.title,
    "description": article.summary,
    "image": article.articleImage?.url
      ? {
          "@type": "ImageObject",
          "url": article.articleImage.url,
        }
      : undefined,
    "datePublished": article.date,
    "dateModified": article.date,
    "inLanguage": "pt-BR",
    "url": `https://www.rodepsi.com/articles/${params.slug}`,
    "author": {
      "@type": "Person",
      "@id": "https://www.rodepsi.com/#rode-ziembick",
      "name": article.authorName || "Rode Ziembick",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rode Ziembick – Psicanalista",
      "url": "https://www.rodepsi.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rodepsi.com/logoRVerde.svg",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.rodepsi.com/articles/${params.slug}`,
    },
    "articleSection": article.categoryName,
    "isPartOf": { "@id": "https://www.rodepsi.com/#website" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />
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
                <div className={styles.date}>
                  <p>Escrito por: {article.authorName}</p>
                  {new Date(article.date).toLocaleDateString('pt-BR')}
                </div>
              </div>
              <div className={styles.imageDiv}>
                <Image
                  alt="Article Image"
                  className={styles.imageClass}
                  height={605}
                  src={article.articleImage.url}
                  width={1282}
                />
                <div className={styles.detailsDiv}>
                  {documentToReactComponents(article.details.json)}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}