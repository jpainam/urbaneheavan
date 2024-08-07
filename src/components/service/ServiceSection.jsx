import { Link } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import ServiceLine from "./ServiceLine";
const ServiceSection = ({ className }) => {
  const services = useGetData([], "./data/services.json");
  return (
    <div className="service-section white-bg section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInLeft animated"
            data-wow-delay="200ms"
          >
            <div className="single-service-wrap">
              {services?.length > 0 &&
                services
                  .slice(0, 4)
                  ?.map((sr, i) => (
                    <ServiceLine
                      key={sr?.id}
                      service={sr}
                      i={i + 1}
                      className={className}
                    />
                  ))}
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="service-content-wrap">
              <div className="section-title">
                <h6>WHAT WE PROVIDE</h6>
                <h2>Sell Your House Fast In Upstate New York</h2>
              </div>
              <p>
                Once we get your info, we're usually able to make you a fair
                all-cash offer within 24 hours. From there, we can close as
                quickly as 7 days... or on your schedule (sometimes we can have
                a check in your hand the very same day!).
              </p>
              <div className="service-bg">
                <img src="/assets/img/service/service-bg.png" alt="" />
                <Link to="/services" className="more-service-btn">
                  Explore More Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
