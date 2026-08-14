import { getAllArticlesSlugs, getArticle, getAllArticles } from "@/../lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Link from "next/link";
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

  const allArticles = await getAllArticles();
  const relatedArticles = (allArticles || [])
    .filter((item: any) => item.slug !== params.slug)
    .sort((a: any) => (a.categoryName === article.categoryName ? -1 : 1))
    .slice(0, 3);

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
            <div className={styles.layoutGrid}>
              <div className={styles.article}>
                <span className={styles.categoryName}>
                  {article.categoryName}
                </span>
                <h1 className={styles.articleTitle}>{article.title}</h1>
                <p className={styles.date}>
                  Escrito por: <strong>{article.authorName}</strong> ·{" "}
                  {new Date(article.date).toLocaleDateString("pt-BR")}
                </p>
                <div className={styles.imageWrapper}>
                  <Image
                    alt={article.title}
                    src={article.articleImage.url}
                    fill
                    className={styles.imageClass}
                  />
                </div>
                <div className={styles.detailsDiv}>
                  {documentToReactComponents(article.details.json)}
                </div>
              </div>

              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <p className={styles.sidebarLabel}>Categoria</p>
                  <span className={styles.categoryName}>
                    {article.categoryName}
                  </span>
                </div>

                <div className={styles.sidebarCard}>
                  <p className={styles.sidebarLabel}>Autor</p>
                  <div className={styles.authorRow}>
                    <div className={styles.authorAvatar}>
                      <Image
                        alt={article.authorName}
                        src="/sobreMim.JPG"
                        fill
                        className={styles.authorAvatarImage}
                      />
                    </div>
                    <div>
                      <p className={styles.authorName}>{article.authorName}</p>
                      <p className={styles.authorRole}>Psicanalista</p>
                    </div>
                  </div>
                </div>

                {relatedArticles.length > 0 && (
                  <div className={styles.sidebarCard}>
                    <p className={styles.sidebarLabel}>Posts relacionados</p>
                    <div className={styles.relatedList}>
                      {relatedArticles.map((related: any) => (
                        <Link
                          key={related.sys.id}
                          href={`/articles/${related.slug}`}
                          className={styles.relatedItem}
                        >
                          <div className={styles.relatedThumb}>
                            <Image
                              alt={related.title}
                              src={related.articleImage.url}
                              fill
                              className={styles.relatedThumbImage}
                            />
                          </div>
                          <span className={styles.relatedTitle}>
                            {related.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}