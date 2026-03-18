/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./article.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function SkillArticle() {
  const { t } = useTranslation();
  return (
    <article className={`${styles.article} ${generalStyles.basicElement}`}>
      <p>{t("Skillstack")}</p>
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default SkillArticle;
