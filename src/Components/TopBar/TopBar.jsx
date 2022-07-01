import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import CloudButtons from './CloudButtons'
import Sun from './Sun';

function TopBar() {
    const clouds = ['About', 'Projects', 'Resume'].map(cloud => {
        return <CloudButtons key={uuidv4()} name={cloud}/>
    })

  return (
    <div id='top-bar'>
      <Sun />
      <div>{clouds}</div>
    </div>
  )
}

export default TopBar