import React from 'react';
import './testimonials.css';
import Pic from '../../assets/wallpaperflare.com_wallpaper (1).jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
  {
    avatar: Pic,
    name: 'God',
    review:' Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher'
  },
  {
    avatar: Pic,
    name: 'God',
    review:' Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher'
  },
  {
    avatar: Pic,
    name: 'God',
    review:' Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher'
  },
  {
    avatar: Pic,
    name: 'God',
    review:' Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher Review form the teacher'
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from Teacher and friends</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide className='testimonial'>
                <div className="teacher__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className='teacher__review'>
                 {review}
                </small>
              </SwiperSlide>
            )
          })
        }   
      </Swiper>
    </section>
  ) 
}

export default Testimonials