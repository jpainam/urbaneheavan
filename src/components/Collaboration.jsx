import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const Collaboration = ({ type }) => {
  const instas = useGetData([], "./data/insta.json");

  return (
    <div className="collaboration-section section-padding white-bg">
      <div className="container">
        <div className="row">
          <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 text-center">
            <div className="section-title">
              <p>Let&apos;s Collaboration</p>
              <h2>
                Excellent! We love talking with people to see how we can help
                you reach your goals!
              </h2>
            </div>
            <Link to="/contact" className="main-btn">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="instragram-wrapper mt-60">
            {instas?.length && (
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                speed={1000}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  530: {
                    slidesPerView: 3,
                  },
                  930: {
                    slidesPerView: 4,
                  },
                  1100: {
                    slidesPerView: 5,
                  },
                }}
                className="instragram-inner"
              >
                {instas?.map((insta) => (
                  <SwiperSlide key={insta?.id} className="instagram-item">
                    <a
                      href={insta?.link}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer"
                    >
                      <img src={insta?.img} alt={insta?.id} />
                    </a>
                  </SwiperSlide>
                ))}
                {instas?.map((insta) => (
                  <SwiperSlide key={insta?.id} className="instagram-item">
                    <a
                      href={insta?.link}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer"
                    >
                      <img src={insta?.img} alt={insta?.id} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
      {type ? (
        <div className="instagram-shape">
          <img src="/assets/img/instagram_shape.png" alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Collaboration;
