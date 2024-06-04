'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './header.module.sass';

type NavItemProps = {
  label: string;
  href?: string;
  onClick?: () => void; // 
  isActive?: boolean;
};

export const NavItem: React.FC<NavItemProps> = ({ label, href, onClick, isActive }) => {
  const pathname = usePathname();
  const isLinkActive = href && pathname === href;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
  };

  return href ? (
    <Link href={href} className={`${styles.nav} ${isLinkActive ? styles.active : ''}`} onClick={handleClick}>
      {label}
    </Link>
  ) : (
    <div className={`${styles.nav} ${isActive ? styles.active : ''}`} onClick={handleClick}>
      {label}
    </div>
  );
};
