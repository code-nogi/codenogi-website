/* ----------------------------- */
/* IMPORTS                       */
/* ----------------------------- */
import { useState } from "react";
import MenuToggle from "./menu-toggle";
import MenuList from "./menu-list";

/* ----------------------------- */
/* COMPONENT                     */
/* ----------------------------- */
function Menu({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <MenuToggle onClick={() => setIsOpen((open) => !open)} isOpen={isOpen} />
      <MenuList isOpen={isOpen} activeSection={activeSection} />
    </nav>
  );
}

/* ----------------------------- */
/* EXPORTS                       */
/* ----------------------------- */
export default Menu;
