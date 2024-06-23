import { Link } from "react-router-dom";
const AboutPart2 = ({ className }) => {
  return (
    <div className={`about-section section-padding ${className || ""}`}>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInDown animated"
            data-wow-delay="200ms"
          >
            <div className="about-left-wrap">
              <div className="section-title">
                <p>About Company</p>
                <h2>We Are The Best Solution For Your Tax Services</h2>
              </div>
              <div className="fouder-wrap light-bg-2">
                <div className="fouder-thumb">
                  <img src="/assets/img/about/founder-thumb.png" alt="" />
                </div>
                <div className="founder-content">
                  <div className="founder-title">
                    <h5>
                      Jhon Richard, <span>Founder</span>
                    </h5>
                  </div>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore in fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div
                className="about-left-img wow fadeInUp animated"
                data-wow-delay="400ms"
              >
                <img src="/assets/img/about/about-3.jpg" alt="" />
                <Link to="/about">Discover More</Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInRight animated"
            data-wow-delay="200ms"
          >
            <div className="about-right-wrap">
              <div className="about-right-img">
                <img src="/assets/img/about/about-4.jpg" alt="" />
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority suffered alteration in some form, by injected
                humour, or randomised which don&apos;t look even slightly
                believable.{" "}
              </p>
              <div className="about-feature-list">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <ul>
                      <li>
                        <i className="las la-check-circle"></i> Best Taxation
                        Service
                      </li>
                      <li>
                        <i className="las la-check-circle"></i>Business Strategy
                        & Growth
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-12">
                    <ul>
                      <li>
                        <i className="las la-check-circle"></i>Highly Dedicated
                        Worker
                      </li>
                      <li>
                        <i className="las la-check-circle"></i>99.9% Customer
                        Satisfaction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPart2;
