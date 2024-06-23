const TeamCard = ({ member }) => {
  return (
    <div className="single-team-wrap">
      <div className="team-thumb">
        <img src={member?.img} alt="" />
      </div>
      <div className="team-details">
        <h4>{member?.name}</h4>
        <h6>{member?.rank}</h6>
        <p>{member?.intro}</p>
        <div className="social-link">
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">LI</a>
          <a href="#">BE</a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
