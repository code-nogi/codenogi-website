/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useTheme } from "../utilities/theme-context";
import {
  BG_COMMON_SVG_ATTRIBUTES,
  rects,
  paths,
  polygons,
} from "../utilities/background-paths.js";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Background() {
  const { theme } = useTheme();

  return (
    <div
      aria-label="background-animation"
      className={theme === "light" ? "background" : "background dark"}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 25 25"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="25" height="25" />
        {paths.map((path, index) => (
          <path key={`p-${index}`} {...BG_COMMON_SVG_ATTRIBUTES} d={path} />
        ))}
        {rects.map((rect, index) => (
          <rect key={`r-${index}`} {...BG_COMMON_SVG_ATTRIBUTES} {...rect} />
        ))}
        {polygons.map((points, index) => (
          <polygon
            key={`pg-${index}`}
            {...BG_COMMON_SVG_ATTRIBUTES}
            points={points}
          />
        ))}
      </svg>
    </div>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Background;
