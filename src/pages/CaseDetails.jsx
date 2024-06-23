import React from "react";
import { Works, Collaboration, InCDetails, Details } from "../components";

const CaseDetails = () => {
  return (
    <React.Fragment>
      <InCDetails />
      <Details />
      <Works />
      <Collaboration />
    </React.Fragment>
  );
};

export default CaseDetails;
