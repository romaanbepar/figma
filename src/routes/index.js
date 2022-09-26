import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header/header'
import Banner from '../containers/banner'
import Brands from '../containers/brands'
import Pricing from '../containers/pricing'
import Saas from '../containers/saas'
import Services from '../containers/services'
import Testomonials from '../containers/testomonials'
import User from '../containers/user'

const AppRoutes = () => {
  return (
   <>
   <Header/>
   <Banner/>
   <Brands/>
   <Services/>
   <Saas/>
   <User/>
   <Testomonials/>
   <Pricing/>
   <Footer/>
   
   
   </>
  )
}

export default AppRoutes