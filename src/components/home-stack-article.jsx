/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import StackItem from "./stack-item";
import { homeStackArray } from "../utilities/constants.js";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function HomeStackArticle() {
  return (
    <article className="stack">
      {homeStackArray.map((stack, index) => (
        <StackItem
          key={`homestack-${index + 1}`}
          hasSVGFront={false}
          hasWhiteBG={false}
          langKey={null}
          letter={stack.letter}
          svgGetter={stack.svgGetter}
        />
      ))}
    </article>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default HomeStackArticle;
