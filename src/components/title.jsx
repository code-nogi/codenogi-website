/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./title.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Title() {
  const { t } = useTranslation();
  return (
    <div
      aria-label="website title container"
      className={`${styles.title} ${generalStyles.basicElement}`}
    >
      <div
        aria-label="webside title colored container"
        className={generalStyles.colorBacked}
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
