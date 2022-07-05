import React from 'react'

function Sun({ onSunClick }) {
  function handleSunClick() {
    onSunClick('Home')
  }

  return (
    <div id='sun' onClick={handleSunClick}>
        <div id='sun-span-div'><span id='sun-span'>Home</span></div>
    </div>
  )
}

export default Sun