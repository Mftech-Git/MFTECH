import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import contact from "../../images/contact.png";

const ContactForm = () => {
const [state, handleSubmit] = useForm("mzbnrqrv"); // Use your Formspree form ID
const [phoneNumber, setPhoneNumber] = useState('');
const [phoneWarning, setPhoneWarning] = useState('');

const validatePhoneNumber = (number) => {
const regex = /^\d{3}\.\d{3}\.\d{4}$/;
return regex.test(number);
};

const handlePhoneChange = (e) => {
const number = e.target.value;
setPhoneNumber(number);
if (number && !validatePhoneNumber(number)) {
setPhoneWarning('Please enter a valid number in xxx.xxx.xxxx format.');
} else {
setPhoneWarning('');
}
};

if (state.succeeded) {
return (
<div style={{ textAlign: 'center' }}>
  <h1>Thank You!</h1>
  <h4>Your message has been sent successfully! We appreciate your interest and will get back to you shortly.</h4>
</div>
);
}

return (
<>

  <section className="contact-area pb-100">
    <div className="container">
      <div className="section-title">
        <span className="sub-title">
          Get in Touch
        </span>
        <h2>Ready to Get Started?</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="contact-image">
            <img src={contact} alt="contact" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" required placeholder="* Your name" />
                  </div>
                </div>
              </div>

              <div className="col-lg-12 col-md-6">
                <div className="form-group">
                  <input id="email" type="email" name="email" className="form-control" required placeholder="* Your email address" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input type="text" name="phone_number" className="form-control" placeholder="Your phone number (Optional)" value={phoneNumber} onChange={handlePhoneChange} />
                  <small style={{ color: 'red' }}>{phoneWarning}</small>
                  <ValidationError prefix="Phone Number" field="phone_number" errors={state.errors} />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input type="text" name="extension" className="form-control" placeholder="Extension (Optional)" />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea id="message" name="message" className="form-control" cols="30" rows="6" required placeholder="Write your message..." />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn" disabled={state.submitting}>
                        <i className="flaticon-tick"></i>
                        Send Message <span></span>
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
