import React from 'react'
import { Element } from 'react-scroll'

function Home() {
  return (
    <Element name='Home'>
      <div id='home' className='slider-child'>
        <h1>Rebekah Zhou</h1>
        <em>[ ri-bek-uh ]</em> 
        <ul>
          <li>Full stack software engineer.</li>
          <li>Former math teacher and lifelong math enthusiast.</li>
          <li>Board game geek, classical pianist, boba addict.</li>
        </ul>
      </div>
    </Element>
  )
}

export default Home