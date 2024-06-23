import useGetData from "../../hooks/useGetData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial2 = () => {
  const slider = useGetData([], "./data/testimonials.json");
  return (
    <div className="testimonial-section testimonial-two green-bg section-padding pb-30">
      <div className="row">
        <div className="offset-xl-2 col-xl-8 text-center">
          <div className="section-title">
            <p>Testimonials</p>
            <h2 className="text-white">
              A Satisfied Customer Is The Best Business Strategy Of All
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        {slider?.length && (
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            speed={2500}
            spaceBetween={30}
            breakpoints={{
              1100: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            className="testimonial-carousel"
          >
            {slider?.length &&
              slider?.map((slide) => (
                <SwiperSlide key={slide?.id} className="single-testimonal-item">
                  <div className="testimonial-img">
                    <img src={slide?.img} alt="" />
                  </div>
                  <div className="testimonial-content">
                    <div className="quote-sign">
                      <i className="las la-quote-left"></i>
                    </div>
                    <p className="text-black">{slide?.comment}</p>
                    <h5 className="testimonial-title">
                      {slide?.name}
                      <span>{slide?.rank}</span>
                    </h5>
                    <div className="testimonal-review-wrap">
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                      <i className="las la-star"></i>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Testimonial2;
