import React from 'react'
import "./services.css"
import Data from "./data"
const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h3>Our services made for you?</h3>
        <div className="servicesCard">
          

          {
            Data.map((data)=>{
              return <div className="card">
                <div className="imgWrapper">
                  <img src={data.image} alt="cardImage" />
                </div>
                <span>{data.title}</span>
                <p>{data.body}</p>
                <a href="/">Read More<img src={data.btn} alt="arrow"/></a>
              </div>
            })
          }
      

        </div>
      </div>
    </section>
  )
}

export default Services