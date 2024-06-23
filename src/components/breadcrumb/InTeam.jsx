import { useOutletContext } from "react-router-dom";
const InTeamBread = () => {
  const [scrolled] = useOutletContext();
  return (
    <div
      className={`breadcrumb-area services section-padding light-bg-1 pb-0 ${
        scrolled ? "mt-90" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 offset-md-1 col-md-10 col-12 text-center">
            <div className="section-title">
              <p>Our Team</p>
              <h2>
                Trust the expertise of our tax advisor & financial consulting
              </h2>
            </div>
          </div>
        </div>

        <div className="row mt-90">
          <div className="col-12">
            <div className="bread-bg">
              <img src="/assets/img/breadcrumb/team_banner.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InTeamBread;
