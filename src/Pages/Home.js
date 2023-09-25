import React from 'react'
import Banner from '../Commonents/Banner'
import StaySafe from '../Commonents/StaySafe'
import Identify from '../Commonents/Identify'
import OurApp from '../Commonents/OurApp'
import AboutUs from '../Commonents/AboutUs'
import Form from '../Commonents/Auth/Form'

const Home = () => {
  return (
      <>
    <Banner/>
    <Identify/>
    <StaySafe/>
    <OurApp/>
    <AboutUs/>
    <Form/>
      </>
  )
}

export default Home
