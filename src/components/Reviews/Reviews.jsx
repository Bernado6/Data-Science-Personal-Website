import React from 'react';
import './reviews.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Zoom from "react-reveal/Zoom";

const data = [
  {
    name: 'Asha Ali',
    review: 'Good morning Ben the classes and the  assignment was 👌🏾plus the pdf on factors affecting systolic blood pressure was eye opening. I feel like my STATA skills are well polished. Thank you!'

  },
  {
    name: 'Austine Tanyases',
    review: 'OK I have seen it. Thanks for assisting me in the STATA Program where I faced challenges. Your classes were good. Be blessed. 💯💯'

  }
]

const Reviews = () => {
  return (
    <section id = "reviews">
      <h5>Client Reviews</h5>
      <h2>Reviews</h2>
      <Zoom duration = {900} delay={100}>
      <Swiper className="container testimonials_container" 
      // install Swiper modules
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      spaceBetween={40}
      slidesPerView={1}
      navigation={{clickable:true}}
      pagination={{ clickable:true }}
      mousewheel={true}
      keyboard={true}>
      
        {
          data.map(({image, name, review}, index) => {
            return(
              <SwiperSlide key = {index} className="testimonial">
              {/* <div className="client_avatar">
                <img src="" alt="" />
              </div> */}
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
             </SwiperSlide>
            )
          }) 
        }
      </Swiper>
      </Zoom>
    </section>
  )
}

export default Reviews;