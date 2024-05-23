import React, { useState } from 'react'
import Section from './home/Section'
import './App.css';
import Footer from './home/Footer';
import Header from './home/Header';

function App() {
  const [currentTab, setCurrentTab] = useState("home")
  return (
    <>
      <Header setCurrentTab={setCurrentTab} />
      {currentTab === "home" && <Section />}
      {currentTab === "home" && <Footer />}
    </>
  )
}

export default App