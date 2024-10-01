'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
// Icons
import { CiCircleChevRight } from "react-icons/ci";

import { remoteTranslate3D } from './util';


import 'swiper/css';
import 'swiper/css/effect-cards';
export default function Home() {
  const [flgDirt, setFlgDirt] = useState("horizontal");
  const [spaceBetween, setSpaceBetween] = useState(-485);

  useEffect(() => {
    setTimeout(() => {
      remoteTranslate3D();
      window.addEventListener('resize', handleResize);

      if (window.innerWidth <= 900) {
        setFlgDirt("vertical");
      } else {
        setFlgDirt("horizontal");
      }
    }, [100])
  }, []);

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
      <div className='relative overflow-x-hidden lg:overflow-y-hidden m-auto'>
        <Swiper
          className={'h-[320px]'}
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          onSwiper={(_) => {
            remoteTranslate3D();
          }
          }
          onSlideChange={() => {
            remoteTranslate3D();
          }}
          spaceBetween={spaceBetween}
          slidesPerView={3}
          cardsEffect={{
            rotate: false,
            perSlideOffset: 15,
          }}
          allowSlidePrev={false}
          loop={true}
          direction={flgDirt}
        >
          <SwiperSlide className='slider-1 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-2 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-3 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-4 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-5 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <SwiperSlide className='slider-6 flex justify-center items-center'><div className='h-full'></div></SwiperSlide>
          <button className='dir-btn absolute swiper-next z-[100] top-[47%] right-[10px]'><CiCircleChevRight className='fill-white text-[30px] font-bold' /></button>
        </Swiper>
      </div>
    </div>
  );
}
