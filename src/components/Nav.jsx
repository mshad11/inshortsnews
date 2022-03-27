import React from 'react'
import './Nav.css'
import HamburgerDrawer from './HamburgerDrawer'

function Nav({setCategory}) {
  return (
    <div className='nav'>
      <div className='menu'>
         <HamburgerDrawer setCategory={setCategory}/>
      </div>
      <img  className='nav-image'
      src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
      alt='' />
    </div>
  )
}

export default Nav
