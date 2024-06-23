//components

import React from "react";
import {
  AboutPart2,
  CTA2,
  Clients,
  Collaboration,
  Count,
  Experience,
  FeatureSection,
  InAboutBread,
  TeamSection,
  Testimonial2,
} from "../components";

const About = () => {
  return (
    <React.Fragment>
      <InAboutBread />
      <FeatureSection className={"white-bg"} />
      <AboutPart2 className={"about-two white-bg"} />
      <Count />
      <TeamSection className={"pb-90"} />
      <CTA2 />
      <Experience className={"white-bg"} />
      <Testimonial2 />
      <Collaboration type={"1"} />
      <Clients className={"section-padding"} />
    </React.Fragment>
  );
};

export default About;
