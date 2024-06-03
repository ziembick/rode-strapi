'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './header.module.sass';

type NavItemProps = {
  label: string;
  href?: string;
  onClick?: () => void; // onClick é opcional
};

export const NavItem: React.FC<NavItemProps> = ({ label, href, onClick }) => {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  return href ? (
    <Link href={href} className={`${styles.nav} ${isActive ? styles.active : ''}`} onClick={handleClick}>
      {label}
    </Link>
  ) : (
    <div className={`${styles.nav} ${isActive ? styles.active : ''}`} onClick={handleClick}>
      {label}
    </div>
  );
};
