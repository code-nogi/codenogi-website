/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useRef } from "react";
import { useTheme } from "../utilities/theme-context";
import { useTranslation } from "react-i18next";
import InputMessage from "./input-message";
import { getAlertSVG } from "../utilities/svg-getters";
import useFormValidation from "../utilities/use-form-validation.js";

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
        className={`form-item${theme === "dark" ? " dark" : ""}`}
        name={langKey.toLowerCase().replace("-placeholder", "")}
        autoComplete="off"
        minLength="3"
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
export default TextArea;
