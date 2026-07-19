function MobileMenu({ isOpen }) {
  return (
    <div id="full-scr" style={isOpen ? { top: 0 } : {}}>
      <div id="full-div1">
        <div className="mobile-menu">
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
