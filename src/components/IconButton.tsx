import React from 'react'

interface IconButtonProps  {
  children: React.ReactNode,
  onClick: () => void,
  className?: string,
  size?: number
}

const IconButton = (props: IconButtonProps) => {

  let { children, onClick, className, size } = props

  return (
    <button onClick={onClick} className={'Button IconButton '+className} style={{width: size+'px',height:size+'px'}}>
      { children }
    </button>
  )
}

IconButton.defaultProps = {
  className: '',
  size: 40
}

export default IconButton
