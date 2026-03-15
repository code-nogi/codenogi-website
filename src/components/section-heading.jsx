/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./section-heading.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function SectionHeading({ langKey }) {
  const { t } = useTranslation();
  return (
    <div
      aria-label="section heading container"
      className={generalStyles.basicElement}
    >
      <div
        aria-label="section heading container colored"
        className={generalStyles.colorBacked}
      >
        <h2 className={styles.sectionheading}>{t(langKey)}</h2>
      </div>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default SectionHeading;
