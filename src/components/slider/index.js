import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';

import Swiper from "swiper";
import "swiper/css/swiper.css";


function Slider (props) {

    const [ sliderSwiper, setSliderSwiper ] = useState(null); // 定义state变量 和 set方法

    const { bannerList } = props; // 数据源

    // useEffect 相当于生命周期
    useEffect(() => {
        if(bannerList.length && !sliderSwiper) {

            // swiper 也是通过特定的className来实现功能的， slider-container、swiper-wrapper、swiper-slide、swiper-pagination都是关键字
            let sliderSwiper = new Swiper('.slider-container',{
                loop: true, // 循环
                autoplay: true, // 自动播放
                autoplayDisableOnInteraction: false,
                pagination: {el:'.swiper-pagination'},
            });

            setSliderSwiper(sliderSwiper); // 不然 autoplay 不生效
        }
    },[bannerList.length, sliderSwiper]);


  return (
    <SliderContainer>
    <div className="before"></div>
    <div className="slider-container">
        <div className="swiper-wrapper">
            {
                bannerList.map((slider) => {
                    return (
                        <div className="swiper-slide" >
                            <div className="slider-nav">
                                <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                            </div>
                        </div>
                    );
                })
            }
        </div>
        <div className="swiper-pagination"></div>
    </div> 
    </SliderContainer>
  );

}

export default React.memo (Slider);




