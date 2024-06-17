'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './header.module.sass';

export const NavItem2 = ({label, href}: any) => {
  const pathname = usePathname();
  const isActive = href && pathname === href;

  return (

    <Link href={href || "#"} className={`${styles.nav} ${isActive ? styles.active : ''}`}>
      {label}
    </Link>
  );
};
