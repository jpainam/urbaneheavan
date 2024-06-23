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
                <h2>Loose And Experienced Tax Preparation</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable.
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
