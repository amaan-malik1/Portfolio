import React from 'react';
import { FiArrowRightCircle } from "react-icons/fi";
import './home.css';
import arrow from './assets/arrow.svg';
import headerImg from './assets/headerImg.png';


const Home = () => {

  return (
    <div className='home-container'>

      {/* left part  */}
      <div className="home-container-left">
        <span className='home-welcome-btn'>Welcome to my profile</span>
        <h2>Hi.... I'm Amaan Malik</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio nostrum optio nihil modi suscipit omnis amet corrupti officiis architecto. Inventore in tempore repellendus voluptatibus, corrupti harum ducimus facilis vel minus. Modi ea!</p>

        <div className='let-connect-div'>
          <button>Let's Connect<FiArrowRightCircle /></button>
        </div>
      </div>

      {/* right part of container */}
      <div className="home-container-right">
        <img src={headerImg} alt="Header-Img" />
      </div>

    </div>
  )
}

export default Home