import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer footer-center p-10 bg-white text-base-content rounded">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://linkedin.com/in/nymulislam">
              <FaLinkedin className="text-4xl" />
            </Link>
            <Link to="https://www.facebook.com/nm.islm">
              <FaFacebookSquare className="text-4xl"/>
            </Link>
            <Link to="https://github.com/nymulislam">
              <FaGithubSquare className="text-4xl"/>
            </Link>
          </div>
        </nav>
        <aside>
          <p>Copyright © {currentYear} - All right reserved by Align Minds</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
