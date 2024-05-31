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

  return onClick ? (
    <div className={`${styles.nav} ${isActive ? styles.active : ''}`} onClick={onClick}>
      {label}
    </div>
  ) : (
    <Link href={href || "#"} className={`${styles.nav} ${isActive ? styles.active : ''}`}>
      {label}
    </Link>
  );
};
