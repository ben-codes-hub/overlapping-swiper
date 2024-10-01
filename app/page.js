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
    }, [200])
  }, []);

  useEffect(() => {
    setFlgDirt(flgDirt)
  }, [flgDirt])

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
    <div className='container'>
      <div className='main-cont'>
        <Swiper
          className={''}
          effect={'cards'}
          modules={[EffectCards, Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          slidesPerGroup={1}
          onSwiper={(_) => {
            remoteTranslate3D();

            if (window.innerHeight < 900) {
              _.slideTo(4)
            }
          }
          }
          allowTouchMove={false}
          slideToClickedSlide={true}
          onSlideChange={() => {
            remoteTranslate3D();
          }}
          onTouchStart={(swiper) => {
            window.innerWidth <= 900 && swiper.slideNext();
          }}
          touchRatio={0.2}
          cardsEffect={{
            rotate: false,
            perSlideOffset: 15,
          }}
          allowSlidePrev={false}
          loop={true}
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={spaceBetween}
          initialSlide={4}
          onBreakpoint={(swiper, breakpointParams) => {
            if (window.innerWidth <= 900) {
              swiper.slideTo(4);
            }
          }}
          breakpoints={{
            1286: {
              slidesPerView: 5,
              direction: "horizontal",
              spaceBetween: -985,
              initialSlide:4
            },
            900: {
              direction: "horizontal",
              slidesPerView: 4,
              spaceBetween: -655,
              initialSlide: 4
            },
          }}
        >
          <SwiperSlide className='slider-1 flex'><div /></SwiperSlide>
          <SwiperSlide className='slider-2 flex'><div /></SwiperSlide>
          <SwiperSlide className='slider-3 flex'><div /></SwiperSlide>
          <SwiperSlide className='slider-4 flex'><div /></SwiperSlide>
          <SwiperSlide className='slider-5 flex'><div /></SwiperSlide>
          <SwiperSlide className='slider-6 flex'><div /></SwiperSlide>
          <button className='dir-btn swiper-next'><CiCircleChevRight /></button>
        </Swiper>
      </div>
    </div>
  );
}
