# Pokédex

A web application for searching and exploring Pokémon and related data.

## Overview

This project is a full-stack Pokédex web app that allows users to:
- Search for Pokémon by name or number
- View detailed information about each Pokémon (stats, types, abilities, images, etc.)
- Explore other Pokémon-related data and features

## Features

- Random Pokémon generator
- Pokémon search functionality
- Responsive and modern UI
- Real-time data fetched from the [PokéAPI](https://pokeapi.co/)
- Display of Pokémon stats, types, abilities, and official artwork

## Technologies Used

### Frontend
- **React** (with Hooks)
- **JavaScript**
- **CSS**

### Backend
- **Python**
- **Flask**
- **Flask-CORS**
- **Requests**

### Data Source
- [PokéAPI](https://pokeapi.co/)

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x
- pip

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pokedex.git
   cd pokedex
   ```

2. **Backend Setup**
   ```bash
   cd pokedex/backend
   pip install -r requirements.txt
   python app.py
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend/frontend
   npm install
   npm start
   ```

4. **Open your browser**
   - Visit [http://localhost:3000](http://localhost:3000) to use the app.

## Future Plans

- Add advanced search and filtering
- Display Pokémon evolutions and moves
- User authentication and favorites
- More Pokémon-related features

## License

This project is for educational and personal use. Pokémon and related content are © Nintendo, Game Freak, and The Pokémon Company.

---
Built with ❤️ using React and Flask.