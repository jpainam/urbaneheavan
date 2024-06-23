import { Link } from "react-router-dom";
import "./project.css";
const CaseCard2 = ({ card, type, index }) => {
  return (
    <div className={`single-project-item ${index === 3 ? "last-child" : ""}`}>
      <div
        className={
          type !== "index-2"
            ? "project-thumb projcet-item"
            : "project-thumb project-img-card"
        }
      >
        <img src={card?.img} alt="" />
        <Link to="/case-details" className="details-link">
          <i className="las la-arrow-right"></i>
        </Link>
      </div>
      <div className="project-content">
        <p>Project</p>
        <h4>
          <Link to="/case-details">{card?.name}</Link>
        </h4>
      </div>
    </div>
  );
};

export default CaseCard2;
