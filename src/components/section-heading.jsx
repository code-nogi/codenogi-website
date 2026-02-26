/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function SectionHeading({ langKey }) {
  const { t } = useTranslation();
  return (
    <div aria-label="section heading container" className="basic-element">
      <div
        aria-label="section heading container colored"
        className="color-backed"
      >
        <h2 className="sectionheading">{t(langKey)}</h2>
      </div>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default SectionHeading;
