/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./article.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function HomeArticle() {
  const { t } = useTranslation();
  return (
    <article className={`${styles.article} ${generalStyles.basicElement}`}>
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
