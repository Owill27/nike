import React, { useContext } from 'react'
import { shoesData } from '../shoes-data'
import Button, { ButtonTypes } from './Buttons'
import { StateContext } from '../state-provider'

const MainView = () => {

  const { activeShoeId, activeVariety, setActiveVariety } = useContext(StateContext)
  const shoe = shoesData.filter( shoe => shoe.id === activeShoeId )[0]
  const variant = shoe.varieties[activeVariety]
  const image = `images/${variant.image}.png`

  const orderNow = () => console.log('order noww')
  const addToCart = () => console.log('add to cart')

  return (
    <div className='MainView'>
      
      <div className='details'>
        <div className='price'>${variant.price}</div>
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
            className={`variety ${ variant.name === variety.name ? 'active' : ''}`}
            onClick={()=>setActiveVariety(i)}
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
