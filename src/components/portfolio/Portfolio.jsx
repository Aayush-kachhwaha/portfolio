import React from 'react';
import './portfolio.css';
import Img from '../../assets/img.jpg';

const data = [
  {
    id:1,
    image: Img,
    title: 'Aayush Kachhwah Portfolio',
    github: 'https://github.com/Aayush-kachhwaha/portfolio',
    demo: '',
  },
  {
    id:2,
    image: Img,
    title: 'Aayush Kachhwah Portfolio',
    github: 'https://github.com/Aayush-kachhwaha/portfolio',
    demo: '',
  },
  {
    id:3,
    image: Img,
    title: 'Aayush Kachhwah Portfolio',
    github: 'https://github.com/Aayush-kachhwaha/portfolio',
    demo: '',
  },
  {
    id:4,
    image: Img,
    title: 'Aayush Kachhwah Portfolio',
    github: 'https://github.com/Aayush-kachhwaha/portfolio',
    demo: '',
  },
  {
    id:5,
    image: Img,
    title: 'Aayush Kachhwah Portfolio',
    github: 'https://github.com/Aayush-kachhwaha/portfolio',
    demo: '',
  },
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a> 
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio