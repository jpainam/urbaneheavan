import CircularProgress from "../CircularProgress";
import useScrollingProgress from "../../hooks/useScrollingProgress";
import { Link } from "react-router-dom";
const Footer = () => {
  const progress = useScrollingProgress();

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-5 col-12 wow fadeInUp animated"
              data-wow-delay="200ms"
            >
              <div className="footer-widget">
                <div className="logo">
                  <Link className="navbar-brand" to="/">
                    <img src="/assets/img/old-logo.png" alt="" />
                  </Link>
                </div>
                <p className="company-desc">
                  We are a real estate solutions and investment firm that
                  specializes in helping homeowners get rid of problem houses
                  fast. We are investors and problem solvers who can buy your
                  house fast with a fair all cash offer.
                </p>
                <div className="support-info">
                  <div className="support-icon">
                    <i className="las la-phone-volume"></i>
                  </div>
                  <div className="support-content">
                    <h6>Free Support</h6>
                    <p>0524 6230 2528</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offset-xl-1 col-xl-5 col-lg-5 col-md-6 col-12 wow fadeInUp animated"
              data-wow-delay="200ms"
            >
              <div className="footer-widget">
                <div className="row">
                  <div className="col-md-6">
                    <div className="services-list">
                      <h5>Our Services</h5>
                      <ul>
                        <li>
                          <i className="las la-check-circle"></i>
                          <Link to="/service-details">Insurance Tax</Link>
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>
                          <Link to="/service-details">Audit & Assurancy</Link>
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>
                          <Link to="/service-details">Strategic Planning</Link>
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>
                          <Link to="/service-details">Financial Planning</Link>
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>
                          <Link to="/service-details">Finance Secure</Link>
                        </li>
                        <li>
                          <i className="las la-check-circle"></i>
                          <Link to="/service-details">Porject Management</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-contact-info">
                      <h5>Contact Us</h5>
                      <p className="address">75 Garuda., Maju, INA 789</p>
                      <p className="number">050 520 6320 25</p>
                      <p className="email">support@yourdomain.tld</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-12 wow fadeInUp animated"
              data-wow-delay="600ms"
            >
              <div className="footer-widget">
                <div className="project-gallery">
                  <h5>Recent Project</h5>
                  <img src="/assets/img/footer/1.jpg" alt="" />
                  <img src="/assets/img/footer/2.jpg" alt="" />
                  <img src="/assets/img/footer/3.jpg" alt="" />
                  <img src="/assets/img/footer/4.jpg" alt="" />
                  <img src="/assets/img/footer/5.jpg" alt="" />
                  <img src="/assets/img/footer/6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 text-center">
              <div
                className="founder-year-wrap wow fadeInUp animated"
                data-wow-delay="300ms"
              >
                <span>since 1990</span>
              </div>
              <div className="footer-navbar">
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">Service</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape">
          <img src="/assets/img/shape/shape-7.png" alt="" />
        </div>
      </div>
      <div className="footer-bottom yellow-bg">
        <p>©Copyright 2023. All Rights Reserved. DevGalaxy</p>
      </div>
      <a href="#" className={`back-top ${progress ? "active-progress" : ""}`}>
        <CircularProgress progress={progress} cW={90} />
      </a>
    </>
  );
};

export default Footer;
