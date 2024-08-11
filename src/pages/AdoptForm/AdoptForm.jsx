import { React, useState } from 'react';
import './AdoptForm.css';
import FormCheckboxes from '../../components/adoptionForm/FormCheckboxes';
import FormInputs from '../../components/adoptionForm/FormInputs';

const AdoptForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
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
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "fullname"
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "fullname"
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "email"
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "address"
    },
    {
      id: 5,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "city"
    },
    {
      id: 6,
      name: "state",
      type: "text",
      placeholder: "State",
      label: "state"
    },
    {
      id: 7,
      name: "zipCode",
      type: "text",
      placeholder: "Zip",
      label: "zipCode"
    },
    {
      id: 8,
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone #",
      label: "phoneNumber"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const [selectedHousingRadio, setSelectedHousingRadio] = useState('home')
  const isHousingRadioChecked = (value) => selectedHousingRadio === value
  const handleHousingRadioSelect = (e) => setSelectedHousingRadio(e.currentTarget.value)

  const [selectedPetRadio, setSelectedPetRadio] = useState('no')
  const isPetRadioChecked = (value) => selectedPetRadio === value
  const handlePetRadioSelect = (e) => setSelectedPetRadio(e.currentTarget.value)

  return (
    <div className="adoptionForm">
      <h1>Doggo Network Adoption Form</h1>
      <form onSubmit={ handleSubmit }>
        <div className="mainInputs">
          {inputs.map((input => (
            <FormInputs key={input.id} {...input} value={values[input.name]} />
          )))}
        </div>
        <div className="applicantHousing">
          <h3>Type of Residence</h3>
          <input className='radioSelector' type="radio" value="home" name="home" checked={isHousingRadioChecked("home")} onChange={handleHousingRadioSelect}/> Home
          <input className='radioSelector' type="radio" value="apartment" name="apartment" checked={isHousingRadioChecked("apartment")} onChange={handleHousingRadioSelect}/> Apartment
        </div>
        <div className="rentalCheck">
            <FormCheckboxes label="Is this a rental property? " />
          </div>
        <div className='landlordInfo'>
          <h3>If you rent:</h3>
            <FormInputs name="landlord" placeholder="Name of Landlord" />
            <FormInputs name="landlordphone" placeholder="Landlord's Phone #" />
        </div>
        <h3>Do you have any other pets in your home? </h3>
        <input className='radioSelector' type="radio" value="yes" name="yes" checked={isPetRadioChecked("yes")} onChange={handlePetRadioSelect}/> Yes
        <input className='radioSelector' type="radio" value="no" name="no" checked={isPetRadioChecked("no")} onChange={handlePetRadioSelect}/> No
        <h4>If yes, please specify:</h4>
        <h5>Separate each with a comma ( , )</h5>
          <FormInputs name="otherInput" label="OtherInput" placeholder="Rabbit" />
        
        <button className='adoptionSubmit' type='submit'>Submit</button>

      </form>
    </div>
  );
}

export default AdoptForm