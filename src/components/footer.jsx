/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Footer({ langKey }) {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div
        aria-label="footer-content"
        className={`${generalStyles.basicElement} ${styles.footerContent}`}
      >
        <div className={generalStyles.colorBacked}>{t(langKey)}</div>
      </div>
    </footer>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Footer;
