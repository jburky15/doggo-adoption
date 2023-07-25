import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import DogAdoptions from './pages/DogAdoption/DogAdoptions';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className = "App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DogAdoptions" element={<DogAdoptions />} />
      </Routes>
    </div>
  );
}

export default App;
