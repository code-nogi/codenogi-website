/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import {
  getMongoDBSVG,
  getExpressSVG,
  getReactSVG,
  getNodeJSSVG,
  getMilitarySVG,
  getRadarSVG,
  getFinanceSVG,
  getGliderSVG,
  getHTMLSVG,
  getCSSSVG,
  getJSSVG,
  getMongooseSVG,
} from "./svg-getters";

/* ----------------------------- */
/* CONSTANTS                     */
/* ----------------------------- */
const menuItemArray = [
  { href: "#home-ref", langKey: "Home" },
  { href: "#about-ref", langKey: "About" },
  { href: "#skill-ref", langKey: "Skills" },
  { href: "#portfolio-ref", langKey: "Portfolio" },
  { href: "#contact-ref", langKey: "Contact" },
];

const homeStackArray = [
  { letter: "M", svgGetter: getMongoDBSVG },
  { letter: "E", svgGetter: getExpressSVG },
  { letter: "R", svgGetter: getReactSVG },
  { letter: "N", svgGetter: getNodeJSSVG },
];

const experienceStackArray = [
  { langKey: "Military", svgGetter: getMilitarySVG },
  { langKey: "Surveillance", svgGetter: getRadarSVG },
  { langKey: "Finance", svgGetter: getFinanceSVG },
  { langKey: "Gliding", svgGetter: getGliderSVG },
];

const skillStackArray = [
  { langKey: "Html", svgGetter: getHTMLSVG },
  { langKey: "Css", svgGetter: getCSSSVG },
  { langKey: "Es6", svgGetter: getJSSVG },
  { langKey: "React", svgGetter: getReactSVG },
  { langKey: "Mongo", svgGetter: getMongoDBSVG },
  { langKey: "Mongoose", svgGetter: getMongooseSVG },
  { langKey: "Express", svgGetter: getExpressSVG },
  { langKey: "Node", svgGetter: getNodeJSSVG },
];

const projectDataArray = [
  {
    name: "sono-vic",
    langKeys: ["Sono-vic-title", "Sono-vic-text"],
    techs: [
      { name: "html", svg: getHTMLSVG },
      { name: "css", svg: getCSSSVG },
      { name: "js", svg: getJSSVG },
    ],
    githubURL: "https://github.com/code-nogi/sono_vic",
    demoURL: "https://sono-vic.hu",
  },
  {
    name: "hunmet-data",
    langKeys: ["Hunmet-api-title", "Hunmet-api-text"],
    techs: [
      { name: "mongodb", svg: getMongoDBSVG },
      { name: "mongoose", svg: getMongooseSVG },
      { name: "nodejs", svg: getNodeJSSVG },
      { name: "express", svg: getExpressSVG },
      { name: "html", svg: getHTMLSVG },
      { name: "css", svg: getCSSSVG },
      { name: "js", svg: getJSSVG },
    ],
    githubURL: "https://github.com/code-nogi/hunmetdataapi",
    demoURL: "https://hunmetdataapi.hu/aerodromes",
  },
  {
    name: "optima",
    langKeys: ["Optima-title", "Optima-text"],
    techs: [
      { name: "mongodb", svg: getMongoDBSVG },
      { name: "mongoose", svg: getMongooseSVG },
      { name: "nodejs", svg: getNodeJSSVG },
      { name: "express", svg: getExpressSVG },
      { name: "html", svg: getHTMLSVG },
      { name: "css", svg: getCSSSVG },
      { name: "js", svg: getJSSVG },
    ],
    githubURL: "#",
    demoURL: "#",
  },
];

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export {
  menuItemArray,
  homeStackArray,
  experienceStackArray,
  skillStackArray,
  projectDataArray,
};
