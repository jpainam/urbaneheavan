import { Link } from "react-router-dom";
import AllServices from "./AllServices";

const ServiceSection2 = () => {
  return (
    <div className={`service-section white-bg section-padding service-two`}>
      <div className="container">
        <div className="row">
          <AllServices />
        </div>
        <div className="row">
          <div className="col-xl-12 text-center mt-60">
            <Link className="main-btn" to="/services">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection2;
