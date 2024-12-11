import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import './contactform.css';

export function ContactForm() {
  const [inputValues, setInputValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errorMessages, setErrorMessages] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateFields = () => {
    let issues = {};
    if (!inputValues.name.trim()) {
      issues.name = 'Please provide your name.';
    }
    if (!inputValues.email.trim()) {
      issues.email = 'Please provide your email address.';
    } else if (!inputValues.email.includes('@')) {
      issues.email = 'Please provide a valid email address.';
    }
    if (!inputValues.phone.trim()) {
      issues.phone = 'Please provide your phone number.';
    }
    if (!inputValues.message.trim()) {
      issues.message = 'Please provide a message.';
    }
    return issues;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrorMessages(validationErrors);
      setSubmitted(false);
    } else {
      setErrorMessages({});
      setSubmitted(true);
      setInputValues({ name: '', email: '', phone: '', message: '' }); // Reset form after submission
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h3 className="text-center mb-4 text-primary">Get in Touch</h3>
        {submitted && <p className="text-success text-center">Your form was sent successfully!</p>}

        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
          {/* Name field */}
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label fw-bold text-secondary">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
              className={`form-control ${errorMessages.name ? 'is-invalid' : ''}`}
              placeholder="Enter your full name"
              aria-describedby="nameHelp"
            />
            {errorMessages.name && <div className="invalid-feedback">{errorMessages.name}</div>}
          </div>

          {/* Email field */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label fw-bold text-secondary">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              className={`form-control ${errorMessages.email ? 'is-invalid' : ''}`}
              placeholder="Enter your email address"
              aria-describedby="emailHelp"
            />
            {errorMessages.email && <div className="invalid-feedback">{errorMessages.email}</div>}
          </div>

          {/* Phone number field */}
          <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label fw-bold text-secondary">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={inputValues.phone}
              onChange={handleInputChange}
              className={`form-control ${errorMessages.phone ? 'is-invalid' : ''}`}
              placeholder="Enter your phone number"
            />
            {errorMessages.phone && <div className="invalid-feedback">{errorMessages.phone}</div>}
          </div>

          {/* Message field */}
          <div className="form-group mb-3">
            <label htmlFor="message" className="form-label fw-bold text-secondary">Message</label>
            <textarea
              id="message"
              name="message"
              value={inputValues.message}
              onChange={handleInputChange}
              className={`form-control ${errorMessages.message ? 'is-invalid' : ''}`}
              rows="4"
              placeholder="Your message"
            ></textarea>
            {errorMessages.message && <div className="invalid-feedback">{errorMessages.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">Send Message</button>
        </form>

        {/* Contact Info Section */}
        <div className="contact-info mt-5">
          <h4 className="text-center text-primary">Our Contact Information</h4>
          <p className="text-center">Feel free to reach out to us anytime via the form or through the following channels:</p>
          <ul className="list-unstyled text-center">
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Email:</strong> contact@company.com</li>
            <li><strong>Office:</strong> 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
