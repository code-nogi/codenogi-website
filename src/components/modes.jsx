/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";
import { useTheme } from "../utilities/theme-context";
import Button from "./button";
import {
  getHunFlagSVG,
  getEngFlagSVG,
  getLightModeSVG,
  getDarkModeSVG,
} from "../utilities/svg-getters.jsx";
import styles from "./modes.module.css";
import generalStyles from "./basic-element.module.css";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Modes() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      aria-label="lang and mode selection container"
      className={`${styles.modeSelection} ${generalStyles.basicElement}`}
    >
      <Button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "hu" : "en")
        }
        classNames={styles.modeItems}
        getSvg={i18n.language === "en" ? getHunFlagSVG : getEngFlagSVG}
        langKey="Lang"
      />
      <Button
        type="button"
        onClick={toggleTheme}
        classNames={`
          ${styles.modeItems} ${theme === "light" ? styles.lightMode : styles.darkMode}
        `}
        getSvg={theme === "light" ? getDarkModeSVG : getLightModeSVG}
        langKey={theme === "light" ? "Light-mode" : "Dark-mode"}
      />
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Modes;
