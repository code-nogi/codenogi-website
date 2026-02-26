/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function AboutGreetingArticle() {
  const { t } = useTranslation();
  return (
    <article className="basic-element">
      <h3>{t("Hello")}</h3>
      <p>{t("Nickname")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default AboutGreetingArticle;
