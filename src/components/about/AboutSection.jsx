import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progress.css";

const AboutSection = () => {
  useEffect(() => {
    const dataBackground = document.querySelectorAll("[data-background]");
    dataBackground.forEach((dbg) => {
      dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
    });
  }, []);
  return (
    <div className="about-section white-bg section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInLeft animated"
            data-wow-delay="100ms"
          >
            <div
              className="about-bg-one"
              data-background="/assets/img/about/about-1.jpg"
            >
              <div className="about-tag-title">
                <h4>We Have Than 25 Years of Experience</h4>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="about-content-wrap">
              <div className="section-title">
                <h6>About Company</h6>
                <h2>Professional Approach and Quality Services</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority suffered alteration in some form, by injected
                humour, or randomised which don&apos;t look even slightly
                believable.
              </p>
              <div className="about-feature-list">
                <ul>
                  <li>
                    <i className="las la-check-circle"></i> Best Taxation
                    Service
                  </li>
                  <li>
                    <i className="las la-check-circle"></i>Business Strategy &
                    Growth
                  </li>
                  <li>
                    <i className="las la-check-circle"></i>Highly Dedicated
                    Worker
                  </li>
                  <li>
                    <i className="las la-check-circle"></i>99.9% Customer
                    Satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-12 text-end wow fadeInUp animated"
            data-wow-delay="100ms"
          >
            <div className="about-content-wrap pr-60">
              <div className="section-title">
                <h6>Who We Are</h6>
                <h2>Providing Quality Tax Services & Consulting</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable
              </p>
              <div className="circle_progress_area">
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInRight animated"
            data-wow-delay="200ms"
          >
            <div
              className="about-bg-two"
              data-background="/assets/img/about/about-2.jpg"
            >
              <div className="about-tag-title">
                <h4>99.9% Customer Satisfaction</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
