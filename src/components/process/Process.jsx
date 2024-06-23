const Process = ({ className }) => {
  return (
    <div
      className={`process-section process-two section-padding ${
        className || ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="process-bg">
              <img src="/assets/img/process/process_bg-2.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="process-content-wrap">
              <div className="section-title">
                <p>Our Process</p>
                <h2>Our Working Process</h2>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority suffered alteration in some form, by injected
                humour, or randomised which don&apos;t look even slightly
                believable.
              </p>
              <div className="single-process-item">
                <div className="process-icon">
                  <i className="fal fa-calendar-check"></i>
                </div>
                <div className="process-content">
                  <h4>Make an Appointment</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt{" "}
                  </p>
                </div>
              </div>
              <div className="single-process-item">
                <div className="process-icon">
                  <i className="fal fa-award"></i>
                </div>
                <div className="process-content">
                  <h4>Meet Our Professional</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt{" "}
                  </p>
                </div>
              </div>
              <div className="single-process-item">
                <div className="process-icon">
                  <i className="fal fa-lightbulb-on"></i>
                </div>
                <div className="process-content">
                  <h4>Your Problem Solved</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
