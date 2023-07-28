import React, { useState } from "react";
import './ContactForm.css'

const FORM_ENDPOINT = "https://herotofu.com/v1/12a08400-2cbb-11ee-b71d-7b8e71114ecd";

const ContactForm = () => {
    const [status, setStatus] = useState();
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Anything you need to inject dynamically
      const injectedData = {
        DYNAMIC_DATA_EXAMPLE: 123,
      };
  
      const inputs = e.target.elements;
      const data = {};

      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name) {
          data[inputs[i].name] = inputs[i].value;
        }
      }

      Object.assign(data, injectedData);

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
          // It's likely a spam/bot request, so bypass it to validate via captcha
          if (response.status === 422) {
            Object.keys(injectedData).forEach((key) => {
              const el = document.createElement('input');
              el.type = 'hidden';
              el.name = key;
              el.value = injectedData[key];
              e.target.appendChild(el);
            });
            e.target.setAttribute('target', '_blank');
            e.target.submit();
            throw new Error('Please finish the captcha challenge');
          }
          if (response.status !== 200) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(() => setStatus("We'll be in touch soon."))
        .catch((err) => setStatus(err.toString()));
    };
  
    if (status) {
      return (
        <>
          <div>Thank you!</div>
          <div>{status}</div>
        </>
      );
    }
  
    return (
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
      >
        <div>
            <input type="text" placeholder="Your name" name="name" required  className="nameForm" />
        </div>
        <div>
            <input type="email" placeholder="Your Email" name="email" required className="emailForm" />
        </div>
        <div>
            <textarea placeholder="Your message" name="message" required className="textForm" />
        </div>
        <div>
            <button type="submit" className="btnForm"> Send us a message </button>
        </div>
    </form>
  );
};

export default ContactForm;