import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.sass";
import { NavItem } from "./nav-item";
import Link from "next/link";

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav className={`${styles.navItems} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.imageContainer}>
        <Link href="/">
          <Image
            src="/rwhite.png"
            alt="Logo"
            width={56}
            height={73}
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
            />
          ) : (
            <NavItem key={item.label} label={item.label} href={item.href} />
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
              />
            ) : (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              />
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
