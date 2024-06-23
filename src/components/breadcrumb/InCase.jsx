import { useOutletContext } from "react-router-dom";
const InCase = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12 text-center">
            <div className="section-title">
              <p>Case studies</p>
              <h2>Let&apos;s See Our Latest Project</h2>
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

export default InCase;
