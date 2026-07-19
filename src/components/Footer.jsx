import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer">
      <div id="footer-div"></div>
      <h1>WordBlog</h1>
      <div id="footer-bottom"></div>

      <footer>
        <div className="content">
          <h2 className="logo">WordBlog</h2>
          <p>Stories That Matter</p>
          <ul className="sm">
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithub />
              </a>
            </li>
          </ul>
          <ul className="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <p className="copyright">
          &copy; {year} WordBlog. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
