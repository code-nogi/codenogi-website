/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import StackItem from "./stack-item";
import { skillStackArray } from "../utilities/constants.js";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function SkillStackArticle() {
  return (
    <article className="stack">
      {skillStackArray.map((stack, index) => (
        <StackItem
          key={`skillstack-${index + 1}`}
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
export default SkillStackArticle;
