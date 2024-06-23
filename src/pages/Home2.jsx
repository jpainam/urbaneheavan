import React from "react";
import {
  AboutPart2,
  BlogSection2,
  CTA2,
  CaseSection2,
  Clients,
  Collaboration,
  Emergency,
  Experience,
  Faq2,
  Feature2,
  HeroArea2,
  Process2,
  ServiceInHome2,
  Testimonial2,
  Works,
} from "../components";

const Home2 = () => {
  return (
    <React.Fragment>
      <HeroArea2 />
      <Feature2 />
      <AboutPart2 className={"about-two white-bg pt-0"} />
      <Works />
      <ServiceInHome2 />
      <Testimonial2 />
      <Process2 />
      <Faq2 />
      <CaseSection2 type={"index-2"} />
      <Clients className={"pb-120"} />
      <CTA2 />
      <Experience />
      <Emergency />
      <BlogSection2 />
      <Collaboration type={"1"} />
    </React.Fragment>
  );
};

export default Home2;
