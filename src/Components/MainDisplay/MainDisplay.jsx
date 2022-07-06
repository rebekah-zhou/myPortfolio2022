import React, { useEffect, useState } from 'react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import './MainDisplay.css'
import BottomBar from '../BottomBar/BottomBar'
import { scroller } from 'react-scroll'

function MainDisplay({ pageToDisplay }) {
  const pageToDisplayObj = {
    'Home': <Home />,
    'About': <About />,
    'Projects': <Projects />,
    'Resume': <Resume />
  }

  useEffect(() => {
    console.log(pageToDisplay)
    scroller.scrollTo(pageToDisplay, {
      smooth: true,
      containerId: 'main-display'
    })
  }, [pageToDisplay])
  

  return (
    // <div>{pageToDisplayObj[pageToDisplay]}</div>
        <div id='main-display' className='slider-container'>
          <Home />
          <About />
          <Projects />
          <Resume />
        </div>
    )
}

export default MainDisplay