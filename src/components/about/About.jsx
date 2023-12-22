import React from 'react';
import './about.css';
import ME from '../../assets/nIMG-20220917-WA0327.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src = {ME} alt = "About Image" />
          </div>
        </div>
      
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>fresher </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Real time work(Clients)</h5>
              <small>None </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>15 + 2 Completed</small>
            </article>
          </div>

          <p>
           I am Aayush Kachhwaha, currently pursuing my Bachelor's degree in Computer Science Engineering at Vellore Institute of Technology, Bhopal.​

I Am having experience of building great Website applications with JavaScript / Reactjs / Nodejs / and its libraries and frameworks.​

I'm motivated to learn, grow and excel in this field. Having the ability to learn new technologies quickly. Capability to work in teams by providing valuable support.​

Having Creative and Tech-savvy Web Developer intern dedicated to develop, contribute and optimize Websites and Web app which are interactive and user-friendly.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
