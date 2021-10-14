import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { FiMail } from 'react-icons/fi'

// Contact component with contact form
function Contact() {
    // Create the formstate and the setter and initilize with blank values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // Function to check if valid email has been entered or if text field is blank
    function handleChange(e) {
        // If the user is editing the email field, check to see if it's a valid email
        // or if the email field has been left blank
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            // If the user is editing any field other than email, check to see if 
            // the field was left blank
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    //Function to handle submit which will prevent the page from being refreshed
    function handleSubmit(e) {
        e.preventDefault();
    }

    // JSX
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                </div>
                <div>
                    <input type="text" defaultValue={name} onMouseLeave={handleChange} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                </div>
                <div>
                    <input type="email" defaultValue={email} name="email" onMouseLeave={handleChange} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onMouseLeave={handleChange} onChange={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <div>
            Or Email Me Directly: <a href="mailto:askarrizvi88@gmail.com"><FiMail size={30} /></a>
            </div>
        </section>
    );
}

export default Contact;