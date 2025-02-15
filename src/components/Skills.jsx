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
          <p>A passionate Full-Stack Web Developerspecializing in the MERN stack. I love building scalable applications and continuously enhancing my skills.

📖 Currently working on a Urdu-to-English dictionary website with database automation.

🚀 Future goals: Creating **AI-driven products and cryptocurrency-based projects**.</p>

          <div className='skills-container'>
            <div className="item">
              <img src={meter1} alt="" />
              <h4>Front-End</h4>
            </div>
            <div className="item">
              <img src={meter2} alt="" />
              <h4>Backend</h4>
            </div>
            <div className="item">
              <img src={meter3} alt="" />
              <h4>Responsive</h4>
            </div>
            <div className="item">
              <img src={meter2} alt="" />
              <h4>Learning Web.3</h4>
            </div>
          </div>
        </div>
        <img src={colorSharpe} alt="colorSharpe" className='background-img-left' />
      </section>
    </div>
  )
}

export default Skills
