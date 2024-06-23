import React from "react";
import {
  CTA2,
  ChooseUs,
  Clients,
  Collaboration,
  InServiceBread,
  PricePlan,
  Process,
  ServiceSection2,
  Works,
} from "../components";

const Services = () => {
  return (
    <React.Fragment>
      <InServiceBread />
      <ServiceSection2 />
      <ChooseUs />
      <Works />
      <Process className={"white-bg"} />
      <PricePlan />
      <CTA2 />
      <Collaboration type={"1"} />
      <Clients className={"section-padding"} />
    </React.Fragment>
  );
};

export default Services;
