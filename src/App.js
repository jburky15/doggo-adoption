import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import DogAdoptions from './pages/DogAdoption/DogAdoptions';
import ContactPage from './pages/Contact/Contact';
import AdoptionForm from './pages/AdoptionForm/AdoptionForm';

function App() {
  return (
    <div className = "App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DogAdoptions" element={<DogAdoptions />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="AdoptionForm" element={<AdoptionForm />} />
      </Routes>
    </div>
  );
}

export default App;
