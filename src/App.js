import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import DogAdoptions from './pages/DogAdoption/DogAdoptions';
import ContactPage from './pages/Contact/Contact';
import AdoptForm from './pages/AdoptForm/AdoptForm';


function App() {
  return (
    <div className = "App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DogAdoptions" element={<DogAdoptions />} />
        <Route path="AdoptForm" element={<AdoptForm />} />
        <Route path="Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
