function padZero(num) {
    return num.toString().padStart(4, '0');
}

function getTypes(types) {
    return types.map(type => type.type.name);
}

function capitalizeEveryFirstLetter(string) {
    let words = string.split('-');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
}

function gen(pokemon) {
    return `
            <div class = 'pokemon'>
                <div class = 'pkmn-grid'><a href = '../pages/searchPokemon.html?pokemon=${pokemon.name}'><img src = '${pokemon.sprite}' class = 'pkmn-grid-img'></a></div>
                <div class = 'pkmn-grid-idx'><p class = 'pkmn-grid-idx-txt'>#${pokemon.index}</p></div>
                <div class = 'pkmn-grid-name'><a href = '../pages/searchPokemon.html?pokemon=${pokemon.name}' class = 'pkmn-grid-name-txt'>${capitalizeEveryFirstLetter(pokemon.name)}</a></div>
                <div class = 'pkmn-grid-type'>
                    ${pokemon.types
                        .map(type => `<a href = ''><img src = '../../images/pokemonTypes/${type}Type.png' alt = '${type}' class='pkmn-type-img'></a>`)
                        .join('')}
                </div>
            </div>
        `;
}

function fetchPokemon(index) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(response => response.json())
        .then(data => ({
            name: (data.name).charAt(0).toUpperCase() + data.name.slice(1), 
            index: padZero(data.id), 
            sprite: data.sprites.front_default,
            types: getTypes(data.types) 
        }))
}

async function natPokedex() {
    const pkmnContainer1 = document.querySelector('.pkmn-down-1'); 
    let pageLines1 = ''; 
    let currentLine1 = ''; 
    for (let i = 1; i <= 151; i++) { 
        const pokemon1 = await fetchPokemon(i);
        if (pokemon1) {
            currentLine1 += gen(pokemon1); 

            if (i % 9 === 0 || i === 151) {
                pageLines1 += `<div class = 'pkmn-line'>${currentLine1}</div>`;
                currentLine1 = '';
            }
        }
    }
    pkmnContainer1.innerHTML = pageLines1;

    const pkmnContainer2 = document.querySelector('.pkmn-down-2'); 
    let pageLines2 = ''; 
    let currentLine2 = ''; 
    for (let j = 152; j <= 251; j++) { 
        const pokemon2 = await fetchPokemon(j);

        const relativePosition = j - 151;
        if (pokemon2) {
            currentLine2 += gen(pokemon2); 

            if (relativePosition % 9 === 0 || j === 251) {
                pageLines2 += `<div class = 'pkmn-line'>${currentLine2}</div>`;
                currentLine2 = '';
            }
        }
    }
    pkmnContainer2.innerHTML = pageLines2;


    const pkmnContainer3 = document.querySelector('.pkmn-down-3'); 
    let pageLines3 = ''; 
    let currentLine3 = ''; 
    for (let l = 252; l <= 386; l++) { 
        const pokemon3 = await fetchPokemon(l);

        const relativePosition = l - 251;
        if (pokemon3) {
            currentLine3 += gen(pokemon3); 

            if (relativePosition % 9 === 0 || l === 386) {
                pageLines3 += `<div class = 'pkmn-line'>${currentLine3}</div>`;
                currentLine3 = '';
            }
        }
    }
    pkmnContainer3.innerHTML = pageLines3;

    const pkmnContainer4 = document.querySelector('.pkmn-down-4'); 
    let pageLines4 = ''; 
    let currentLine4 = ''; 
    for (let a = 387; a <= 493; a++) { 
        const pokemon4 = await fetchPokemon(a);

        const relativePosition = a - 386;
        if (pokemon4) {
            currentLine4 += gen(pokemon4); 

            if (relativePosition % 9 === 0 || a === 493) {
                pageLines4 += `<div class = 'pkmn-line'>${currentLine4}</div>`;
                currentLine4 = '';
            }
        }
    }
    pkmnContainer4.innerHTML = pageLines4;

    const pkmnContainer5 = document.querySelector('.pkmn-down-5'); 
    let pageLines5 = ''; 
    let currentLine5 = ''; 
    for (let x = 494; x <= 649; x++) { 
        const pokemon5 = await fetchPokemon(x);

        const relativePosition = x - 493;
        if (pokemon5) {
            currentLine5 += gen(pokemon5); 

            if (relativePosition % 9 === 0 || x === 649) {
                pageLines5 += `<div class = 'pkmn-line'>${currentLine5}</div>`;
                currentLine5 = '';
            }
        }
    }
    pkmnContainer5.innerHTML = pageLines5;

    const pkmnContainer6 = document.querySelector('.pkmn-down-6'); 
    let pageLines6 = ''; 
    let currentLine6 = ''; 
    for (let y = 650; y <= 721; y++) { 
        const pokemon6 = await fetchPokemon(y);

        const relativePosition = y - 649;
        if (pokemon6) {
            currentLine6 += gen(pokemon6); 

            if (relativePosition % 9 === 0 || y === 721) {
                pageLines6 += `<div class = 'pkmn-line'>${currentLine6}</div>`;
                currentLine6 = '';
            }
        }
    }
    pkmnContainer6.innerHTML = pageLines6;

    const pkmnContainer7 = document.querySelector('.pkmn-down-7'); 
    let pageLines7 = ''; 
    let currentLine7 = ''; 
    for (let z = 722; z <= 809; z++) { 
        const pokemon7 = await fetchPokemon(z);

        const relativePosition = z - 721;
        if (pokemon7) {
            currentLine7 += gen(pokemon7); 

            if (relativePosition % 9 === 0 || z === 809) {
                pageLines7 += `<div class = 'pkmn-line'>${currentLine7}</div>`;
                currentLine7 = '';
            }
        }
    }
    pkmnContainer7.innerHTML = pageLines7;

    const pkmnContainer8 = document.querySelector('.pkmn-down-8'); 
    let pageLines8 = ''; 
    let currentLine8 = ''; 
    for (let e = 810; e <= 905; e++) { 
        const pokemon8 = await fetchPokemon(e);

        const relativePosition = e - 809;
        if (pokemon8) {
            currentLine8 += gen(pokemon8); 

            if (relativePosition % 9 === 0 || e === 905) {
                pageLines8 += `<div class = 'pkmn-line'>${currentLine8}</div>`;
                currentLine8 = '';
            }
        }
    }
    pkmnContainer8.innerHTML = pageLines8;

    const pkmnContainer9 = document.querySelector('.pkmn-down-9'); 
    let pageLines9 = ''; 
    let currentLine9 = ''; 
    for (let v = 906; v <= 1025; v++) { 
        const pokemon9 = await fetchPokemon(v);

        const relativePosition = v - 905;
        if (pokemon9) {
            currentLine9 += gen(pokemon9); 

            if (relativePosition % 9 === 0 || v === 1025) {
                pageLines9 += `<div class = 'pkmn-line'>${currentLine9}</div>`;
                currentLine9 = '';
            }
        }
    }
    pkmnContainer9.innerHTML = pageLines9;

}

natPokedex();
