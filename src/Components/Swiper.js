import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Images from "../Assets/img/frame1.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../style/swiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='swiper-list'>
      <div className='swiper-container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        fadeEffect={true}
        // pagination={true}
        loop = {true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Images} className='img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
