import { Link } from 'react-router-dom';

function Popular() {
    return (
        <div className = 'popular-quick-links'>
            <h2>Popular Quick Links</h2>
            <div className = 'popular-links-container'>
                <div className = 'popular-links-top'>
                    <div className = 'popular-link-1'>
                        <Link to = '/national' className = 'popular-link-text-1'>National Pokédex</Link>
                        <Link to = '/stats' className = 'popular-link-text-1'>Pokémon Stats</Link>
                    </div>
                    <div className = 'popular-link-2'>
                        <Link to = '/type-chart' className = 'popular-link-text-2'>Type Chart</Link>
                        <Link to = '/shiny-national' className = 'popular-link-text-2'>Shiny Pokédex</Link>
                    </div>
                </div>
                <div className = 'fav-pokemon'>
                    <div className = 'left-pokemon'>
                        <ul className = 'fav-pkmn-list'>
                            <li className = 'fav-pkmn-val'>
                                #0006
                                <Link to = {`/search?query=charizard`} className = "fav-pkmn"> Charizard</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0025
                                <Link to = {`/search?query=pikachu`} className = "fav-pkmn"> Pikachu</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0034
                                <Link to = {`/search?query=nidoking`} className = "fav-pkmn"> Nidoking</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0133
                                <Link to = {`/search?query=eevee`} className = "fav-pkmn"> Eevee</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0135
                                <Link to = {`/search?query=jolteon`} className = "fav-pkmn"> Jolteon</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0142
                                <Link to = {`/search?query=aerodactyl`} className = "fav-pkmn"> Aerodactyl</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0149
                                <Link to = {`/search?query=dragonite`} className = "fav-pkmn"> Dragonite</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0150
                                <Link to = {`/search?query=mewtwo`} className = "fav-pkmn"> Mewtwo</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0212
                                <Link to = {`/search?query=scizor`} className = "fav-pkmn"> Scizor</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0248
                                <Link to = {`/search?query=tyranitar`} className = "fav-pkmn"> Tyranitar</Link>
                            </li>
                        </ul>
                    </div>
                    <div className = 'right-pokemon'>
                        <ul className = 'fav-pkmn-list'>
                            <li className = 'fav-pkmn-val'>
                                #0257
                                <Link to = {`/search?query=blaziken`} className = "fav-pkmn"> Blaziken</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0282
                                <Link to = {`/search?query=gardevoir`} className = "fav-pkmn"> Gardevoir</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0300
                                <Link to = {`/search?query=skitty`} className = "fav-pkmn"> Skitty</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0385
                                <Link to = {`/search?query=jirachi`} className = "fav-pkmn"> Jirachi</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0405
                                <Link to = {`/search?query=luxray`} className = "fav-pkmn"> Luxray</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0423
                                <Link to = {`/search?query=gastrodon`} className = "fav-pkmn"> Gastrodon</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0658
                                <Link to = {`/search?query=greninja`} className = "fav-pkmn"> Greninja</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0925
                                <Link to = {`/search?query=maushold-family-of-four`} className = "fav-pkmn"> Maushold</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0937
                                <Link to = {`/search?query=ceruledge`} className = "fav-pkmn"> Ceruledge</Link>
                            </li>
                            <li className = 'fav-pkmn-val'>
                                #0939
                                <Link to = {`/search?query=bellibolt`} className = "fav-pkmn"> Bellibolt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Popular;