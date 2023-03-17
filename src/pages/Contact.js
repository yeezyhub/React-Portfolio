import React, { useState } from "react";
import emailIcon from '../assets/images/email-icon.png';
import phoneIcon from '../assets/images/phone-icon.png';
// import errorIcon from '../assets/images/error-icon.png';
import checkmarkIcon from '../assets/images/checkmark-icon.png';
import $ from 'jquery';
import background from "../assets/images/background.jpg";




import { validateEmail } from "../utils/helpers.js";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [messageSent, setMessageSent] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, name, and message
        if (inputType === "name") {
            setName(inputValue);
        } else if (inputType === "email") {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }


    }


    // (name && email && message) ===! ''
    // ? $('#target-element').attr('data-bs-target','#myModalSuccess')
    // : $('#target-element').attr('data-bs-target','#myModalError')



    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // check to see if the field is empty. If so send an error message.
        if (!name || !email || !message) {
            setMessageSent("");
            setErrorMessage("Please enter all the fields.");
            // exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        // check to see if the email is not valid
        if (!validateEmail(email)) {
            setMessageSent("");
            setErrorMessage("Email is invalid.");
            return;
        }

        // If everything is good, clear out the input after a successful sending.
        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
        setMessageSent(`Thanks ${name}! Your message has been sent.`);
        $('.modal-backdrop').remove(); //removes the remainder backshadow of the modal

    };

    return (
        <div>

            {/* Background Image */}
            <div className="bg-contact" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100vh'
            }}>
            </div>

            <h1 class='text-middle section-header'>Contact</h1>

            <div className="container mt-5 contact-container">
                <h2 className="contact-text">Reach out to me using this contact form or <br /> <img src={emailIcon} alt="email-logo" width={23} height={15} /> <a className="email" href="mailto:yigitbugraocak340@gmail.com"> yigitbugraocak340@gmail.com</a> <br /> <img src={phoneIcon} alt="phone-logo" width={23} height={23} /> +1 (804) 715-7004</h2>
                <form className="form" >
                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input
                            className="form-control"
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Your email"
                        />
                    </div>

                    {/* Message  */}
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            value={message}
                            name="message"
                            lable="Message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Your message"
                        />
                    </div>

                    {/* Submit  */}
                    <div className="send">
                        <button
                            className="btn btn-light"
                            type="button"
                            onClick={handleFormSubmit}
                            onChange={handleInputChange}
                            id='targeted-element'
                            data-bs-toggle="modal" data-bs-target="#myModal"
                        >
                            Send
                        </button>
                    </div>

                    {/* Error Message */}
                    {errorMessage && (

                        <div class="modal" id="myModal">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h4 class="modal-title">Oops!</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                    <div class="modal-body">
                                        {errorMessage}
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {/* Sent Message  */}
                    {messageSent && (
                        <div>
                            <p className="sent-text">
                                {messageSent}{" "}
                                {<img
                                    alt="send"
                                    style={{ display: "inline" }}
                                    src={checkmarkIcon}
                                    className="send-icon"
                                    width={32}
                                    height={32}
                                />}
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </div>

    )
}