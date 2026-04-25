/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTheme } from "../utilities/theme-context";
import { useTranslation } from "react-i18next";
import generalStyles from "./basic-element.module.css";
import animStyles from "./reflect-anim.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Anchor({ activeSection, href, type, getSvg = null, langKey }) {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div
      className={`${type === "individual" ? generalStyles.basicElement : ""} ${type !== "icon" ? animStyles.reflectAnim : ""} ${type !== "icon" && theme === "dark" ? animStyles.dark : ""}`}
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
