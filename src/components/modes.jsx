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

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Modes() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      aria-label="lang and mode selection container"
      className="mode-selection basic-element"
    >
      <Button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "hu" : "en")
        }
        classNames={
          i18n.language === "en" ? "mode-items lang-hun" : "mode-items lang-eng"
        }
        getSvg={i18n.language === "en" ? getHunFlagSVG : getEngFlagSVG}
        langKey="Lang"
      />
      <Button
        type="button"
        onClick={toggleTheme}
        classNames={
          theme === "light" ? "mode-items light-mode" : "mode-items dark-mode"
        }
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
