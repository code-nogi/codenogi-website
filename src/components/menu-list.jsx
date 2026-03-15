/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTheme } from "../utilities/theme-context";
import Anchor from "./anchor";
import { menuItemArray } from "../utilities/constants.js";
import styles from "./menu-list.module.css";
import generalStyles from "./basic-element.module.css";
import animStyles from "./letter-spacing-anim.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function MenuList({ isOpen, activeSection }) {
  const { theme } = useTheme();

  return (
    <ul
      aria-label="menu list"
      className={`${styles.menu} ${generalStyles.basicElement} ${isOpen ? styles.menuActive : ""} ${theme === "dark" ? " dark-mode" : ""}`}
    >
      {menuItemArray.map((menuitem) => (
        <li key={menuitem.href}>
          <Anchor
            activeSection={activeSection}
            href={menuitem.href}
            classNames={animStyles.letterSpacingAnim}
            getSvg={null}
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
