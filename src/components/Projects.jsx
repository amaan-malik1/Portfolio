import React from 'react';
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import './project.css'
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='projects'>

      <h2 className='project-h2'>Project</h2>
      <p className='project-p'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, magni ex? Ipsam saepe vel ratione? Deserunt eum aspernatur quos dolorem! ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae qui deleniti esse laborum tempora ad atque ea facere quod!</p>
{/*       <div className="projects-container">

        <div className="project-item">
          <img src={project1} alt="" />
          <h3>My Protfolio</h3>
          <button className="btn-project">Check It</button>
        </div>

        <div className="project-item">
          <img src={project2} alt="" />
          <h3>DEX Front-End</h3>
          <button className="btn-project">Check It</button>
        </div>

        <div className="project-item">
          <img src={project3} alt="" />
          <h3>CLone</h3>
          <button className="btn-project">Check It</button>
        </div>
      </div> */}
      <div className="project-links" >
        <span>Projects</span>

        <a href="https://virtualr-navy.vercel.app/" target="_blank" rel="noopener noreferrer">VR- front-End
        </a>
        <a href="https://pass-op-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
          Password Manager
        </a>
        <a href="https://coffee-app-ochre.vercel.app/" target="_blank" rel="noopener noreferrer">
         Coffee App
        </a>
      </div>
    </div>
  )
}


export default Projects;
