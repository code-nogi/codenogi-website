/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import InputMessage from "./input-message";
import { getAlertSVG } from "../utilities/svg-getters";
import useFormValidation from "../utilities/use-form-validation.js";
import { useTheme } from "../utilities/theme-context";
import styles from "./form-item.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function TextInput({ langKey, type }) {
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const { blank, valid, handleChange } = useFormValidation(inputRef);
  const { theme } = useTheme();

  const honeypot = langKey === "Phone-placeholder" ? true : false;

  return (
    <>
      <input
        ref={inputRef}
        type={type}
        required={honeypot ? false : true}
        onChange={handleChange}
        placeholder={t(langKey)}
        className={`${styles.formItem} ${theme === "dark" ? "dark" : ""}`}
        name={langKey.toLowerCase().replace("-placeholder", "")}
        autoComplete="off"
        tabIndex={honeypot ? -1 : 0}
        minLength={type === "email" ? 6 : 2}
        maxLength={type === "email" ? 254 : 100}
        pattern={type === "email" ? "[^@]+@[^@]+\\.[^@]+" : undefined}
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
export default TextInput;
