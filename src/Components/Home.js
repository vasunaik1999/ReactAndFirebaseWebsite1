import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header';
import Working from '../Components/Working';
import About from '../Components/About';
import Services from '../Components/Services';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Working></Working>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default Home