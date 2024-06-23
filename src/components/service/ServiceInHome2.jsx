import Heading from "./Heading";
import AllServices from "./AllServices";
import { Link } from "react-router-dom";

const ServiceInHome2 = () => {
  return (
    <div className="service-section service-two section-padding white-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 text-center">
            <Heading />
          </div>
        </div>
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

export default ServiceInHome2;
