/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useState } from "react";
import MenuToggle from "./menu-toggle";
import MenuList from "./menu-list";
import styles from "./menu.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Menu({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <MenuToggle onClick={() => setIsOpen((open) => !open)} isOpen={isOpen} />
      <MenuList isOpen={isOpen} activeSection={activeSection} />
    </nav>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Menu;
