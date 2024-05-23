import React from 'react';
import { Divider } from 'antd';

function Information() {
    return (
        <div className='information_container'>
            <div className='information_left'>
                <Divider orientation="right">FIND USEFUL INFORMATION</Divider>
                <h1>Prenatal Care & Tests</h1>
                <p>Find information on choosing an obstetrician and gynecologist, prenatal checkups, prenatal tests, including Rh status testing, and more.</p>
                <div className='information_left_img'>
                    <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/emergency.png" alt="" />
                    <div>
                        <h3> Emergency Contraception</h3>
                        <small>
                            The morning-after pill is a very safe and effective emergency contraceptive that can be taken after unprotected sex.
                        </small>
                    </div>
                </div>
                <div className='information_left_img info_middle_bg'>
                    <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/birth-control-1.png" alt="" />
                    <div>
                        <h3>Birth Control Pills & Condoms</h3>
                        <small>
                            The Pill is 91% effective. It doesn’t protect you from STDs. Use a condom with your pill to help stop pregnancy and STDs.
                        </small>
                    </div>
                </div>
                <div className='information_left_img '>
                    <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/iud.png" alt="" />
                    <div>
                        <h3> IUD & Implant</h3>
                        <small>
                            The implant is 99% effective. It doesn’t protect you from STDs. Use a condom with your implant to help stop pregnancy.
                        </small>
                    </div>
                </div>
            </div>
            <div className='information_right'>
                <img src="https://angela.ancorathemes.com/wp-content/uploads/2017/09/img_home.jpg" alt="" />
            </div>
        </div>
    )
}

export default Information