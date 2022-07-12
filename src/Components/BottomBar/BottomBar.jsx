import React from 'react'
import './BottomBar.css'
import {ReactComponent as Sand} from './sand.svg'

function BottomBar() {
  return (
    <div id='bottom-bar'>
      <Sand className='sand'/>
    </div>
  )
}

export default BottomBar