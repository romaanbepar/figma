import React from 'react'
import "./user.css"
import number from "../../assets/images/number.png"
import video from "../../assets/images/video.png"
const User = () => {
  return (
  <section className="user">
    <div className="container">
      <div className="userText">
        <h3>Work smarter
with easy access for user..</h3>
<button className="commonBtn">Get Started Now</button>
      </div>
      <div className="userDetails">
        <div className="list">
        <div className="userList">
          <div className="imgWrapper">
            <img src={number} alt="number" />
          </div>
          <div className="listText">
          <h5>Create Account</h5>
          <p>After learning about your customer service needs, we will get you up </p>
          </div>
          
        </div>

        <div className="userList">
          <div className="imgWrapper">
          <img src={number} alt="number" />
          </div>
          <div className="listText">
          <h5>Create Account</h5>
          <p>After learning about your customer service needs, we will get you up </p>
          </div></div>

        <div className="userList">
          <div className="imgWrapper">
          <img src={number} alt="number" />
          </div>
          <div className="listText">
          <h5>Create Account</h5>
          <p>After learning about your customer service needs, we will get you up </p>
          </div> </div>
        </div>
        
        <div className="userImage">
          <div className="imgWrapper">
            <img src={video} alt="video" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default User