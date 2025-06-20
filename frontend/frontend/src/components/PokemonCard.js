import React from 'react';

function getRegion(index) {
    const regions = [
        {max: 151, name: 'Kanto'},
        {max: 251, name: 'Johto'},
        {max: 386, name: 'Hoenn'},
        {max: 493, name: 'Sinnoh'},
        {max: 649, name: 'Unova'},
        {max: 721, name: 'Kalos'},
        {max: 809, name: 'Alola'},
        {max: 905, name: 'Galar'},
        {max: 1025, name: 'Paldea'}
    ];

    for (const region of regions) {
        if (index <= region.max) {
            return region.name;
        }
    }

    return 'Undefined';
}

function getStatus(index) {
    const starterRanges = [
        [1, 10], [152, 161], [252, 261], [387, 396], [495, 504], 
        [650, 659], [722, 731], [810, 819], [906, 914]
    ];

    const fossilRanges = [
        [138, 142], [345, 349], [408, 412], [564, 568],[696, 700], 
        [880, 884]
    ];

    const babyRanges = [
        [172, 176], [238, 241], [438, 441], [446, 448]
    ];

    const babySingles = [236, 298, 360, 406, 433, 458, 848];

    const legendaryRanges = [
        [144, 147], [243, 246], [249, 251], [377, 385], [480, 489],
        [638, 647], [716, 719], [772, 774], [785, 793], [888, 893],
        [894, 899], [1001, 1005], [1014, 1018]
    ];

    const legendarySingles = [150, 800, 905, 1024];

    const mythicalRanges = [
        [385, 387], [489, 494], [647, 650], [719, 722], [801, 802],
        [807, 810]
    ];

    const mythicalSingles = [151, 251, 494, 893, 1025];

    const ultraBeastRanges = [
        [793, 800], [803, 807]
    ];

    const paradoxRanges = [
        [984, 996], [1005, 1007], [1009, 1011], [1020, 1024]
    ];

    const pseudoRanges = [
        [147, 150], [246, 249], [371, 377], [443, 446], [633, 636],
        [704, 707], [782, 785], [885, 888], [996,999]
    ];

    const paradoxLegendaryRange = [
        [1007, 1009]
    ];

    for (const [start, end] of starterRanges) {
        if (index >= start && index < end) {
            return 'Starter';
        }
    }

    for (const [start, end] of fossilRanges) {
        if (index >= start && index < end) {
            return 'Fossil';
        }
    }

    for (const [start, end] of babyRanges) {
        if (index >= start && index < end) {
            return 'Baby';
        }
    }

    if (babySingles.includes(index)) {
        return 'Baby';
    }

    for (const [start, end] of legendaryRanges) {
        if (index >= start && index < end) {
            return 'Legendary';
        }
    }

    if (legendarySingles.includes(index)) {
        return 'Legendary';
    }

    for (const [start, end] of mythicalRanges) {
        if (index >= start && index < end) {
            return 'Mythical';
        }
    }

    if (mythicalSingles.includes(index)) {
        return 'Mythical';
    }

    for (const [start, end] of ultraBeastRanges) {
        if (index >= start && index < end) {
            return 'Ultra Beast';
        }
    }

    for (const [start, end] of paradoxRanges) {
        if (index >= start && index < end) {
            return 'Paradox';
        }
    }

    for (const [start, end] of pseudoRanges) {
        if (index >= start && index < end) {
            return 'Pseudo-legendary';
        }
    }

    for (const [start, end] of paradoxLegendaryRange) {
        if (index >= start && index < end) {
            return 'Paradox Legendary';
        }
    }

    return 'Regular';
}

function getTypeImages(typeNames) {
    if (!Array.isArray(typeNames)) return null;
    return typeNames.map((type) => {
        const typeKey = type.toLowerCase();
        const imgSrc = process.env.PUBLIC_URL + `/images/types/${typeKey}Type.png`;
        return (
            <img 
                key={typeKey}
                src={imgSrc}
                alt={type}
                className = 'pokemon-type-image'
            />
        );
    });
}

function PokemonCard({ pokemon }) {
    if (!pokemon) {
      return (
        <div className = 'pokemon-card'>
          <img 
            src = {process.env.PUBLIC_URL + '/images/pokeball.png'} 
            alt = 'Loading' 
            className = 'pokemon-image' 
          />
        </div>
      )
    }

    return (
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
                  {pokemon ? getTypeImages(pokemon.types) : 'Loading...'}
                </div>
              </div>

              <div className = 'pkmn-region'>
                <p className = 'pkmn-region-text'>Region</p>
                <div className = 'pkmn-region-container'>
                  {pokemon ? getRegion(pokemon.id) : 'Loading...'}
                </div>
              </div>
            </div>

            <div className = 'pkmn-weight-height'>
              <div className = 'pkmn-weight'>
                <p className = 'pkmn-weight-text'>Weight</p>
                <div className = 'pkmn-weight-container'>
                  {pokemon ? pokemon.weight : '0'} lbs
                </div>
              </div>

              <div className = 'pkmn-height'>
                <p className = 'pkmn-height-text'>Height</p>
                <div className = 'pkmn-height-container'>
                  {pokemon ? pokemon.height : '0'} in
                </div>
              </div>
            </div>

            <div className = 'pkmn-abilities'>
              <p className = 'pkmn-abilities-text'>Abilities</p>
              <div className = 'pkmn-abilities-container'>
                {pokemon
                  ? pokemon.abilities.map((ability) =>
                      ability.replace(/-/g, ' ')
                    ).join(', ')
                  : 'Loading...'}
              </div>
            </div>

            <div className = 'pkmn-base-status'>
              <div className = 'pkmn-base'>
                <p className = 'pkmn-base-text'>Base Experience</p>
                <div className = 'pkmn-base-container'>
                  {pokemon ? pokemon.base_exp : '0'}
                </div>
              </div>

              <div className = 'pkmn-status'>
                <p className = 'pkmn-status-text'>Status</p>
                <div className = 'pkmn-status-container'>
                  {pokemon ? getStatus(pokemon.id) : 'Loading...'}
                </div>
              </div>
            </div>

            <div className = 'pkmn-stats'>
              <p className = 'pkmn-stats-text'>Base Stats</p>
              <table className = 'pkmn-stats-table'>
                <tr>
                  <th className = 'base-stat-text'>HP</th>
                  <th className = 'hp-stat'>{pokemon ? pokemon.stats[0] : '0'}</th>
                </tr>
                <tr>
                  <th className = 'base-stat-text'>Attack</th>
                  <th className = 'attack-stat'>{pokemon ? pokemon.stats[1] : '0'}</th>
                </tr>
                <tr>
                  <th className = 'base-stat-text'>Defense</th>
                  <th className = 'defense-stat'>{pokemon ? pokemon.stats[2] : '0'}</th>
                </tr>
                <tr>
                  <th className = 'base-stat-text'>Sp. Atk</th>
                  <th className = 'special-attack-stat'>{pokemon ? pokemon.stats[3] : '0'}</th>
                </tr>
                <tr>
                  <th className = 'base-stat-text'>Sp. Def</th>
                  <th className = 'special-defense-stat'>{pokemon ? pokemon.stats[4] : '0'}</th>
                </tr>
                <tr>
                  <th className = 'base-stat-text'>Speed</th>
                  <th className = 'speed-stat'>{pokemon ? pokemon.stats[5] : '0'}</th>
                </tr>
                <tr>
                  <th className = 'base-stat-text'>Total</th>
                  <th className = 'total-stat'>
                    {pokemon ? pokemon.stats.reduce((a, b) => a + b, 0) : '0'}
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </div>
    );
}

export default PokemonCard;