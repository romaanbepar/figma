import React from 'react'
import "./banner.css"
import  emailLogo from"../../assets/images/emailLogo.svg"
import dashboard from "../../assets/images/dashboard.png"
const Banner = () => {
  return (
    <>
  <section className="banner">
    <div className="container">
      <div className="bannerText">
        <h1>The fastest way for startups to do any analysis</h1>
        <p>Equals is the only spreadsheet with built-in connections to any database, versioning, and collaboration.</p>
      </div>
      <div className="bannerInput">
        <img src={emailLogo} alt="emailImage" />
        <input type="text" placeholder='Enter your email' />
        <button className='commonBtn'>Start for free</button>
      </div>
      <div className="imgWrapper">
        <img src={dashboard} alt="dadhboard" />
      </div>
    </div>
  </section>
   
    
    
    </>
  )
}

export default Banner