import React from 'react'
import "./contact.css"
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8fqm5yi', 'template_57qhw9f', form.current, 'beAqSVMi2bok1hE5N')
      e.target.reset();
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
        <MdOutlineMail className='contact__option-icon' />
        <h4>Email</h4>
        <h5>kamilabuelhija@gmail.com</h5>
        <a href='mailto:kamilabuelhija@gmail.com' target={'_blank'}>Send a message</a>
      </article>
      <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon' />
        <h4>Messenger</h4>
        <h5>Kamil Abu Elhija</h5>
        <a href='https://m.me/profile.php?id=100000133632459' target={'_blank'}>Send a message</a>
      </article>
      <article className='contact__option'>
        <BsWhatsapp className='contact__option-optin' />
        <h4>WhatsApp</h4>
        <h5>054-4749760</h5>
        <a href='https://api.whatsapp.com/send?phone+972544749760' target={'_blank'}>Send a message</a>
      </article>

      </div>
      {/* END OF CONTACT OPTION */}
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
