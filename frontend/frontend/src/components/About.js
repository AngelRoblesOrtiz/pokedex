function About() {
    return (
        <div className="about-text" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h1>Pokédex</h1>
            <p>
                A web application for searching and exploring Pokémon and related data.
            </p>
            <h2>Overview</h2>
            <p>
                This project is a full-stack Pokédex web app that allows users to:
            </p>
            <ul>
                <li>Search for Pokémon by name or number</li>
                <li>View detailed information about each Pokémon (stats, types, abilities, images, etc.)</li>
                <li>Explore other Pokémon-related data and features</li>
            </ul>
            <h2>Features</h2>
            <ul>
                <li>Random Pokémon generator</li>
                <li>Pokémon search functionality</li>
                <li>Responsive and modern UI</li>
                <li>Real-time data fetched from the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></li>
                <li>Display of Pokémon stats, types, abilities, and official artwork</li>
            </ul>
            <h2>Technologies Used</h2>
            <h3>Frontend</h3>
            <ul>
                <li><strong>React</strong> (with Hooks)</li>
                <li><strong>JavaScript</strong></li>
                <li><strong>CSS</strong></li>
            </ul>
            <h3>Backend</h3>
            <ul>
                <li><strong>Python</strong></li>
                <li><strong>Flask</strong></li>
                <li><strong>Flask-CORS</strong></li>
                <li><strong>Requests</strong></li>
            </ul>
            <h3>Data Source</h3>
            <ul>
                <li><a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a></li>
            </ul>
            <h2>Getting Started</h2>
            <h3>Prerequisites</h3>
            <ul>
                <li>Node.js and npm</li>
                <li>Python 3.x</li>
                <li>pip</li>
            </ul>
            <h3>Installation</h3>
            <ol>
                <li>
                    <strong>Clone the repository</strong>
                    <pre>
                        {`git clone https://github.com/yourusername/pokedex.git
cd pokedex`}
                    </pre>
                </li>
                <li>
                    <strong>Backend Setup</strong>
                    <pre>
                        {`cd pokedex/backend
pip install -r requirements.txt
python app.py`}
                    </pre>
                </li>
                <li>
                    <strong>Frontend Setup</strong>
                    <pre>
                        {`cd ../frontend/frontend
npm install
npm start`}
                    </pre>
                </li>
                <li>
                    <strong>Open your browser</strong>
                    <br />
                    Visit <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> to use the app.
                </li>
            </ol>
            <h2>Future Plans</h2>
            <ul>
                <li>Add advanced search and filtering</li>
                <li>Display Pokémon evolutions and moves</li>
                <li>User authentication and favorites</li>
                <li>More Pokémon-related features</li>
            </ul>
            <h2>License</h2>
            <p>
                This project is for educational and personal use. Pokémon and related content are © Nintendo, Game Freak, and The Pokémon Company.
            </p>
            <hr />
            <p>
                Built with <span role="img" aria-label="love">❤️</span> using React and Flask.
            </p>
        </div>
    )
}

export default About;