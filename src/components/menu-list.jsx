/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTheme } from "../utilities/theme-context";
import Anchor from "./anchor";
import { menuItemArray } from "../utilities/constants.js";
import styles from "./menu-list.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function MenuList({ isOpen, activeSection }) {
  return (
    <ul
      aria-label="menu list"
      className={`${styles.menu} ${generalStyles.basicElement} ${isOpen ? styles.menuActive : ""}`}
    >
      {menuItemArray.map((menuitem) => (
        <li key={menuitem.href}>
          <Anchor
            type="animated"
            activeSection={activeSection}
            href={menuitem.href}
            langKey={menuitem.langKey}
          />
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default MenuList;
