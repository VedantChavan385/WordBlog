import logo from '../Gemini_Generated_Image_901udg901udg901u.png';

function Navbar({ onMenuToggle, menuOpen }) {
  return (
    <nav>
      <img
        id="logo"
        src={logo}
        alt="WordBlog Logo"
        style={{ opacity: menuOpen ? 0 : 1 }}
      />
      <div id="nav-part2">
        <h4><a href="#">Login</a></h4>
        <h4><a href="#">Register</a></h4>
        <h4><a href="#">Work</a></h4>
        <h4><a href="#">Contact</a></h4>
      </div>
      <h3 onClick={onMenuToggle}>Menu</h3>
    </nav>
  );
}

export default Navbar;
