"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.sass";
import Link from "next/link";
import { NavItem2 } from "./nav-item";

const NAV_ITEMS2 = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Posts",
    href: "/posts",
  },
];

export const Header3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.navItems} ${isScrolled ? styles.scrolled : ""}`}>
      <nav className={` ${styles.tudoJunto} container`}>
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image
              src="/depresso3.svg"
              alt="Logo"
              width={44}
              height={58}
              className={`${styles.logo} pt-10`}
            />
          </Link>
        </div>
        <div className={styles.desktopNav}>
          {NAV_ITEMS2.map((item) => (
            <NavItem2 {...item} key={item.label} />
          ))}
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {isMenuOpen && (
          <div className={styles.mobileNav}>
            {NAV_ITEMS2.map((item) => (
              <NavItem2 {...item} key={item.label} />
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};
