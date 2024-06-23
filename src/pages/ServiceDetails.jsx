import React from "react";
import {
  ChooseUs,
  Clients,
  Collaboration,
  InSDetails,
  ServiceContent,
  Solutions,
  Works,
} from "../components";

const ServiceDetails = () => {
  return (
    <React.Fragment>
      <InSDetails />
      <ServiceContent />
      <ChooseUs />
      <Works />
      <Solutions />
      <Collaboration type={"1"} />
      <Clients className={"section-padding"} />
    </React.Fragment>
  );
};

export default ServiceDetails;
