/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import Button from "./button";
import { getMenuSVG } from "../utilities/svg-getters.jsx";
import styles from "./menu-toggle.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function MenuToggle({ onClick, isOpen }) {
  return (
    <div
      aria-label="Toggle navigation menu"
      className={`${styles.toggle} ${generalStyles.basicElement} ${isOpen ? styles.menuActive : ""}`}
    >
      <Button
        type="button"
        onClick={onClick}
        className=""
        getSvg={getMenuSVG}
        langKey={null}
      />
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default MenuToggle;
