import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import data from './SliderData.json';
import './Slider.css';
import 'swiper/css';
import { sliderSettings } from './SliderSettings';

const Slider = () => {
  return (
    <section className="s-wrapper">
        <div className="s-container">
            <span className='s-heading'>Testimonials</span>
        </div>
        <Swiper {...sliderSettings}>
            <SliderButtons/>
            {
            data.map((card, i) => (
                <SwiperSlide key={i}>
                    <div className="s-card">
                        <span className="review">{card.review}</span>
                        <span className="by">{card.by}</span>
                    </div>
                </SwiperSlide>
            ))
        }
            
        </Swiper>
    </section>
  )
}

export default Slider;


const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="s-buttons">
            <i className="fa-solid fa-arrow-left fa-2x" onClick={() => swiper.slidePrev()}/>
        
            <i className='fa-solid fa-arrow-right fa-2x' onClick={() => swiper.slideNext()}></i>

        </div>
    )
}

