import React from "react";
import useGetData from "../../hooks/useGetData";
import TeamCard from "./TeamCard";

const TeamSection = ({ className }) => {
  const team = useGetData([], "./data/team.json");
  return (
    <div
      className={`team-section section-padding light-bg-1 ${className || ""}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="section-title">
              {className === "pb-90" ? (
                <h6>Our Team Members</h6>
              ) : (
                <p>Our Team Members</p>
              )}
              <h2>
                Our dedicated tax advisor financial consulting will help you!
              </h2>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          {team?.length > 0 ? (
            <React.Fragment>
              {team?.length > 0 &&
                (className ? team.slice(0, 3) : team)?.map((mbr, i) => {
                  let k = i + 1;
                  if (k > 3) {
                    k = k - 3;
                  }
                  return (
                    <div
                      key={mbr?.id}
                      className="col-xl-4 col-lg-6 col-md-12 col-12 wow fadeInLeft animated"
                      data-wow-delay={`${k * 200}ms`}
                    >
                      <TeamCard member={mbr} />
                    </div>
                  );
                })}
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
