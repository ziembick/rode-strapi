import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.sass";
import { NavItem } from "./nav-item";
import Link from "next/link";
import { motion } from "framer-motion";

type NavItemType = {
  label: string;
  href?: string;
  refKey?: keyof SectionRefs; // refKey deve ser uma chave de SectionRefs
};

const NAV_ITEMS: NavItemType[] = [
  { label: "Home", refKey: "heroRef" },
  { label: "Áreas de atuação", refKey: "atuacaoRef" },
  { label: "Sobre mim", refKey: "sobreRef" },
  { label: "O que é Psicanálise", refKey: "psicanaliseRef" },
  { label: "Depoimentos", refKey: "depoimentosRef" },
  { label: "Contato", refKey: "contatoRef" },
  { label: "Posts", href: "/posts" },
];

interface SectionRefs {
  heroRef: React.RefObject<HTMLDivElement>;
  atuacaoRef: React.RefObject<HTMLDivElement>;
  psicanaliseRef: React.RefObject<HTMLDivElement>;
  ajudarRef: React.RefObject<HTMLDivElement>;
  sobreRef: React.RefObject<HTMLDivElement>;
  depoimentosRef: React.RefObject<HTMLDivElement>;
  atencaoRef: React.RefObject<HTMLDivElement>;
  contatoRef: React.RefObject<HTMLDivElement>;
}

interface HeaderProps {
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
  refs: SectionRefs;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection, refs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<keyof SectionRefs | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = Object.entries(refs).map(([key, ref]) => ({
        key,
        top: ref.current?.getBoundingClientRect().top,
      }));

      const active = sections.find(
        (section) =>
          section.top !== undefined &&
          section.top <= window.innerHeight / 2 &&
          section.top >= 0
      );
      setActiveSection(active ? (active.key as keyof SectionRefs) : null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavItemClick = (refKey?: keyof SectionRefs) => {
    if (refKey) {
      scrollToSection(refs[refKey]);
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.navItems} ${isScrolled ? styles.scrolled : ""}`}
    >
      <motion.div
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
        className={`${styles.container}`}
      >
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image
              src="/logoRVerde.svg"
              alt="Logo"
              width={44}
              height={58}
              className={`${styles.logo} pt-10`}
            />
          </Link>
        </div>
        <div className={styles.desktopNav}>
          {NAV_ITEMS.map((item) =>
            item.refKey ? (
              <NavItem
                key={item.label}
                label={item.label}
                onClick={() => handleNavItemClick(item.refKey)}
                isActive={item.refKey === activeSection}
              />
            ) : (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                isActive={item.href === "/posts" && activeSection === null}
              />
            )
          )}
        </div>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        {menuOpen && (
          <div className={styles.mobileNav}>
            {NAV_ITEMS.map((item) =>
              item.refKey ? (
                <NavItem
                  key={item.label}
                  label={item.label}
                  onClick={() => handleNavItemClick(item.refKey)}
                  isActive={item.refKey === activeSection}
                />
              ) : (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  isActive={item.href === "/posts" && activeSection === null}
                />
              )
            )}
          </div>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Header;
