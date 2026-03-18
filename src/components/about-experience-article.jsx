/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import StackItem from "./stack-item";
import { experienceStackArray } from "../utilities/constants.js";
import styles from "./stack.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function AboutExperienceArticle() {
  return (
    <article className={styles.stack}>
      {experienceStackArray.map((stack, index) => (
        <StackItem
          key={`expstack-${index + 1}`}
          hasSVGFront={true}
          hasWhiteBG={false}
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
export default AboutExperienceArticle;
