// handlers.js
import fetchPokemonData from '../apis/fetchPokemonData.js';
import createPokemonContainer from '../components/createPokemon.js';
import dom from '../dom.js';

const handleButtonClick = async (pokemonId) => {
  try {
    const data = await fetchPokemonData(pokemonId);
    const name = data.name;
    const image = data.sprites.front_default;
    const typeNames = data.types.map(type => type.type.name);

    const pokemonContainer = createPokemonContainer(name, image, typeNames);

    dom.root.innerHTML = '';
    dom.root.appendChild(pokemonContainer);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
  }
};

export default handleButtonClick;


