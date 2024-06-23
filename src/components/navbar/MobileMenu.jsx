import { useState } from "react";
import { Link } from "react-router-dom";
import "./mobileMenu.css";
const MobileMenu = ({ showNav, setShowNav }) => {
  const [homeSubMenu, setHomeSubMenu] = useState(false);
  const [serviceSubMenu, setServiceSubMenu] = useState(false);
  const [workSubMenu, setWorkSubMenu] = useState(false);
  const [blogSubMenu, setBlogSubMenu] = useState(false);
  const [subMenuId, setSubMenuId] = useState("");
  const [active, setActive] = useState("home");

  const subMenuHandler = (id) => {
    setSubMenuId(id);
    if (id === "home") {
      setHomeSubMenu((p) => !p);
      setBlogSubMenu(false);
      setServiceSubMenu(false);
      setWorkSubMenu(false);
    }
    if (id === "service") {
      setServiceSubMenu((p) => !p);
      setHomeSubMenu(false);
      setBlogSubMenu(false);
      setWorkSubMenu(false);
    }
    if (id === "work") {
      setWorkSubMenu((p) => !p);
      setHomeSubMenu(false);
      setBlogSubMenu(false);
      setServiceSubMenu(false);
    }
    if (id === "blog") {
      setBlogSubMenu((p) => !p);
      setHomeSubMenu(false);
      setServiceSubMenu(false);
      setWorkSubMenu(false);
    }
  };
  return (
    <div className={`mobile-nav  ${showNav ? "active" : ""}`}>
      <ul className="navbar-nav m-auto">
        <li className={`nav-item`}>
          <div className="link-item">
            <a
              className={`mobile-nav-link ${active === "home" ? "active" : ""}`}
              href="#"
              onMouseEnter={() => setActive("home")}
            >
              Home
            </a>
            <button
              className="mobile-sub-nav-toggler"
              onClick={() => subMenuHandler("home")}
            >
              <i className="las la-angle-down"></i>
            </button>
          </div>
          <ul
            className={`mobile-sub-menu ${
              homeSubMenu && subMenuId === "home" ? "active" : ""
            }`}
            onClick={() => {
              setShowNav((p) => !p);
              setSubMenuId("");
            }}
          >
            <li>
              <Link to={"/"}>Home Page 01</Link>
            </li>
            <li>
              <Link to="/index-2">Home Page 02</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item smooth-menu">
          <div className="link-item">
            <Link
              to={"/about-me"}
              className={`mobile-nav-link ${
                active === "about" ? "active" : ""
              }`}
              onMouseEnter={() => setActive("about")}
              onClick={() => {
                setShowNav((p) => !p);
                setSubMenuId("");
              }}
            >
              About Me
            </Link>
          </div>
        </li>

        <li className="nav-item">
          <div className="link-item">
            <a
              className={`mobile-nav-link ${
                active === "service" ? "active" : ""
              }`}
              href="#"
              onMouseEnter={() => setActive("service")}
            >
              Services
            </a>
            <button
              className="mobile-sub-nav-toggler"
              onClick={() => subMenuHandler("service")}
            >
              <i className="las la-angle-down"></i>
            </button>
          </div>
          <ul
            className={`mobile-sub-menu ${
              serviceSubMenu && subMenuId === "service" ? "active" : ""
            }`}
            onClick={() => {
              setShowNav((p) => !p);
              setSubMenuId("");
            }}
          >
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/service-details">Service Details</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <div className="link-item">
            <a
              className={`mobile-nav-link ${active === "work" ? "active" : ""}`}
              onMouseEnter={() => setActive("work")}
              href="#"
            >
              Works
            </a>
            <button
              className="mobile-sub-nav-toggler"
              onClick={() => subMenuHandler("work")}
            >
              <i className="las la-angle-down"></i>
            </button>
          </div>
          <ul
            className={`mobile-sub-menu ${
              workSubMenu && subMenuId === "work" ? "active" : ""
            }`}
            onClick={() => {
              setShowNav((p) => !p);
              setSubMenuId("");
            }}
          >
            <li>
              <Link to="/portfolio">Works</Link>
            </li>
            <li>
              <Link to="/portfolio-details">Work Details</Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <div className="link-item">
            <a
              className={`mobile-nav-link ${active === "blog" ? "active" : ""}`}
              href="#"
              onMouseEnter={() => setActive("blog")}
            >
              Blogs
            </a>
            <button
              className="mobile-sub-nav-toggler"
              onClick={() => subMenuHandler("blog")}
            >
              <i className="las la-angle-down"></i>
            </button>
          </div>
          <ul
            className={`mobile-sub-menu ${
              blogSubMenu && subMenuId === "blog" ? "active" : ""
            }`}
            onClick={() => {
              setShowNav((p) => !p);
              setSubMenuId("");
            }}
          >
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li className="nav-item smooth-menu">
          <div className="link-item">
            <Link
              to="/contact"
              className={`mobile-nav-link ${
                active === "contact" ? "active" : ""
              }`}
              onMouseEnter={() => setActive("contact")}
              onClick={() => {
                setShowNav((p) => !p);
                setSubMenuId("");
              }}
            >
              Contact
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
