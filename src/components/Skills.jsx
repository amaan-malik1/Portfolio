import React from 'react'
import './skills.css'
import meter1 from './assets/meter1.png'
import meter2 from './assets/meter2.png'
import meter3 from './assets/meter3.png'
import colorSharpe from './assets/colorSharpe.png'


const Skills = () => {
  return (
    <div>
      <section className="skills">
        <div className='skills-bx'>
          <h2>
            Skills
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt ullam, praesentium commodi ea a saepe ducimus voluptatum sed placeat?</p>

          <div className='skills-container'>
            <div className="item">
              <img src={meter1} alt="" />
              <h4>Web development </h4>
            </div>
            <div className="item">
              <img src={meter2} alt="" />
              <h4>Front-End </h4>
            </div>
            <div className="item">
              <img src={meter3} alt="" />
              <h4>Logo design </h4>
            </div>
            <div className="item">
              <img src={meter1} alt="" />
              <h4>Web.3</h4>
            </div>
          </div>
        </div>
        <img src={colorSharpe} alt="colorSharpe" className='background-img-left' />
      </section>
    </div>
  )
}

export default Skills