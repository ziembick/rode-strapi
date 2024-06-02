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
  { label: "O que é Psicanálise", refKey: "psicanaliseRef" },
  { label: "Sobre mim", refKey: "sobreRef" },
  { label: "Depoimentos", refKey: "depoimentosRef" },
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              href="#"
              onClick={() => scrollToSection(refs[item.refKey!])}
            />
          ) : (
            <NavItem key={item.label} label={item.label} href={item.href} />
          )
        )}
      </div>
    </nav>
  );
};

export default Header;
