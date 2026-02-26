function MenuToggle({ onClick, isOpen }) {
  return (
    <button
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      className={
        isOpen ? "toggle basic-element menu-active" : "toggle basic-element"
      }
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default MenuToggle;
