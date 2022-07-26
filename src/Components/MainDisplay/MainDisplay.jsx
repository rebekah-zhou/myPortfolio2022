import React, { useEffect } from 'react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import './MainDisplay.css'
import { scroller } from 'react-scroll'

function MainDisplay({ pageToDisplay }) {
  useEffect(() => {
    scroller.scrollTo(pageToDisplay, {
      smooth: 'easeInOutSine', // Choose from https://easings.net/
      spy: true,
      containerId: 'main-display'
    })
  }, [pageToDisplay])
  

  return (
    <div id='main-display' className="slider-container">
        <Home />
        <About />
        <Projects />
        <Resume />
    </div>
  )
}

export default MainDisplay