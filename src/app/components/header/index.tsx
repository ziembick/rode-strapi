import Image from "next/image";
import styles from "./header.module.sass";
import { NavItem } from "./nav-item";
import Link from "next/link";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Sobre mim",
    href: "/about",
  },
  {
    label: "Áreas de atuação",
    href: "/areas",
  },
  {
    label: "Depoimentos",
    href: "/depoimentos",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Posts",
    href: "/posts",
  },

  {
    label: "Contato",
    href: "/contato",
  },
];

export const Header = () => {
  return (
    <nav className={`${styles.navItems} container`}>
      <div className={styles.imageContainer}>
        <Link href="/">
          <Image
            src="/rlogo3.png"

            alt="Logo"
            width={50}
            height={70}
            className={`${styles.logo} pt-10`}
          />
        </Link>
      </div>
      <div className={styles.desktopNav}>
        {NAV_ITEMS.map((item) => (
          <NavItem {...item} key={item.label} />
        ))}
      </div>
    </nav>
  );
};
