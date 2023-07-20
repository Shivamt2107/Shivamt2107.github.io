import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';


import { testimonialsData } from '../../data/testimonialsData';

import './Testimonials.css';

function Testimonials() {
   
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 900,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            {testimonialsData.length > 0 && (
                <div
                    className='testimonials'
                    
                >
                    <div className='testimonials--header'>
                        <h1 >Testimonials</h1>
                    </div>
                    <div className='testimonials--body'>
                        <FaQuoteLeft
                            className='quote'
                        />
                        <div
                            className='testimonials--slider'
                      
                        >
                            <Slider {...settings} style={{dots:"color:red"}} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div
                                        className='single--testimony'
                                        key={test.id}
                                    >
                                        <div className='testimonials--container'>
                                            <div
                                                className='review--img'
                                                
                                            >
                                                <img
                                                    src={test.image}
                                                    alt={test.name}
                                                />
                                            </div>
                                            <div
                                                className='review--content'
                                               
                                            >
                                                <p>{test.text}</p>
                                                <h1>{test.name}</h1>
                                                <h4>{test.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                           
                            >
                                <FaArrowLeft
                                
                                    aria-label='Previous testimonial'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                           
                            >
                                <FaArrowRight
                              
                                    aria-label='Next testimonial'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;