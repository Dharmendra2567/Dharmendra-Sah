import React from 'react'
import Navbar from '../components/layout/Navbar'
import ContactSection from '../components/ContactSection'
import { Footer } from '../components/Footer'

export const Contact = () => {
  return (
    <>
      <div className='container-fluid' style={{overflowX:'hidden'}}>
        <Navbar/>
      <div className='' style={{marginTop:'60px'}}>
      <ContactSection/>
      </div>
       <Footer/>
      </div>
    </>
  )
}
