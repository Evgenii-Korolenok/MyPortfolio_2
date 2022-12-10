import React, { useRef } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { BsWhatsapp } from 'react-icons/bs';
import { TbArrowBigRightLines } from 'react-icons/tb';
import { BsTelegram } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_19hnkon', 'template_5kv4x28', form.current, '755FHTjL3GtRUjJ4F')

    e.target.reset()
    };


    return (
        <section id='contact' className="contact section container">
            
            <div className="sectionTitle">
                <span className="titleNumber">
                    04 .
                </span>
                <h5 className="titleText">Contact Me
                    <div className="underline">
                        <span></span>
                    </div>
                </h5>
            </div>

            <div className="contactContainer grid">
                <div className="socialContacts grid">
                    <h3>Talk to me</h3>

                    <div className="cards grid">
                        <div className="card">
                            <div>
                            <BsWhatsapp className='icon'/>
                            </div>

                            <h4>WhatsApp</h4>

                            <span className="userName">
                                Evgenii Korolenok
                            </span>

                            <div>
                                <a href="https://wa.me/+375298425908" className="flex" target='_blank'>
                                    Send Message
                                    <TbArrowBigRightLines className='icon'/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                            <BsTelegram className='icon'/>
                            </div>

                            <h4>Telegram</h4>

                            <span className="userName">
                                @evgenii_korolenok
                            </span>

                            <div>
                                <a href="https://t.me/evgenii_korolenok" className="flex" target='_blank'>
                                    Send Message
                                    <TbArrowBigRightLines className='icon'/>
                                </a>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                            <FaViber className='icon'/>
                            </div>

                            <h4>Viber</h4>

                            <span className="userName">
                                evgenii korolenok
                            </span>

                            <div>
                                <a href="viber://chat?number=%2B375298425908" className="flex" target='_blank'>
                                    Send Message
                                    <TbArrowBigRightLines className='icon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form grid">
                    <h3>Send Me an Email</h3>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Enter your Name" name='name' />

                        <input type="email" placeholder="Enter your Email" name='email' />

                        <textarea name="message" placeholder="Enter your Message"></textarea>

                        <button className="formBtn" type="submit" name="submit">
                            Send Email
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact;