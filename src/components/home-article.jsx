/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function HomeArticle() {
  const { t } = useTranslation();
  return (
    <article className="basic-element">
      <h3>{t("Name")}</h3>
      <h3>{t("Profession")}</h3>
      <p>{t("Specialized")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default HomeArticle;
