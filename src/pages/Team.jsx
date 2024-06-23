import React from "react";
import {
  AboutPart2,
  InTeamBread,
  TeamSection,
  Collaboration,
  Works,
} from "../components";

const Team = () => {
  return (
    <React.Fragment>
      <InTeamBread />
      <AboutPart2 className={"about-two white-bg"} />
      <TeamSection />
      <Works />
      <Collaboration />
    </React.Fragment>
  );
};

export default Team;
