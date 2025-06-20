import './App.css';
import Home from './components/Home.js';
import Search from './components/Search.js';
import About from './components/About.js';
import Help from './components/Help.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header className = 'pokedex-header'>
        <img
          src ={process.env.PUBLIC_URL + '/images/pokemonLogo.png'}
          alt = 'Pokédex Logo'
          className = 'pokedex-logo'
        />
        <div className = 'header-options-container'>
          <ul className = 'header-links'>
            <li className = 'header-links-list'>
              <Link to = '/' className = 'header-links-list-options'>Home</Link>
            </li>
            <li className = 'header-links-list'>
              <Link to = '/search' className = 'header-links-list-options'>Search</Link>
            </li>
            <li className = 'header-links-list'>
              <Link to = '/about' className = 'header-links-list-options'>About</Link>
            </li>
            <li className = 'header-links-list'>
              <Link to = '/help' className = 'header-links-list-options'>Help</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className = 'container'>
        <Routes>
          <Route 
            path = '/' 
            element = {
              <div className = 'home-container'>
                <Home/>
              </div>
            } 
          />
          <Route 
            path = '/search' 
            element = {
              <div className = 'search-container'>
                <Search/>
              </div>
            }
          />
          <Route 
            path = '/about' 
            element = {
              <div className = 'about-container'>
                <About/>
              </div>
            }
          />
          <Route 
            path = '/help' 
            element = {
              <div className = 'help-container'>
                <Help/>
              </div>
            }
          />
        </Routes>
      </div>
      <footer className = 'footer'>
    <div>
        <span>
            Pokédex &copy; { new Date().getFullYear() } | Created by Angel Robles-Ortiz
        </span>
        <br />
        <span>
            This is a fan-made project. All Pokémon content, images, and trademarks are © Nintendo, Game Freak, and The Pokémon Company. All rights reserved. No copyright infringement intended.
        </span>
        <br />
        <span>
            <a
                href = "https://github.com/AngelRoblesOrtiz"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "footer-link"
            >
                GitHub
            </a>
            {" | "}
            <a
                href = "https://www.linkedin.com/in/angel-robles-ortiz-187581286"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "footer-link"
            >
                LinkedIn
            </a>
        </span>
    </div>
</footer>
    </Router>
  );
}

export default App;
