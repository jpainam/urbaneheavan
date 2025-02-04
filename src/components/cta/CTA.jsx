import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../heroArea/Modal";

const CTA = () => {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState("");
  useEffect(() => {
    const dataBackground = document.querySelectorAll("[data-background]");
    dataBackground.forEach((dbg) => {
      dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
    });
  }, []);
  return (
    <React.Fragment>
      <div
        className="cta-area bg-cover"
        data-background="/assets/img/cta_bg.jpg"
      >
        <div className="overlay"></div>
        <div className="cta-area-inner pt-150">
          <div className="container">
            <div className="offset-xl-1 col-xl-7 offset-lg-1 col-lg-7 offset-md-1 col-md-7">
              <div className="section-title">
                <h6>ABOUT OUR OFFER</h6>
                <h2 className="text-white">
                  You Choose The Closing Date. We Pay All Costs!
                </h2>
              </div>
            </div>
            <div className="offset-xl-5 col-xl-6">
              <p className="text-white">
                We Buy Houses Anywhere In Upstate and surrounding counties in
                New York, And At Any Price. Check Out How Our Process Works.
                We're Ready To Give You A Fair Offer For Your House.
              </p>
            </div>

            <div className="pop-up-video">
              <div
                onClick={() => {
                  setSrc("https://www.youtube.com/embed/vNiRZWVNK7M");
                  setShowModal((p) => !p);
                }}
                className="video-play-btn"
              >
                <i className="las la-play"></i> <span></span>
              </div>
            </div>
            <div className="explore-btn">
              <Link to="/service-details">
                Explore Our Service<i className="las la-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} src={src} /> : null}
    </React.Fragment>
  );
};

export default CTA;
