import { useEffect } from "react";
const Process2 = () => {
  useEffect(() => {
    const dataBackground = document.querySelectorAll("[data-background]");
    dataBackground.forEach((dbg) => {
      dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
    });
  }, []);
  return (
    <div className="process-section section-padding white-bg">
      <div className="container mb-60">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInLeft animated"
            data-wow-delay="200ms"
          >
            <div
              className="process-bg"
              data-background="/assets/img/process/process_bg.jpg"
            >
              <div className="process-tag-title">
                <h4>We Have Than 25 Years of Experience</h4>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInUp animated"
            data-wow-delay="400ms"
          >
            <div className="process-content-wrap">
              <div className="section-title">
                <p>How We Works</p>
                <h2>Easy Steps To Get Our Tax Services</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority suffered alteration in some form, by injected
                humour,
              </p>
            </div>

            <div className="single-process-wrap">
              <div className="single-process-inner">
                <h5>01/ Choose Your Services</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum <br />{" "}
                  available, but the majority{" "}
                </p>
              </div>
              <div className="single-process-inner">
                <h5>02/ Make Appointment</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum <br />{" "}
                  available, but the majority{" "}
                </p>
              </div>
              <div className="single-process-inner">
                <h5>03/ Make Payment</h5>
                <p>
                  There are many variations of passages of Lorem Ipsum <br />{" "}
                  available, but the majority{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process2;
