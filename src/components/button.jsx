/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import { useTheme } from "../utilities/theme-context";
import styles from "./button.module.css";
import animStyles from "./reflect-anim.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Button({ type, onClick = null, classNames, getSvg = null, langKey }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
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
