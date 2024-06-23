import { useOutletContext } from "react-router-dom";

const InCDetails = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-12 text-center">
            <div className="section-title">
              <p>PROJECT DETAILS</p>
              <h2>Purposive Tax Planning</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="project-details-info">
              <div className="project-details-inner mt-60">
                <div className="single-project-info">
                  <h4>Clients</h4>
                  <p>Taxzen Glints Company</p>
                </div>
                <div className="single-project-info">
                  <h4>Category</h4>
                  <p>Tax planning</p>
                </div>
                <div className="single-project-info">
                  <h4>Date</h4>
                  <p>12 March, 2023</p>
                </div>
                <div className="single-project-info">
                  <h4>Location</h4>
                  <p>Garuda, 99 INA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InCDetails;
