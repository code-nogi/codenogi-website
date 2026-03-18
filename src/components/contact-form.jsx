/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import TextInput from "./textinput";
import TextArea from "./textarea";
import Button from "./button";
import useFormValidation from "../utilities/use-form-validation.js";
import animStyles from "./letter-spacing-anim.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function ContactForm() {
  const formRef = useRef(null);
  const { t } = useTranslation();
  const { handleChange } = useFormValidation(formRef);

  return (
    <form
      ref={formRef}
      action="https://formsubmit.co/piratosnogi@gmail.com"
      method="POST"
      className="contact-form basic-element"
      onSubmit={handleChange}
    >
      <input type="hidden" name="_captcha" value="true" />
      <input type="hidden" name="_subject" value="Új üzenet a !gi-nak!!!" />
      <input type="hidden" name="_cc" value="piratosnogi@gmail.com" />
      <input type="hidden" name="_template" value="table" />
      <TextInput langKey="Name-placeholder" type="text" />
      <TextInput langKey="Email-placeholder" type="email" />
      <TextArea langKey="Message-placeholder" />
      <Button
        type="submit"
        onClick={null}
        classNames={animStyles.letterSpacingAnim}
        getSvg={null}
        langKey="Send-message"
      />
    </form>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default ContactForm;
