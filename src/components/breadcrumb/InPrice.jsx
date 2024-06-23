import { useOutletContext } from "react-router-dom";
const InPriceBread = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 pb-0 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 offset-md-1 col-md-10 col-12 text-center">
            <div className="section-title">
              <p>Our Pricing</p>
              <h2>
                We have all kind of plans for every business that fit with your
                needs
              </h2>
            </div>
          </div>
        </div>

        <div className="row mt-90">
          <div className="col-12">
            <div className="bread-bg">
              <img src="/assets/img/breadcrumb/service_banner.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPriceBread;
