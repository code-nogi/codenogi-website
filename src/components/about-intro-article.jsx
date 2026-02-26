/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function AboutIntroArticle() {
  const { t } = useTranslation();
  return (
    <article className="basic-element">
      <p>{t("Intro")}</p>
      <p>{t("Experience")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default AboutIntroArticle;
