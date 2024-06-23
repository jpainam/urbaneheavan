import CircularProgress from "../CircularProgress";
import useScrollingProgress from "../../hooks/useScrollingProgress";
import { Link } from "react-router-dom";
import SocialArea from "../SocialArea";
const Footer2 = () => {
  const progress = useScrollingProgress();
  return (
    <>
      <SocialArea />
      <div className="footer-area footer-two">
        <div className="container">
          <div
            className="row justify-content-center pt-180 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="col-xl-10 text-center">
              <div className="footer-inner">
                <h2 className="text-white">
                  Add Your Own Details and Inform All Your Tax Requirements
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row mt-60 wow fadeInUp animated"
            data-wow-delay="400ms"
          >
            <div className="offset-xl-2 col-xl-8">
              <div className="submit-form">
                <input type="email" placeholder="Your E-mail" />
                <input type="submit" value="Send Request" />
              </div>
            </div>
          </div>
          <div
            className="row mt-60 wow fadeInDown animated"
            data-wow-delay="600ms"
          >
            <div className="col-md-6 col-12">
              <div className="contact-info d-flex">
                <h5 className="text-white">
                  <span>Call Us:</span>024 5668 7675
                </h5>
                <h6 className="text-white">infocontact@email.com</h6>
              </div>
            </div>
            <div className="col-md-6 col-12 text-end">
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link to="/about">
                      About Us <span>/</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      Services <span>/</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      Projects <span>/</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      Blog<span>/</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="footer-bottom">
              <p className="text-white">
                ©Copyright 2023. All Rights Reserved. DevGalaxy
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className={`back-top ${progress ? "active-progress" : ""}`}>
        <CircularProgress progress={progress} cW={90} />
      </a>
    </>
  );
};

export default Footer2;
