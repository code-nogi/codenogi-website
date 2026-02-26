/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTranslation } from "react-i18next";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function StackItem({ hasSVGFront, hasWhiteBG, langKey, letter, svgGetter }) {
  const { t } = useTranslation();
  return hasSVGFront ? (
    <div aria-label="stack item container">
      <div
        aria-label="stack item front side container"
        className="basic-element"
      >
        <div
          aria-label="stack item front side"
          className={
            hasWhiteBG ? "color-backed white" : "color-backed transparent"
          }
        >
          {svgGetter()}
        </div>
      </div>
      <div
        aria-label="stack item back side container"
        className="basic-element"
      >
        <div aria-label="stack item back side" className="color-backed text">
          {t(langKey)}
        </div>
      </div>
    </div>
  ) : (
    <div aria-label="stack item container">
      <div
        aria-label="stack item front side container"
        className="basic-element"
      >
        <div aria-label="stack item front side" className="color-backed">
          {letter}
        </div>
      </div>
      <div
        aria-label="stack item back side container"
        className="basic-element"
      >
        <div aria-label="stack item back side" className="color-backed white">
          {svgGetter()}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default StackItem;
