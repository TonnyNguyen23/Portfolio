import React from "react";
import "./testimonials.css";

import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Tonny Nguyen",
    review:
      " Have a nice day. I really happy when your product is so good. Have a nice day. I really happy when your product is so good.",
  },
  {
    avatar: AVT2,
    name: "Tonny Nguyen",
    review:
      " Have a nice day. I really happy when your product is so good. Have a nice day. I really happy when your product is so good.",
  },
  {
    avatar: AVT3,
    name: "Tonny Nguyen",
    review:
      " Have a nice day. I really happy when your product is so good. Have a nice day. I really happy when your product is so good.",
  },
  {
    avatar: AVT4,
    name: "Tonny Nguyen",
    review:
      " Have a nice day. I really happy when your product is so good. Have a nice day. I really happy when your product is so good.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
