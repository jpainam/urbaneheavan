import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Modal from "./Modal";
import "./check.css";

const HeroArea2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [getSrc, setGetSrc] = useState("");
  const [scrolled] = useOutletContext();
  const sliders = useGetData([], "./data/homeSlider.json");

  useEffect(() => {
    if (sliders?.length) {
      const dataBackground = document.querySelectorAll("[data-background]");
      dataBackground.forEach((dbg) => {
        dbg.style.backgroundImage = `url(${dbg.dataset.background})`;
      });
    }
  }, [sliders]);

  return (
    <div className={`hero-area hero-area-two`}>
      {scrolled ? <div className="check"></div> : null}
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
                  <div className="overlay-2"></div>
                  <div className="container">
                    <div className="hero-area-content">
                      <h3>Make Your Taxes Easy</h3>
                      <h1 className="text-white">
                        Reliable & Trusted <br />
                        Advice
                      </h1>
                      <p className="text-white">
                        There are many variations of passages of Lorem
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words{" "}
                      </p>
                      <Link className="main-btn" to="/contact">
                        Make an Appointment
                      </Link>
                    </div>
                    <div className="social-link">
                      <a href="#">.FACEBOOK</a>
                      <a href="#">.BEHANCE</a>
                      <a href="#">.TELEGRAM</a>
                      <a href="#">.DRIBBLE</a>
                    </div>
                  </div>
                </div>
                <div className="pop-up-video">
                  <div
                    onClick={() => {
                      setGetSrc(slide?.embed);
                      setShowModal((p) => !p);
                    }}
                    className="video-play-btn"
                  >
                    <i className="las la-play"></i> <span></span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      <div className="founder-year">
        <h2>Since 1990</h2>
        <Link to="/contact">Contact With Us</Link>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} src={getSrc} /> : null}
    </div>
  );
};

export default HeroArea2;
