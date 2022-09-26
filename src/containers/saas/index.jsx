import React from 'react'
import "./saas.css"
import saasImage from "../../assets/images/user.png"
const Saas = () => {
  return (
    <section className="saas">
      <div className="container">
        <div className="saasContent">
        <div className="saasDetails">
          <h3>Powerful and easy to use SaaS platform</h3>
          <p>Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.</p>
          <button className="commonBtn">Get Started</button>
        </div>
        <div className="saasImg">
          <div className="imgWrapper">
            <img src={saasImage} alt="saasInage" />
          </div>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Saas