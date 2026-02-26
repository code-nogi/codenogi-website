/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useState } from "react";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function useFormValidation(refToValidate) {
  const [blank, setBlank] = useState(false);
  const [valid, setValid] = useState(true);

  function handleChange() {
    const isEmpty = refToValidate.current.value.trim() === "";
    const isValid = refToValidate.current.checkValidity();
    setBlank(isEmpty);
    setValid(isValid);
  }

  return { blank, valid, handleChange };
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default useFormValidation;
