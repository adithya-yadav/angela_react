import React from 'react'
import CarouselComp from '../components/CarouselComp'
import ContactInfo from '../components/ContactInfo'
import SecondSection from '../components/SecondSection'
import "./Section.css"
import Services from '../components/Services'
import ShowServices from '../components/ServicesShow'
import Abortion from '../components/Abortion'
import AbOffer from '../components/AbOffer'
import About from '../components/About';
import "../components/Services.css";
import Contact from '../components/Contact'
import AboutCarosuel from '../components/AboutCarosuel'
import AboutRight from '../components/AboutRight'
import Question from '../components/Question'
import Unexected from '../components/Unexected'
import HelpLine from '../components/HelpLine'
import Information from '../components/Information'
import Article from '../components/Article'

function Section() {
    return (
        <div>
            <CarouselComp />
            <div className='contact_info'>
                <ContactInfo />
            </div>
            <SecondSection />
            <Services />
            <ShowServices />
            <Abortion />
            <div className='ab_offer_container'>
                <AbOffer />
            </div>
            <About />
            <div className='about_bottom'>
                <AboutCarosuel />
                <div className='about_car_right'>
                    <AboutRight />
                </div>
            </div>
            <Question/>
            <Unexected/>
            <HelpLine/>
            <Information/>
            <Article/>
            <Contact />
        </div>
    )
}

export default Section