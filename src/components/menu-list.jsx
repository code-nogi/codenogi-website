/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTheme } from "../utilities/theme-context";
import Anchor from "./anchor";
import { menuItemArray } from "../utilities/constants.js";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function MenuList({ isOpen, activeSection }) {
  const { theme } = useTheme();

  return (
    <ul
      aria-label="menu list"
      className={`menu basic-element ${isOpen ? " menu-active" : ""} ${theme === "dark" ? " dark-mode" : ""}`}
    >
      {menuItemArray.map((menuitem) => (
        <li key={menuitem.href}>
          <Anchor
            activeSection={activeSection}
            href={menuitem.href}
            classNames="letter-spacing-anim"
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
