import { Link } from "react-router-dom";

const CaseCard = ({ card }) => {
  return (
    <div className="single-case-wrapper" data-background={card?.img}>
      <div className="case-info-wrap">
        <h3>{card?.name}</h3>
        <p>{card?.topic.slice(0, 50)}..</p>
        <h6>
          Location: <span>{card?.location}</span>
        </h6>
        <h6>
          Date: <span>{card?.date}</span>
        </h6>
        <Link to="/case-details" className="main-btn">
          Discover More
        </Link>
      </div>
    </div>
  );
};

export default CaseCard;
