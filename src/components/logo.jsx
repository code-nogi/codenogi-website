/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { getLogoSVG } from "../utilities/svg-getters";
import styles from "./logo.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Logo() {
  return (
    <div
      aria-label="logo-container"
      className={`${styles.logo} ${generalStyles.basicElement}`}
    >
      <a
        aria-label="logo-anchor"
        href="https://nogradijozsef.hu/"
        target="_blank"
      >
        {getLogoSVG()}
      </a>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Logo;
