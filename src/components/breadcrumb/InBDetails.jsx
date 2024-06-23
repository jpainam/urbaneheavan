import { useOutletContext } from "react-router-dom";

const InBDetails = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-10 col-12 text-center">
            <div className="section-title">
              <p>Taxation</p>
              <h2>If The White Whale Be Raised It Must Be In A Month</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-8 col-12">
            <div className="blog-meta-wrap">
              <div className="blog-meta">
                <p>
                  <i className="las la-calendar-alt"></i>25 March 2023
                </p>
              </div>
              <div className="blog-meta">
                <p>
                  <i className="las la-comments"></i>02 Comments
                </p>
              </div>
              <div className="blog-meta">
                <p>
                  <i className="las la-user-alt"></i>By Admin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InBDetails;
