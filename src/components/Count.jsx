//counter
import CountUp from "react-countup";

const Count = () => {
  return (
    <div className="counter-area bg-cover">
      <div className="overlay-2"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={15}
                  duration={1}
                  delay={1}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                k+
              </p>
              <h6>Project Completed</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={25}
                  duration={1}
                  delay={1}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                +
              </p>
              <h6>Years Experience</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={4723}
                  duration={1}
                  delay={1}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </p>
              <h6>Happy Customers</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-counter-box">
              <p className="counter-number">
                <CountUp
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  start={0}
                  end={406}
                  duration={1}
                  delay={1}
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </p>
              <h6>Professional Worker</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
