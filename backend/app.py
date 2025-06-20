from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route('/api/pokedex')
def get_random_pokemon():
    poke_id = request.args.get('id')
    if not poke_id:
        return jsonify({'error' : 'No Pokémon or name provided.'}), 400
    url = f"https://pokeapi.co/api/v2/pokemon/{poke_id}"
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
    except Exception:
        return jsonify({'error' : 'Pokémon not found.'}), 400
    pokemon_data = {
        "id": data['id'],
        "img": data['sprites']['other']['official-artwork']['front_default'],
        "name": data['name'].title(),
        "height": round(((data['height'] * 10) / 2.54), 2),
        "weight": round(((data['weight'] / 10) * 2.2), 2),
        "types": [t['type']['name'].title() for t in data['types']],
        "abilities": [a['ability']['name'].title() for a in data['abilities']],
        "base_exp": data['base_experience'],
        "stats": [stat['base_stat'] for stat in data['stats']]
    }

    return pokemon_data

if __name__ == '__main__':
    app.run(debug=True)