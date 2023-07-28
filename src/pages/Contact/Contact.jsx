import React from 'react'
import ContactForm from '../../components/Contact/ContactForm';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <>
        <h1 className='contactHeader'>Feel free to email, call or stop by!</h1>

        <div className="contactWrapper">
            <div className='hoursOfOperation'>
                <h3 className='hoursHeader'>Our Hours of Operation:</h3>
                <p className='closedDay'><span>Sun</span>: Closed</p>
                <p><span>Mon</span>: 9am - 5pm</p>
                <p><span>Tues</span>: 9am - 5pm</p>
                <p><span>Wed</span>: 9am - 5pm</p>
                <p><span>Thurs</span>: 9am - 5pm</p>
                <p><span>Fri</span>: 10am - 5pm</p>
                <p><span>Sat</span>: 11am - 4pm</p>
            </div>
            <ContactForm />
        </div>
        <div className="mapWrapper">
                <p className='phoneNumber'><FontAwesomeIcon icon={faPhone} /> 888-888-8888</p>
                <p className='address'><FontAwesomeIcon icon={faLocationDot} /> 11 Pottery Rd, Chittenango, NY</p>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649.2717155260995!2d-75.8693647580722!3d43.05970475894174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d985316f8db50f%3A0x5392acd4bc2ea38c!2s11%20Pottery%20Rd%2C%20Chittenango%2C%20NY%2013037!5e0!3m2!1sen!2sus!4v1690543924282!5m2!1sen!2sus"
                  title="Doggo Adoption Network"
                  className='gMap'
                  width="600" 
                  height="450"
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
        </div>
    </>
  )
}

export default ContactPage;