import React, { useState } from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBookBookmark} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BsFillChatLeftTextFill} from 'react-icons/bs';


function Navbar() {
  const[activeNav, setActiveNav] =useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><BiBookBookmark/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><BsFillChatLeftTextFill/></a>
    </nav>
  )
}

export default Navbar;