import { useOutletContext } from "react-router-dom";

const InContactBread = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 pb-0 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10 col-12 text-center">
            <div className="section-title">
              <p>Contact Us</p>
              <h2>
                Get our all info and also can message us directly from here
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InContactBread;
