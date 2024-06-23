import React, { useEffect, useState } from "react";
import Modal from "../heroArea/Modal";
import { Link } from "react-router-dom";
const CTA2 = () => {
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
        className="cta-area cta-three bg-cover"
        data-background="/assets/img/cta_bg.png"
      >
        <div className="overlay"></div>
        <div className="cta-area-inner pt-100">
          <div className="container">
            <div className="offset-xl-2 col-xl-6 offset-lg-1 col-lg-6 col-md-8">
              <div className="section-title">
                <p>GET STARTED</p>
                <h2 className="text-white">
                  Changing Your Lives, Changing Your Futures
                </h2>
              </div>
              <Link to="/about" className="main-btn mt-20">
                Discover More
              </Link>
            </div>

            <div className="offset-xl-4 col-xl-7 offset-lg-4 col-lg-7 offset-md-4 col-md-7">
              <p className="text-white">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words look even slightly
                believable. If you are going to use a passage{" "}
              </p>
            </div>

            <div className="pop-up-video">
              <div
                onClick={() => {
                  setSrc("https://www.youtube.com/embed/yFwGpiCs3ss");
                  setShowModal((p) => !p);
                }}
                className="video-play-btn"
              >
                <i className="las la-play"></i> <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} src={src} /> : null}
    </React.Fragment>
  );
};

export default CTA2;
