import React from "react";
import {
  Collaboration,
  Faq,
  InFaqBread,
  Solutions,
  Works,
} from "../components";

const FAQ = () => {
  return (
    <React.Fragment>
      <InFaqBread />
      <Faq className={"white-bg"} />
      <Works />
      <Solutions />
      <Collaboration />
    </React.Fragment>
  );
};

export default FAQ;
