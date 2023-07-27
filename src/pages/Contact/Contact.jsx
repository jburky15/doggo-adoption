import React from 'react'
import ContactForm from '../../components/Contact/ContactForm';
import './Contact.css'

const ContactPage = () => {
  return (
    <>
        <h1 className='contactHeader'>Feel free to email, call or stop by!</h1>

        <div className="contactWrapper">
            <div className='hoursOfOperation'>
                <h3 className='phoneNumberHeader'>Our Phone#:</h3>
                <p className='phoneNumber'>888-888-8888</p>
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
                <h1>Google Maps Placeholder</h1>
        </div>
    </>
  )
}

export default ContactPage;