/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import Anchor from "./anchor";
import { getGithubSVG, getEnterSVG } from "../utilities/svg-getters";
import { useTranslation } from "react-i18next";
import styles from "./project-card.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function ProjectCard({ langKeys, techs, githubURL, demoURL }) {
  const { t } = useTranslation();
  return (
    <div
      aria-label="portfolio project card"
      className={`${styles.projectCard} ${generalStyles.basicElement}`}
    >
      <h3 className={generalStyles.colorBacked}>{t(langKeys[0])}</h3>
      <p aria-label="portfolio project description">{t(langKeys[1])}</p>
      <div
        aria-label="portfolio project tech stack"
        className={styles.usedTech}
      >
        {techs.map((tech, index) => (
          <div className={generalStyles.whiteBacked} key={tech.name}>
            {tech.svg()}
          </div>
        ))}
      </div>
      <div
        aria-label="portfolio project anchor container"
        className={styles.buttonPart}
      >
        <Anchor
          type="icon"
          activeSection={null}
          href={githubURL}
          getSvg={getGithubSVG}
          langKey="Github-project"
        />
        <Anchor
          type="icon"
          activeSection={null}
          href={demoURL}
          getSvg={getEnterSVG}
          langKey="Demo-project"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
