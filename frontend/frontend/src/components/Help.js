function Help() {
    return (
        <div className="help-text" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2>Help & FAQ</h2>

            <h3>How to Use the Pokédex</h3>
            <ul>
                <li>
                    <strong>Home:</strong> See a random Pokémon and learn about Pokémon basics.
                </li>
                <li>
                    <strong>Search:</strong> Enter a Pokémon name or number to find detailed info.
                </li>
                <li>
                    <strong>About:</strong> Learn about this project and its technologies.
                </li>
            </ul>

            <h3>Pokémon Card Details</h3>
            <ul>
                <li><strong>Stats:</strong> HP, Attack, Defense, etc. show a Pokémon’s strengths.</li>
                <li><strong>Types:</strong> Each Pokémon has one or two types (e.g., Water, Electric).</li>
                <li><strong>Abilities:</strong> Special powers or effects unique to each Pokémon.</li>
                <li><strong>Base Experience:</strong> The amount of experience a Pokémon gives when defeated.</li>
            </ul>

            <h3>Frequently Asked Questions</h3>
            <ul>
                <li>
                    <strong>Why do some images or data not load?</strong><br />
                    Sometimes the PokéAPI may be slow or temporarily unavailable. Try refreshing the page.
                </li>
                <li>
                    <strong>Why can’t I find a certain Pokémon?</strong><br />
                    Only Pokémon with IDs 1–1025 are currently supported. Some special forms or new Pokémon may not be available.
                </li>
                <li>
                    <strong>How do I report a bug or suggest a feature?</strong><br />
                    Visit the <a href="https://github.com/AngelRoblesOrtiz/pokedex" target="_blank" rel="noopener noreferrer">GitHub repository</a> and open an issue.
                </li>
            </ul>

            <h3>Tips</h3>
            <ul>
                <li>Use the Search page for quick access to any Pokémon by name or number.</li>
                <li>Hover over links and buttons for extra info or navigation.</li>
                <li>Check your internet connection if data isn’t loading.</li>
            </ul>

            <h3>Contact & Credits</h3>
            <p>
                This is a fan-made project. Pokémon and related content are © Nintendo, Game Freak, and The Pokémon Company.<br />
                For questions or feedback, contact the creator on <a href="https://github.com/AngelRoblesOrtiz" target="_blank" rel="noopener noreferrer">GitHub</a> or <a href="https://www.linkedin.com/in/angel-robles-ortiz-187581286" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </p>
        </div>
    )
}

export default Help;