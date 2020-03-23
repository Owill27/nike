import React from 'react'

const Background: React.FC = ({ children }) => {
  return (
    <div className='Background'>

      <div className='watermark'>
        <div className='text'>NIKE</div>
      </div>

      { children }
    </div>
  )
}

export default Background
