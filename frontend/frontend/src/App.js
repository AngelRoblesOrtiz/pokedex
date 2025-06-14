import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = () => {
      fetch("http://localhost:5000/api/pokedex")
        .then(res => res.json())
        .then(data => setPokemon(data));
    };

    fetchPokemon();

    const interval = setInterval(fetchPokemon, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1>{pokemon ? pokemon.name : "Loading..."}</h1>
  );
}

export default App;
