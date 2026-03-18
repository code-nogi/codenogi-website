/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { getGithubSVG, getLinkedINSVG } from "../utilities/svg-getters";
import Anchor from "./anchor";
import styles from "./social.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Social() {
  return (
    <div
      aria-label="social profile anchor container"
      className={`${styles.socialMedia} ${generalStyles.basicElement}`}
    >
      <Anchor
        type="icon"
        activeSection=""
        href="https://github.com/code-nogi"
        getSvg={getGithubSVG}
        langKey="Github"
      ></Anchor>
      <Anchor
        type="icon"
        activeSection=""
        href="https://www.linkedin.com/in/jozsefnogradi/"
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
