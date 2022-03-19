import React, { useRef, useState } from "react";
import Titles from '../Titles'
import Des1 from "./../../images/des1.webp"
import Des2 from "./../../images/des2.webp"
import Star from "./../../images/Star.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import required modules
import { Pagination, Navigation } from "swiper";
import Carousell from "../Carousell";





const Section6 = () => {
    return (
        <div className="section6  container  mt-5 pt-4">
           <div className=" mb-5 pb-3">
           <Titles title1="Testimonial" title2="Says our customers" />
           </div>


            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 12,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 14,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div className=" row text-white text-center">
                    <div className="col-md-6  text-white">
                        <SwiperSlide className="text-white">
                            <Carousell Star={Star} image={Des1} />
                        </SwiperSlide>
                    </div>
                    <div className="col-md-6 text-white">
                        <SwiperSlide className="text-white">
                            <Carousell Star={Star} image={Des2} />
                        </SwiperSlide>
                    </div>

                </div>
            </Swiper>

        </div>
    )
}

export default Section6