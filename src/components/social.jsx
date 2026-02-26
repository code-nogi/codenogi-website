/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { getGithubSVG, getLinkedINSVG } from "../utilities/svg-getters";
import Anchor from "./anchor";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Social() {
  return (
    <div
      aria-label="social profile anchor container"
      className="social-media basic-element"
    >
      <Anchor
        activeSection=""
        href="https://github.com/code-nogi"
        classNames={""}
        getSvg={getGithubSVG}
        langKey="Github"
      ></Anchor>
      <Anchor
        activeSection=""
        href="https://www.linkedin.com/in/jozsefnogradi/"
        classNames={""}
        getSvg={getLinkedINSVG}
        langKey="Linkedin"
      ></Anchor>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Social;
