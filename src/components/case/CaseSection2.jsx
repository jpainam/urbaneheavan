import React from "react";
import useGetData from "../../hooks/useGetData";
import CaseCard2 from "./CaseCard2";
import { Link } from "react-router-dom";

const CaseSection2 = ({ type }) => {
  const cases = useGetData([], "./data/cases.json");
  return (
    <div className="project-section project-two section-padding pb-60 white-bg">
      <div className="container">
        {type === "index-2" ? (
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="section-title">
                <p>OUR PROJECTS</p>
                <h2>
                  Delivering our clients more project clarity, greater insight,
                  and less chaos.
                </h2>
              </div>
            </div>
          </div>
        ) : null}
        <div className="row" id="cases">
          {cases?.length > 0 ? (
            <React.Fragment>
              {cases?.length > 0 &&
                (type !== "index-2" ? cases : cases.slice(1, 4))?.map(
                  (card, i) => {
                    let k = i + 1;
                    if (type !== "index-2") {
                      if (k > 3) {
                        k = k - 3;
                      }
                      return (
                        <div
                          key={card?.id}
                          className={`col-xl-4 col-lg-4 col-md-6 col-12 wow animated ${
                            i > 2 ? "fadeInRight" : "fadeInUp"
                          }`}
                          data-wow-delay={`${k * 200}ms`}
                        >
                          <CaseCard2 card={card} />
                        </div>
                      );
                    }
                    return (
                      <div
                        key={card?.id}
                        className={`col-xl-4 col-lg-4 col-md-6 col-12 wow animated ${
                          k === 1
                            ? "fadeInLeft"
                            : k === 2
                            ? "fadeInRight"
                            : "fadeInUp"
                        }`}
                        data-wow-delay={`${k * 200}ms`}
                      >
                        <CaseCard2 card={card} type={type} index={k} />
                      </div>
                    );
                  }
                )}
            </React.Fragment>
          ) : null}
        </div>
      </div>
      {type === "index-2" ? (
        <div className="explore-btn">
          <Link to="/cases">
            View All Projects<i className="las la-arrow-right"></i>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default CaseSection2;
