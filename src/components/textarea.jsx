/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useRef } from "react";
import { useTheme } from "../utilities/theme-context";
import { useTranslation } from "react-i18next";
import InputMessage from "./input-message";
import { getAlertSVG } from "../utilities/svg-getters";
import useFormValidation from "../utilities/use-form-validation.js";
import styles from "./form-item.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function TextArea({ langKey }) {
  const textAreaRef = useRef(null);
  const { t } = useTranslation();
  const { blank, valid, handleChange } = useFormValidation(textAreaRef);
  const { theme } = useTheme();

  return (
    <>
      <textarea
        ref={textAreaRef}
        cols="30"
        rows="10"
        required
        onChange={handleChange}
        placeholder={t(langKey)}
        className={`${styles.formItem} ${theme === "dark" ? "dark" : ""}`}
        name={langKey.toLowerCase().replace("-placeholder", "")}
        autoComplete="off"
        minLength="3"
      />
      {blank ? (
        <InputMessage type="blank" langKey={langKey} getSVG={getAlertSVG} />
      ) : valid ? (
        <></>
      ) : (
        <InputMessage type="invalid" langKey={langKey} getSVG={getAlertSVG} />
      )}
    </>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default TextArea;
