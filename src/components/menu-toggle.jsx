/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import styles from "./menu-toggle.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function MenuToggle({ onClick, isOpen }) {
  return (
    <button
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      className={`${styles.toggle} ${generalStyles.basicElement} ${
        isOpen ? styles.menuActive : ""
      }`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default MenuToggle;
