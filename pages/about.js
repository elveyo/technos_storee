import React from 'react'
import AboutTechnos from '../components/AboutTechnos'
import Employees from '../components/Employees'
import Contact from '../components/Contact'

const About = () => {
  return (
    <div className="about">
      <AboutTechnos />
      <Employees />
      <Contact />
    </div>
  )
}

export default About