import React from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Portfolio from './components/Portfolio'
import Products from './components/Products'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Testomonials from './components/Testomonials'


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testomonials />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}
