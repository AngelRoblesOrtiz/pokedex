from flask import Flask, jsonify
from flask_cors import CORS
import requests
import random

app = Flask(__name__)
CORS(app)

@app.route('/api/pokedex')
def get_random_pokemon():
    randomNum = random.randint(1, 1025)
    url = f"https://pokeapi.co/api/v2/pokemon/{randomNum}"
    response = requests.get(url).json()
    pokemon_data = {
        "id": response['id'],
        "img": response['sprites']['other']['official-artwork']['front_default'],
        "name": response['name'].title(),
        "height": round(((response['height'] * 10) / 2.54), 2),
        "weight": round(((response['weight'] / 10) * 2.2), 2),
        "types": [t['type']['name'].title() for t in response['types']],
        "abilities": [a['ability']['name'].title() for a in response['abilities']],
        "base_exp": response['base_experience'],
        "stats": [stat['base_stat'] for stat in response['stats']]
    }

    return pokemon_data

if __name__ == '__main__':
    app.run(debug=True)