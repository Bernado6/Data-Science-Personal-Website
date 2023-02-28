import React from 'react';
import './testimonials.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    name: 'James Lee',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam.'

  },
  {
    name: 'James Lee',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam.'

  },
  {
    name: 'James Lee',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam.'

  },
  {
    name: 'James Lee',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam.'

  }
]

const Testimonials = () => {
  return (
    <section id = "testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

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
    </section>
  )
}

export default Testimonials