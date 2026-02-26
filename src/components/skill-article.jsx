/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function SkillArticle() {
  const { t } = useTranslation();
  return (
    <article className="basic-element">
      <p>{t("Skillstack")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default SkillArticle;
