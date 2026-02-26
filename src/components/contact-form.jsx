/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import TextInput from "./textinput";
import TextArea from "./textarea";
import Button from "./button";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function ContactForm() {
  const { t } = useTranslation();

  return (
    <form
      action="https://formsubmit.co/piratosnogi@gmail.com"
      method="POST"
      className="contact-form basic-element"
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
        classNames={"letter-spacing-anim"}
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
