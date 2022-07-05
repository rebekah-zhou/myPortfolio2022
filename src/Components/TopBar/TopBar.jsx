import React from 'react'
import './TopBar.css'
import { v4 as uuidv4 } from 'uuid';
import CloudButtons from './CloudButtons'
import Sun from './Sun';

function TopBar({ onCloudClick, onSunClick }) {

  const clouds = ['About', 'Projects', 'Resume'].map(cloud => {
      return <CloudButtons key={uuidv4()} name={cloud} onCloudClick={onCloudClick}/>
  })

  return (
    <div id='top-bar'>
      <Sun onSunClick={onSunClick}/>
      <div>{clouds}</div>
    </div>
  )
}

export default TopBar