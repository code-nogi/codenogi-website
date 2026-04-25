/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import styles from "./main.module.css";

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
