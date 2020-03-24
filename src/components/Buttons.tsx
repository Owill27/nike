import React from 'react';

export enum ButtonTypes {
  PRIMARY,
  TEXT
}

export interface ButtonProps {
  onClick: ()=>void,
  children: React.ReactNode,
  className?: string,
  type?: ButtonTypes
}

const Button = ( props: ButtonProps ) => {

  const className = `Button ${props.className} type-${props.type}`

  return (
    <button className={className} onClick={props.onClick}>
      { props.children }
    </button>
  )
}

Button.defaultProps = {
  className: '',
  type: ButtonTypes.PRIMARY
}

export default Button;
