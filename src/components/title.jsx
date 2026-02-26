/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Title() {
  const { t } = useTranslation();
  return (
    <div aria-label="website title container" className="title basic-element">
      <div
        aria-label="webside title colored container"
        className="color-backed"
      >
        <h1>{t("Name")}</h1>
        <h2>{t("Profession")}</h2>
      </div>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Title;
