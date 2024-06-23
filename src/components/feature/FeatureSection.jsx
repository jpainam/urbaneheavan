import { Link } from "react-router-dom";

const FeatureSection = ({ className }) => {
  return (
    <div className={`feature-section section-padding pb-0 ${className || ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center">
            <div className="section-title">
              <h2>
                We Have Than More{" "}
                <Link to="/about">25 Years of Experience</Link> <br />
                in Tax Advisor & Financial Consulting <br />
                Services
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp animated"
            data-wow-delay="100ms"
          >
            <div className="feature-item-wrap">
              <div className="feature-icon">
                <i className="flaticon-quality"></i>
              </div>
              <div className="feature-content">
                <h4>Quality Services</h4>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit magni
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="feature-item-wrap">
              <div className="feature-icon">
                <i className="flaticon-group"></i>
              </div>
              <div className="feature-content">
                <h4>Professional Team</h4>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit magni
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp animated"
            data-wow-delay="300ms"
          >
            <div className="feature-item-wrap">
              <div className="feature-icon">
                <i className="flaticon-customer-service"></i>
              </div>
              <div className="feature-content">
                <h4>24/7 Full Support</h4>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit magni
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
