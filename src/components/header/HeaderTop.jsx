import React from "react";
import SelectOption from "./SelectOption";
import { Link } from "react-router-dom";
const HeaderTop = ({ type }) => {
  return (
    <div
      className={`header-top-area ${
        type === "index-2" ? "header-top-two dark-bg" : "green-bg"
      }`}
    >
      <div className="container">
        <div className="row">
          {type === "index-2" ? (
            <React.Fragment>
              <div className="col-xl-3 col-lg-3">
                <div className="header-info">
                  <i className="las la-phone"></i>
                  <p>
                    <span>Hotline</span>: +(+62)546 158 361
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 text-center">
                <div className="header-top-link">
                  <p>
                    Get Your Free Tax Advisor Today and Save 10% on Your First
                    Session <Link to="/contact">Get Started</Link>
                  </p>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 text-end">
                <div className="header-top-right d-flex">
                  <div className="login-link">
                    <a href="#">Login</a>
                  </div>
                  <div className="search-bar">
                    <input type="text" placeholder="Search Here" />
                    <div className="search-icon">
                      <i className="fal fa-search"></i>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="col-xl-4 col-lg-5 col-md-5 col-12">
                <div className="header-info">
                  <i className="las la-clock"></i>
                  <p>
                    <span>Working Hours</span>: Sunday-Monday, 09 a.m.- 5 p.m.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3 col-md-3 col-12 text-center">
                <div className="contact-info">
                  <a href="tel:+000(123)556989">
                    <span>Call</span>: +1(585) 415-3441
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-4 col-12 text-end">
                <div className="language-dropdown">
                  <SelectOption />
                </div>
                <div className="social-icon">
                  <a href="#">
                    <i className="lab la-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="lab la-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="lab la-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="lab la-dribbble"></i>
                  </a>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
