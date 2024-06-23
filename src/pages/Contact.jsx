import React from "react";
import { Collaboration, ContactForm, InContactBread, Map } from "../components";

const Contact = () => {
  return (
    <React.Fragment>
      <InContactBread />
      <ContactForm />
      <Map />
      <Collaboration />
    </React.Fragment>
  );
};

export default Contact;
