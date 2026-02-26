/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Footer({ langKey }) {
  const { t } = useTranslation();
  return (
    <footer>
      <div aria-label="footer-content" className="basic-element footer-content">
        <div className="color-backed">{t(langKey)}</div>
      </div>
    </footer>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Footer;
