import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
//component
import Modal from "./Modal";

import useGetData from "../../hooks/useGetData";

const HeroArea = () => {
  const [showModal, setShowModal] = useState(false);
  const [getSrc, setGetSrc] = useState("");
  const sliders = useGetData([], "./data/homeSlider.json");
  const [scrolled] = useOutletContext();

  useEffect(() => {
    if (sliders?.length) {
      const dataBackground = document.querySelectorAll("[data-background]");
      dataBackground.forEach((dbg) => {
        dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
      });
    }
  }, [sliders]);
  return (
    <div className={`hero-area light-bg-2 ${scrolled ? "pt-90" : ""}`}>
      <div className="container">
        <div
          className={`hero-area-content wow fadeInUp animated`}
          data-wow-delay="200ms"
        >
          <h3>Buy Your Dream Home.</h3>
          <h1>
            Urbane Haven <br />
            Realty
          </h1>
          <p>
            We are a wholesale buyer and seller of homes. Sell Your House, Buy a
            Home or Rent-to-Own. ​No one has more ways to get people into a home
            of their own. <Link to="/about">Discover More</Link>
          </p>
        </div>
        {sliders?.length > 0 && (
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            speed={1500}
            className="homepage-slides"
            id="homepage-slides"
          >
            {sliders?.length > 0 &&
              sliders?.map((slide) => (
                <SwiperSlide key={slide?.id} className="single-slide-item">
                  <div
                    className="slider-bg bg-cover"
                    data-background={slide?.img}
                  >
                    {/* <div className="overlay"></div> */}
                  </div>

                  {/* <div className="play-btn">
                    <div
                      className="video-play-btn"
                      onClick={() => {
                        setGetSrc(slide?.embed);
                        setShowModal((p) => !p);
                      }}
                    >
                      Play
                    </div>
                  </div> */}
                </SwiperSlide>
              ))}
          </Swiper>
        )}
        <div
          className="client-area wow fadeInUp animated"
          data-wow-delay="200ms"
        >
          <div className="client-area-inner">
            <div className="client-thumb">
              <img
                className="client-one"
                src="/assets/img/slider/1.jpg"
                alt=""
              />
              <img
                className="client-two"
                src="/assets/img/slider/2.jpg"
                alt=""
              />
              <img
                className="client-three"
                src="/assets/img/slider/3.jpg"
                alt=""
              />
            </div>
            <div className="client-area-title">
              <h6>Trusted Over 240+ Client Accorss Country</h6>
            </div>
          </div>
          <div className="help-btn">How can we help you?</div>
        </div>
        {showModal ? <Modal setShowModal={setShowModal} src={getSrc} /> : null}
      </div>
    </div>
  );
};

export default HeroArea;
