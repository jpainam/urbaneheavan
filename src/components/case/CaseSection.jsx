import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import CaseCard from "./CaseCard";

const CaseSection = () => {
  const cases = useGetData([], "./data/cases.json");
  useEffect(() => {
    if (cases?.length) {
      const dataBackground = document.querySelectorAll("[data-background]");
      dataBackground.forEach((dbg) => {
        dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
      });
    }
  }, [cases]);
  return (
    <div className="case-study section-padding white-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="section-title">
              <h6>Case Studies</h6>
              <h2>We Buy Properties In Any Condition.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xl-8 col-lg-7 col-md-6 wow fadeInLeft animated"
            data-wow-delay="200ms"
          >
            <CaseCard card={cases?.[0]} />
          </div>
          <div
            className="col-xl-4 col-lg-5 col-md-6 wow fadeInLeft animated"
            data-wow-delay="300ms"
          >
            <CaseCard card={cases?.[1]} />
          </div>
        </div>
      </div>
      <div className="explore-btn">
        <Link to="/cases">
          View All Projects<i className="las la-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default CaseSection;
