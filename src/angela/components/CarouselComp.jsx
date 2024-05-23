import React from 'react';
import { Carousel } from 'antd';
import "./CarouselComp.css"

const CarouselComp = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange} autoplay>
            <div className='carousel_images'>
                <div className='carousel_content'>
                    <p>Providing Care </p> <p>For Future Family</p>
                    <button className='make_appointment'>Make an Appointment</button>
                </div>
                <img src='https://media.istockphoto.com/id/1440786631/photo/newborn-in-mothers-arms.webp?b=1&s=170667a&w=0&k=20&c=uf-RMQXZSqDw_cxAYv5SsGmz4du22xkTq-oo6onqbjc=' />
            </div>
            <div className='carousel_images'>
                <div className='carousel_content'>
                    <p>Providing Care </p> <p>For Future Family</p>
                    <button className='make_appointment'>Make an Appointment</button>
                </div>
                <img src='https://media.istockphoto.com/id/1438282265/photo/loving-mom-snuggling-sleeping-newborn-baby.webp?b=1&s=170667a&w=0&k=20&c=hLZJHBhdmjHdX9dBQNuBdUO0uCshWS-7_i_aaLG2z5I=' />
            </div>
            <div className='carousel_images'>
                <div className='carousel_content'>
                    <p>Providing Care </p> <p>For Future Family</p>
                    <button className='make_appointment'>Make an Appointment</button>
                </div>
                <img src='https://media.istockphoto.com/id/1439349585/photo/newborn-baby-one-month-old-holding-fingers-mothers-hand.webp?b=1&s=170667a&w=0&k=20&c=L2iEOdNzMxopz1AqJyfyRVpGTXcmrR2UJ2KLIdEDxsE=' />
            </div>
            <div className='carousel_images'>
                <div className='carousel_content'>
                    <p>Providing Care </p> <p>For Future Family</p>
                    <button className='make_appointment'>Make an Appointment</button>
                </div>
                <img src='https://media.istockphoto.com/id/105555086/photo/newborn-smiling-portrait.webp?b=1&s=170667a&w=0&k=20&c=8e9_BUaZ31dp91QYXSAotTChxxi4YK19q1_pmJvcjF0=' />
            </div>
        </Carousel>
    );
};
export default CarouselComp;