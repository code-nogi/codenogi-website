/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function ContactArticle() {
  const { t } = useTranslation();
  return (
    <article className="basic-element">
      <p>{t("Contact-text")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default ContactArticle;
