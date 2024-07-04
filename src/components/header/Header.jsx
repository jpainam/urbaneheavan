import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import HeaderTop from "./HeaderTop";
import { Link, useOutletContext } from "react-router-dom";

import "./header.css";
import "./mobileMenu.css";

const Header = ({ className, type }) => {
  const [showNav, setShowNav] = useState(false);

  const [scrolled] = useOutletContext();

  return (
    <React.Fragment>
      <HeaderTop type={type} />

      <div className={`header-area ${className || ""}`}>
        <div className={`sticky-area ${scrolled ? "fixed is-sticky" : ""}`}>
          <div className="navigation">
            <div className="container">
              <div className="header-inner-box">
                <div className="logo">
                  <Link className="navbar-brand" to="/">
                    <img height={65} src="/assets/img/logo2.png" alt="" />
                  </Link>
                </div>

                <div className="main-menu">
                  <nav className="navbar navbar-expand-lg">
                    <button
                      onClick={() => setShowNav((p) => !p)}
                      className={`navbar-toggler ${showNav ? "active" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse justify-content-center prev-nav"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                          <a className="nav-link active" href="#">
                            Home
                            <span className="sub-nav-toggler"> </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/">Home-1</Link>
                            </li>
                            <li>
                              <Link to="/index-2">Home-2</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Pages
                            <span className="sub-nav-toggler"></span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/about">About Us</Link>
                            </li>
                            <li>
                              <Link to="/team">Team</Link>
                            </li>
                            <li>
                              <Link to="/faq">Helpful FAQ</Link>
                            </li>
                            <li>
                              <Link to="/price">Pricing</Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Services
                            <span className="sub-nav-toggler"> </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/services">Service </Link>
                            </li>
                            <li>
                              <Link to="/service-details">Service Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Cases
                            <span className="sub-nav-toggler"> </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/cases">Cases </Link>
                            </li>
                            <li>
                              <Link to="/case-details">Cases Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Blogs
                            <span className="sub-nav-toggler"> </span>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/blog">Blogs </Link>
                            </li>
                            <li>
                              <Link to="/blog-details">Blog Details</Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/contact">
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <MobileMenu showNav={showNav} setShowNav={setShowNav} />
                    </div>
                  </nav>
                </div>
                {type === "index-2" ? (
                  <React.Fragment>
                    <div className="header-contact">
                      <div className="header-contact-icon">
                        <i className="las la-comments"></i>
                      </div>
                      <div className="header-contact-info">
                        <p>Let&apos;s Chat</p>
                        <h6>(208) 555-0112 89</h6>
                      </div>
                    </div>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="header-right">
                      <div className="search-icon search-trigger">
                        <i className="fal fa-search"></i>
                      </div>
                      <Link to="/contact">
                        Get in Touch <i className="fal fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
        {className === "light-bg-1" || type === "index-2" ? null : (
          <div className="header_right_bg">
            <img src="/assets/img/top_right_bg.png" alt="" />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
