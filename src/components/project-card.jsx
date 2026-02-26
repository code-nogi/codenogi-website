/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import Anchor from "./anchor";
import { getGithubSVG, getEnterSVG } from "../utilities/svg-getters";
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function ProjectCard({ langKeys, techSVGs, githubURL, demoURL }) {
  const { t } = useTranslation();
  return (
    <div
      aria-label="portfolio project card"
      className="basic-element project-card"
    >
      <h3 className="color-backed">{t(langKeys[0])}</h3>
      <p aria-label="portfolio project description">{t(langKeys[1])}</p>
      <div aria-label="portfolio project tech stack" className="used-tech">
        {techSVGs.map((svgGetter, index) => (
          <div className="color-backed white" key={index}>
            {svgGetter()}
          </div>
        ))}
      </div>
      <div
        aria-label="portfolio project anchor container"
        className="button-part"
      >
        <Anchor
          activeSection={null}
          href={githubURL}
          classNames=""
          getSvg={getGithubSVG}
          langKey="Github-project"
        />
        <Anchor
          activeSection={null}
          href={demoURL}
          classNames=""
          getSvg={getEnterSVG}
          langKey="Demo-project"
        />
      </div>
    </div>
  );
}

export default ProjectCard;
