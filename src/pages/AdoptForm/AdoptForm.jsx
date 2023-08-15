import { React, useState } from 'react';
import './AdoptForm.css';
import FormCheckboxes from '../../components/adoptionForm/FormCheckboxes';
import FormInputs from '../../components/adoptionForm/FormInputs';

const AdoptForm = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    otherInput: ""
  })

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      label: "fullname"
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "email"
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "address"
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "city"
    },
    {
      id: 5,
      name: "state",
      type: "text",
      placeholder: "State",
      label: "state"
    },
    {
      id: 6,
      name: "zipCode",
      type: "text",
      placeholder: "Zip",
      label: "zipCode"
    },
    {
      id: 7,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone #",
      label: "phoneNumber"
    },
    {
      id: 8,
      name: "otherInput",
      type: "text",
      placeholder: "Ferret",
      label: "otherInput"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="adoptionForm">
      <h1>Doggo Network Adoption Form</h1>
      <form onSubmit={ handleSubmit }>

        <FormInputs name="fullname" placeholder="Full Name"/>
        <h3>Type of Residence</h3>
        <input className='radioSelector' type="radio" value="home" name="home" /> Home
        <input className='radioSelector' type="radio" value="aparment" name="apartment" /> Apartment
        <div className='landlordInfo'>
          <h3>If you rent:</h3>
            <FormInputs name="landlord" placeholder="Name of Landlord" />
            <FormInputs name="landlordphone" placeholder="Landlord's Phone #" />
        </div>
        <div className="adoptionInputs">
          <FormInputs name="address" placeholder="Address"/>
          <FormInputs name="city" placeholder="City"/>
          <FormInputs name="state" placeholder="State"/>
          <FormInputs name="zip" placeholder="Zip"/>
          <FormInputs name="email" placeholder="Email"/>
          <FormInputs name="phone" placeholder="Phone #"/>
        </div>
        <h3>Do you have any other pets in your home? </h3>
        <input className='radioSelector' type="radio" value="yes" name="yes" /> Yes
        <input className='radioSelector' type="radio" value="no" name="no" /> No
        <h4>If yes, please specify:</h4>
          <FormInputs name="otherInput" label="OtherInput" placeholder="Ferret" />
         
        <button className='adoptionSubmit'>Submit</button>

      </form>
    </div>
  );
}

export default AdoptForm