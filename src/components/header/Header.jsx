import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../../assets/WhatsApp_Image_2023-03-27_at_8.50.46_AM-removebg-preview.png';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'M</h5>
        <h1>Aayush Kachhwaha</h1>
        <h5 className='text-light'>
          Front-End Developer
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={Me} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header