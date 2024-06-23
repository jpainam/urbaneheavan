import { useState } from "react";
import Slider from "react-slick";
//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useGetData from "../../hooks/useGetData";
const TestimonialSection = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const sliders = useGetData([], "./data/testimonials.json");
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="testimonial-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="section-title">
              <h6>Our Testimonials</h6>
              <h2>A Satisfied Customer Is The Best Business Strategy Of All</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="testimonial-wrapper-one">
              {sliders?.length > 0 && (
                <>
                  <Slider
                    {...settings}
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                    className="testimonial-author-wrap"
                  >
                    {sliders?.length > 0 &&
                      sliders?.map((slide) => (
                        <div
                          key={slide?.id}
                          className="single-testimonial-author d-flex align-items-center"
                        >
                          <div className="testimonial-thumb">
                            <img src={slide?.thumb} alt="client-5" />
                          </div>
                          <div className="testimonial-content">
                            <h6>{slide?.name}</h6>
                            <p>{slide?.rank}</p>
                          </div>
                        </div>
                      ))}
                  </Slider>
                  <Slider
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    dots={true}
                    fade={true}
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    responsive={[
                      {
                        breakpoint: 1200,
                        settings: {
                          dots: false,
                        },
                      },
                    ]}
                    className="testimonial-slider-wrap"
                  >
                    {sliders?.length > 0 &&
                      sliders?.map((slide) => (
                        <div
                          key={slide?.id}
                          className="testimonial-slide-inner"
                        >
                          <div className="testimonal-thumb">
                            <img src={slide?.img} alt={slide?.name} />
                          </div>
                          <div className="testimonal-slider-content">
                            <h6>{slide?.name}</h6>
                            <p className="designation">{slide?.rank}</p>
                            <p>{slide?.comment}</p>
                            <div className="testimonal-review-wrap">
                              <i className="las la-star"></i>
                              <i className="las la-star"></i>
                              <i className="las la-star"></i>
                              <i className="las la-star"></i>
                              <i className="las la-star"></i>
                              <span>{slide?.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </Slider>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
