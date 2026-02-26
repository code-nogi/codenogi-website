/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function InputMessage({ langKey, className, getSVG }) {
  const { t } = useTranslation();
  return (
    <div aria-label="form validation message" className={className}>
      {getSVG()}
      {className === "blank-txt"
        ? t("Blank-message", { subject: t(langKey).toLowerCase() })
        : t("Invalid-message", { subject: t(langKey).toLowerCase() })}
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default InputMessage;
