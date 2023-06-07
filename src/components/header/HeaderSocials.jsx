import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
        <a href="https://www.linkedin.com/in/aayush-kachhwaha/" target='_blank' rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/Aayush-kachhwaha" target='_blank' rel="noreferrer"><GitHubIcon/></a>
    </div>
  )
}

export default HeaderSocials