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
      <a href='#' className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about'><AiOutlineUser/></a>
      <a href='#experience'><BiBookBookmark/></a>
      <a href='#services'><RiServiceLine/></a>
      <a href='#contact'><BsFillChatLeftTextFill/></a>
    </nav>
  )
}

export default Navbar;