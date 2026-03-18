/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTheme } from "../utilities/theme-context";
import { useTranslation } from "react-i18next";
import generalStyles from "./basic-element.module.css";
import animStyles from "./letter-spacing-anim.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Anchor({ activeSection, href, type, getSvg, langKey }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      aria-label="anchor-container"
      className={`${type === "individual" && generalStyles.basicElement} ${type != "icon" && animStyles.letterSpacingAnim} ${type != "icon" && theme === "dark" ? animStyles.dark : ""}`}
    >
      <a
        href={href}
        target={getSvg ? "_blank" : undefined}
        rel={getSvg ? "noopener noreferrer" : undefined}
        className={`${href ? (activeSection === href.slice(1) ? animStyles.active : "") : ""}`}
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
