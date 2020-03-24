import React from 'react'
import { shoeInfo, shoesData } from '../shoes-data'
import IconButton from './IconButton'

interface BottomBarItemProps {
  shoe: shoeInfo,
  addToCart: ( shoe: shoeInfo ) => void
}

const BottomBarItem = (props: BottomBarItemProps) => {

  const { shoe, addToCart } = props
  const variety = shoe.varieties[0]
  const image = `images/${variety.image}.png`

  return (
    <div className='bottom-bar-item'>
      <img src={image} alt=''/>

      <div className='details'>
        <div className='name'>{shoe.name}</div>
        <div className='variety-name'>{variety.name}</div>
        <div className='price'>${ variety.price}</div>
      </div>

      <IconButton onClick={()=>addToCart(shoe)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </IconButton>
    </div>
  )
}
const BottomBar = () => {

  const addToCart = ( shoe: shoeInfo ): void => console.log('add to cart', shoe.name, shoe.varieties[0].name )

  return (
    <div className='BottomBar'>
      { shoesData.map(( shoe, i ) => <BottomBarItem shoe={shoe} addToCart={addToCart} key={i}/>)}
    </div>
  )
}

export default BottomBar
