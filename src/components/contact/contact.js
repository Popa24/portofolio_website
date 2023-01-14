import React from "react";
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
function Contact() {
    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hmb4d6j', 'template_wj4pvl9', form.current, 'tl4ES1IUIcyTV2vQY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
       <section id="contact">
           <h5>Get in touch</h5>
           <h2>Contact Me</h2>
           <div className="container contact_container">
               <div className="contact_options">
                    <article className="contact_option">
                        <AiTwotoneMail className="contact_option-icon"/>
                        <h4>Email</h4>

                        <a href="mailto:alex24popa@gmail.com">Send a message</a>
                    </article>
                   <article className="contact_option">
                       <BsMessenger className="contact_option-icon"/>
                       <h4>Messenger</h4>

                       <a href="https://m.me/alex.popa.90475" target="_blank">Send a message</a>
                   </article>
                   <article className="contact_option">
                       <ImWhatsapp className="contact_option-icon"/>
                       <h4>Whatsapp</h4>

                       <a href="https://wa.me/40726870977" target="_blank">Send a message</a>
                   </article>
               </div>
               {/*End of contact options*/}
               <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder="Your Full Name" required/>
                   <input type="email" name='email' placeholder="Your Email" required/>
                   <textarea name='message' placeholder="Your Message" rows="7" required></textarea>
                   <button type="submit" className="btn btn-primary">Send Message</button>
               </form>
           </div>
       </section>
    );
}

export default Contact;