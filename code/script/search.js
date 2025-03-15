document.querySelector('#search-btn').addEventListener('click', getPokemon)

document.querySelector('#search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      getPokemon(event);
      this.value = '';
    }
  });

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();

}
function padZero(num) {
    return num.toString().padStart(4, '0');
}

function capitalizeEveryFirstLetter(string) {
    let words = string.split('-');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' '); 
}

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

function getTypes(types) {
    let result = [];
    for (const type of types) { 
        result.push(type.type.name);
    }
    return result;
}

function getTypeImage(typeNames) {
    const typeMap = {
        bug: {typeCode: 'bugType', type: 'Bug'},
        dark: {typeCode: 'darkType', type: 'Dark'},
        dragon: {typeCode: 'dragonType', type: 'Dragon'},
        electric: {typeCode: 'electricType', type: 'Electric'},
        fairy: {typeCode: 'fairyType', type: 'Fairy'},
        fighting: {typeCode: 'fightingType', type: 'Fighting'},
        fire: {typeCode: 'fireType', type: 'Fire'},
        flying: {typeCode: 'flyingType', type: 'Flying'},
        ghost: {typeCode: 'ghostType', type: 'Ghost'},
        grass: {typeCode: 'grassType', type: 'Grass'},
        ground: {typeCode: 'groundType', type: 'Ground'},
        ice: {typeCode: 'iceType', type: 'Ice'},
        normal: {typeCode: 'normalType', type: 'Normal'},
        poison: {typeCode: 'poisonType', type: 'Poison'},
        psychic: {typeCode: 'psychicType', type: 'Psychic'},
        rock: {typeCode: 'rockType', type: 'Rock'},
        steel: {typeCode: 'steelType', type: 'Steel'},
        water: {typeCode: 'waterType', type: 'Water'}
    };

    const name = typeNames[0];
    const {typeCode, type} = typeMap[name];

    return `<img src="../../images/pokemonTypes/${typeCode}.png" alt="${type}">`;
}

function getAbilities(abilities) {
    let result = [];
    if (typeof abilities === 'string') {
        let abilityList = abilities.split(','); 
        for (const ability of abilityList) {
            result.push(capitalizeEveryFirstLetter(ability.trim())); 
        }
    } else if (Array.isArray(abilities)) {
        for (const ability of abilities) {
            result.push(' ' + capitalizeEveryFirstLetter(ability.ability.name)); 
        }
    }
    return result;
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

    // Get the styles for the given Pokémon type
    const styles = typeStyles[pokemonType];

    // Select all the relevant divs
    const backgroundBorderDiv = document.querySelector('.home-random-pokemon');
    const innerDivs = document.querySelectorAll(
        '.pkmn-name-id-img-container, .pkmn-type-container, .pkmn-region-container, .pkmn-weight-container, .pkmn-height-container, .abilities-container, .pkmn-base-experience-container, .pkmn-status-container, .base-stats-container, .base-stats-table'
    );

    // Apply styles to the backgroundBorderDiv
    backgroundBorderDiv.style.background = styles.background;
    backgroundBorderDiv.style.border = `solid ${styles.border} 5px`;

    // Apply styles to all inner divs
    innerDivs.forEach(div => {
        div.style.background = styles.innerBackground;
        div.style.border = `solid ${styles.innerBackground} 1px`;
    });
}

function totalStat(one, two, three, four, five, six) {
    return one + two + three + four + five + six;
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonQuery = urlParams.get('pokemon');

    if (pokemonQuery) {
        document.querySelector('#search-input').value = pokemonQuery;
        getPokemon();
    }
};


function getPokemon(e) {
    const name = document.querySelector('#search-input').value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('.pokemonBox').innerHTML = 
        `
        <div class = 'pkmn-name-id-img-container'>
            <div class = 'pkmn-name-id-container'>
                
                <div class = 'pkmn-name-container'>
                    <h1 class = 'pkmn-name'>${capitalizeEveryFirstLetter(data.name)} &nbsp;</h1>
                </div>

                <div class = 'pkmn-id-container'>
                    <h3 class = 'pkmn-id'>#${padZero(data.id)}</h3>
                </div>
                
            </div>

            <div class = 'pkmn-img-container'>
                <img src = "${data.sprites.other["official-artwork"].front_default}" 
                alt = "${data.name} image" 
                class = "pkmn-img"/>
            </div>
        </div>

        <div class = 'pkmn-info'>
            <div class = 'type-and-region'>
                <div class = 'pkmn-type-container'>
                    <div class = 'type-wrd'>
                        <p>Type</p>
                    </div>
                    <div class = 'pkmn-type'>
                        ${getTypeImage(getTypes(data.types))}
                    </div>
                </div>

                <div class = 'pkmn-region-container'>
                    <div class = 'region-wrd'>
                        <p>Region</p>
                    </div>
                    <div class = 'pkmn-region'>
                        <p class = 'region-val'>${getRegion(data.id)}</p>
                    </div>
                </div>
            </div>

            <div class = 'weight-and-height'>
                <div class = 'pkmn-weight-container'>
                    <div class = 'weight-wrd'>
                        <p>Weight</p>
                    </div>
                    <div class = 'pkmn-weight'>
                        <p class = 'weight-val'>${(((data.weight) / 10) * 2.2).toFixed(2)} lbs</p>
                    </div>
                </div>

                <div class = 'pkmn-height-container'>
                    <div class = 'height-wrd'>
                        <p>Height</p>
                    </div>
                    <div class = 'pkmn-height'>
                        <p class = 'height-val'>${(((data.height) * 10) / 2.54).toFixed(2)} in</p>
                    </div>
                </div>
            </div>

            <div class = 'abilities-container'>
                <div class = 'abilities-wrd'>
                    <p>Abilities</p>
                </div>
                <div class = 'pkmn-abilities'>
                    <p class = 'abilities-val'>${getAbilities(data.abilities)}</p>
                </div>
            </div>

            <div class = 'base-experience-and-status'>
                <div class = 'pkmn-base-experience-container'>
                    <div class = 'base-experience-wrd'>
                        <p>Base Experience</p>
                    </div>
                    <div class = 'pkmn-base-experience'>
                        <p class = 'base-experience-val'>${data.base_experience}</p>
                    </div>
                </div>

                <div class = 'pkmn-status-container'>
                    <div class = 'status-wrd'>
                        <p>Status</p>
                    </div>
                    <div class = 'pkmn-status'>
                        <p class = 'status-val'>${getStatus(data.id)}</p>
                    </div>
                </div>
            </div>

            <div class = 'base-stats-container'>
                <p class = 'base-stats-wrd'>Base Stats </p>
                <table class = 'base-stats-table'>
                    <tr>
                        <th class = 'base-stat-wrd'>HP</th>
                        <th class = 'hp-stat'>${data.stats[0].base_stat}</th>
                    </tr>
                    <tr>
                        <th class = 'base-stat-wrd'>Attack</th>
                        <th class = 'atk-stat'>${data.stats[1].base_stat}</th>
                    </tr>
                    <tr>
                        <th class = 'base-stat-wrd'>Defense</th>
                        <th class = 'def-stat'>${data.stats[2].base_stat}</th>
                    </tr>
                    <tr>
                        <th class = 'base-stat-wrd'>Sp. Atk</th>
                        <th class = 'spatk-stat'>${data.stats[3].base_stat}</th>
                    </tr>
                    <tr>
                        <th class = 'base-stat-wrd'>Sp. Def</th>
                        <th class = 'spdef-stat'>${data.stats[4].base_stat}</th>
                    </tr>
                    <tr>
                        <th class = 'base-stat-wrd'>Speed</th>
                        <th class = 'speed-stat'>${data.stats[5].base_stat}</th>
                    </tr>
                    <tr>
                        <th class = 'base-stat-wrd'>Total</th>
                        <th class = 'total-stat'>${totalStat(data.stats[0].base_stat, 
                                                             data.stats[1].base_stat, 
                                                             data.stats[2].base_stat,
                                                             data.stats[3].base_stat,
                                                             data.stats[4].base_stat,
                                                             data.stats[5].base_stat)}</th>
                    </tr>
                </table>
            </div>
        </div>
        `;
      updateDivStyle(data.types[0].type.name);
      })
      .catch((err) => {
        console.log('Pokemon not found!', err);
      });
      e.preventDefault();
}
