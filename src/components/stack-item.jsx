/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./stack-item.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function StackItem({ hasSVGFront, hasWhiteBG, langKey, letter, svgGetter }) {
  const { t } = useTranslation();
  return hasSVGFront ? (
    <div
      aria-label="stack item container"
      className={styles.stackItemContainer}
    >
      <div
        aria-label="stack item front side container"
        className={`${generalStyles.basicElement} ${styles.stackItemFront}`}
      >
        <div
          aria-label="stack item front side"
          className={`${styles.colorBacked} ${
            hasWhiteBG ? styles.white : styles.transparent
          }`}
        >
          {svgGetter()}
        </div>
      </div>
      <div
        aria-label="stack item back side container"
        className={`${generalStyles.basicElement} ${styles.stackItemBack}`}
      >
        <div
          aria-label="stack item back side"
          className={`${styles.colorBacked} ${styles.text}`}
        >
          {t(langKey)}
        </div>
      </div>
    </div>
  ) : (
    <div
      aria-label="stack item container"
      className={styles.stackItemContainer}
    >
      <div
        aria-label="stack item front side container"
        className={`${generalStyles.basicElement} ${styles.stackItemFront}`}
      >
        <div aria-label="stack item front side" className={styles.colorBacked}>
          {letter}
        </div>
      </div>
      <div
        aria-label="stack item back side container"
        className={`${generalStyles.basicElement} ${styles.stackItemBack}`}
      >
        <div
          aria-label="stack item back side"
          className={`${styles.colorBacked} ${styles.white}`}
        >
          {svgGetter()}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default StackItem;
