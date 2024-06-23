import React from "react";
import {
  AboutSection,
  BlogSection,
  CTA,
  CaseSection,
  Count,
  Faq,
  FeatureSection,
  HeroArea,
  ServiceSection,
  TeamSection,
  TestimonialSection,
} from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <HeroArea />
      <FeatureSection />
      <ServiceSection />
      <Count />
      <AboutSection />
      <CTA />
      <TestimonialSection />
      <CaseSection />
      <Faq className={"dark-bg"} />
      <TeamSection className={"pb-90"} />
      <BlogSection />
    </React.Fragment>
  );
};

export default Home;
