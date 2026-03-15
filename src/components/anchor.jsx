/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTheme } from "../utilities/theme-context";
import { useTranslation } from "react-i18next";
import styles from "./anchor.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Anchor({ activeSection, href, classNames, getSvg, langKey }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      aria-label="anchor-container"
      className={`${classNames}${theme === "dark" ? " dark" : ""}`}
    >
      <a
        href={href}
        target={getSvg ? "_blank" : undefined}
        rel={getSvg ? "noopener noreferrer" : undefined}
        className={`${href ? (activeSection === href.slice(1) ? "active" : "") : ""}`}
        data-text={t(langKey)}
        title={t(langKey)}
      >
        {getSvg ? getSvg() : t(langKey)}
      </a>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Anchor;
