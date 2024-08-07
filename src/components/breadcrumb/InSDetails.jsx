import { useOutletContext } from "react-router-dom";
const InSDetails = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 pb-0 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 text-center">
            <div className="section-title">
              <p>You'll Get A Fair Offer </p>
              <h2>We Provide Quality Services.</h2>
            </div>
          </div>
        </div>

        <div className="row mt-90">
          <div className="col-12">
            <div className="bread-bg">
              <img
                src="/assets/img/breadcrumb/service-details_banner.jpg"
                alt=""
              />
              <div className="bg-tag">
                <h2>You'll Get A Fair Offer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InSDetails;
