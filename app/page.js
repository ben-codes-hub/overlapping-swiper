'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
// Icons
import { CiCircleChevRight } from "react-icons/ci";


import 'swiper/css';
import 'swiper/css/effect-cards';
export default function Home() {
  const [flgDirt, setFlgDirt] = useState("horizontal");

  const remoteTranslate3D = () => {
    for (let i = 0; i < 6; i++) {
      let j = document.getElementsByClassName("swiper-slide")[i].style.transform;
      document.getElementsByClassName("swiper-slide")[i].style.transform = j.replace(/translate3d\(([^,]+), ([^,]+), [^)]+\)/, 'translate3d($1, $2, 0px)');
    }
  }

  useEffect(() => {
    setTimeout(() => {
      remoteTranslate3D();
      window.addEventListener('resize', handleResize);
    }, [100])
  }, [])

  const handleResize = () => {
    if (window) {
      const newWidth = window.innerWidth;
      newWidth <= 900 ? setFlgDirt("vertical") : setFlgDirt("horizontal");
        setTimeout(() => {
          remoteTranslate3D();
        }, [100])
    }
  };


  return (
    <div className='mt-[100px]'>
      <div className='relative w-min m-auto'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          onSwiper={(swiper) => {
            console.log("1");
            remoteTranslate3D();
          }
          }
          onSlideChange={() => {
            remoteTranslate3D();
          }}
          spaceBetween={-485}
          slidesPerView={3}
          cardsEffect={{
            rotate: false,
            perSlideOffset: 15,
          }}
          allowSlidePrev={false}
          loop={true}
          className='h-[320px]'
          direction={flgDirt}
        >
          <SwiperSlide className='slider-1 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-2 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-3 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-4 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-5 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-6 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
        </Swiper>
        <button className='dir-btn absolute swiper-next z-[100] top-[47%] right-[10px]'><CiCircleChevRight className='fill-white text-[30px] font-bold' /></button>
      </div>

    </div>
  );
}
