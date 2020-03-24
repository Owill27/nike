import React, { useState } from 'react'
import { shoeInfo } from '../shoes-data'
import Button, { ButtonTypes } from './Buttons'

interface MainViewProps {
  shoe: shoeInfo
}

const MainView = (props: MainViewProps) => {

  const { shoe } = props
  const [ activeVariety, setActiveVariety ] = useState(shoe.varieties[0])

  const image = `images/${activeVariety.image}.png`

  const orderNow = () => console.log('order noww')
  const addToCart = () => console.log('add to cart')

  return (
    <div className='MainView'>
      
      <div className='details'>
        <div className='price'>${activeVariety.price}</div>
        <div className='name'>{ shoe.name }</div>
        <div className='description'>{ shoe.description}</div>
        <div className='buttons'>
          <Button onClick={orderNow}>Order Now</Button>
          <Button onClick={addToCart} type={ButtonTypes.TEXT}>Add to Cart</Button>
        </div>
      </div>

      <div className='image-holder'>
        <img src={image} alt='' />
      </div>

      <div className='varieties'>
        { shoe.varieties.map(( variety, i) => (
          <div 
            className={`variety ${ activeVariety.name === variety.name ? 'active' : ''}`}
            onClick={()=>setActiveVariety(variety)} 
            key={i}>
            <div className='name'>{variety.name}</div>
            <div className='color' style={{background: `${variety.color}`}}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainView
