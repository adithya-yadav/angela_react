import React, { useState } from 'react';
import { Carousel, Radio } from 'antd';
import "./Services.css"

const AbOffer = () => {

    return (
        <>
            <Carousel dotPosition="right">
                <div className='ab_offer'>
                    <img src='https://angela.ancorathemes.com/wp-content/uploads/2017/09/abortion.png' />
                    <div className='ab_container'>
                        <div className='ab_offer_head'>
                            <h1>19%</h1>
                            <div>
                                <h3> Of Men Should Consider </h3>
                                <h3> Biological Clock</h3>
                            </div>
                        </div>
                        <p>More than half of all U.S. abortion patients in 2014 were in their 20s: Patients aged 20–24 obtained 34% of all abortions, and patients aged 25–29 obtained 27%.</p>
                    </div>
                </div>

                <div className='ab_offer'>
                    <img src='https://angela.ancorathemes.com/wp-content/uploads/2017/09/abortion.png' />
                    <div className='ab_container'>
                        <div className='ab_offer_head'>
                            <h1>19%</h1>
                            <div>
                                <h3> Of Men Should Consider </h3>
                                <h3> Biological Clock</h3>
                            </div>
                        </div>
                        <p>More than half of all U.S. abortion patients in 2014 were in their 20s: Patients aged 20–24 obtained 34% of all abortions, and patients aged 25–29 obtained 27%.</p>
                    </div>
                </div>

                <div className='ab_offer'>
                    <img src='https://angela.ancorathemes.com/wp-content/uploads/2017/09/abortion.png' />
                    <div className='ab_container'>
                        <div className='ab_offer_head'>
                            <h1>19%</h1>
                            <div>
                                <h3> Of Men Should Consider </h3>
                                <h3> Biological Clock</h3>
                            </div>
                        </div>
                        <p>More than half of all U.S. abortion patients in 2014 were in their 20s: Patients aged 20–24 obtained 34% of all abortions, and patients aged 25–29 obtained 27%.</p>
                    </div>
                </div>

            </Carousel>
        </>
    );
};
export default AbOffer;