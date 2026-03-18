/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import styles from "./input-message.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function InputMessage({ type, langKey, getSVG }) {
  const { t } = useTranslation();
  return (
    <div
      aria-label="form validation message"
      className={type === "blank" ? styles.blank : styles.invalid}
    >
      {getSVG()}
      {type === "blank"
        ? t("Blank-message", { subject: t(langKey).toLowerCase() })
        : t("Invalid-message", { subject: t(langKey).toLowerCase() })}
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default InputMessage;
