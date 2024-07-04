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
                <i className="flaticon-customer-service"></i>
              </div>
              <div className="feature-content">
                <h4>Contact Us</h4>
                <p>
                  We research the details of your home and start crafting a
                  great offer for you.
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
                <h4>Get Your Offer</h4>
                <p>
                  We present you with a fair cash offer with no obligation and
                  no fees.
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
                <i className="flaticon-quality"></i>
              </div>
              <div className="feature-content">
                <h4>Get Paid</h4>
                <p>
                  Get the cash you need now. You do NOT have to wait 6-12 months
                  to get your house sold.
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
