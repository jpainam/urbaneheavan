import React from "react";
import { Link } from "react-router-dom";
const ServiceLine = ({ service, i, className }) => {
  return (
    <React.Fragment>
      <div className={`single-service-inner`}>
        <h5>
          <Link to="/service-details">
            {className === "service-two" ? `0${i}/` : null} {service?.topic}
          </Link>
        </h5>
        <p>
          {service?.title.t1} <br />
          {service?.title.t2}
        </p>
        <Link to="/service-details" className="details-link">
          <i className="las la-arrow-right"></i>
        </Link>
      </div>
      {className === "service-two" ? (
        <div className="service-img">
          <img src={service?.img} alt="" />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ServiceLine;
