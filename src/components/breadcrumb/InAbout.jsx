import { useOutletContext } from "react-router-dom";
const InAboutBread = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area section-padding light-bg-1 pb-0 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-9 col-12">
            <div className="section-title">
              <p>More About Us</p>
              <h2>We Provide The Best Service For Your Convenience</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="direction-img">
              <img src="/assets/img/shape/shape-about.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <h3>Our History & Goal.</h3>
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, uncover many web sites
              still in infancy. various versions have evolved over the years,
              sometimes by sometimes on purpose injected humour and the like
            </p>
          </div>
        </div>
        <div className="row mt-90">
          <div className="col-12">
            <div className="bread-bg">
              <img src="/assets/img/breadcrumb/about_banner.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InAboutBread;
