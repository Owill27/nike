import React from 'react'

const Background: React.FC = ({ children }) => {
  return (
    <div className='Background'>

      <div className='watermark'>
        <div className='text'>NIKE</div>
        <svg className='bg-logo' version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="filter5017" colorInterpolationFilters="sRGB">
            <feGaussianBlur result="fbSourceGraphic" stdDeviation="1.01 0.01"/>
            <feColorMatrix in="fbSourceGraphic" result="fbSourceGraphicAlpha" values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"/>
            <feGaussianBlur in="fbSourceGraphic" result="blur" stdDeviation="0.61 0.7"/>
            </filter>
          </defs>
          <g transform="translate(.67463 -2.3484)">
            <path className='bottom-blur' transform="matrix(1 0 0 .96962 -.15254 -.29017)" d="m3.424 11.271c-1.1543 9.3415 2.8767 5.173 19.732-0.73953-10.59 9.6769-28.667 17.985-19.732 0.73953" filter="url(#filter5017)"/>
            <path className='top-blur' d="m3.3732 9.1356c-1.1543 9.3415 2.8767 5.173 19.732-0.73953-10.59 9.6769-28.667 17.985-19.732 0.73953" fill="#fff" filter="url(#filter5017)"/>
            <path d="m3.424 9.7458c-1.1543 9.3415 2.8767 5.173 19.732-0.73953-10.59 9.6769-28.667 17.985-19.732 0.73953"/>
          </g>
        </svg>
      </div>

      { children }
    </div>
  )
}

export default Background
