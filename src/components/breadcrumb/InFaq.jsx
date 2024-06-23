import { useOutletContext } from "react-router-dom";
const InFaqBread = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 pb-0 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 offset-md-3 col-md-6 col-12 text-center">
            <div className="section-title">
              <p>FAQ</p>
              <h2>Questions & Answers</h2>
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

export default InFaqBread;
