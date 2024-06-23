import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progress.css";
const Experience = ({ className }) => {
  return (
    <div
      className={`about-section about-two section-padding ${className || ""}`}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInLeft animated"
            data-wow-delay="200ms"
          >
            <div className="about-left-wrap">
              <img src="assets/img/about/about-5.png" alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInUp animated"
            data-wow-delay="400ms"
          >
            <div className="about-right-wrap">
              <div className="section-title">
                <p>ABOUT Experience</p>
                <h2>Helping You Put Systems in Place that Work</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,{" "}
              </p>
              <div className="circle_progress_area pt-30">
                <div className="circle_progress_wrap">
                  <div className="circle_progress_single">
                    <div className="circle_progress_box">
                      <CircularProgressbar
                        value={85}
                        text={`${85}%`}
                        strokeWidth={2}
                        styles={buildStyles({
                          strokeLinecap: "butt",
                          pathColor: "#061815",
                          textColor: "#061815",
                          textSize: "1.2rem",
                        })}
                      />
                    </div>
                    <div className="circle_progress_content">
                      <h6>Financial Advising</h6>
                    </div>
                  </div>
                  <div className="circle_progress_single">
                    <div className="circle_progress_box">
                      <CircularProgressbar
                        value={95}
                        text={`${95}%`}
                        strokeWidth={2}
                        styles={buildStyles({
                          strokeLinecap: "butt",
                          pathColor: "#061815",
                          textColor: "#061815",
                          textSize: "1.2rem",
                        })}
                      />
                    </div>
                    <div className="circle_progress_content">
                      <h6>Business Consulting</h6>
                    </div>
                  </div>
                  <div className="circle_progress_single">
                    <div className="circle_progress_box">
                      <CircularProgressbar
                        value={75}
                        text={`${75}%`}
                        strokeWidth={2}
                        styles={buildStyles({
                          strokeLinecap: "butt",
                          pathColor: "#061815",
                          textColor: "#061815",
                          textSize: "1.2rem",
                        })}
                      />
                    </div>
                    <div className="circle_progress_content">
                      <h6>Brand Consulting</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
