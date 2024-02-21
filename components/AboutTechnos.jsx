import React from 'react'
import shop from '../assets/shop.jpeg'
const AboutTechnos = () => {
  return (
    <div className="about-technos">
    <div>
        <h1>Who is TECHNOS?</h1>
        <p>We are small gaming shop located in Mostar. We started our journey in 2017. In our shop people can find  everything they need to 
            play games and enjoy. Our goal is to give quality and newest equipment.
        </p>

    </div>
    <img src={shop.src}></img>
    </div>
  )
}

export default AboutTechnos