/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import { useTheme } from "../utilities/theme-context";
import styles from "./button.module.css";
import animStyles from "./letter-spacing-anim.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Button({ type, onClick, classNames, getSvg, langKey }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      aria-label="button-container"
      className={`${styles.button} ${type === "submit" && theme === "dark" ? animStyles.dark : ""} ${classNames}${theme === "dark" ? " dark" : ""}`}
    >
      <button
        type={type}
        onClick={onClick}
        data-text={t(langKey)}
        title={t(langKey)}
      >
        {getSvg ? getSvg() : t(langKey)}
      </button>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Button;
