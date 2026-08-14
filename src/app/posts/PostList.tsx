"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./posts.module.sass";

interface PostsListProps {
  articles: any[];
}

const PAGE_SIZE = 3;

export default function PostsList({ articles }: PostsListProps) {
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(articles.map((article) => article.categoryName).filter(Boolean))
    );
    return ["Todos", ...unique];
  }, [articles]);

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [page, setPage] = useState(1);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "Todos") return articles;
    return articles.filter((article) => article.categoryName === activeCategory);
  }, [articles, activeCategory]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);
  const totalPages = Math.max(1, Math.ceil(remainingArticles.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedArticles = remainingArticles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function handleCategoryChange(category: string) {
    setActiveCategory(category);
    setPage(1);
  }

  if (!articles || articles.length === 0) {
    return <p className={styles.emptyState}>Nenhuma postagem encontrada.</p>;
  }

  return (
    <>
      <div className={styles.filtersDiv}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.filterPill} ${
              activeCategory === category ? styles.filterPillActive : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {featuredArticle && (
  <Link
    href={`/articles/${featuredArticle.slug}`}
    className={styles.featuredCard}
  >
    <div className={styles.featuredImageWrapper}>
      <Image
        alt={featuredArticle.title}
        src={featuredArticle.articleImage.url}
        fill
        className={styles.featuredImage}
      />
    </div>
    <div className={styles.featuredContent}>
      <span className={styles.categoryPill}>
        {featuredArticle.categoryName}
      </span>
      <h2 className={styles.featuredTitle}>{featuredArticle.title}</h2>
      <p className={styles.featuredSummary}>{featuredArticle.summary}</p>
      <div className={styles.featuredFooter}>
        <span className={styles.dateText}>
          {new Date(featuredArticle.date).toLocaleDateString("pt-BR")}
        </span>
        <span className={styles.linkReadMore}>Leia mais →</span>
      </div>
    </div>
  </Link>
)}

      <div className={styles.cardGrid}>
        {pagedArticles.map((article) => (
          <Link
            key={article.sys.id}
            href={`/articles/${article.slug}`}
            className={styles.articleCard}
          >
            <div className={styles.cardImageWrapper}>
              <Image
                alt={article.title}
                src={article.articleImage.url}
                fill
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.categoryPill}>{article.categoryName}</span>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.cardSummary}>{article.summary}</p>
              <div className={styles.cardFooter}>
                <span className={styles.dateText}>
                  {new Date(article.date).toLocaleDateString("pt-BR")}
                </span>
                <span className={styles.linkReadMore}>Leia mais →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`${styles.pageButton} ${
                num === currentPage ? styles.pageButtonActive : ""
              }`}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}
          <button
            className={styles.pageButton}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}