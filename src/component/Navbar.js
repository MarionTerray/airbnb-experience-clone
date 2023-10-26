import React from 'react';
import Logo from '../img/airBnB-logo.png';
import '../style/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <img className='navbar--logo' src={Logo} alt='logo'/>
        <h1 className='navbar--title'>airbnb</h1>
    </div>
  )
}

export default Navbar