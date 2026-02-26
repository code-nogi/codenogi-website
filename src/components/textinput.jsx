/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import InputMessage from "./input-message";
import { getAlertSVG } from "../utilities/svg-getters";
import useFormValidation from "../utilities/use-form-validation.js";
import { useTheme } from "../utilities/theme-context";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function TextInput({ langKey, type }) {
  const inputRef = useRef(null);
  const { t } = useTranslation();
  const { blank, valid, handleChange } = useFormValidation(inputRef);
  const { theme } = useTheme();

  return (
    <>
      <input
        ref={inputRef}
        type={type}
        required
        onChange={handleChange}
        placeholder={t(langKey)}
        className={`form-item${theme === "dark" ? " dark" : ""}`}
        name={langKey.toLowerCase().replace("-placeholder", "")}
        autoComplete="off"
        minLength={type === "email" ? "6" : "2"}
        maxLength={type === "email" ? "254" : "100"}
        pattern={type === "email" ? "[^@]+@[^@]+\\.[^@]+" : undefined}
      />
      {blank ? (
        <InputMessage
          langKey={langKey}
          className="blank-txt"
          getSVG={getAlertSVG}
        />
      ) : valid ? (
        <></>
      ) : (
        <InputMessage
          langKey={langKey}
          className="valid-txt"
          getSVG={getAlertSVG}
        />
      )}
    </>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default TextInput;
