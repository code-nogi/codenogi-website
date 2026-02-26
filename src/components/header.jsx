/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import Logo from "./logo";
import Title from "./title";
import Menu from "./menu";
import Social from "./social";
import Modes from "./modes";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Header({ activeSection }) {
  return (
    <header>
      <Logo />
      <Title />
      <Menu activeSection={activeSection} />
      <Social />
      <Modes />
    </header>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Header;
