'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from './header.module.sass'


type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={styles.nav}>
      {label}
    </Link>
  );
};
