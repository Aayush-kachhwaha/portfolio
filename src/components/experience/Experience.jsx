import React from 'react';
import './experience.css';
import {AiOutlineHtml5} from 'react-icons/ai';
import {FaCss3Alt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact} from 'react-icons/fa';
import {TbBrandBootstrap} from 'react-icons/tb';
import {FaNodeJs} from 'react-icons/fa';
import {TbBrandFirebase} from 'react-icons/tb';
import {FaPhp} from 'react-icons/fa';

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon' size="40px"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon' size="30px"/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon' size="30px"/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' size="30px"/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <TbBrandBootstrap className='experience__details-icon' size="30px"/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Basic</small></div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <FaNodeJs className='experience__details-icon' size="30px"/>
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'>
            <TbBrandFirebase className='experience__details-icon' size="30px"/>
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Basic</small></div>
            </article>
            <article className='experience__details'>
              <FaPhp className='experience__details-icon' size="30px"/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Basic</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Experience