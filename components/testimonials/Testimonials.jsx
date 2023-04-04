import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jfif'
import AVTR2 from '../../assets/Kamil profile-modified.png'
import AVTR3 from '../../assets/avatar3.jfif'
import AVTR4 from '../../assets/avatar4.jfif'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper className='container testimonials__container'
    // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
  
    {
      data.map(({avatar, name, review}, index) => {
        return (
          <SwiperSlide key={index} className='testimonial'>
      <div className='client__avatar'>  
         <img src={avatar} /> 
      </div>
      <h5 className='client__name'>{name}</h5>
         <small className='client__review'>
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
