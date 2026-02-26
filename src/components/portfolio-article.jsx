/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function PortfolioArticle() {
  const { t } = useTranslation();
  return (
    <article className="basic-element">
      <p>{t("Portfolios")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default PortfolioArticle;
