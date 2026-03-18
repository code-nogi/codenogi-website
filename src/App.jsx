/* TODOs:
1. NODEMAILER!
2. LETTER-SPACING-ANIM vibration
3. 
4. 
5. 
*/

/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
//MODUL import
import { useEffect, useState } from "react";
import { ThemeProvider } from "./utilities/theme-context";
//COMPONENT import
import Scroller from "./components/scroller";
import Background from "./components/background";
import Header from "./components/header";
import Main from "./components/main";
import Section from "./components/section";
import SectionHeading from "./components/section-heading";
import HomeArticle from "./components/home-article";
import HomeStackArticle from "./components/home-stack-article";
import AboutGreetingArticle from "./components/about-greeting-article";
import AboutIntroArticle from "./components/about-intro-article";
import AboutExperienceArticle from "./components/about-experience-article";
import SkillArticle from "./components/skill-article";
import SkillStackArticle from "./components/skill-stack-article";
import PortfolioArticle from "./components/portfolio-article";
import ProjectCard from "./components/project-card";
import ContactArticle from "./components/contact-article";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import Anchor from "./components/anchor";
//UTILITY import
import { projectDataArray } from "./utilities/constants";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function App() {
  const [activeSection, setActiveSection] = useState("home-ref");

  //MENU ACTIVATION from scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id"));
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px",
      },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ThemeProvider>
        <Scroller />
        <Background />
        <Header activeSection={activeSection} />
        <Main>
          <Section id="home-ref" className="home">
            <SectionHeading langKey="Home" />
            <HomeArticle />
            <HomeStackArticle />
            <Anchor
              activeSection={activeSection}
              href="#contact-ref"
              type="individual"
              getSvg={null}
              langKey="Work-with-me"
            />
          </Section>
          <Section id="about-ref" className="about">
            <SectionHeading langKey="About" />
            <AboutGreetingArticle />
            <AboutIntroArticle />
            <AboutExperienceArticle />
          </Section>
          <Section id="skill-ref" className="skill">
            <SectionHeading langKey="Skills" />
            <SkillArticle />
            <SkillStackArticle />
          </Section>
          <Section id="portfolio-ref" className="portfolio">
            <SectionHeading langKey="Portfolio" />
            <PortfolioArticle />
            {projectDataArray.map((project, index) => (
              <ProjectCard
                key={`project-${index + 1}`}
                langKeys={project.langKeys}
                techSVGs={project.techSVGs}
                githubURL={project.githubURL}
                demoURL={project.demoURL}
              />
            ))}
          </Section>
          <Section id="contact-ref" className="contact">
            <SectionHeading langKey="Contact" />
            <ContactArticle />
            <ContactForm />
          </Section>
        </Main>
        <Footer langKey="Footer" />
      </ThemeProvider>
    </>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default App;
