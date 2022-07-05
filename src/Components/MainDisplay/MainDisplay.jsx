import React, { useState } from 'react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import './MainDisplay.css'
import BottomBar from '../BottomBar/BottomBar'

function MainDisplay({ pageToDisplay }) {
  const pageToDisplayObj = {
    'Home': <Home />,
    'About': <About />,
    'Projects': <Projects />,
    'Resume': <Resume />
  }


  return (
    // <div>{pageToDisplayObj[pageToDisplay]}</div>
        <div className='slider-container'>
          <Home />
          <About />
          <Projects />
          <Resume />
        </div>
    )
}

export default MainDisplay