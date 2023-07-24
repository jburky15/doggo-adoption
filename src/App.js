import { DogCard } from './components/DogCard/DogCard';
import { dogs } from './data/dogs';
import './App.css';

function App() {
  return (
    <div className = "App">
      <h1>Doggie Adoptions</h1>
      <div className="dog-container">
        {dogs.map((dog, index) => (
          <DogCard key = {index} {...dog} />
        ))}
      </div>
    </div>
  );
}

export default App;
