/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import styles from "./main.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Main({ children }) {
  return <main className={styles.main}>{children}</main>;
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Main;
