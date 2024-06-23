import { Link } from "react-router-dom";

const Feature2 = () => {
  return (
    <div className="feature-section feature-two section-padding white-bg">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInLeft animated"
            data-wow-delay="200ms"
          >
            <div className="single-feature-item">
              <div className="feature-item-inner">
                <div className="feature-icon">
                  <i className="flaticon-money-2"></i>
                </div>
                <div className="feature-title">
                  <h4 className="text-white">Best Taxation Service</h4>
                </div>
              </div>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks
              </p>
              <Link to="/service-details" className="service-details-link">
                <i className="las la-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInLeft animated"
            data-wow-delay="400ms"
          >
            <div className="single-feature-item">
              <div className="feature-item-inner">
                <div className="feature-icon">
                  <i className="flaticon-bar-chart"></i>
                </div>
                <div className="feature-title">
                  <h4 className="text-white">Business Strategy & Growth</h4>
                </div>
              </div>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks
              </p>
              <Link to="/service-details" className="service-details-link">
                <i className="las la-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-4 col-12 wow fadeInLeft animated"
            data-wow-delay="600ms"
          >
            <div className="single-feature-item">
              <div className="feature-item-inner">
                <div className="feature-icon">
                  <i className="flaticon-hr"></i>
                </div>
                <div className="feature-title">
                  <h4 className="text-white">Highly Dedicated Worker</h4>
                </div>
              </div>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks
              </p>
              <Link to="/service-details" className="service-details-link">
                <i className="las la-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
