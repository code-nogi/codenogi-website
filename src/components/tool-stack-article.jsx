/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import StackItem from "./stack-item";
import { aiToolArray } from "../utilities/constants.js";
import styles from "./stack.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function ToolStackArticle() {
  return (
    <article className={styles.stack}>
      {aiToolArray.map((stack, index) => (
        <StackItem
          key={stack.langKey}
          hasSVGFront={true}
          hasWhiteBG={true}
          langKey={stack.langKey}
          letter={null}
          svgGetter={stack.svgGetter}
        />
      ))}
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default ToolStackArticle;
