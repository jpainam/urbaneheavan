import Acordion from "./Acordion";

const Solutions = () => {
  return (
    <div className="solution-section section-padding pb-0 white-bg">
      <div className="row">
        <div className="offset-xl-2 col-xl-8 text-center">
          <div className="section-title">
            <h2>Solutions: All Your Questions Answered</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="offset-xl-1 col-xl-10 mt-50">
          <Acordion />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
