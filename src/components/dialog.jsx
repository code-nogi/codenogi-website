/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import generalStyles from "./basic-element.module.css";
import dialogStyles from "./dialog.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Dialog({ status, errorMessage, setStatus }) {
  const dialogRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (status === "idle" && dialog.open) {
      dialog.close();
    } else if (status !== "idle" && !dialog.open) {
      dialog.showModal();
    }
  }, [status]);

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timeoutId = setTimeout(() => {
      setStatus("idle");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [status, setStatus]);

  const handleCancel = (event) => {
    if (status === "sending") event.preventDefault();
    setStatus("idle");
  };

  return (
    <dialog
      ref={dialogRef}
      className={`${dialogStyles.dialog} ${generalStyles.basicElement}`}
      onCancel={handleCancel}
    >
      {status === "sending" && (
        <>
          <p>{t("SendingEmail")}</p>
        </>
      )}
      {status === "success" && (
        <>
          <p>{t("EmailSent")}</p>
        </>
      )}
      {status === "error" && <p>{errorMessage}</p>}
    </dialog>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Dialog;
