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
    <div>
      <header className = 'pokedex-header'>
        <img
          src = {process.env.PUBLIC_URL + '/images/pokemonLogo.png'}
          alt = 'Pokédex Logo'
          className = 'pokedex-logo'
        />
      </header>
      <div className = 'container'>
        <div className = 'pokemon-card'>
          <div className = 'pkmn-name-id-img'>
            <div className = 'pkmn-name-id'>
              <h1>{pokemon ? pokemon.name : 'Loading...'}</h1>
              <h2>#{pokemon ? pokemon.id.toString().padStart(4, '0') : '0000'}</h2>
            </div>

            <div className = 'pkmn-img'>
              <img src = {pokemon ? pokemon.img : process.env.PUBLIC_URL + '/images/pokeball.png'} 
              alt = 'Pokemon' 
              className = 'pokemon-image' />
            </div>
          </div>

          <div className = 'pkmn-info'>
            <div className = 'pkmn-type-region'>
              <div className = 'pkmn-type'>
                <p className = 'pkmn-type-text'>Type</p>
                <div className = 'pkmn-type-img-container'>
                  blank
                </div>
              </div>

              <div className = 'pkmn-region'>
                <p className = 'pkmn-region-text'>Region</p>
                <div className = 'pkmn-region-container'>
                  blank
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
