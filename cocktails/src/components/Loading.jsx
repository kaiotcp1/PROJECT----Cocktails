import React from 'react'
import Loader from '../assets/images/loader.svg'
const Loading = () => {
  return (
    <div className="loading">
      <img src={Loader} alt="Loading animate" />
    </div>
  )
}

export default Loading