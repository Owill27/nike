import React from 'react'
import Logo from './Logo'
import IconButton from './IconButton'

const Header: React.FC = () => {
  return (
    <div className='Header'>
      <Logo />

      <nav className='nav'>
        <div className='item active'>Home</div>
        <div className='item'>New Releases</div>
        <div className='item'>Men</div>
        <div className='item'>Women</div>
        <div className='item'>Kids</div>
      </nav>

      <div className='buttons'>
        <IconButton onClick={()=>console.log('Clicked')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </IconButton>

        <IconButton onClick={()=>console.log('search')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </IconButton>
      </div>
    </div>
  )
}

export default Header
