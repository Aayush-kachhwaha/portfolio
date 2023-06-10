import React from 'react';
import './contact.css';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import {ImWhatsapp} from 'react-icons/im'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__conatainer">
        <div className="contact__options">
          <artticle className="contact__option">
            <MarkEmailReadOutlinedIcon className='contact__option-icon' />
            <h4>Email</h4>
            <h5>aayushk26009@gmail.com</h5>
            <a href="mailto:aayushk26009@gmail.com" target='_blank'>Send a Message</a>
          </artticle>
          <artticle className="contact__option">
            <ImWhatsapp size='25px' className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=916378689855" target='_blank'>Send a Message</a>
          </artticle>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <input type="tel" pattern='[+]{1}[0-9]{10}' name="number" placeholder='Your Moblie Number' required />
          <textarea name="message" placeholder='Your Message' required cols="30" rows="10"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact