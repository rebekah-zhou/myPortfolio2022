import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import CloudButtons from './CloudButtons'


function TopBar() {
    const clouds = ['About', 'Projects', 'Work Experience'].map(cloud => {
        return <CloudButtons key={uuidv4()} name={cloud}/>
    })

  return (
    <div id='top-bar'>
        {clouds}
    </div>
  )
}

export default TopBar