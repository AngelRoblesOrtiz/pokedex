import React from 'react';
import PokemonCard from './PokemonCard';
import {useLocation} from 'react-router-dom';

function updateDivStyle(pokemonType) {
    const typeStyles = {
        bug: { background: '#91A119', border: '#5E6910', innerBackground: '#B8C26A' },
        dark: { background: '#624D4E', border: '#000000', innerBackground: '#998B8C' },
        dragon: { background: '#5060E1', border: '#D61A3C', innerBackground: '#8D98EC' },
        electric: { background: '#FAC000', border: '#A37D00', innerBackground: '#FCD659' },
        fairy: { background: '#EF70EF', border: '#9B499B', innerBackground: '#F5A2F5' },
        fighting: { background: '#A24F36', border: '#733621', innerBackground: '#D46700' },
        fire: { background: '#D73502', border: '#B62203', innerBackground: '#FF7500' },
        flying: { background: '#98AAF4', border: '#3C4E90', innerBackground: '#ECECEC' },
        ghost: { background: '#704170', border: '#000000', innerBackground: '#A284A2' },
        grass: { background: '#3FA129', border: '#29691B', innerBackground: '#82C274' },
        ground: { background: '#915121', border: '#5E3515', innerBackground: '#B88E6F' },
        ice: { background: '#3DCEF3', border: '#28869E', innerBackground: '#81DFF7' },
        normal: { background: '#9FA19F', border: '#676967', innerBackground: '#C1C2C1' },
        poison: { background: '#9141CB', border: '#5E2A84', innerBackground: '#B884DD' },
        psychic: { background: '#EF4179', border: '#9B2A4F', innerBackground: '#F584A8' },
        rock: { background: '#AFA981', border: '#726E54', innerBackground: '#CBC7AD' },
        steel: { background: '#60A1B8', border: '#3E6978', innerBackground: '#98C2D1' },
        water: { background: '#2980EF', border: '#1B539B', innerBackground: '#74ACF5' }
    };

    const styles = typeStyles[pokemonType];
    if (!styles) return;

    // Main card container
    const backgroundBorderDiv = document.querySelector('.pokemon-card');
    // All inner containers that should get the innerBackground
    const innerDivs = document.querySelectorAll(
        '.pkmn-name-id-img, .pkmn-type, .pkmn-region, .pkmn-weight, .pkmn-height, .pkmn-abilities, .pkmn-base, .pkmn-status, .pkmn-stats'
    );

    if (backgroundBorderDiv) {
        backgroundBorderDiv.style.background = styles.background;
        backgroundBorderDiv.style.border = `solid ${styles.border} 5px`;
    }

    innerDivs.forEach(div => {
        div.style.background = styles.innerBackground;
        div.style.border = `solid ${styles.innerBackground} 1px`;
    });
}

function handleAutoComplete(event, fetchPokemon, setQuery) {
    const query = event.target.value.trim().toLowerCase();
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = '';

    if (query.length < 2) {
        return;
    }

    fetch(`http://localhost:5000/api/pokedex/suggestions?query=${query}`)
        .then(res => res.json())
        .then(data => {
            const pokemonNames = data.results
            .map(pokemon => pokemon.name)
            .filter(name => name.toLowerCase().startsWith(query));

            pokemonNames.forEach(name => {
                const li = document.createElement('li');
                li.textContent = name;
                li.addEventListener('click', () => {
                    setQuery(name);
                    suggestionsList.innerHTML = '';
                    fetchPokemon(name);
                });
                suggestionsList.appendChild(li);
            });
        })
        .catch(() => {});
}

function Search() {
    const [query, setQuery] = React.useState('');
    const [pokemon, setPokemon] = React.useState(null);
    const location = useLocation();

    const fetchPokemon = (searchTerm) => {
        const term = searchTerm !== undefined ? searchTerm : query.trim().toLowerCase();
        if (!term) return;

        // Allow letters, numbers, and hyphens for names
        const isId = /^\d+$/.test(term) && Number(term) > 0 && Number(term) <= 1025;
        const isName = /^[a-zA-Z0-9\-]+$/.test(term);

        if (!isId && !isName) {
            return;
        }

        fetch(`http://localhost:5000/api/pokedex?id=${term}`)
            .then(res => {
                if (!res.ok) throw new Error('Not found');
                return res.json();
            })
            .then(data => setPokemon(data))
            .catch(() => {})
            .finally(() => {
                if (searchTerm === undefined) {
                    setQuery('');
                }
            });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchPokemon();
        }
    };

    React.useEffect(() => {
        if (pokemon && pokemon.types && pokemon.types.length > 0) {
            updateDivStyle(pokemon.types[0].toLowerCase());
        }
    }, [pokemon]);

    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const urlQuery = params.get('query');
        if (urlQuery) {
            setQuery(urlQuery);
            fetchPokemon(urlQuery);
        }
    }, [location.search]);

    return (
        <div className = 'search-container'>
            <div className = 'search-bar-container'>
                <input 
                    type = 'text' 
                    placeholder = 'Search Pokémon by name or ID' 
                    className = 'search-bar'
                    value = {query}
                    onChange = {(e) => {
                        setQuery(e.target.value);
                        handleAutoComplete(e, fetchPokemon, setQuery);
                    }}
                    onKeyDown = {handleKeyDown}
                    autocomplete = 'off'
                />
                <ul id = "suggestions-list" className = "suggestions-list"></ul>
                <button className = 'search-button' onClick = {() => fetchPokemon()}>Search</button>
            </div>
            <PokemonCard pokemon = {pokemon} />
        </div>
    );
}

export default Search;