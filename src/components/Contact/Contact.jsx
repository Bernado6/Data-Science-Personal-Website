import { React, useRef } from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f3epspc', 'template_in92htk', form.current, 'uG8maAahsV3qD2BPt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id = 'contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>benardyegon9819@gmail.com</h5>
            <a href="mailto:benardyegon9819@gmail.com" target='_blank'>Send Email</a>

          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Phone Number</h4>
            <h5>+254797144246</h5>
            <a href="https://api.whatsapp.com/send?send-+254797144246" target="_blank">Send Message  or Call or WhatsApp</a>

          </article>
          <article className="contact_option">
            <AiFillTwitterCircle className='contact_option-icon'/>
            <h4>Twitter</h4>
            <h5>@Benardo</h5>
            <a href="https://twitter.com/Benn_Yegon" target='_blank'>Send Message</a>

          </article>
        </div>
        <form ref={form} onSubmit ={sendEmail}>
        <input type= "text" name='name' placeholder='Enter Your Name' required/>
        <input type= "email" name='email' placeholder='Enter Your Email' required/>
        <textarea name='message' placeholder='Type your message here' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact