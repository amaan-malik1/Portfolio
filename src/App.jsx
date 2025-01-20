import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer';



const router = createBrowserRouter([
  {
    path: '/',    //path for home
    element:
      <div>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Footer/>
      </div>
    // here we write the component that we wants  to show         
  },
  {
    path: '/skills',    //path for skills
    element:
      <div>
        <Navbar />
        <Skills />
        <Footer/>
      </div>
    // here we write the component that we wants  to show         
  },
  {
    path: '/projects',    //path for projects
    element:
      <div>
        <Navbar />
        <Projects />
        <Footer/>
      </div>
    // here we write the component that we wants  to show         
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
