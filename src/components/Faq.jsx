import React from "react";
import Acordion from "./Acordion";
const Faq = ({ className }) => {
  return (
    <div
      className={`faq-section section-padding ${className || ""}`}
      id={className !== "dark-bg" ? "faq-page" : ""}
    >
      <div className="container">
        {className !== "dark-bg" ? (
          <div className="row mb-60">
            <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 text-center">
              <div className="section-title">
                <h6>Frequently Asked Questions</h6>
                <h2>How Can We Help You?</h2>
              </div>
            </div>
          </div>
        ) : null}
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-12 wow fadeInUp animated"
            data-wow-delay="200ms"
          >
            <div className="section-title">
              {className === "dark-bg" ? (
                <h6>Helpful Faq</h6>
              ) : (
                <p>Helpful Faq</p>
              )}
              <h2 className={className === "dark-bg" ? "text-white" : ""}>
                We Always Answer Your Doubts
              </h2>
            </div>
            <Acordion />
          </div>
          <div className="col-xl-6 col-lg-6 col-12">
            <div className="faq-section-gallery">
              <div
                className="faq-img-one wow fadeInDown animated"
                data-wow-delay="200ms"
              >
                <img src="/assets/img/faq_1.jpg" alt="" />
              </div>
              <div
                className="faq-img-two wow fadeInRight animated"
                data-wow-delay="300ms"
              >
                <img src="/assets/img/faq_3.jpg" alt="" />
              </div>
              <div
                className="faq-img-three wow fadeInUp animated"
                data-wow-delay="400ms"
              >
                <img src="/assets/img/faq_2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {className === "dark-bg" ? (
        <React.Fragment>
          <div className="faq_shape_top">
            <img src="/assets/img/faq_shape_top.png" alt="" />
          </div>
          <div className="faq_shape_bottom">
            <img src="/assets/img/faq_shape_bottom.png" alt="" />
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default Faq;
