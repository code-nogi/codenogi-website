/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import { useTheme } from "../utilities/theme-context";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Button({ type, onClick, classNames, getSvg, langKey }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      aria-label="button-container"
      className={`${classNames}${theme === "dark" ? " dark" : ""}`}
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
