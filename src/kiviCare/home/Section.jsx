import React from 'react'
import ClinicBanner from '../components/ClinicBanner'
import "./Section.css";
import Specilities from '../components/Specilities';
import About from '../components/About';
import Services from '../components/Services';
import Testimonal from '../components/Testimonal';
import ContactUs from '../components/ContactUs';
import Blog from '../components/Blog';
function Section() {
  return (
    <div>
        <ClinicBanner/>
        <Specilities/>
        <About/>
        <Services/>
        <Testimonal/>
        <ContactUs/>
        <Blog/>
    </div>
  )
}

export default Section