import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import "./mobileMenu.css";
const NavbarPart = () => {
  const [showNav, setShowNav] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <div className="navbar navbar-expand-lg position-relative">
      <button
        onClick={() => setShowNav((p) => !p)}
        className={`navbar-toggler ${showNav ? "active" : ""}`}
        key="showNav"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" key="closeMenu1"></span>
        <span className="navbar-toggler-icon" key="closeMenu2"></span>
        <span className="navbar-toggler-icon" key="closeMenu3"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center prev-nav"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav m-auto ">
          <li className="nav-item">
            <a
              className={`nav-link ${active === "home" ? "active" : ""}`}
              href="#"
              onMouseEnter={() => setActive("home")}
              onClick={() => setActive("home")}
            >
              Home
              <span className="sub-nav-toggler"> </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link to={"/"}>Home Page 01</Link>
              </li>
              <li>
                <Link to="/index-2">Home Page 02</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item smooth-menu">
            <Link
              to={"/about-me"}
              className={`nav-link ${active === "about" ? "active" : ""}`}
              onMouseEnter={() => setActive("about")}
              onClick={() => setActive("about")}
            >
              About Me
            </Link>
          </li>

          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${active === "services" ? "active" : ""}`}
              onMouseEnter={() => setActive("services")}
              onClick={() => setActive("services")}
            >
              Services
              <span className="sub-nav-toggler"> </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/service-details">Service Details</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${active === "work" ? "active" : ""}`}
              onMouseEnter={() => setActive("work")}
              onClick={() => setActive("work")}
            >
              Works
              <span className="sub-nav-toggler"> </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link to="/portfolio">Works</Link>
              </li>
              <li>
                <Link to="/portfolio-details">Work Details</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              href="#"
              className={`nav-link ${active === "blogs" ? "active" : ""}`}
              onMouseEnter={() => setActive("blogs")}
              onClick={() => setActive("blogs")}
            >
              Blogs
              <span className="sub-nav-toggler"> </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/blog-details">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item smooth-menu">
            <Link
              to="/contact"
              className={`nav-link ${active === "contact" ? "active" : ""}`}
              onMouseEnter={() => setActive("contact")}
              onClick={() => setActive("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <MobileMenu showNav={showNav} setShowNav={setShowNav} />
      </div>
    </div>
  );
};

export default NavbarPart;
