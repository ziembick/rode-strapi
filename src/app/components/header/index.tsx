import styles from './header.module.sass'
import { NavItem } from "./nav-item";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contato",
    href: "/contato",
  },
  {
    label: "Blog",
    href: "/blog"
  }
];

export const Header = () => {
  return (
    <nav className={styles.navItems}>
      {NAV_ITEMS.map((item) => (
        <NavItem {...item} key={item.label} />
      ))}
    </nav>
  );
};
