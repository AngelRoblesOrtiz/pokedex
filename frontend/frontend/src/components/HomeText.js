function HomeText() {
    return (
        <div className = 'home-text'>
            <h2>Welcome to the Pokémon Home</h2>
            <h3>Enigmatic Beings Found in Every Corner of the World!</h3>
            <p>
                Pokémon are extraordinary creatures surrounded by mystery.
                Some live harmoniously with people, while others roam freely 
                in the wild—whether it’s grassy fields, winding caves, or beneath 
                the sea, much about their nature is still unknown.
                One of the most fascinating things about Pokémon is that they can be 
                caught using Poké Balls, special devices that let Trainers carry them 
                and form powerful bonds. 
            </p>
            <img 
                src = {process.env.PUBLIC_URL + '/images/pokeballs.png'}
                className = 'pokeballs-img'
            />
            <h3>Just How Many Pokémon Are Out There?!</h3>
            <p>
                The true number remains a mystery! To date, over a thousand Pokémon 
                species have been documented, but many more may still be waiting to 
                be discovered across distant lands and hidden regions. Whether it’s the 
                partner Pokémon you choose at the beginning of your journey—or a rare 
                Pokémon seen for the first time—every discovery brings Trainers closer 
                to the world of Pokémon.
            </p>
            <h3>Grow Stronger Through Battle and Evolution!</h3>
            <p>
                As Pokémon battle, they gain experience and learn new moves. With each 
                level gained, Pokémon become stronger—and some even evolve into new forms! 
                Take Pidgey, for example: after enough training, it evolves into Pidgeotto 
                and eventually becomes the powerful Pidgeot. Evolution is a key part of 
                growing as a Trainer and uncovering each Pokémon’s full potential.
            </p>
            <img
                src = {process.env.PUBLIC_URL + '/images/pidgeyLine.png'}
                className = 'pidgeot-img'
            />
            <h3>Types Make All the Difference in Battle!</h3>
            <p>
                Each Pokémon is assigned one or two of 18 known types—such as Electric, 
                Water, or Fairy. For example, Pikachu is an Electric type, and Magikarp 
                is a Water type. Some Pokémon, like Jigglypuff, belong to two types—Normal 
                and Fairy. Knowing your Pokémon’s type—and your opponent’s—can give you a 
                huge advantage in battle. Type matchups are essential for Trainers aiming 
                to become true champions!
            </p>
        </div>
    )
}

export default HomeText;