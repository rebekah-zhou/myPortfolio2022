import React from 'react'

function CloudButtons({ onCloudClick, name }) {

  function handleCloudClick(e) {
    console.log(name)
    onCloudClick(name)
  }

  return (
    <button 
      onClick={handleCloudClick} 
      className="cloud-button"
      type='button'>
      <p className='cloud-p'>{name}</p>
    </button>
  )
}

export default CloudButtons