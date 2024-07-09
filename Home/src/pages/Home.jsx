import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import PopularProducts from '../components/PopularProducts'
import NewArrivals from '../components/NewArrivals'
import Offer from '../components/Offer'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <PopularProducts />
      <Offer />
      <NewArrivals />
    </>
  )
}

export default Home