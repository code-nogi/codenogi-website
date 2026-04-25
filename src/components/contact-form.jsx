/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import TextInput from "./textinput";
import TextArea from "./textarea";
import Button from "./button";
import Dialog from "./dialog";
import generalStyles from "./basic-element.module.css";
import animStyles from "./reflect-anim.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let emailObject = {};
    for (const [key, value] of formData) {
      emailObject[key] = value;
    }
    if (emailObject.phone) return;
    emailObject.site = "codenogi";
    try {
      setStatus("sending");
      setErrorMessage("");
      const response = await fetch(
        "https://hunmetdataapi.hu/contact/siteemail",
        {
          method: "POST",
          body: JSON.stringify(emailObject),
          headers: { "Content-Type": "application/json" },
        },
      );
      if (!response.ok)
        throw new Error(`Request failed with status ${response.status}`);
      const data = await response.json();
      if (data.status !== "success") throw new Error(data.message);
      event.target.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <form className={generalStyles.basicElement} onSubmit={handleSubmit}>
        <TextInput langKey="Name-placeholder" type="text" />
        <TextInput langKey="Email-placeholder" type="email" />
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <TextInput langKey="Phone-placeholder" type="text" />
        </div>
        <TextArea langKey="Message-placeholder" />
        <Button
          type="submit"
          classNames={animStyles.reflectAnim}
          langKey="Send-message"
        />
      </form>
      <Dialog
        status={status}
        errorMessage={errorMessage}
        setStatus={setStatus}
      />
    </>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default ContactForm;
