import React from 'react'
import email from '../assets/images/email-icon.png';
import phone from '../assets/images/phone-icon.png';


export default function Contact() {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div>
            <h1 class='text-middle section-header'>Contact</h1>

            <div className="container mt-5 contact-container">
                <h2 className="contact-text">Reach out to me using this contact form or <br/> <img src={email} alt="email-logo" width={23} height={15} /> <a className="email" href="mailto:yigitbugraocak340@gmail.com"> yigitbugraocak340@gmail.com</a> <br/> <img src={phone} alt="phone-logo" width={23} height={23} /> +1 (804) 715-7004</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn btn-light" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
        </div>

    )
}
