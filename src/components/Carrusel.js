import React, { useRef, useState } from 'react';
import Img from './Imgdata';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../styles/carrusel.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const Carrusel=()=> {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className='container '>
    <div class="container">
    <div class="d-flex justify-content-center">
    <p class="h4 mt-2 mb-4">Rick and Morty</p>
    </div>
    </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={Img[0].img} alt='rick' /></SwiperSlide>
        <SwiperSlide><img src={Img[1].img} alt='rick' /></SwiperSlide>
        <SwiperSlide><img src={Img[2].img} alt='rick' /></SwiperSlide>
        <SwiperSlide><img src={Img[3].img} alt='rick' /></SwiperSlide>
        <SwiperSlide><img src={Img[4].img} alt='rick' /></SwiperSlide>
        <SwiperSlide><img src={Img[5].img} alt='rick' /></SwiperSlide>
        <SwiperSlide><img src={Img[6].img} alt='rick' /></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    
    </>
  );
}

export default Carrusel