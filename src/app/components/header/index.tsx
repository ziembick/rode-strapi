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
  { label: "Depoimentos", refKey: "depoimentosRef" },
  { label: "O que é Psicanálise", refKey: "psicanaliseRef" },
  { label: "Sobre mim", refKey: "sobreRef" },
  { label: "Contato", refKey: "contatoRef" },
  { label: "Posts", href: "/posts" },
];

interface SectionRefs {
  heroRef: React.MutableRefObject<null>;
  atuacaoRef: React.MutableRefObject<null>;
  psicanaliseRef: React.MutableRefObject<null>;
  ajudarRef: React.MutableRefObject<null>;
  sobreRef: React.MutableRefObject<null>;
  depoimentosRef: React.MutableRefObject<null>;
  atencaoRef: React.MutableRefObject<null>;
  contatoRef: React.MutableRefObject<null>;
}

interface HeaderProps {
  scrollToSection: (sectionRef: React.MutableRefObject<null>) => void;
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
          section.top &&
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
        className={`${styles.container} container`}
      >
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image
              src="/razul.svg"
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
