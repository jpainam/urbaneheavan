import React from "react";
import { Collaboration, InPriceBread, PricePlan, Process } from "../components";

const Pricing = () => {
  return (
    <React.Fragment>
      <InPriceBread />
      <Process className={"white-bg"} />
      <PricePlan />
      <Collaboration />
    </React.Fragment>
  );
};

export default Pricing;
