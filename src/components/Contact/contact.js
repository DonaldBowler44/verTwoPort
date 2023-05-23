import "./contact.css";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm("service_mz61el7", "template_4ic7keh", form.current, "1SfiqRpqj4Dj-YJaR");
            console.log(result.text);
        } catch (error) {
            console.log(error.text);
        }
        };

    return (
        <div className="contContainer">
        <div className="contBox">
            <section className="contact_section">
            <h1 className='hcont'>Contact Me: </h1>
            <div className="contactContainerSec bd_grid">

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name..." name="user_name" className="contact_input" />
                <input type="email" placeholder="Email..." name="user_email" className="contact_input_E" />
                <textarea name="message" placeholder="Message to my personal email..." rows="9" className="contact_input_two" defaultValue="This is a sample Message. I want you to Develop for me." />
                <input type="submit" value="Send" className="CSbutton contact_button" />
                </form>

                </div>
                </section>
        </div>
    </div>
    );
}

export default Contact;