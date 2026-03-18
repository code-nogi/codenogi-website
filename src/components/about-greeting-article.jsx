/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./article.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function AboutGreetingArticle() {
  const { t } = useTranslation();
  return (
    <article className={`${styles.article} ${generalStyles.basicElement}`}>
      <h3>{t("Hello")}</h3>
      <p>{t("Nickname")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default AboutGreetingArticle;
