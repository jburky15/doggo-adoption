import { React, useState } from 'react';
import './AdoptForm.css';
import FormCheckboxes from '../../components/adoptionForm/FormCheckboxes';
import FormInputs from '../../components/adoptionForm/FormInputs';
import FormRadios from '../../components/adoptionForm/FormRadios';

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
      <form onSubmit={ handleSubmit }>

        <FormInputs name="fullname" placeholder="Full Name"/>
        <h3>Type of Residence</h3>
        <FormRadios />
        <div className="adoptionInputs">
          <FormInputs name="email" placeholder="Email"/>
          <FormInputs name="address" placeholder="Address"/>
          <FormInputs name="city" placeholder="City"/>
          <FormInputs name="state" placeholder="State"/>
          <FormInputs name="zip" placeholder="Zip"/>
          <FormInputs name="phone" placeholder="Phone #"/>
        </div>
        <h3>Do you have any of the following in your home: </h3>
        <div className="animalCheckboxes">
          <FormCheckboxes label="Dog" />
          <FormCheckboxes label="Cat" />
          <FormCheckboxes label="Bird" />
          <FormCheckboxes label="Rabbit" />
          <FormCheckboxes label="Other Pet" />
        </div>
        <h4>If other, please specify:</h4>
          <FormInputs name="otherInput" label="OtherInput" placeholder="Ferret" />
         
        <button className='adoptionSubmit'>Submit</button>

      </form>
    </div>
  );
}

export default AdoptForm