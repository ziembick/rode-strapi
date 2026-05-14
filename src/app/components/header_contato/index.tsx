import React, { Suspense, useState, lazy } from "react";
import Image from "next/image";
import styles from "../header/header.module.sass";
import { NavItem } from "../header/nav-item";
import Link from "next/link";
import { motion } from "framer-motion";

const Postagem = lazy(() => import("@/app/posts/page"));

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Sobre Mim", href: "/sobre-mim" },
  { label: "Contato", href: "/psicanalista-em-sao-paulo/" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Projeto Memórias Ancestrais",
    href: "/projeto-memorias-ancestrais",
  },
  { label: "Posts", href: "/posts" },
];

const LoadingFallback: React.FC = () => (
  <div className={styles.loadingFallback}>
    <p className={styles.loading}>Carregando</p>
    <div className={styles.typing_indicator}>
      <div className={styles.typing_circle}></div>
      <div className={styles.typing_circle}></div>
      <div className={styles.typing_circle}></div>
      <div className={styles.typing_shadow}></div>
      <div className={styles.typing_shadow}></div>
      <div className={styles.typing_shadow}></div>
    </div>
  </div>
);

const HeaderContato: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  return (
    <motion.nav
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.navItems}
    >
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image
              src="../logoRVerde.svg"
              alt="Logo"
              width={44}
              height={58}
              className={styles.logo}
            />
          </Link>
        </div>

        <div className={styles.desktopNav}>
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={() => {
                if (item.href === "/posts") setShowPosts(true);
              }}
            />
          ))}
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className={styles.mobileNav}>
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                onClick={() => {
                  setMenuOpen(false);
                  if (item.href === "/posts") setShowPosts(true);
                }}
              />
            ))}
          </div>
        )}
      </div>

      {showPosts && (
        <Suspense fallback={<LoadingFallback />}>
          <Postagem />
        </Suspense>
      )}
    </motion.nav>
  );
};

export default HeaderContato;
