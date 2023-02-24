import React, { useState } from "react";
import email from '../assets/images/email-icon.png';
import phone from '../assets/images/phone-icon.png';

import { validateEmail } from "../utils/helpers";

export default function Contact() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')

        var delayInMilliseconds = 1000; //1 second

        setTimeout(function () {
            setFormStatus('Submitted!');

        }, delayInMilliseconds);

        const { name, email, message } = e.target.elements
        let contactForm = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(contactForm)
    }



    return (
        <div>
            <h1 class='text-middle section-header'>Contact</h1>

            <div className="container mt-5 contact-container">
                <h2 className="contact-text">Reach out to me using this contact form or <br /> <img src={email} alt="email-logo" width={23} height={15} /> <a className="email" href="mailto:yigitbugraocak340@gmail.com"> yigitbugraocak340@gmail.com</a> <br /> <img src={phone} alt="phone-logo" width={23} height={23} /> +1 (804) 715-7004</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            *Name
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            placeholder='Your name'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            *Email
                        </label>
                        <input
                            className="form-control"
                            type="email" id="email"
                            placeholder='Your email'
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            *Message
                        </label>
                        <textarea
                            className="form-control"
                            id="message"
                            placeholder='Your message'
                            required
                        />
                    </div>

                    <div className='container-required'>
                        <button className="btn btn-light" type="submit">
                            {formStatus}
                        </button>

                        <p className='required'>*Required</p>
                    </div>
                </form>
            </div>
        </div>

    )
}